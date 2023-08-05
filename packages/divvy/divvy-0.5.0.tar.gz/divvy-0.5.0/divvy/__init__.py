"""Project configuration, particularly for logging.

Project-scope constants may reside here, but more importantly, some setup here
will provide a logging infrastructure for all of the project's modules.
Individual modules and classes may provide separate configuration on a more
local level, but this will at least provide a foundation.

"""

import logmuse
from ._version import __version__
from .compute import ComputingConfiguration, select_divvy_config
from .const import *
from .utils import write_submit_script

__classes__ = ["ComputingConfiguration"]
__functions__ = ["select_divvy_config"]
__all__ = __classes__ + __functions__ + [write_submit_script.__name__]

logmuse.init_logger("divvy")
