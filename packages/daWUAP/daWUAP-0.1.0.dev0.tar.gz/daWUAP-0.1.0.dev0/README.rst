============
daWUAP - data assimilation Water Use and Agricultural Productivity Model
============

The data assimilation Water Use and Agricultural Productivity model (daWUAP) is a hydro-economic model that couples an economic model of agricultural production calibrated using positive mathematical programming (PMP) and a semidistributed rainfall-runoff-routing model that simulates water available to producers.

Features:

- 1 Calibration of economic component can use standard the mathematical programming method or a new recursive stochastic filter.
- 2 Stochastic calibration permits to obtain simulation results of agricultural outputs (land and water allocation, etc) as probability distributions that reflect the quality of the calibration.
- 3 Recursive stochastic filter permits calibration of economic model with noisy but frequent remote sensing observations of agricultural activity.
- 4 Model permits to trace the effect of producer choices on the hydrologic system and on other users.

Contributions and comments are welcome using Github at:
https://bitbucket.org/umthydromodeling/dawuap.git

Please note that daWUAP requires:

- Python >= 3.7

Installation
============

. Install GDAL version 1.13 or higher;

. Download or clone repository;

. Change your working directory (`cd`) to the repository directory;

There are multiple ways to install the `dawuap` Python package:

. Using `pip` in "editable" mode: `pip install -e .`


Configuration
=============

It is recommended that installation is done within a dedicated environment within the Anaconda Python:

. `conda create --name dawuap python=3`

. `source activate dawuap`

. `python setup.py install -O2`


Documentation
=============

The documentation available as of the date of this release is
  included in html format in the Documentation directory of the repostory. The most
  up-to-date documentation can be found at
  https://dawuap.readthedocs.io/en/latest/


Licensing
=========

  Please see the file called LICENSE.txt.


Bugs & Contribution
===================

Please use Bitbucket to report bugs, feature requests and submit your code:
https://bitbucket.org/umthydromodeling/dawuap/issues

:author: Marco Maneta
:date: 2020/04/01
