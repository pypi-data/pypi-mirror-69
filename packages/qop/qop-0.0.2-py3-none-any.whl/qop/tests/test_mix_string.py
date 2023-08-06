from ..symbol import *
from ..fermion import *
from ..spin import *
from ..state import *


def test_symbol_with_op():
    a = Symbol("a")
    b = Symbol("b")
    assert (
        (
            np.conj(np.array([c1, c2]))
            @ np.array([[a, b], [np.conj(b), a]])
            @ np.array([c1, c2])
        ).evaluate({"a": 1, "b": 1j})
        == c1.D * c1 + c2.D * c2 + 1j * c1.D * c2 - 1j * c2.D * c1
    )


def test_evaluate_mos():
    a = Symbol("a")
    assert (3 * c1.D * a * c2).evaluate({"a": 2}) == -6 * c2 * c1.D
    U = Symbol("U")
    assert (
        Sf("12").D | U * (np.array([c1.D, c2.D]) @ np.array([c1, c2])) ** 2 | Sf("12")
        == 4 * U
    )


def test_spin_symbol():
    a = Symbol("a")
    assert Ss("1").D | a * s1.z | Ss("1") == 0.5 * a
