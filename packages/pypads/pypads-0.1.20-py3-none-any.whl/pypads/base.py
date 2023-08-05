import ast
import atexit
import glob
import os
import sys
from contextlib import contextmanager
from os.path import expanduser
from typing import List, Iterable

import mlflow
from mlflow.tracking import MlflowClient
from mlflow.utils.autologging_utils import try_mlflow_log

from pypads import logger
from pypads.autolog.hook import Hook
from pypads.autolog.mappings import AlgorithmMapping, MappingRegistry, AlgorithmMeta
from pypads.autolog.pypads_import import extend_import_module, duck_punch_loader
from pypads.caches import PypadsCache, Cache
from pypads.functions.analysis.call_tracker import CallTracker
from pypads.functions.analysis.validation.parameters import Parameters
from pypads.functions.loggers.base_logger import LoggingFunction
from pypads.functions.loggers.data_flow import Input, Output
from pypads.functions.loggers.debug import LogInit, Log
from pypads.functions.loggers.hardware import Disk, Ram, Cpu
from pypads.functions.loggers.metric import Metric
from pypads.functions.loggers.mlflow.mlflow_autolog import MlflowAutologger
from pypads.functions.loggers.pipeline_detection import PipelineTracker
from pypads.functions.post_run.post_run import PostRunFunction
from pypads.functions.pre_run.git import IGit
from pypads.functions.pre_run.hardware import ISystem, IRam, ICpu, IDisk, IPid, ISocketInfo, IMacAddress
from pypads.functions.pre_run.pre_run import RunInfo, RunLogger, PreRunFunction
from pypads.logging_util import WriteFormats, try_write_artifact, try_read_artifact, get_temp_folder
from pypads.util import get_class_that_defined_method, dict_merge, string_to_int

tracking_active = None


class FunctionRegistry:
    """
    This class holds function mappings. Logging functionalities get a name and a underlying function.
    Example.: parameters -> function logging the parameters of the library calls.
    {
    "parameters": <fn>,
    "model": <fn>
    }
    """

    def __init__(self, mapping=None):
        if mapping is None:
            mapping = {}
        self.fns = {}
        for key, value in mapping.items():
            if isinstance(value, Iterable):
                self._add_functions(key, value)
            elif callable(value):
                self._add_functions(key, {value})

    def find_functions(self, name, lib=None, version=None):
        if (name, lib, version) in self.fns:
            return self.fns[(name, lib, version)]
        elif (name, lib) in self.fns:
            return self.fns[(name, lib)]
        elif name in self.fns:
            return self.fns[name]
        else:
            pass
            # logger.warning("Function call with name '" + name + "' is not linked with any logging functionality.")

    def add_functions(self, name, lib=None, version=None, *args: LoggingFunction):
        if lib:
            if version:
                key = (name, lib, version)
            else:
                key = (name, lib)
        else:
            key = name
        self._add_functions(key, args)

    def _add_functions(self, key, fns):
        if key not in self.fns:
            self.fns[key] = set()
        for fn in fns:
            self.fns[key].add(fn)


# --- Pypads App ---
# Default init_run fns
DEFAULT_INIT_RUN_FNS = [RunInfo(), RunLogger(), IGit(_pypads_timeout=3), ISystem(), IRam(), ICpu(), IDisk(), IPid(),
                        ISocketInfo(),
                        IMacAddress()]

# Default event mappings. We allow to log parameters, output or input
DEFAULT_LOGGING_FNS = {
    "parameters": Parameters(),
    "output": Output(_pypads_write_format=WriteFormats.text.name),
    "input": Input(_pypads_write_format=WriteFormats.text.name),
    "hardware": {Cpu(), Ram(), Disk()},
    "metric": Metric(),
    "autolog": MlflowAutologger(),
    "pipeline": PipelineTracker(_pypads_pipeline_type="normal", _pypads_pipeline_args=False),
    "log": Log(),
    "init": LogInit()
}

