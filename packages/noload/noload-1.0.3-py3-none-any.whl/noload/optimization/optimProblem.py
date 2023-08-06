# SPDX-FileCopyrightText: 2020 G2Elab / MAGE
#
# SPDX-License-Identifier: Apache-2.0

from typing import Dict, Callable
import scipy.optimize as scipyOpt
from dateutil.parser import _resultbase

from noload.optimization.specifications import Spec
from noload.optimization.wrapper import Wrapper
from noload.optimization.iterationHandler import Iterations
from noload.optimization.multiobjective import EpsilonConstraint


class OptimProblem:
    # TODO : standardiser les results d'optim entre 1D : SLSQP Result et 2D : Pareto...
    def __init__(self, model: Callable[..., Dict], specifications: Spec, parameters: Dict = [], resultsHandler=True):
        self.specifications = specifications
        self.wrapper = Wrapper(model, specifications, parameters, resultsHandler)

    def run(self, ftol=1e-5, disp=True, maxiter=50, nbParetoPts=5, method='SLSQP'):
        # utilisation de SLSQP
        options = {'ftol': ftol, 'disp': disp, 'maxiter': maxiter, }
        pbSize = len(self.wrapper.spec.objectives)

        # TODO si pas de contraintes, lancer un BFGS

        if pbSize == 1:  # Cas mono-objectif
            if (method == 'SLSQP'):
                result = SLSQP(self.wrapper, self.specifications.xinit, options)  # TODO : modifier results
            elif (method == 'LeastSquare'):
                result = LSSQ(self.wrapper, self.specifications.xinit, options)  # TODO : modifier results
            else:
                print("SLSQP or LeastSquare")

        elif pbSize == 2:  # Cas bi-objectif
            p = EpsilonConstraint(self.wrapper)
            result = p.optim2D(self.specifications.xinit, nbParetoPts, options)  # TODO : modifier results
            # result = p.optim2D_basic(self.specifications.xinit, nbParetoPts, options)
        else:
            print("Only mono or bi objective function.")

        return self.wrapper  # result  #TODO : modifier results


def SLSQP(wrapper: Wrapper, x0, options):
    # Equality constraint means that the constraint function result is to be zero
    # Inequality means that it is to be non-negative.
    # https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html
    wrapper.init()  # init doit être appelé avant l'optim pour bien prendre en compte les nouvelles contraintes.
    # options = {'func': None, 'maxiter': 100, 'ftol': 1e-06, 'iprint': 1, 'disp': False, 'eps': 1.4901161193847656e-08}
    # ftol : float Precision goal for the value of f in the stopping criterion.
    # eps : float  Step size used for numerical approximation of the Jacobian.
    # disp : bool  Set to True to print convergence messages. If False, verbosity is ignored and set to 0.
    # maxiter : int  Maximum number of iterations.
    result = scipyOpt.minimize(wrapper.f_val_grad, x0=x0, jac=True, method='SLSQP', bounds=wrapper.spec.bounds,
                               constraints=wrapper.constraints, options=options)
    if (not result.success):
        if (result.status != 9):  # not if maxiteration # TODO gérer une exception
            #  Iteration limit exceeded    (Exit mode 9)
            # TRY Random initial point !
            print("WARNING : Optimization doesn't converge... Trying random inital guess")
            import numpy
            x0 = numpy.random.rand(len(x0))
            result = scipyOpt.minimize(wrapper.f_val_grad, x0=x0, jac=True, method='SLSQP', bounds=wrapper.spec.bounds,
                                       constraints=wrapper.constraints, options=options)
    if (not result.success):
        print("ERROR : Optimization doesn't converge.")  # TODO donner plus de détails sur les spec de cette optim
        print(result.message)
        # TODO faire afficher les specifications
        print('objectif : ' + str(wrapper.spec.objectives))
        print('contraintes : ' + str(wrapper.spec.eq_cstr))
    return result


def LSSQ(wrapper: Wrapper, x0, options):
    bounds = wrapper.spec.bounds.T

    # https: // docs.scipy.org / doc / scipy / reference / generated / scipy.optimize.least_squares.html
    result = scipyOpt.least_squares(fun=wrapper.f_val, x0=x0, bounds=bounds, jac=wrapper.f_grad_using_make_jvp,
                                    ftol=options['ftol'], max_nfev=options['maxiter'])

    if (not result.success or options['disp']):  # TODO gérer une exception
        print(result.message)
        print("Solution found: ", result.x)
        print("Value of the cost function at the solution: ", result.cost)
        print("Vector of residuals at the solution: ", result.fun)
        print("Gradient of the cost function at the solution: ", result.grad)

    return result

    '''
    is able to make several optimization changing one input parameter.
    returns the value of each elements of 'outputs' obtained for each optimization
    use iter.print() or noload.gui.plotIterations.plotXY(iter) to see the results
    '''


def optimizeParam(model: Callable[..., Dict], parameters: Dict, specifications: Spec, variable, range, outputs,
                  ftol=0.001, disp=False, maxiter=50):
    iter = Iterations([variable], outputs)  # permet de sauvegarder les résultats au fur et à mesure
    x = specifications.xinit
    for val in range:
        parameters[variable] = float(val)
        optim = OptimProblem(model, specifications, parameters)
        res = optim.run(ftol=ftol, disp=disp, maxiter=maxiter)
        out = [res.rawResults[var] for var in outputs]
        iter.updateData([val], out)
    return iter
