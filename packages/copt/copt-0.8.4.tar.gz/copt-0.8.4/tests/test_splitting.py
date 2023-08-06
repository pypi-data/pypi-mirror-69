"""Tests for gradient-based methods."""
import copt as cp
import numpy as np
import pytest

np.random.seed(0)
n_samples, n_features = 20, 10
A = np.random.randn(n_samples, n_features)
w = np.random.randn(n_features)
b = A.dot(w) + np.random.randn(n_samples)

# we will use a logistic loss, which can't have values
# greater than 1
b = np.abs(b / np.max(np.abs(b)))

all_solvers = (
    ["TOS", cp.minimize_three_split, 1e-12],
    ["PDHG", cp.minimize_primal_dual, 1e-6],
)

loss_funcs = [cp.utils.LogLoss, cp.utils.SquareLoss, cp.utils.HuberLoss]
penalty_funcs = [(None, None), (cp.utils.L1Norm, None), (None, cp.utils.L1Norm)]


def _get_prox(penalty):
    if penalty is not None:
        prox = penalty(1e-3).prox
    else:
        prox = None
    return prox


@pytest.mark.parametrize("name_solver, solver, tol", all_solvers)
@pytest.mark.parametrize("loss", loss_funcs)
@pytest.mark.parametrize("penalty", penalty_funcs)
def test_optimize(name_solver, solver, tol, loss, penalty):
    """Test a method on both the backtracking and fixed step size strategy."""
    max_iter = 1000
    for alpha in np.logspace(-1, 3, 3):
        obj = loss(A, b, alpha)
        prox_1 = _get_prox(penalty[0])
        prox_2 = _get_prox(penalty[1])
        trace = cp.utils.Trace(obj)
        opt = solver(
            obj.f_grad,
            np.zeros(n_features),
            prox_1=prox_1,
            prox_2=prox_2,
            tol=1e-12,
            max_iter=max_iter,
            callback=trace,
        )
        assert opt.certificate < tol, name_solver

        opt_2 = solver(
            obj.f_grad,
            np.zeros(n_features),
            prox_1=prox_1,
            prox_2=prox_2,
            max_iter=max_iter,
            tol=1e-12,
            line_search=False,
            step_size=1.0 / obj.lipschitz,
        )
        assert opt.certificate < tol, name_solver
        assert opt_2.certificate < tol, name_solver