# Default config.
# Pypads mapping files shouldn't interact directly with the logging functions,
# but define events on which different logging functions can listen.
# This config defines such a listening structure.
# {"recursive": track functions recursively. Otherwise check the callstack to only track the top level function.}
DEFAULT_CONFIG = {"events": {
    "init": {"on": ["pypads_init"]},
    "parameters": {"on": ["pypads_fit"]},
    "hardware": {"on": ["pypads_fit"]},
    "output": {"on": ["pypads_fit", "pypads_predict"]},
    "input": {"on": ["pypads_fit"], "with": {"_pypads_write_format": WriteFormats.text.name}},
    "metric": {"on": ["pypads_metric"]},
    "pipeline": {"on": ["pypads_fit", "pypads_predict", "pypads_transform", "pypads_metric"]},
    "log": {"on": ["pypads_log"]}
},
    "track_sub_processes": False,
    "recursion_identity": False,
    "recursion_depth": -1,
    "log_on_failure": True}

# Tag name to save the config to in mlflow context.
CONFIG_NAME = "pypads.config"

"""
TODO keras:
Logs loss and any other metrics specified in the fit
    function, and optimizer data as parameters. Model checkpoints
    are logged as artifacts to a 'models' directory.
    EarlyStopping Integration with Keras Automatic Logging
    MLflow will detect if an ``EarlyStopping`` callback is used in a ``fit()``/``fit_generator()``
    call, and if the ``restore_best_weights`` parameter is set to be ``True``, then MLflow will
    log the metrics associated with the restored model as a final, extra step. The epoch of the
    restored model will also be logged as the metric ``restored_epoch``.
    This allows for easy comparison between the actual metrics of the restored model and
    the metrics of other models.
    If ``restore_best_weights`` is set to be ``False``,
    then MLflow will not log an additional step.
    Regardless of ``restore_best_weights``, MLflow will also log ``stopped_epoch``,
    which indicates the epoch at which training stopped due to early stopping.
    If training does not end due to early stopping, then ``stopped_epoch`` will be logged as ``0``.
    MLflow will also log the parameters of the EarlyStopping callback,
    excluding ``mode`` and ``verbose``.
"""


