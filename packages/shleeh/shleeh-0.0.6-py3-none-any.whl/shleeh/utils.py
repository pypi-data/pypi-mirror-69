import re
import time
import warnings
import pkg_resources


class TimeCounter:
    _start = None

    def __init__(self):
        self.reset()

    def reset(self):
        self._start = time.time()

    def time(self):
        return time.time() - self._start


def kill_daemon(daemon_obj):
    if daemon_obj.is_alive():
        if daemon_obj._tstate_lock is not None:
            daemon_obj._tstate_lock.release()
    else:
        pass


def get_installed_pkg(regex=None):
    if regex is None:
        return [p for p in pkg_resources.working_set]
    else:
        pattern = re.compile(regex)
        return [p for p in pkg_resources.working_set if pattern.search(p.project_name) is not None]


def deprecated_warning(dep_func, alt_func, future=False):
    if future:
        category = PendingDeprecationWarning
        tense = 'will be'
    else:
        category = DeprecationWarning
        tense = 'is'

    # warnings.formatwarning = warning_on_one_line
    warnings.simplefilter("default")
    warnings.warn(f"{dep_func} {tense} deprecated. Please use {alt_func} instead.", category,
                  stacklevel=2)
    warnings.simplefilter("ignore")


def user_warning(message):
    warnings.simplefilter("default")
    warnings.warn(message, UserWarning, stacklevel=2)
    warnings.simplefilter("ignore")


def debug_tool(message, fname=None, path=None):
    import os
    from datetime import datetime
    now = datetime.now()
    date = now.strftime("%Y%m%d")

    if path is None:
        path = os.path.expanduser('~')
    if fname is None:
        fname = f'debug_{date}'
    with open(os.path.join(path, fname), 'a') as f:
        f.write(message)


def print_internal_error(io_handler=None):
    import traceback, sys
    if io_handler is None:
        io_handler = sys.stderr
    traceback.print_exception(*sys.exc_info(),
                              file=io_handler)
