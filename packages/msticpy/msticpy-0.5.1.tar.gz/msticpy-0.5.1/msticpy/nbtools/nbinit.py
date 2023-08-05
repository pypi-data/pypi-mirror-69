# -------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
# --------------------------------------------------------------------------
"""Initialization for Jupyter Notebooks."""
import os
import importlib
import sys
import warnings
from pathlib import Path
from typing import Any, List, Optional, Tuple, Dict, Callable

from IPython.display import display, HTML
import ipywidgets as widgets
from matplotlib import MatplotlibDeprecationWarning
import pandas as pd
import seaborn as sns

from ..common.utility import (
    check_and_install_missing_packages,
    MsticpyException,
    unit_testing,
)
from ..common.pkg_config import validate_config
from ..common.wsconfig import WorkspaceConfig
from .._version import VERSION

__version__ = VERSION
__author__ = "Ian Hellen"


_IMPORT_ERR_MSSG = """
<h2><font color='red'>One or more missing packages detected</h2>
Please correct these by installing the required packages, restart
the kernel and re-run the notebook.</font>
<i>Package error: {err}</i><br>
"""

_MISSING_PKG_WARN = """
<h3><font color='orange'>Warning {package} is not installed or has an
incorrect version</h3></font>
"""

_MISSING_MPCONFIG_ERR = """
<h3><font color='orange'>Warning: no <i>msticpyconfig.yaml</i> found</h3></font>
Some functionality (such as Threat Intel lookups) will not function without
valid configuration settings.
Please go to the <a href="#Configuration">Configuration section</a>
follow the instructions there.
"""

_PANDAS_REQ_VERSION = (0, 25, 0)


def _get_verbose_setting() -> Callable[[Optional[bool]], bool]:
    """Closure for holding trace setting."""
    _verbose_enabled = False

    def _verbose(verbose: Optional[bool] = None) -> bool:
        nonlocal _verbose_enabled
        if verbose is not None:
            _verbose_enabled = verbose
        return _verbose_enabled

    return _verbose


_VERBOSE = _get_verbose_setting()


def init_notebook(
    namespace: Dict[str, Any],
    additional_packages: List[str] = None,
    extra_imports: List[str] = None,
    verbose: bool = False,
) -> bool:
    """
    Initialize the notebook environment.

    Parameters
    ----------
    namespace : Dict[str, Any]
        Namespace (usually globals()) into which imports
        are to be populated.
    additional_packages : List[str], optional
        Additional packages to be pip installed,
        by default None.
        Packages are specified by name only or version
        specification (e.g. "pandas>=0.25")
    extra_imports : List[str], optional
        Additional import definitions, by default None.
        Imports are specified as up to 3 comma-delimited values
        in a string:
        "{source_pkg}, [{import_tgt}], [{alias}]"
        `source_pkg` is mandatory - equivalent to a simple "import xyz"
        statement.
        `{import_tgt}` specifies an object to import from the package
        equivalent to "from source_pkg import import_tgt"
        `alias` allows renaming of the imported object - equivent to
        the "as alias" part of the import statement.
        If you want to provide just `source_pkg` and `alias` include
        an additional placeholder comma: e.g. "pandas, , pd"
    verbose : bool, optional
        Display more verbose status, by default False

    Returns
    -------
    bool
        True if successful

    Raises
    ------
    MsticpyException
        If extra_imports data format is incorrect.
        If package with required version check has no version
        information.

    """
    _VERBOSE(verbose)

    print("Processing imports....")
    imp_ok = _global_imports(namespace, additional_packages, extra_imports)

    print("Checking configuration....")
    conf_ok = _check_config

    print("Setting options....")
    _set_nb_options(namespace)

    if not imp_ok or not conf_ok:
        display(HTML("<font color='red'><h3>Notebook setup failed</h3>"))
        return False
    display(HTML("<h3>Notebook setup complete</h3>"))
    return True


def _global_imports(
    namespace: Dict[str, Any],
    additional_packages: List[str] = None,
    extra_imports: List[str] = None,
):
    try:
        _imp_from_package(nm_spc=namespace, pkg="pandas", alias="pd")
        _check_and_reload_pkg(namespace, pd, _PANDAS_REQ_VERSION, "pd")

        _imp_from_package(nm_spc=namespace, pkg="IPython", tgt="get_ipython")
        _imp_from_package(nm_spc=namespace, pkg="IPython.display", tgt="display")
        _imp_from_package(nm_spc=namespace, pkg="IPython.display", tgt="HTML")
        _imp_from_package(nm_spc=namespace, pkg="IPython.display", tgt="Markdown")
        _imp_from_package(nm_spc=namespace, pkg="ipywidgets", alias="widgets")
        _imp_from_package(nm_spc=namespace, pkg="pathlib", tgt="Path")
        _imp_from_package(nm_spc=namespace, pkg="matplotlib.pyplot", alias="plt")
        _imp_from_package(
            nm_spc=namespace, pkg="matplotlib", tgt="MatplotlibDeprecationWarning"
        )
        _imp_from_package(nm_spc=namespace, pkg="seaborn", alias="sns")
        _imp_from_package(nm_spc=namespace, pkg="numpy", alias="np")

        # msticpy imports
        _imp_from_package(nm_spc=namespace, pkg="msticpy.data", tgt="QueryProvider")
        _imp_module_all(nm_spc=namespace, module_name="msticpy.nbtools")
        _imp_module_all(nm_spc=namespace, module_name="msticpy.sectools")
        _imp_from_package(
            nm_spc=namespace, pkg="msticpy.nbtools.foliummap", tgt="FoliumMap"
        )
        _imp_from_package(nm_spc=namespace, pkg="msticpy.nbtools.utility", tgt="md")
        _imp_from_package(
            nm_spc=namespace, pkg="msticpy.nbtools.utility", tgt="md_warn"
        )
        _imp_from_package(
            nm_spc=namespace, pkg="msticpy.nbtools.wsconfig", tgt="WorkspaceConfig"
        )

        if additional_packages:
            check_and_install_missing_packages(additional_packages)
        if extra_imports:
            for imp_spec in extra_imports:
                params: List[Optional[str]] = [None, None, None]
                for idx, param in enumerate(imp_spec.split(",")):
                    params[idx] = param.strip() or None

                if params[0] is None:
                    raise MsticpyException(
                        f"First parameter in extra_imports is mandatory: {imp_spec}"
                    )
                _imp_from_package(
                    nm_spc=namespace, pkg=params[0], tgt=params[1], alias=params[2]
                )
        return True
    except ImportError as imp_err:
        display(HTML(_IMPORT_ERR_MSSG.format(err=imp_err)))
        return False