class PypadsApi:
    def __init__(self, pypads):
        self._pypads = pypads

    # noinspection PyMethodMayBeStatic
    def track(self, fn, ctx=None, events: List = None, mapping: AlgorithmMapping = None):
        if events is None:
            events = ["pypads_log"]
        if ctx is not None and not hasattr(ctx, fn.__name__):
            logger.warning("Given context " + str(ctx) + " doesn't define " + str(fn.__name__))
            ctx = None
        if mapping is None:
            logger.warning("Tracking a function without a mapping definition. A default mapping will be generated.")
            if '__file__' in fn.__globals__:
                lib = fn.__globals__['__file__']
            else:
                lib = fn.__module__
            if ctx is not None:
                if hasattr(ctx, '__module__') and ctx.__module__ is not str.__class__.__module__:
                    ctx_path = ctx.__module__.__name__
                else:
                    ctx_path = ctx.__name__
            else:
                ctx_path = "<unbound>"

            # For all events we want to hook to
            hooks = [Hook(e) for e in events]
            mapping = AlgorithmMapping(ctx_path + "." + fn.__name__, lib, AlgorithmMeta(fn.__name__, []), None,
                                       hooks=hooks)
        return self._pypads.wrap_manager.wrap(fn, ctx=ctx, mapping=mapping)

    def start_run(self, run_id=None, experiment_id=None, run_name=None, nested=False):
        out = mlflow.start_run(run_id=run_id, experiment_id=experiment_id, run_name=run_name, nested=nested)
        self._pypads.run_init_fns()
        return out

    # ---- logging ----
    def log_artifact(self, local_path, meta=None):
        try_mlflow_log(mlflow.log_artifact, local_path)
        self._write_meta(_to_artifact_meta_name(os.path.basename(local_path)), meta)

    def log_mem_artifact(self, name, obj, write_format=WriteFormats.text.name, preserve_folder=True, meta=None):
        try_write_artifact(name, obj, write_format, preserve_folder)
        self._write_meta(_to_artifact_meta_name(name), meta)

    def log_metric(self, key, value, step=None, meta=None):
        mlflow.log_metric(key, value, step)
        self._write_meta(_to_metric_meta_name(key), meta)

    def log_param(self, key, value, meta=None):
        mlflow.log_param(key, value)
        self._write_meta(_to_param_meta_name(key), meta)

    def set_tag(self, key, value):
        return mlflow.set_tag(key, value)

    def _write_meta(self, name, meta):
        if meta:
            try_write_artifact(name + ".meta", meta, WriteFormats.text, preserve_folder=True)

    def _read_meta(self, name):
        # TODO format / json / etc?
        return try_read_artifact(name + ".meta.txt")

    def metric_meta(self, name):
        return self._read_meta(_to_metric_meta_name(name))

    def param_meta(self, name):
        return self._read_meta(_to_param_meta_name(name))

    def artifact_meta(self, name):
        return self._read_meta(_to_artifact_meta_name(name))

    # !--- logging ----

    # ---- run management ----
    @contextmanager
    def intermediate_run(self, **kwargs):
        enclosing_run = mlflow.active_run()
        try:
            run = self._pypads.api.start_run(**kwargs, nested=True)
            self._pypads.cache.run_add("enclosing_run", enclosing_run)
            yield run
        finally:
            if not mlflow.active_run() is enclosing_run:
                self._pypads.api.end_run()
                self._pypads.cache.run_clear()
                self._pypads.cache.run_delete()
            else:
                mlflow.start_run(run_id=enclosing_run.info.run_id)

    def _get_pre_run_cache(self):
        if not self._pypads.cache.exists("pre_run_fns"):
            pre_run_fn_cache = Cache()
            self._pypads.cache.run_add("pre_run_fns", pre_run_fn_cache)
        return self._pypads.cache.get("pre_run_fns")

    def register_pre(self, name, pre_fn: PreRunFunction, silent=True):
        cache = self._get_pre_run_cache()
        if cache.exists(name):
            if not silent:
                logger.debug("Pre run fn with name '" + name + "' already exists. Skipped.")
        else:
            cache.add(name, pre_fn)

    def register_pre_fn(self, name, fn, log_function=None, nested=True, intermediate=True, order=0, silent=True):
        self.register_pre(name, PreRunFunction(fn=fn, nested=nested, intermediate=intermediate, order=order,
                                               log_function=log_function), silent=silent)

    def _get_post_run_cache(self):
        if not self._pypads.cache.run_exists("post_run_fns"):
            post_run_fn_cache = Cache()
            self._pypads.cache.run_add("post_run_fns", post_run_fn_cache)
        return self._pypads.cache.run_get("post_run_fns")

    def register_post(self, name, post_fn: PostRunFunction, silent=True):
        cache = self._get_post_run_cache()
        if cache.exists(name):
            if not silent:
                logger.debug("Post run fn with name '" + name + "' already exists. Skipped.")
        else:
            cache.add(name, post_fn)

    def register_post_fn(self, name, fn, log_function=None, message=None, nested=True, intermediate=True, order=0,
                         silent=True):
        self.register_post(name,
                           post_fn=PostRunFunction(fn=fn, message=message, nested=nested, intermediate=intermediate,
                                                   order=order,
                                                   log_function=log_function), silent=silent)

    def active_run(self):
        return mlflow.active_run()

    def is_intermediate_run(self):
        enclosing_run = self._pypads.cache.run_get("enclosing_run")
        return enclosing_run is not None

    def end_run(self):
        run = self.active_run()

        chached_fns = self._get_post_run_cache()
        fn_list = [v for i, v in chached_fns.items()]
        fn_list.sort(key=lambda t: t.order())
        for fn in fn_list:
            try:
                fn(self, _pypads_env=None)
            except (KeyboardInterrupt, Exception) as e:
                logger.warning("Failed running post run function " + fn.__name__ + " because of exception: " + str(e))

        mlflow.end_run()

        # --- Clean tmp files in disk cache after run ---
        folder = get_temp_folder(run)
        if os.path.exists(folder):
            import shutil
            shutil.rmtree(folder)
        # !-- Clean tmp files in disk cache after run ---
    # !--- run management ----


