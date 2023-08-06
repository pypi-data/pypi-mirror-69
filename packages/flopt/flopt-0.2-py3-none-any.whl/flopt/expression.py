from flopt.constraint import Constraint
from flopt.env import setup_logger

logger = setup_logger(__name__)


class Expression:
    """

    This represents the operation of two items
    elmA (operater) elmB

    Parameters
    ----------
    elmA : Variable family or Expression family
      first element
    elmB : Variable family or Expression family
      later element
    operater : str
      operater between elmA and elmB

    Examples
    --------

    >>> a = Variable(name='a', iniValue=1, cat='Integer')
    >>> b = Variable(name='b', iniValue=2, cat='Continuous')
    >>> c = Expression(a, b, '+')
    >>> print(c)
    >>> Name: a+b
         Type    : Expression
         Value   : 3
    >>> c.value()
    >>> 3
    >>> c.getVariables()
    >>> {VarElement("b", 1, 2, 2), VarElement("a", 0, 1, 1)}

    operater "+", "-", "*", "/", "^" and "%" are supported for Integer, Binary and
    Continuous Variables.

    >>> a = Variable(name='a', iniValue=1, cat='Integer')  # a.value() is 1
    >>> b = Variable(name='b', iniValue=2, cat='Continuous')  # b.value() is 2
    >>> Expression(a, b, '+').value()  # a+b addition
    >>> 3
    >>> Expression(a, b, '-').value()  # a-b substraction
    >>> -1
    >>> Expression(a, b, '*').value()  # a*b multiplication
    >>> 2
    >>> Expression(a, b, '/').value()  # a/b division
    >>> 0.5
    >>> Expression(a, b, '^').value()  # a/b division
    >>> 1
    >>> Expression(a, b, '%').value()  # a%b modulo
    >>> 1

    operater "&", "|" are supported for Binary Variable.

    >>> a = Variable(name='a', iniValue=1, cat='Binary')
    >>> b = Variable(name='b', iniValue=0, cat='Binary')
    >>> Expression(a, b, '&').value().value()  # a&b bitwise and
    >>> 0
    >>> Expression(a, b, '|').value().value()  # a&b bitwise or
    >>> 1
    """
    def __init__(self, elmA, elmB, operater):
        self.elmA_name = f'({elmA.name})' if elmA.getType() == 'Expression' else elmA.name
        self.elmB_name = f'({elmB.name})' if elmB.getType() == 'Expression' else elmB.name
        self.name = f'{self.elmA_name}{operater}{self.elmB_name}'
        self.type = 'Expression'
        self.elmA = elmA
        self.elmB = elmB
        self.operater = operater
        self.var_dict = None

    def setVarDict(self, var_dict):
        self.var_dict = var_dict

    def unsetVarDict(self):
        self.var_dict = None

    def value(self, solution=None):
        if solution is None:
            return self._value()
        else:
            var_dict = {var.name : var for var in solution}
            self.setVarDict(var_dict)
            return self._value()

    def _value(self):
        """
        Returns
        -------
        float or int
            return value of expression
        """
        elmA = self.elmA
        elmB = self.elmB
        if self.var_dict is not None:
            if isinstance(self.elmA, Expression):
                self.elmA.setVarDict(self.var_dict)
            elif self.elmA.name in self.var_dict:
                elmA = self.var_dict[self.elmA.name]
            if isinstance(self.elmB, Expression):
                self.elmB.setVarDict(self.var_dict)
            elif self.elmB.name in self.var_dict:
                elmB = self.var_dict[self.elmB.name]


        if self.operater == '+':
            return elmA.value() + elmB.value()
        elif self.operater == '-':
            return elmA.value() - elmB.value()
        elif self.operater == '*':
            return elmA.value() * elmB.value()
        elif self.operater == '/':
            return elmA.value() / elmB.value()
        elif self.operater == '^':
            return elmA.value() ** elmB.value()
        elif self.operater == '%':
            return elmA.value() % elmB.value()
        elif self.operater == '&':
            return elmA.value() and elmB.value()
        elif self.operater == '|':
            return elmA.value() or elmB.value()

        self.unsetVarDict()

    def getType(self):
        """
        Returns
        -------
        str
          return type of expressiono
        """
        return self.type

    def getVariables(self):
        """
        Returns
        -------
        set
          return the variable object used in this expressiono
        """
        variables = self.elmA.getVariables() | self.elmB.getVariables()
        return variables

    def __add__(self, other):
        if isinstance(other, (int, float)):
            other = ExpressionConst(other)
            return Expression(self, other, '+')
        elif isinstance(other, Expression):
            return Expression(self, other, '+')
        else:
            return NotImplemented

    def __radd__(self, other):
        return self + other

    def __sub__(self, other):
        if isinstance(other, (int, float)):
            other = ExpressionConst(other)
            return Expression(self, other, '-')
        elif isinstance(other, Expression):
            return Expression(self, other, '-')
        else:
            return NotImplemented

    def __rsub__(self, other):
        return other + (-self)

    def __mul__(self, other):
        if isinstance(other, (int, float)):
            other = ExpressionConst(other)
            return Expression(self, other, '*')
        elif isinstance(other, Expression):
            return Expression(self, other, '*')
        else:
            return NotImplemented

    def __rmul__(self, other):
        return self * other

    def __truediv__(self, other):
        if isinstance(other, (int, float)):
            other = ExpressionConst(other)
            return Expression(self, other, '/')
        elif isinstance(other, Expression):
            return Expression(self, other, '/')
        else:
            return NotImplemented

    def __rtruediv__(self, other):
        if isinstance(other, (int, float)):
            other = ExpressionConst(other)
            return Expression(other, self, '/')
        elif isinstance(other, Expression):
            return Expression(other, self, '/')
        else:
            return NotImplemented

    def __pow__(self, other):
        if isinstance(other, (int, float)):
            other = ExpressionConst(other)
            return Expression(self, other, '^')
        elif isinstance(other, Expression):
            return Expression(self, other, '^')
        else:
            return NotImplemented

    def __rpow__(self, other):
        if isinstance(other, (int, float)):
            other = ExpressionConst(other)
            return Expression(other, self, '^')
        elif isinstance(other, Expression):
            return Expression(other, self, '^')
        else:
            return NotImplemented

    def __and__(self, other):
        if isinstance(other, (int, float)):
            other = ExpressionConst(other)
            return Expression(self, other, '&')
        elif isinstance(other, Expression):
            return Expression(self, other, '&')
        else:
            return NotImplemented

    def __rand__(self, other):
        return self and other

    def __or__(self, other):
        if isinstance(other, (int, float)):
            other = ExpressionConst(other)
            return Expression(self, other, '|')
        elif isinstance(other, Expression):
            return Expression(self, other, '|')
        else:
            return NotImplemented

    def __ror__(self, other):
        return self or other

    def __neg__(self):
        # 0 - self
        zero = ExpressionConst(0)
        return Expression(zero, self, '-')

    def __abs__(self):
        return abs(self.value())

    def __int__(self):
        return int(self.value())

    def __float__(self):
        return float(self.value())

    def __pos__(self):
        return self

    def __hash__(self):
        return hash((hash(self.elmA), hash(self.elmB), hash(self.operater)))

    def __eq__(self, other):
        return Constraint(self-other, 'eq')

    def __le__(self, other):
        return Constraint(self-other, 'le')

    def __ge__(self, other):
        return Constraint(self-other, 'ge')

    def __str__(self):
        s  = f'Name: {self.name}\n'
        s += f'  Type    : {self.type}\n'
        s += f'  Value   : {self.value()}\n'
        return s

    def __repr__(self):
        s = f'Expression({self.elmA_name}, {self.elmB_name}, {self.operater})'
        return s



