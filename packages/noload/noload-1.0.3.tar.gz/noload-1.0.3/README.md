<!--
SPDX-FileCopyrightText: 2020 G2Elab / MAGE

SPDX-License-Identifier: Apache-2.0
-->

NoLOAD: Non Linear Optimization by Automatic Differentiation 
============================================================

We are happy that you will use or develop the NoLOAD.
It is an **Open Source** project located on GitLab at https://gricad-gitlab.univ-grenoble-alpes.fr/design_optimization/noload
It aims at **solving constrained optimization** problem for the design of engineering systems

Project Presentation
====================

**NoLOAD:** Please have a look to NoLOAD presentation : https://noload.readthedocs.io/en/latest/  

NoLoad' Community
====================

Please use the git issues system to report an error: https://gricad-gitlab.univ-grenoble-alpes.fr/design_optimization/noload
Otherwise you can also contact de developer team using the following email adress: benoit.delinchant@G2ELab.grenoble-inp.fr

Installation Help
=================
You can install the library as a user or as a developer. Please follow the corresponding installation steps below.

Prerequisite
------------

Please install Python 3.6 or later
https://www.python.org/downloads/

Installation as a user
----------------------
Please install NoLOAD with pip using the command prompt.   

If you are admin on Windows or working on a virtual environment
    
    pip install noload

If you want a local installation or you are not admin
    
    pip install --user noload

If you are admin on Linux:
    
    sudo pip install noload

Launch the examples to understand how the NoLOAD works:
	
	python noload/01-UnconstrainedMonoObjective.py
	python noload/02-ConstrainedMonoObjective.py
	python noload/03-ConstrainedMultiObjective.py
	
Enjoy your time using NoLOAD !



Library Installation Requirements
---------------------------------
Autograd >= 1.3
Matplotlib >= 3.0
Scipy >= 1.2


Main Authors: 
=============
B. DELINCHANT, L. GERBAUD, F. WURTZ


Partners:
=========
Vesta-System: http://vesta-system.fr/

Acknowledgments:
================


Licence
=======
This code is under the Apache License, Version 2.0