def _check_config():
    config_ok = True
    mp_path = os.environ.get("MSTICPYCONFIG", "./msticpyconfig.yaml")
    if not Path(mp_path).exists():
        display(HTML(_MISSING_MPCONFIG_ERR))
    else:
        err_warn = validate_config()
        if err_warn and err_warn[0]:
            print("Errors found in msticpy configuration.")
            config_ok = False
        if err_warn and err_warn[1]:
            print("Warnings found in msticpy configuration.")

    ws_config = WorkspaceConfig()
    if not ws_config.config_loaded:
        print("No valid configuration for Azure Sentinel found.")
        config_ok = False
    return config_ok


def _set_nb_options(namespace):
    namespace["WIDGET_DEFAULTS"] = {
        "layout": widgets.Layout(width="95%"),
        "style": {"description_width": "initial"},
    }

    # Some of our dependencies (networkx) still use deprecated Matplotlib
    # APIs - we can't do anything about it, so suppress them from view
    warnings.simplefilter("ignore", category=MatplotlibDeprecationWarning)
    warnings.filterwarnings("ignore", category=DeprecationWarning)
    sns.set()
    pd.set_option("display.max_rows", 100)
    pd.set_option("display.max_columns", 50)
    pd.set_option("display.max_colwidth", 100)
    os.environ["KQLMAGIC_LOAD_MODE"] = "silent"


def _imp_module(nm_spc: Dict[str, Any], module_name: str, alias: str = None):
    """Import named module and assign to global alias."""
    mod = importlib.import_module(module_name)
    if alias:
        nm_spc[alias] = mod
    else:
        nm_spc[module_name] = mod
    if _VERBOSE():  # type: ignore
        print(f"{module_name} imported (alias={alias})")
    return mod


def _imp_module_all(nm_spc: Dict[str, Any], module_name):
    """Import all from named module add to globals."""
    imported_mod = importlib.import_module(module_name)
    for item in dir(imported_mod):
        if item.startswith("_"):
            continue
        nm_spc[item] = getattr(imported_mod, item)
    if _VERBOSE():  # type: ignore
        print(f"All items imported from {module_name}")


def _imp_from_package(
    nm_spc: Dict[str, Any], pkg: str, tgt: str = None, alias: str = None
):
    """Import object or submodule from `pkg`."""
    if not tgt:
        return _imp_module(nm_spc=nm_spc, module_name=pkg, alias=alias)
    try:
        # target could be a module
        obj = importlib.import_module(f".{tgt}", pkg)
    except (ImportError, ModuleNotFoundError):
        # if not, it must be an attribute (class, func, etc.)
        mod = importlib.import_module(pkg)
        obj = getattr(mod, tgt)
    if alias:
        nm_spc[alias] = obj
    else:
        nm_spc[tgt] = obj
    if _VERBOSE():  # type: ignore
        print(f"{tgt} imported from {pkg} (alias={alias})")
    return obj


def _check_and_reload_pkg(
    nm_spc: Dict[str, Any], pkg: Any, req_version: Tuple[int, ...], alias: str = None
):
    """Check package version matches required version and reload."""
    warn_mssg = []
    pkg_name = pkg.__name__
    if not hasattr(pkg, "__version__"):
        raise MsticpyException(f"Package {pkg_name} has no version data.")
    pkg_version = tuple([int(v) for v in pkg.__version__.split(".")])
    if pkg_version < req_version:
        display(HTML(_MISSING_PKG_WARN.format(package=pkg_name)))
        if not unit_testing():
            resp = input("Install the package now? (y/n)")  # nosec
        else:
            resp = "y"
        if resp.casefold().startswith("y"):
            warn_mssg.append(f"{pkg_name} was installed or upgraded.")
            pip_ver = ".".join([str(elem) for elem in req_version])
            pkg_spec = f"{pkg_name}>={pip_ver}"
            check_and_install_missing_packages(required_packages=[pkg_spec], user=True)

            if pkg_name in sys.modules:
                importlib.reload(pkg)
            else:
                _imp_module(nm_spc, pkg_name, alias=alias)
    if _VERBOSE():  # type: ignore
        print(f"{pkg_name} imported version {pkg.__version__}")
    return warn_mssg
