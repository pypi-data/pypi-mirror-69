"""Some common XTGEO calculation routines."""

import numpy as np
import xtgeo.cxtgeo._cxtgeo as _cxtgeo

from xtgeo.common import XTGeoDialog

xtg = XTGeoDialog()

logger = xtg.functionlogger(__name__)


def ib_to_ijk(ib, nx, ny, nz, ibbase=0, forder=True):
    """Convert a 1D index (starting from ibbase) to cell indices I J K.

    The default is F-order, but ``forder=False`` gives C order

    Returns I J K as a tuple.
    """

    logger.info("IB to IJK")

    if forder:
        iv, jv, kv = _cxtgeo.x_ib2ijk(ib, nx, ny, nz, ibbase)
    else:
        iv, jv, kv = _cxtgeo.x_ic2ijk(ib, nx, ny, nz, ibbase)

    return (iv, jv, kv)


def ijk_to_ib(i, j, k, nx, ny, nz, ibbase=0, forder=True):
    """
    Convert a cell indices I J K to 1D index (starting from ibbase).

    Both Fortran order and C order (Fortran order is default).
    """

    if forder:
        # fortran order
        ib = _cxtgeo.x_ijk2ib(i, j, k, nx, ny, nz, ibbase)
    else:
        # c order
        ib = _cxtgeo.x_ijk2ic(i, j, k, nx, ny, nz, ibbase)

    if ibbase == 0 and ib > nx * ny * nz - 1:
        xtg.warn("Something is wrong with IJK conversion")
        xtg.warn(
            "I J K, NX, NY, NZ IB: {} {} {} {} {} {} {}".format(i, j, k, nx, ny, nz, ib)
        )

    return ib


def vectorinfo2(x1, x2, y1, y2, option=1):
    """
    Get length and angles from 2 points in space (2D plane).

    Option = 1 gives normal school angle (counterclock from X), while 0 gives azimuth:
    positive direction clockwise from North.
    """

    llen, rad, deg = _cxtgeo.x_vector_info2(x1, x2, y1, y2, option)

    return llen, rad, deg


def diffangle(angle1, angle2, option=1):
    """
    Find the minimim difference between two angles, option=1 means degress,
    otherwise radians. The routine think clockwise for differences.

    Examples::

        res = diffangle(30, 40)  # res shall be -10
        res = diffangle(360, 170)  # res shall be -170
    """

    return _cxtgeo.x_diff_angle(angle1, angle2, option)


def averageangle(anglelist):
    """
    Find the average of a list of angles, in degress
    """
    return _cxtgeo.x_avg_angles(anglelist)


def find_flip(xv, yv):
    """Find the XY flip status by computing the cross products.

    If flip is 1, then the system is right handed in school algebra
    but left-handed in reservoir models (where typically
    X is East, Y is North, assuming Z downwards).

    Args:
        xv (tuple): First vector (x1, y1, z1)
        yv (tuple): Second vector (x2, y2, z2)

    Return:
        Flip flag (1 of -1)

    .. versionchanged:: 2.1.0 Reverse the number returned, skip zv
    """
    flip = 0

    xv = np.array(xv)
    yv = np.array(yv)

    xycross = np.cross(xv, yv)

    logger.debug("Cross product XY is %s", xycross)

    if xycross[2] < 0:
        flip = -1
    else:
        flip = 1

    return flip


def angle2azimuth(inangle, mode="degrees"):
    """Return the Azimuth angle given input normal angle.

    Normal angle means counterclock rotation from X (East) axis, while
    azimuth is clockwise rotation from Y (North)

    Args:
        inangle (float): Input angle in normal manner ("school")
        mode (str): "degrees" (default) or "radians"

    Return:
        Azimuth angle (in degrees or radian)
    """
    nmode1 = 0
    nmode2 = 2
    if mode == "radians":
        nmode1 += 1
        nmode2 += 1

    return _cxtgeo.x_rotation_conv(inangle, nmode1, nmode2, 0)


def azimuth2angle(inangle, mode="degrees"):
    """Return the "school" angle given input azimuth angle.

    Normal "school" angle means counterclock rotation from X (East) axis, while
    azimuth is clockwise rotation from Y (North)

    Args:
        inangle (float): Input angle in azimuth manner
        mode (str): "degrees" (default) or "radians"

    Return:
        Angle (in degrees or radians)
    """
    nmode1 = 2
    nmode2 = 0
    if mode == "radians":
        nmode1 += 1
        nmode2 += 1

    return _cxtgeo.x_rotation_conv(inangle, nmode1, nmode2, 0)
