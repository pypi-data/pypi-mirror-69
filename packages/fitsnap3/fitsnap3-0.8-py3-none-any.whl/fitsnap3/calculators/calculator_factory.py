from fitsnap3.calculators.calculator import Calculator
from fitsnap3.calculators.template_calculator import Template
from fitsnap3.calculators.lammps_snap import LammpsSnap


def calculator(calculator_name):
    """Calculator Factory"""
    instance = search(calculator_name)
    instance.__init__(calculator_name)
    return instance


def search(calculator_name):
    instance = None
    for cls in Calculator.__subclasses__():
        if cls.__name__.lower() == calculator_name.lower():
            instance = Calculator.__new__(cls)

    if instance is None:
        raise IndexError("{} was not found in fitsnap calculators".format(calculator_name))
    else:
        return instance