def _to_artifact_meta_name(name):
    return name + ".artifact"


def _to_metric_meta_name(name):
    return name + ".metric"


def _to_param_meta_name(name):
    return name + ".param"


class PypadsDecorators:
    def __init__(self, pypads):
        self._pypads = pypads

    def track(self, event="pypads_log", mapping: AlgorithmMapping = None):
        def track_decorator(fn):
            ctx = get_class_that_defined_method(fn)
            events = event if isinstance(event, List) else [event]
            return self._pypads.api.track(ctx=ctx, fn=fn, events=events, mapping=mapping)

        return track_decorator


# TODO pypads isn't allowed to hold a state anymore (Everything with state should be part of the caching system)
#  - We want to be able to rebuild PyPads from the config and cache alone if possible
#  to stop the need for pickeling pypads as a whole.

class PyPads:
    """
    PyPads app and base class. It enable automatic logging for all libraries included in the mapping files.
    Serves as the main entrypoint to PyPads. After constructing this app tracking is activated.

        :param uri: **string, optional (default=None)** Address of local or remote tracking server that **MLflow** uses to record runs. If None, then it tries to get the environment variable **'MLFLOW_PATH'** or the **'HOMEPATH'** of the user.
        :param name: **string, optional (default=None)** Name of the **MLflow** experiment to track.
        :param mapping_paths: **list, optional (default=None)** Absolute paths to additional mapping files.
        :param mapping: **dict, optional (default=None)** Mapping to the logging functions to use for the tracking of the events. If None, then a DEFAULT_MAPPING is used which allow to log parameters, outputs or inputs.
        :param init_run_fns: **list, optional (default=None)** Logging function to execute on tracking initialization.
        :param include_default_mappings: **boolean, optional (default=True)** A flag whether to use the default provided mappings or not.
        :param logging_fns: **dict, optional (default=None)** User defined logging functions to use where each dict item has to be ' "event": fn' or ' "event": {fn1,fn2,...}'.
        :param config: **dict, optional (default=None)** A dictionary that maps the events defined in PyPads mapping files with the logging functions.
        :param reload_modules: **boolean, optional (default=False)** Reload and duck punch already loaded modules before the tracking activation if set to True.
        :param clear_imports: **boolean, optional (default=False)** Delete alredy loaded modules for sys.modules() if set to True.

    """

    def __init__(self, uri=None, folder=None, name=None, mapping_paths=None, mapping=None, init_run_fns=None,
                 include_default_mappings=True,
                 logging_fns=None, config=None, reload_modules=False, reload_warnings=True, clear_imports=False,
                 affected_modules=None, pre_initialized_cache=None, disable_run_init=True):
        """
        :param uri: **string, optional (default=None)** <br> Address of local or remote tracking server that **MLflow** uses to record runs. If None, then it tries to get the environment variable **'MLFLOW_PATH'** or the **'HOMEPATH'** of the user.
        :param name: **string, optional (default=None)** <br> Name of the **MLflow** experiment to track.
        :param mapping_paths: **list, optional (default=None)** <br> Absolute paths to additional mapping files.
        :param mapping: **dict, optional (default=None)** <br> Mapping to the logging functions to use for the tracking of the events. If None, then a DEFAULT_MAPPING is used which allow to log parameters, outputs or inputs.
        :param init_run_fns: **list, optional (default=None)** <br> Logging function to execute on tracking initialization.
        :param include_default_mappings: **boolean, optional (default=True)** <br> A flag whether to use the default provided mappings or not.
        :param logging_fns: **dict, optional (default=None)** <br> User defined logging functions to use where each dict item has to be ' "event": fn' or ' "event": {fn1,fn2,...}'.
        :param config: **dict, optional (default=None)** <br> A dictionary that maps the events defined in PyPads mapping files with the logging functions.
        :param reload_modules: **boolean, optional (default=False)** <br> Reload and duck punch already loaded modules before the tracking activation if set to True.
        :param clear_imports: **boolean, optional (default=False)** <br> Delete alredy loaded modules for sys.modules() if set to True.
        """
        from pypads.pypads import set_current_pads
        set_current_pads(self)

        from pypads.managed_git import ManagedGitFactory
        self._managed_git_factory = ManagedGitFactory(self)

        # Init variable to filled later in this constructor
        self._config = None
        self._atexit_fns = []
        self._folder = folder or os.path.join(expanduser("~"), ".pypads")

        if mapping_paths is None:
            mapping_paths = []

        if init_run_fns is None:
            init_run_fns = DEFAULT_INIT_RUN_FNS

        from pypads.autolog.wrapping.wrapping import WrapManager
        self._wrap_manager = WrapManager(self)
        self._api = PypadsApi(self)
        self._decorators = PypadsDecorators(self)

        self._cache = pre_initialized_cache if pre_initialized_cache else PypadsCache()
        self._call_tracker = CallTracker(self)
        self._init_mapping_registry(*mapping_paths, mapping=mapping, include_defaults=include_default_mappings)

        def cleanup():
            from pypads.pypads import get_current_pads
            pads: PyPads = get_current_pads()
            if pads.api.active_run():
                pads.api.end_run()

        self.add_atexit_fn(cleanup)

        self._init_run_fns = init_run_fns
        self._init_mlflow_backend(uri, name, config, disable_run_init)
        self._function_registry = FunctionRegistry(logging_fns or DEFAULT_LOGGING_FNS)
        self.activate_tracking(reload_modules=reload_modules, reload_warnings=reload_warnings,
                               clear_imports=clear_imports, affected_modules=affected_modules)

    def add_atexit_fn(self, fn):
        """
        Add function to be executed before stopping your process.
        """

        def defensive_atexit():
            try:
                return fn()
            except (KeyboardInterrupt, Exception) as e:
                logger.error("Couldn't run atexit function " + fn.__name__ + " because of " + str(e))

        self._atexit_fns.append(defensive_atexit)
        atexit.register(defensive_atexit)

    def _is_affected_module(self, name, affected_modules=None):
        if affected_modules is None:
            affected_modules = self.wrap_manager.module_wrapper.punched_module_names

        affected = set([module.split(".", 1)[0] for module in affected_modules])
        return any([name.startswith(module + ".") or name == module for module in affected]) or any(
            [name.startswith(module + ".") or name == module for module in
             affected_modules])

    def activate_tracking(self, reload_modules=False, reload_warnings=True, clear_imports=False, affected_modules=None):
        """
        Function to duck punch all objects defined in the mapping files. This should at best be called before importing
        any libraries.
        :param mod_globals: globals() object used to duckpunch already loaded classes
        :return:
        """
        if affected_modules is None:
            affected_modules = self.wrap_manager.module_wrapper.punched_module_names | self.mapping_registry.get_libraries()

        global tracking_active
        if not tracking_active:
            from pypads.pypads import set_current_pads
            set_current_pads(self)

            # Add our loader to the meta_path
            extend_import_module()

            import sys
            import importlib
            loaded_modules = [(name, module) for name, module in sys.modules.items()]
            for name, module in loaded_modules:
                if self._is_affected_module(name, affected_modules):
                    if reload_warnings:
                        logger.warning(
                            name + " was imported before PyPads. To enable tracking import PyPads before or use "
                                   "reload_modules. Every already created instance is not tracked.")

                    if clear_imports:
                        del sys.modules[name]

                    if reload_modules:
                        try:
                            spec = importlib.util.find_spec(module.__name__)
                            duck_punch_loader(spec)
                            loader = spec.loader
                            module = loader.load_module(module.__name__)
                            loader.exec_module(module)
                            importlib.reload(module)
                        except Exception as e:
                            logger.debug("Couldn't reload module " + str(e))

            tracking_active = True
        else:
            raise Exception("Currently only one tracker can be activated at once.")

    def deactivate_tracking(self, run_atexits=False, reload_modules=True):
        # run atexit fns if needed
        if run_atexits:
            for fn in self._atexit_fns:
                fn()

        # Remove atexit fns
        for fn in self._atexit_fns:
            atexit.unregister(fn)

        import sys
        import importlib
        loaded_modules = [(name, module) for name, module in sys.modules.items()]
        for name, module in loaded_modules:
            if self._is_affected_module(name):
                del sys.modules[name]

                if reload_modules:
                    # reload modules if they where affected
                    try:
                        spec = importlib.util.find_spec(module.__name__)
                        duck_punch_loader(spec)
                        loader = spec.loader
                        module = loader.load_module(module.__name__)
                        loader.exec_module(module)
                        importlib.reload(module)
                    except Exception as e:
                        logger.debug("Couldn't reload module " + str(e))

        global tracking_active
        tracking_active = False
        # noinspection PyTypeChecker
        from pypads.pypads import set_current_pads
        set_current_pads(None)

    def _init_mlflow_backend(self, uri=None, name=None, config=None, disable_run_init=True):
        """
        Intialize the mlflow backend experiment and run as well as store the config to it.
        :param uri:
        :param name:
        :param config:
        :return:
        """
        self._uri = uri or os.environ.get('MLFLOW_PATH') or os.path.join(self._folder, ".mlruns")

        manage_results = self._uri.startswith("git://")
        result_path = self._uri

        # If the results should be git managed
        if manage_results:
            result_path = self._uri[5:]
            self._uri = os.path.join(self._uri[5:], "r_" + str(string_to_int(uri)), "experiments")

        # Set the tracking uri
        mlflow.set_tracking_uri(self._uri)

        # check if there is already an active run
        run = mlflow.active_run()
        if run is None:
            # Create run if run doesn't already exist
            name = name or "Default-PyPads"
            experiment = mlflow.get_experiment_by_name(name)
            experiment_id = experiment.experiment_id if experiment else mlflow.create_experiment(name)
            run = self.api.start_run(experiment_id=experiment_id)
        else:
            # Run init functions if run already exists but tracking is starting for it now
            if not disable_run_init:
                self.run_init_fns()
        _experiment = self.mlf.get_experiment_by_name(name) if name else self.mlf.get_experiment(
            run.info.experiment_id)
        if config:
            self.config = dict_merge({"events": {}}, DEFAULT_CONFIG, config)
        else:
            self.config = dict_merge({"events": {}}, DEFAULT_CONFIG)

        # override active run if used
        if name and run.info.experiment_id is not _experiment.experiment_id:
            logger.warning("Active run doesn't match given input name " + name + ". Recreating new run.")
            try:
                self.api.start_run(experiment_id=_experiment.experiment_id)
            except Exception:
                mlflow.end_run()
                self.api.start_run(experiment_id=_experiment.experiment_id)

        if manage_results:
            self.managed_result_git = self.managed_git_factory(result_path)

            def commit(pads, *args, **kwargs):
                message = "Added results for run " + pads.api.active_run().info.run_id
                pads.managed_result_git.commit_changes(message=message)

                repo = pads.managed_result_git.repo
                remotes = repo.remotes

                if not remotes:
                    logger.warning(
                        "Your results don't have any remote repository set. Set a remote repository for"
                        "to enable automatic pushing.")
                else:
                    for remote in remotes:
                        name, url = remote.name, list(remote.urls)[0]
                        try:
                            # check if remote repo is bare and if it is initialize it with a temporary local repo
                            pads.managed_result_git.is_remote_empty(remote=name,
                                                                    remote_url=url,
                                                                    init=True)
                            # stash current state
                            repo.git.stash('push', '--include-untracked')
                            # Force pull
                            repo.git.pull(name, 'master', '--allow-unrelated-histories')
                            # Push merged changes
                            repo.git.push(name, 'master')
                            logger.info("Pushed your results automatically to " + name + " @:" + url)
                            # pop the stash
                            repo.git.stash('pop')
                        except Exception as e:
                            logger.error("pushing logs to remote failed due to this error '{}'".format(str(e)))

            self._api.register_post_fn("commit", commit, nested=False, intermediate=False,
                                       message="A problem executing the result management function was detected."
                                               " Check if you have to commit / push results manually."
                                               " Following exception caused the problem: {0}",
                                       order=sys.maxsize - 1)

    def _init_mapping_registry(self, *paths, mapping=None, include_defaults=True):
        """
        Function to initialize the mapping file registry
        :param paths:
        :param mapping:
        :param include_defaults:
        :return:
        """
        mapping_file_paths = []
        if include_defaults:
            # Use our with the package delivered mapping files
            mapping_file_paths.extend(glob.glob(os.path.join(expanduser("~"), ".pypads", "bindings", "**.json")))
            mapping_file_paths.extend(glob.glob(
                os.path.abspath(
                    os.path.join(os.path.dirname(__file__), "bindings", "resources", "mapping", "**.json"))))
        if paths:
            mapping_file_paths.extend(paths)
        self._mapping_registry = MappingRegistry(*mapping_file_paths)
        if mapping:
            if isinstance(mapping, dict):
                for key, mapping in mapping.items():
                    self._mapping_registry.add_mapping(mapping, key=key)
            else:
                self._mapping_registry.add_mapping(mapping, key=id(mapping))

    def add_result_remote(self, remote, uri):
        if self.managed_result_git is None:
            raise Exception("Can only add remotes to the result directory if it is managed by pypads git.")
        try:
            self.managed_result_git.remote = remote
            self.managed_result_git.remote_uri = uri
            self.managed_result_git.repo.create_remote(remote, uri)
        except Exception as e:
            logger.warning("Failed to add remote due to exception: " + str(e))

    @property
    def tracking_uri(self):
        return self._uri

    @property
    def managed_git_factory(self):
        return self._managed_git_factory

    @property
    def wrap_manager(self):
        return self._wrap_manager

    @property
    def mapping_registry(self):
        return self._mapping_registry

    @property
    def mlf(self) -> MlflowClient:
        return MlflowClient(self._uri)

    @property
    def function_registry(self) -> FunctionRegistry:
        return self._function_registry

    @property
    def folder(self):
        return self._folder

    @property
    def config(self):
        if self._config:
            return self._config
        tags = self.mlf.get_run(mlflow.active_run().info.run_id).data.tags
        if CONFIG_NAME not in tags:
            raise Exception("Config for pypads is not defined.")
        try:
            return ast.literal_eval(tags[CONFIG_NAME])
        except Exception as e:
            raise Exception("Config for pypads is malformed. " + str(e))

    @config.setter
    def config(self, value: dict):
        mlflow.set_tag(CONFIG_NAME, value)
        self._config = value

    @property
    def api(self) -> PypadsApi:
        return self._api

    @property
    def decorators(self):
        return self._decorators

    @property
    def call_tracker(self):
        return self._call_tracker

    @property
    def cache(self):
        return self._cache

    def run_init_fns(self):
        self._init_run_fns.sort(key=lambda f: f.order())
        for fn in self._init_run_fns:
            if callable(fn):
                fn(self, _pypads_env=None)
