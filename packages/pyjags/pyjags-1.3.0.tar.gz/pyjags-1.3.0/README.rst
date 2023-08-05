PyJAGS: The Python Interface to JAGS
====================================

PyJAGS provides a Python interface to JAGS, a program for analysis of Bayesian
hierarchical models using Markov Chain Monte Carlo (MCMC) simulation.

PyJAGS adds the following features on top of JAGS:

* Multicore support for parallel simulation of multiple Markov chains
* Saving sample MCMC chains to and restoring from HDF5 files
* Functionality to merge samples along iterations or across chains so that sampling can be resumed in consecutive chunks until convergence criteria are satisfied
* Connectivity to the Bayesian analysis and visualization package Arviz

License: GPLv2

Installation
------------
A working JAGS installation is required.

::

  pip install pyjags

Useful links
------------

* `Package on the Python Package Index <https://pypi.python.org/pypi/pyjags>`_
* `Project page on github <https://github.com/michaelnowotny/pyjags>`_
* `JAGS manual and examples <http://sourceforge.net/projects/mcmc-jags/files/>`_

