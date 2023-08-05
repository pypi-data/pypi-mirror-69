import os
import select
import shutil
import sys
import time

try:
    import tty
    import termios
except ImportError:
    tty = None
    termios = None

from cf_units import Unit

arrow_up = '\x1b[A'
arrow_down = '\x1b[B'
arrow_right = '\x1b[C'
arrow_left = '\x1b[D'
shift_arrow_up = '\x1b[1;2A'
shift_arrow_down = '\x1b[1;2B'
shift_arrow_right = '\x1b[1;2C'
shift_arrow_left = '\x1b[1;2D'
alt_arrow_up = '\x1b[1;3A'
alt_arrow_down = '\x1b[1;3B'
alt_arrow_right = '\x1b[1;3C'
alt_arrow_left = '\x1b[1;3D'
ctrl_arrow_up = '\x1b[1;5A'
ctrl_arrow_down = '\x1b[1;5B'
ctrl_arrow_right = '\x1b[1;5C'
ctrl_arrow_left = '\x1b[1;5D'


def is_input():
    """
    Utility to check if there is input available.

    Returns
    -------
    is_input : bool
        `True` if there is data in `sys.stdin`.
    """

    return select.select([sys.stdin], [], [], 1) == ([sys.stdin], [], [])


def get_input():
    """
    Waits for a single character input and returns it.

    You can compare the input to the keys stored in this module e.g.
    ``utils.arrow_up == get_input()``.

    Returns
    -------
    input : str
    """
    if termios is None:
        raise RuntimeError('Not supported on this platform')

    # Save old terminal settings
    old_settings = termios.tcgetattr(sys.stdin)
    # Stash a None here in case we get interrupted
    inp = None
    try:
        # Swap to cbreak mode to get raw inputs
        tty.setcbreak(sys.stdin.fileno())
        # Poll for input. This is interruptable with ctrl+c
        while (not is_input()):
            time.sleep(0.01)
        # Read the first character
        inp = sys.stdin.read(1)
        # Read more if we have a control sequence
        if inp == '\x1b':
            extra_inp = sys.stdin.read(2)
            inp += extra_inp
            # Read even more if we had a shift/alt/ctrl modifier
            if extra_inp == '[1':
                inp += sys.stdin.read(3)
    finally:
        # Restore the terminal to normal input mode
        termios.tcsetattr(sys.stdin, termios.TCSADRAIN, old_settings)
        return inp


def convert_unit(value, unit, new_unit):
    """
    One-line unit conversion.

    Parameters
    ----------
    value : float
        The starting value for the conversion.

    unit : str
        The starting unit for the conversion.

    new_unit : str
        The desired unit for the conversion.

    Returns
    -------
    new_value : float
        The starting value, but converted to the new unit.
    """

    start_unit = Unit(unit)
    return start_unit.convert(value, new_unit)


def ipm_screen(dettype, prefix, prefix_ioc):
    """
    Function to call the (pyQT) screen for an IPM box.

    Parameters
    ----------
    dettype : {'IPIMB', 'Wave8'}
        The type of detector being accessed.

    prefix : str
        The PV prefix associated with the device being accessed.

    prefix_ioc : str
        The PV prefix associated with the IOC running the device.
    """

    if (dettype == 'IPIMB'):
        executable = '/reg/g/pcds/controls/pycaqt/ipimb/ipimb'
    elif (dettype == 'Wave8'):
        executable = '/reg/g/pcds/pyps/apps/wave8/latest/wave8'
    else:
        raise ValueError('Unknown detector type')
    if shutil.which(executable) is None:
        raise EnvironmentError('%s is not on path, we cannot start the screen'
                               % executable)
    os.system('%s --base %s --ioc %s --evr %s &' %
              (executable, prefix, prefix_ioc, prefix+':TRIG'))
