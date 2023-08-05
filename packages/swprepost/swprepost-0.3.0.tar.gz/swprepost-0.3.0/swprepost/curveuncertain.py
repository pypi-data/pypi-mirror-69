# This file is part of swprepost, a Python package for surface-wave
# inversion pre- and post-processing.
# Copyright (C) 2019-2020 Joseph P. Vantassel (jvantassel@utexas.edu)
#
#     This program is free software: you can redistribute it and/or modify
#     it under the terms of the GNU General Public License as published by
#     the Free Software Foundation, either version 3 of the License, or
#     (at your option) any later version.
#
#     This program is distributed in the hope that it will be useful,
#     but WITHOUT ANY WARRANTY; without even the implied warranty of
#     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#     GNU General Public License for more details.
#
#     You should have received a copy of the GNU General Public License
#     along with this program.  If not, see <https: //www.gnu.org/licenses/>.

"""Definition of CurveUncertain."""

import numpy as np

from swprepost import Curve


class CurveUncertain(Curve):
    """Curve object with aribtrary uncertainty in terms of x and y.

    Attributes
    ----------
    _isxerr, _isyerr : bool
        Flags to indicate if x and y error has been provided.
    _xerr, _yerr : ndarray
        Vector defining the error in x and y respectively.

    """

    def __init__(self, x, y, yerr=None, xerr=None):
        """Initialize a new `CurveUncertain` object.

        Parameters
        ----------
        x, y : iterable
            x and y coordinate which define the curves central
            trend.
        yerr, xerr : iterable, optional
            Relative error in the y- and x-direction respectively,
            default is `None` indicating no error is defined.

        Returns
        -------
        CurveUncertain
            Initialized `CurveUncertain` object.

        Raises
        ------
        IndexError
            If size of x, y, yerr (if provided) and xerr (if
            provided) are inconsistent.

        """
        # Pass x, y to `Curve` constuctor.
        super().__init__(x, y)

        # Handle x-error and y-error.
        for attr, attr_name, attr_bool in zip([yerr, xerr],
                                              ["_yerr", "_xerr"],
                                              ["_isyerr", "_isxerr"]):
            if attr is None:
                setattr(self, attr_bool, False)
            else:
                setattr(self, attr_bool, True)
                setattr(self, attr_name, np.array(attr))

                if self._x.size != getattr(self, attr_name).size:
                    msg = "Size of the curve's attributes must be consistent."
                    raise IndexError(msg)

    def resample(self, xx, inplace=False,
                 res_fxn=None, res_fxn_xerr=None, res_fxn_yerr=None):
        """Resample curve and its associated uncertainty.

        Parameters
        ----------
        xx : ndarray
            Desired x values after resampling.
        inplace : bool, optional
            Indicates whether resampling is performed inplace and
            the objects attributes are updated or if calculated 
            values are returned.
        res_fxn, res_fxn_xerr, res_fxn_yerr : function, optional
            Functions to define the resampling of the central
            x and y values, xerr and yerr respectively, default is
            `None` indicating default resampling function is used.

        Returns
        -------          
        None or Tuple
            If `inplace=True`, returns `None`, instead update
            attributes `_x`, `_y`, `_xerr`, and `_yerr` if they exist.
            If `inplace=False`, returns `Tuple` of the form
            `(xx, yy, yyerr, xxerr)`. If `xerr` and/or `yerr` are not
            defined they are not resampled and ommited from the return
            statement.

        """
        # Create resample functions before resampling mean curve
        if self._isyerr and res_fxn_yerr is None:
            res_fxn_yerr = super().resample_function(self._x, self._yerr,
                                                     kind="cubic")
        if self._isxerr and res_fxn_xerr is None:
            res_fxn_xerr = super().resample_function(self._x, self._xerr,
                                                     kind="cubic")

        # Resample mean curve
        new_mean_curve = super().resample(xx=xx, inplace=inplace,
                                          res_fxn=res_fxn)

        # Resample error
        if inplace:
            xx = self._x
        else:
            xx, yy = new_mean_curve

        if self._isyerr:
            yerr = res_fxn_yerr(xx)
        if self._isxerr:
            xerr = res_fxn_xerr(xx)

        # Update attributes (if inplace=True).
        if inplace:
            if self._isyerr:
                self._yerr = yerr
            if self._isxerr:
                self._xerr = xerr
        # Or return values (if inplace=False)
        else:
            if self._isyerr and self._isxerr:
                return (xx, yy, yerr, xerr)
            elif self._isyerr:
                return (xx, yy, yerr)
            elif self._isxerr:
                return (xx, yy, xerr)
            else:
                return (xx, yy)