class CustomExpression(Expression):
    """
    Objective function from using user defined function.

    Parameters
    ----------
    func : function
      objective function
    variables : list
      variables

    Examples
    --------

    We have the objective funcion :math:`simulater(a, b)` where simulater is
    a black box function, a and b are continuous variable.
    In this case, we can input objective function into Problem
    by using CustomExpression as follows.

    .. code-block:: python

      a = Variable('a', cat='Continuous')
      b = Variable('b', cat='Continuous')
      def user_simulater(a, b):
          return simulater(a, b)
      obj = CustomExpression(func=user_simulater, variables=[a, b])
      prob = Problem('simulater')
      prob += obj

    .. note::

      The order of variables in the variables list must be the same as
      the func argument. (However even the name does not have to be the same.)

    In addition, we can use some operations ("+", "-", "*", "/") between CustomExpression and
    Variable, Expression and CustomExpression.

    >>> def user_func(x):
    >>>     return x
    >>> a = Variable('a', iniValue=3)
    >>> obj = CustomExpression(user_func, [a])
    >>> obj.value()
    >>> 3

    For example,

    >>> b = Variable('b', iniValue=1)
    >>> obj_b = obj + b  # 3+1
    >>> obj_b.value()
    >>> 4
    >>> obj_b.getVariables()
    >>> [VarElement("a", -10000000000.0, 10000000000.0, 3),
         VarElement("b", -10000000000.0, 10000000000.0, 1)]

    See Also
    --------
    flopt.expression.Expression
    """
    def __init__(self, func, variables):
        self.func = func
        self.variables = variables
        self.type = 'CustomExpression'
        self.var_dict = None

        res = (func(*variables))
        if isinstance(res, (int, float)):
            self.name = f'{res}'
        else:
            self.name = res.name

    def _value(self):
        if self.var_dict is None:
            variables = self.variables
        else:
            variables = [self.var_dict[var.name] for var in self.variables]

        value = self.func(*variables)
        if not isinstance(value, (int, float)):
            value = value.value()

        self.unsetVarDict()
        return value

    def getVariables(self):
        return set(self.variables)

    def __hash__(self):
        tmp = [hash(self.func)]
        for var in self.variables:
            tmp.append(hash(var))
        return hash(tuple(tmp))

    def __repr__(self):
        return 'CustomExpression'


class ExpressionConst(Expression):
    """
    It is the expression of constant value.
    We use it the operation including constant value.
    See Expression class `__add__`, `__sub__`, and so on.

    Parameters
    ----------
    value : int or float
      value

    """
    def __init__(self, value):
        self.name = f'{value}'
        self._value = value
        self.type = 'ExpressionConst'

    def getType(self):
        return self.type

    def value(self):
        return self._value

    def getVariables(self):
        # for getVariables() in Expression calss
        return set()

    def __neg__(self):
        return ExpressionConst(-self._value)

    def __hash__(self):
        return hash((self._value, self.type))

    def __repr__(self):
        s = f'ExpressionConst({self._value})'
        return s


# class ExpressionNeg(Expression):
#     def __init__(self, expression):
#         self.name = f'-({expression.name})'
#         self.expression = expression
#         self.var = var
#
#     def value(self):
#         return - self.expression.value()
#
#     def getVariables(self):
#         """for getVariables() in Expression calss"""
#         return self.expression.getVariables()
#
#     def __neg__(self):
#         return self.expression
