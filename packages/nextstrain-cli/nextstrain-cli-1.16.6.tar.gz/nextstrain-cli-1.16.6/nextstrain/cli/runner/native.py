"""
Run commands on the native host, outside of any container image.
"""

import os
import shutil
from ..types import RunnerTestResults
from ..util import exec_or_return


def register_arguments(parser) -> None:
    """
    No-op.  No arguments necessary.
    """
    pass


def run(opts, argv, working_volume = None, extra_env = {}) -> int:
    if working_volume:
        os.chdir(str(working_volume.src))

    return exec_or_return(argv, extra_env)


def test_setup() -> RunnerTestResults:
    return [
        ('snakemake is installed',
            shutil.which("snakemake") is not None),

        ('augur is installed',
            shutil.which("augur") is not None),

        ('auspice is installed',
            shutil.which("auspice") is not None),
    ]


def update() -> bool:
    """
    No-op.  Updating the native environment isn't reasonably possible.
    """
    return True


def print_version() -> None:
    # XXX TODO: Show the versions of augur and auspice once those have
    # command-line interfaces to printing their versions (and the versions of
    # tools like mafft, FastTree, etc).
    #   -trs, 17 August 2018
    pass
