========
Fluxpart
========

----------------------------------------------------------------------
Python 3 module for partitioning water vapor and carbon dioxide fluxes
----------------------------------------------------------------------

The `eddy covariance technique`__ is commonly used to measure gas fluxes
over agricultural fields. Greater insight into the functioning of
agroecosystems is possible if the measured gas fluxes can be separated
into their constitutive components: the water vapor flux into
transpiration and direct evaporation components, and the carbon dioxide
flux into photosynthesis and respiration components.

.. _ecwiki: https://en.wikipedia.org/wiki/Eddy_covariance

__ ecwiki_


Links
=====

* Documentation: https://fluxpart.readthedocs.io
* Sources: https://github.com/usda-ars-ussl/fluxpart


Features
========

* Implements the Scanlon and Sahu (2008) procedure for partitioning eddy
  covariance measurements of water vapor and carbon dioxide fluxes into
  stomatal (transpiration, photosynthesis) and nonstomatal (evaporation,
  respiration) components.

* Includes capabilities for applying basic QA/QC to high-frequency eddy
  covariance data, for correcting high frequency data for external
  fluctuations associated with air temperature and vapor density, and
  for estimating leaf-level water use efficiency.


Install
=======

**Update March 5, 2019:** The previously recommended installation method, using an environment.yml file hosted on Anaconda Cloud, has proven unreliable. 
Apologies if this caused a problem.

To install and create a conda fluxpart environment, do this instead. Open this link,

`environment.yml <https://raw.githubusercontent.com/usda-ars-ussl/fluxpart/master/conda.recipe/environment.yml>`_

and right click on the page. Select "save as" and name the saved file `environment.yml`.
Navigate to the directory where you saved `environment.yml`, and execute::

    conda env create -f environment.yml
    conda activate fp02

Alternatively, if you don't want the full environment::

        conda install -c ussl fluxpart

    or:

        pip install fluxpart


License
=======

* U.S.: `Public Domain <https://www.usa.gov/publicdomain/label/1.0>`_
* International: `CC0 <https://creativecommons.org/publicdomain/zero/1.0>`_


How to Cite
===========

T. H. Skaggs, R. G. Anderson, J. G. Alfieri, T. M. Scanlon,
W. P. Kustas (2018). Fluxpart: Open source software for partitioning carbon
dioxide and water vapor fluxes. Agricultural and Forest Meteorology
253--254:218--224,
doi:`10.1016/j.agrformet.2018.02.019 <https://doi.org/10.1016/j.agrformet.2018.02.019>`_.

