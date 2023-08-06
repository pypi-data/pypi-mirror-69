# Included LSAP tests from Scipy
# Author: Brian M. Clapper, G. Varoquaux, Lars Buitinck
# License: BSD

import numpy as np
from numpy.testing import assert_array_equal
from pytest import raises as assert_raises
from scipy.optimize import linear_sum_assignment as lap
from scipy.sparse.sputils import matrix

from laptools.dynamic_lsap import linear_sum_assignment


# fmt: off
def test_linear_sum_assignment():
    for sign in [-1, 1]:
        for cost_matrix, expected_cost in [
            # Square
            ([[400, 150, 400],
              [400, 450, 600],
              [300, 225, 300]],
             [150, 400, 300]
             ),

            # Rectangular variant
            ([[400, 150, 400, 1],
              [400, 450, 600, 2],
              [300, 225, 300, 3]],
             [150, 2, 300]),

            # Square
            ([[10, 10, 8],
              [9, 8, 1],
              [9, 7, 4]],
             [10, 1, 7]),

            # Rectangular variant
            ([[10, 10, 8, 11],
              [9, 8, 1, 1],
              [9, 7, 4, 10]],
             [10, 1, 4]),

            # n == 2, m == 0 matrix
            ([[], []],
             []),

            # Square with positive infinities
            ([[10, float("inf"), float("inf")],
              [float("inf"), float("inf"), 1],
              [float("inf"), 7, float("inf")]],
             [10, 1, 7]),
        ]:

            maximize = (sign == -1)
            cost_matrix = sign * np.array(cost_matrix)
            expected_cost = sign * np.array(expected_cost)

            row_ind, col_ind = linear_sum_assignment(cost_matrix,
                                                     maximize=maximize)
            assert_array_equal(row_ind, np.sort(row_ind))
            assert_array_equal(expected_cost, cost_matrix[row_ind, col_ind])

            cost_matrix = cost_matrix.T
            row_ind, col_ind = linear_sum_assignment(cost_matrix,
                                                     maximize=maximize)
            assert_array_equal(row_ind, np.sort(row_ind))
            assert_array_equal(np.sort(expected_cost),
                               np.sort(cost_matrix[row_ind, col_ind]))


def test_linear_sum_assignment_input_validation():
    # Since the input should be a 2D array.
    assert_raises(ValueError, linear_sum_assignment, [1, 2, 3])

    C = [[1, 2, 3], [4, 5, 6]]
    assert_array_equal(linear_sum_assignment(C),
                       linear_sum_assignment(np.asarray(C)))
    assert_array_equal(linear_sum_assignment(C),
                       linear_sum_assignment(matrix(C)))

    eye = np.identity(3)
    assert_array_equal(linear_sum_assignment(eye.astype(np.bool)),
                       linear_sum_assignment(eye))
    assert_raises(ValueError, linear_sum_assignment, eye.astype(str))

    eye[0][0] = np.nan
    assert_raises(ValueError, linear_sum_assignment, eye)

    eye = np.identity(3)
    eye[1][1] = -np.inf
    assert_raises(ValueError, linear_sum_assignment, eye)

    eye = np.identity(3)
    eye[:, 0] = np.inf
    assert_raises(ValueError, linear_sum_assignment, eye)

# fmt: on


def test_linear_sum_assignment_against_scipy():
    for i in range(100):
        cost_matrix = np.random.rand(5, 10)

        row_ind_1, col_ind_1 = linear_sum_assignment(cost_matrix)
        row_ind_2, col_ind_2 = lap(cost_matrix)

        assert_array_equal(row_ind_1, row_ind_2)
        assert_array_equal(col_ind_1, col_ind_2)

        cost_matrix = cost_matrix.T

        row_ind_1, col_ind_1 = linear_sum_assignment(cost_matrix)
        row_ind_2, col_ind_2 = lap(cost_matrix)

        assert_array_equal(row_ind_1, row_ind_2)
        assert_array_equal(col_ind_1, col_ind_2)
