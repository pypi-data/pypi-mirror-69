.. note::
    :class: sphx-glr-download-link-note

    Click :ref:`here <sphx_glr_download_auto_examples_plot_sfw.py>` to download the full example code
.. rst-class:: sphx-glr-example-title

.. _sphx_glr_auto_examples_plot_sfw.py:


Comparison of variants of Stochastic FW
===========================================

The problem solved in this case is a L1 constrained logistic regression
(sometimes referred to as sparse logistic regression).



.. code-block:: pytb

    Traceback (most recent call last):
      File "/home/pedregosa/dev/sphinx-gallery/sphinx_gallery/gen_rst.py", line 435, in _memory_usage
        multiprocess=True)
      File "/home/pedregosa/dev/memory_profiler/memory_profiler.py", line 343, in memory_usage
        returned = f(*args, **kw)
      File "/home/pedregosa/dev/sphinx-gallery/sphinx_gallery/gen_rst.py", line 426, in __call__
        exec(self.code, self.globals)
      File "/home/pedregosa/dev/copt/examples/plot_sfw.py", line 58, in <module>
        variant='SAG'
      File "/home/pedregosa/dev/copt/copt/randomized.py", line 836, in minimize_sfw
        dual_var[idx] = (1 / n_samples) * f_deriv(p, b[idx])
      File "/home/pedregosa/anaconda3/lib/python3.7/site-packages/numba/dispatcher.py", line 376, in _compile_for_args
        error_rewrite(e, 'typing')
      File "/home/pedregosa/anaconda3/lib/python3.7/site-packages/numba/dispatcher.py", line 343, in error_rewrite
        reraise(type(e), e, None)
      File "/home/pedregosa/anaconda3/lib/python3.7/site-packages/numba/six.py", line 658, in reraise
        raise value.with_traceback(tb)
    numba.errors.TypingError: Failed in nopython mode pipeline (step: nopython frontend)
    [1m[1m[1mInvalid use of Function(<built-in function array>) with argument(s) of type(s): (array(float64, 1d, C))
     * parameterized
    [1mIn definition 0:[0m
    [1m    TypingError: [1marray(float64, 1d, C) not allowed in a homogeneous sequence[0m[0m
        raised from /home/pedregosa/anaconda3/lib/python3.7/site-packages/numba/typing/npydecl.py:460
    [1mIn definition 1:[0m
    [1m    TypingError: [1marray(float64, 1d, C) not allowed in a homogeneous sequence[0m[0m
        raised from /home/pedregosa/anaconda3/lib/python3.7/site-packages/numba/typing/npydecl.py:460
    [1mThis error is usually caused by passing an argument of a type that is unsupported by the named function.[0m[0m
    [0m[1m[1] During: resolving callee type: Function(<built-in function array>)[0m
    [0m[1m[2] During: typing of call at /home/pedregosa/dev/copt/copt/utils.py (332)
    [0m
    [1m
    File "../copt/utils.py", line 332:[0m
    [1m        def log_deriv(p, y):
                <source elided>
                # same as in lightning (with minus sign)
    [1m            p = np.array(p)
    [0m            [1m^[0m[0m

    This is not usually a problem with Numba itself but instead often caused by
    the use of unsupported features or an issue in resolving types.

    To see Python/NumPy features supported by the latest release of Numba visit:
    http://numba.pydata.org/numba-doc/latest/reference/pysupported.html
    and
    http://numba.pydata.org/numba-doc/latest/reference/numpysupported.html

    For more information about typing errors and how to debug them visit:
    http://numba.pydata.org/numba-doc/latest/user/troubleshoot.html#my-code-doesn-t-compile

    If you think your code should work with Numba, please report the error message
    and traceback, along with a minimal reproducer at:
    https://github.com/numba/numba/issues/new






.. code-block:: default


    import copt as cp
    import matplotlib.pyplot as plt
    import numpy as np

    # .. construct (random) dataset ..
    n_samples, n_features = 1000, 200
    np.random.seed(0)
    X = np.random.randn(n_samples, n_features)
    y = np.random.rand(n_samples)
    max_iter = int(1e6)
    freq = max(max_iter // 1000, 1000)

    # .. objective function and regularizer ..
    f = cp.utils.LogLoss(X, y)
    constraint = cp.utils.L1Ball(1.)


    # .. callbacks to track progress ..
    def fw_gap(x):
        _, grad = f.f_grad(x)
        return constraint.lmo(-grad, x)[0].dot(-grad)


    class TraceGaps(cp.utils.Trace):
        def __init__(self, f=None, freq=1):
            super(TraceGaps, self).__init__(f, freq)
            self.trace_gaps = []

        def __call__(self, dl):
            if self._counter % self.freq == 0:
                self.trace_gaps.append(fw_gap(dl['x']))
            super(TraceGaps, self).__call__(dl)


    cb_sfw_SAG = TraceGaps(f, freq=freq)
    cb_sfw_SAGA = TraceGaps(f, freq=freq)
    cb_sfw_mokhtari = TraceGaps(f, freq=freq)
    cb_sfw_lu_freund = TraceGaps(f, freq=freq)

    # .. run the SFW algorithm ..
    result_sfw_SAG = cp.randomized.minimize_sfw(
        f.partial_deriv,
        X,
        y,
        np.zeros(n_features),
        constraint.lmo,
        callback=cb_sfw_SAG,
        tol=0,
        max_iter=max_iter,
        variant='SAG'
    )

    result_sfw_SAGA = cp.randomized.minimize_sfw(
        f.partial_deriv,
        X,
        y,
        np.zeros(n_features),
        constraint.lmo,
        callback=cb_sfw_SAGA,
        tol=0,
        max_iter=max_iter,
        variant='SAGA'
    )

    result_sfw_mokhtari = cp.randomized.minimize_sfw(
        f.partial_deriv,
        X,
        y,
        np.zeros(n_features),
        constraint.lmo,
        callback=cb_sfw_mokhtari,
        tol=0,
        max_iter=max_iter,
        variant='MK'
    )

    result_sfw_lu_freund = cp.randomized.minimize_sfw(
        f.partial_deriv,
        X,
        y,
        np.zeros(n_features),
        constraint.lmo,
        callback=cb_sfw_lu_freund,
        tol=0,
        max_iter=max_iter,
        variant='LF'
    )
    # .. plot the result ..
    max_gap = max(cb_sfw_SAG.trace_gaps[0],
                  cb_sfw_mokhtari.trace_gaps[0],
                  cb_sfw_lu_freund.trace_gaps[0],
                  cb_sfw_SAGA.trace_gaps[0])

    max_val = max(cb_sfw_SAG.trace_fx[0],
                  cb_sfw_mokhtari.trace_fx[0],
                  cb_sfw_lu_freund.trace_fx[0],
                  cb_sfw_SAGA.trace_fx[0])

    min_val = min(np.min(cb_sfw_SAG.trace_fx),
                  np.min(cb_sfw_mokhtari.trace_fx),
                  np.min(cb_sfw_lu_freund.trace_fx),
                  np.min(cb_sfw_SAGA.trace_fx),
                  )

    fig, (ax1, ax2) = plt.subplots(2, sharex=True)
    fig.suptitle('Stochastic Frank-Wolfe')

    ax1.plot(freq * np.arange(len(cb_sfw_SAG.trace_gaps)), np.array(cb_sfw_SAG.trace_gaps) / max_gap, lw=4, label="SFW -- SAG")
    ax1.plot(freq * np.arange(len(cb_sfw_SAGA.trace_gaps)), np.array(cb_sfw_SAGA.trace_gaps) / max_gap, lw=4, label="SFW -- SAGA")
    ax1.plot(freq * np.arange(len(cb_sfw_mokhtari.trace_gaps)), np.array(cb_sfw_mokhtari.trace_gaps) / max_gap, lw=4, label='SFW -- Mokhtari et al. (2020)')
    ax1.plot(freq * np.arange(len(cb_sfw_lu_freund.trace_gaps)), np.array(cb_sfw_lu_freund.trace_gaps) / max_gap, lw=4, label='SFW -- Lu and Freund (2020)')
    ax1.set_ylabel("Relative FW gap", fontweight="bold")
    ax1.set_yscale('log')
    ax1.grid()

    ax2.plot(freq * np.arange(len(cb_sfw_SAG.trace_fx)), (np.array(cb_sfw_SAG.trace_fx) - min_val) / (max_val - min_val), lw=4, label="SFW -- SAG")
    ax2.plot(freq * np.arange(len(cb_sfw_SAGA.trace_fx)), (np.array(cb_sfw_SAGA.trace_fx) - min_val) / (max_val - min_val), lw=4, label="SFW -- SAGA")
    ax2.plot(freq * np.arange(len(cb_sfw_mokhtari.trace_fx)), (np.array(cb_sfw_mokhtari.trace_fx) - min_val) / (max_val - min_val), lw=4, label='SFW -- Mokhtari et al. (2020)')
    ax2.plot(freq * np.arange(len(cb_sfw_lu_freund.trace_fx)), (np.array(cb_sfw_lu_freund.trace_fx) - min_val) / (max_val - min_val), lw=4, label='SFW -- Lu and Freund (2020)')
    ax2.set_ylabel("Relative suboptimality", fontweight="bold")
    ax2.set_xlabel("Number of gradient evaluations", fontweight="bold")
    ax2.set_yscale("log")

    plt.xlim((0, max_iter))
    plt.legend()
    plt.grid()
    plt.show()


.. rst-class:: sphx-glr-timing

   **Total running time of the script:** ( 0 minutes  0.349 seconds)

**Estimated memory usage:**  8 MB


.. _sphx_glr_download_auto_examples_plot_sfw.py:


.. only :: html

 .. container:: sphx-glr-footer
    :class: sphx-glr-footer-example



  .. container:: sphx-glr-download

     :download:`Download Python source code: plot_sfw.py <plot_sfw.py>`



  .. container:: sphx-glr-download

     :download:`Download Jupyter notebook: plot_sfw.ipynb <plot_sfw.ipynb>`


.. only:: html

 .. rst-class:: sphx-glr-signature

    `Gallery generated by Sphinx-Gallery <https://sphinx-gallery.github.io>`_
