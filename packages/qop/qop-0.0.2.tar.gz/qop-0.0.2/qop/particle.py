import numpy as np
from . import base


class ParticleOperator(base.Operator):  # default as boson like
    _exists = {}

    def __new__(cls, *args, dagger=False, name="b", repr_=None):
        key = (tuple(args), dagger, name)
        if key in cls._exists:
            return cls._exists[key]
        op = object.__new__(cls)
        if len(args) == 0:
            op.label = (-1, dagger)
        else:
            op.label = tuple(list(args) + [dagger])
        op.d = dagger
        op.key = key
        op.name = name
        op.type = -1
        op.repr = repr_
        cls._exists[key] = op
        return op

    def conjugate(self):
        dagger = False if self.d else True
        return type(self)(
            *self.label[:-1], dagger=dagger, name=self.name, repr_=self.repr
        )

    @property
    def D(self):
        return self.conjugate()

    def strfy(self):
        return ParticleOperatorString.from_op(self)

    def __repr__(self):
        if self.repr is not None:
            return self.repr(self)
        if self.label[0] == -1:
            return "I"
        return self.name + str(self.label[:-1]) + (".D " if self.d else " ")

    __str__ = __repr__

    def __lt__(self, other):
        if self.d and not other.d:
            return True
        if not self.d and other.d:
            return False
        return self.label[:-1] < other.label[:-1]


class ParticleOperatorString(base.OperatorString):
    def is_all_normal_ordered(self):
        for oplist in self.opdict:
            d = True
            for op in oplist:
                if op.d and d:
                    continue
                if op.d and not d:
                    return False
                if not op.d and d:
                    d = False
                if not op.d and not d:
                    continue
        return True

    @staticmethod
    def is_normal_ordered(oplist):
        d = True
        for op in oplist:
            if op.d and d:
                continue
            if op.d and not d:
                return False
            if not op.d and d:
                d = False
            if not op.d and not d:
                continue
        return True

    def __eq__(self, other):
        self.normal_order()
        opdict1 = self.opdict
        if base.is_num(other):
            other = other * self.OP()
        if isinstance(other, base.Operator):
            other = self.from_op(other)
        other.normal_order()
        opdict2 = other.opdict
        if len(opdict1) != len(opdict2):
            return False
        for k, v in opdict1.items():
            if not np.allclose(opdict2.get(k, 0.0), v):
                return False
        return True

    @property
    def E(self):
        for k, v in self.normal_order().opdict.items():
            if k == (self.OP(),):
                return v
        return 0.0

    def standardize(self, opl):
        """

        :param opl:
        :return:
        """
        nk, coeff = super().standardize(opl)
        if len(nk) < 2:
            return nk, coeff
        l = []
        innerl = []
        st = True
        for op in nk:
            if op.d and st:
                innerl.append(op)
            elif not op.d and not st:
                innerl.append(op)
            elif op.d and not st:
                if innerl:
                    l.append(innerl.copy())
                innerl = [op]
                st = True
            else:
                if innerl:
                    l.append(innerl.copy())
                innerl = [op]
                st = False
        if innerl:
            l.append(innerl.copy())
        nopl = []
        for il in l:
            nopl += sorted(il)
        return nopl, coeff

    def no1(self):
        for oplist, v in self.opdict.items():
            if not self.is_normal_ordered(oplist):
                st = 0
                i = 0
                while True:
                    if not oplist[i].d and st == 0:
                        st = 1
                    elif oplist[i].d and st == 1:
                        break
                    i += 1
                middle = self.exchange(oplist[i - 1], oplist[i], coeff=v).simplify()
                if i - 1 < 1:
                    left = type(self)([[self.OP()]])
                else:
                    left = type(self)([oplist[: i - 1]])
                if len(oplist) > i + 1:
                    right = type(self)([oplist[i + 1 :]])
                else:
                    right = type(self)([[self.OP()]])
                newops = (left * middle * right).simplify()
                del self.opdict[oplist]
                for k, v in newops.opdict.items():
                    self.opdict[k] = self.opdict.get(k, 0) + v
                return False
        return True

    def normal_order(self):
        self.simplify()
        while not self.no1():
            self.simplify()
        return self

    def conjugate(self):
        newdict = {}
        for k, v in self.opdict.items():
            nk = tuple([op.D for op in reversed(k)])
            newdict[nk] = newdict.get(nk, 0.0) + np.conj(v)
        self.opdict = newdict
        return self

    @property
    def D(self):
        return self.conjugate()

    def exchange(self, opa, opb, coeff=1, zeta=-1):
        # 1 for fermion and -1 for boson
        if (opa.d and opb.d) or (not opa.d and not opb.d):
            if zeta == 1 and opa.label[:-1] == opb.label[:-1]:
                return type(self)([[opb, opa]], [0.0])
            return type(self)([[opb, opa]], [-zeta * coeff])
        if opa.d and not opb.d:  # a^\dagger b
            if opa.label[:-1] == opb.label[:-1]:
                return type(self)(
                    [[self.OP()], [opb, opa]], [zeta * coeff, -zeta * coeff]
                )
            return type(self)([[opb, opa]], [-zeta * coeff])
        if not opa.d and opb.d:  # ab^\dagger
            if opa.label[:-1] == opb.label[:-1]:
                return type(self)([[self.OP()], [opb, opa]], [coeff, -zeta * coeff])
            return type(self)([[opb, opa]], [-zeta * coeff])
