#############################
:mod:`skpomade` documentation
#############################

Overview
========
:mod:`skpomade`: stands for PrObabilistic MAtrix DEcompositions.

Package :mod:`skpomade` offers a Python implementation of algorithms from
paper *Finding Structure with Randomness: Probabilistic Algorithms for
Constructing Approximate Matrix Decompositions*, by N. Halko, P. G.
Martinsson and J. A. Tropp, SIAM review, 53 (2), 2011, https://arxiv.org/abs/0909.4061.

:mod:`skpomade`: is mainly composed of two sub-modules:

* :mod:`skpomade.range_approximation` contains algorithms for Stage A Randomized Schemes for Approximating the Range
* :mod:`skpomade.factorization_construction` contains algorithms for Stage B Construction of Standard Factorizations

Not all algorithms have been implemented yet.

Documentation
=============

.. only:: html

    :Release: |version|
    :Date: |today|

.. toctree::
    :maxdepth: 1

    installation
    references
    tutorials
    copyright


Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
