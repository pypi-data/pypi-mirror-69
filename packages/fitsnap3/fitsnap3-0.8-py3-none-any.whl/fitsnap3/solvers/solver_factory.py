from fitsnap3.solvers.solver import Solver
from fitsnap3.solvers.template_solver import Template
from fitsnap3.solvers.svd import SVD
from fitsnap3.solvers.tensorflowsvd import TensorflowSVD


def solver(solver_name):
    """Solver Factory"""
    instance = search(solver_name)
    instance.__init__(solver_name)
    return instance


def search(solver_name):
    instance = None
    for cls in Solver.__subclasses__():
        if cls.__name__.lower() == solver_name.lower():
            instance = Solver.__new__(cls)

    if instance is None:
        raise IndexError("{} was not found in fitsnap solvers".format(solver_name))
    else:
        return instance
