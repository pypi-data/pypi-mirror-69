"""Tests for the Frank-Wolfe algorithm."""
import numpy as np
import pytest
from scipy import optimize
import copt as cp

np.random.seed(0)
n_samples, n_features = 20, 16
A = np.random.randn(n_samples, n_features)
w = np.random.randn(n_features)
b = A.dot(w) + np.random.randn(n_samples)

# we will use a logistic loss, which can't have values
# greater than 1
b = np.abs(b / np.max(np.abs(b)))

LOSS_FUNCS = [cp.utils.LogLoss, cp.utils.SquareLoss]


def test_fw_api():
    """Check that FW takes the right arguments and raises the right exceptions."""

    # test that the algorithm does not fail if x0
    # is a tuple
    f = cp.utils.LogLoss(A, b, 1.0 / n_samples)
    cb = cp.utils.Trace(f)
    alpha = 1.0
    l1ball = cp.utils.L1Ball(alpha)
    cp.minimize_frank_wolfe(
        f.f_grad,
        [0] * n_features,
        l1ball.lmo,
        tol=0,
        lipschitz=f.lipschitz,
        callback=cb,
    )

    # check that we riase an exception when the DR step-size is used
    # but no lipschitz constant is given
    with pytest.raises(ValueError):
        cp.minimize_frank_wolfe(f.f_grad, [0] * n_features, l1ball.lmo, step="DR")


@pytest.mark.parametrize("alpha", [0.1, 1.0, 10.0, 100.0])
@pytest.mark.parametrize("loss_grad", LOSS_FUNCS)
def test_fw_l1(loss_grad, alpha):
    """Test result of FW algorithm with L1 constraint."""
    f = loss_grad(A, b, 1.0 / n_samples)
    cb = cp.utils.Trace(f)
    l1ball = cp.utils.L1Ball(alpha)
    opt = cp.minimize_frank_wolfe(
        f.f_grad,
        np.zeros(n_features),
        l1ball.lmo,
        tol=1e-3,
        lipschitz=f.lipschitz,
        callback=cb,
    )
    assert np.isfinite(opt.x).sum() == n_features

    ss = 1 / f.lipschitz
    grad = f.f_grad(opt.x)[1]
    grad_map = (opt.x - l1ball.prox(opt.x - ss * grad, ss)) / ss
    assert np.linalg.norm(grad_map) < 0.3


def bisection(kw):
    # naive implementation of bisection method
    def f_ls(gamma):
        return kw["func_and_grad"](kw["x"] + gamma * kw["update_direction"])[0]

    a = 0
    b = kw["max_step_size"]
    fa = f_ls(a)
    fb = f_ls(b)
    for _ in range(10):
        c = (a + b) / 2
        fc = f_ls(c)
        if fc * fa > 0:
            a = c
            fa = fc
        else:
            b = c
            fb = fc

    ls_sol = optimize.minimize_scalar(f_ls, bounds=[0, 1])
    return ls_sol.x


@pytest.mark.parametrize("alpha", [0.1, 1.0, 10.0, 100.0])
@pytest.mark.parametrize("obj", LOSS_FUNCS)
@pytest.mark.parametrize("step", ["DR", "backtracking", "oblivious", bisection])
def test_fw_backtrack(obj, step, alpha):
    """Test FW with different options of the line-search strategy."""
    f = obj(A, b, 1.0 / n_samples)
    traceball = cp.utils.TraceBall(alpha, (4, 4))
    opt = cp.minimize_frank_wolfe(
        f.f_grad,
        np.zeros(n_features),
        traceball.lmo,
        tol=0,
        lipschitz=f.lipschitz,
        step=step,
        max_iter=1000,
    )
    assert np.isfinite(opt.x).sum() == n_features

    ss = 1 / f.lipschitz
    grad = f.f_grad(opt.x)[1]
    grad_map = (opt.x - traceball.prox(opt.x - ss * grad, ss)) / ss
    assert np.linalg.norm(grad_map) < 0.4


@pytest.mark.parametrize("alpha", [0.1, 1.0, 10.0, 100.0])
@pytest.mark.parametrize("obj", LOSS_FUNCS)
@pytest.mark.parametrize("step", ["DR", "backtracking", bisection])
def test_pairwise_fw(obj, step, alpha):
    """Test the Pairwise FW method."""
    f = obj(A, b, 1.0 / n_samples)

    l1ball = cp.utils.L1Ball(alpha)
    x0 = np.zeros(A.shape[1])
    x0[0] = alpha
    cb = cp.utils.Trace(f)
    opt = cp.minimize_frank_wolfe(
        f.f_grad, x0, l1ball.lmo_pairwise, step=step, lipschitz=f.lipschitz, callback=cb
    )
    assert np.isfinite(opt.x).sum() == n_features

    ss = 1 / f.lipschitz
    grad = f.f_grad(opt.x)[1]
    grad_map = (opt.x - l1ball.prox(opt.x - ss * grad, ss)) / ss

    assert np.linalg.norm(grad_map) < 0.2
