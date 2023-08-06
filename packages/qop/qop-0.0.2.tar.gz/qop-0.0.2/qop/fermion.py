import sys
import numpy as np
from .particle import ParticleOperator, ParticleOperatorString
from .utils import repr_short

thismodule = sys.modules[__name__]


class FermionOperator(ParticleOperator):
    _exists = {}

    def __new__(cls, *args, dagger=False, name="f", repr_=None):
        _instance = super().__new__(cls, *args, dagger=dagger, name=name, repr_=repr_)
        _instance.type = 1
        return _instance

    def strfy(self):
        return FermionOperatorString.from_op(self)


f = FermionOperator


class FermionOperatorString(ParticleOperatorString):
    def standardize(self, opl):

        nk = []
        for op in opl:
            if op.label[0] == -1:
                continue
            if len(nk) > 0:
                if op == nk[-1]:
                    return None, 0
            nk.append(op)
        if len(nk) == 0:
            return [self.OP()], 1
        if len(nk) == 1:
            return nk, 1
        ###
        l = []
        innerl = []
        st = True
        for op in list(nk):
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

        sign = 1
        nopl = []
        for il in l:
            ti = sorted([[t, i] for i, t in enumerate(il)], key=lambda s: s[0])
            pm = np.zeros([len(il), len(il)])
            for j, tt in enumerate(ti):
                pm[j, int(tt[1])] = 1.0
            sign *= np.linalg.det(pm)
            nopl += [t[0] for t in ti]
        return nopl, sign

    def exchange(self, opa, opb, coeff=1, zeta=1):
        return super().exchange(opa, opb, coeff=coeff, zeta=zeta)


FOS = FermionOperatorString

for i in range(10):
    setattr(thismodule, "c" + str(i), f(i, name="c", repr_=repr_short))
