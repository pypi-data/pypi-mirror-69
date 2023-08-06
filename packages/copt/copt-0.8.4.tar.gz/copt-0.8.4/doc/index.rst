COPT: a Python library for Constrained OPTimization
===================================================

.. image:: https://travis-ci.org/openopt/copt.svg?branch=master
   :target: https://travis-ci.org/openopt/copt
.. image:: https://storage.googleapis.com/copt-doc/doc_status.svg
   :target: https://storage.googleapis.com/copt-doc/index.html
.. image:: https://coveralls.io/repos/github/openopt/copt/badge.svg?branch=master
   :target: https://coveralls.io/github/openopt/copt?branch=master
.. image:: https://storage.googleapis.com/copt-doc/pylint.svg
   :target: https://storage.googleapis.com/copt-doc/pylint.txt
.. image:: https://zenodo.org/badge/46262908.svg
   :target: citing.html



Life is too short to learn another API
--------------------------------------

COPT is an optimization library that does not reinvent the wheel. It packs classical optimization algorithms in an API following that of `scipy.optimize <https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html>`_. So if you've already used that library, you should feel right at ease.

It provides:

  * State of the art implementation of classical optimization algorithms such as :ref:`proximal gradient descent <proximal_gradient>` and :ref:`Frank-Wolfe <frank_wolfe>`  under a consistent API.
  * Few dependencies, pure Python library for easy deployment.
  * An :ref:`example gallery <sphx_glr_auto_examples>`.



Contents
-----------------------

The methods implements in copt can be categorized as:

.. admonition:: Proximal-gradient

  These are methods that combine the gradient of a smooth term with the proximal operator of a potentially non-smooth term.
  They can be used to solve problems involving one or several non-smooth terms. :ref:`Read more ...<proximal_gradient>`

.. admonition:: Frank-Wolfe

    Frank-Wolfe, also known as conditional gradient, are a family of methods to solve constrained optimization problems. Contrary to proximal-gradient methods, they don't require access to the projection onto the constraint set. :ref:`Read more ...<frank_wolfe>`


.. admonition:: Stochastic Methods

  Methods that can solve optimization problems with access only to a noisy evaluation of the objective.
  :ref:`Read more ...<stochastic_methods>`.


Installation
------------

If you already have a working installation of numpy and scipy,
the easiest way to install copt is using ``pip`` ::

    pip install -U copt


Alternatively, you can install the latest development from github with the command::

    pip install git+https://github.com/openopt/copt.git



Where to go from here?
----------------------

To know more about copt, check out our :ref:`example gallery <sphx_glr_auto_examples>` or browse through the module reference using the left navigation bar.


.. toctree::
    :maxdepth: 2
    :hidden:

    solvers
    loss_functions
    auto_examples/index
    utils
    citing

Last change: |today|
