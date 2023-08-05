"""
The :mod:`sklearn.covariance` module includes methods and algorithms to
robustly estimate the covariance of features given a set of points. The
precision matrix defined as the inverse of the covariance is also estimated.
Covariance estimation is closely related to the theory of Gaussian Graphical
Models.
"""

from .output import *
__all__ = [
    'Output',
    'Csv',
    'Json',
    'TFRecord',
    'Parquet'
]