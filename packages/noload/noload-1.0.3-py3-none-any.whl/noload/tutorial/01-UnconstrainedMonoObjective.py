# SPDX-FileCopyrightText: 2020 G2Elab / MAGE
#
# SPDX-License-Identifier: Apache-2.0

__author__ = "B.Delinchant / G2ELab"

# Using AUTOGRAD : Don't use
#     Assignment to arrays A[0,0] = x
#     Implicit casting of lists to arrays A = np.sum([x, y]), use A = np.sum(np.array([x, y])) instead.
#     A.dot(B) notation (use np.dot(A, B) instead)
#     In-place operations (such as a += b, use a = a + b instead)
#     Some isinstance checks, like isinstance(x, np.ndarray) or isinstance(x, tuple), without first doing from autograd.builtins import isinstance, tuple.

#https://en.wikipedia.org/wiki/Test_functions_for_optimization

import autograd.numpy as np
import math
def ackley(x,y):
    fobj = -20 * np.exp(-0.2 * np.sqrt(0.5 * (np.square(x) + np.square(y)))) - np.exp(0.5 * (np.cos(2 * math.pi * x) + np.cos(2 * math.pi * y))) + math.exp(1) + 20
    return locals().items()

def rosenbrock(x,y):
    fobj = pow(1- x,2) + 100.0*pow(y - x*x,2)
    return locals().items()

model = ackley
#model = rosenbrock

from noload.tutorial.plotTools import plot3D
plot3D(model, [[-5,5],[-5,5]])

#Optimize
from noload.optimization.optimProblem import Spec, OptimProblem
#This function is non derivable in [0,0] that can lead to convergence issue.
#Initial guess must be different from [0,0]
spec = Spec(variables=['x', 'y'], bounds=[[-5, 5], [-5, 5]], objectives=['fobj'], xinit = [2,2])
optim = OptimProblem(model=model, specifications=spec)
result = optim.run()

result.printResults()
result.plotResults()

#It is also possible to iterate by yourself to get results
for name, value in result.getLastInputs().items():
    print(name, '  \t =', value)
for name, value in result.getLastOutputs().items():
    print(name, '  \t =', value)
