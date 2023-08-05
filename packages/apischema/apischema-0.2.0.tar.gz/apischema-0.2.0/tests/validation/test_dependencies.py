from apischema.validation.dependencies import (find_dependencies,
                                               find_end_dependencies)


def test_find_dependencies():
    def a_equal_b(self):
        assert self.a == self.b

    assert find_dependencies(a_equal_b) == {"a", "b"}
    assert find_dependencies(int) == set()


def test_find_end_dependencies():
    class Test:
        def __init__(self):
            self.a = 0
            self.b = {}

        def pseudo_validate(self):
            if self.a not in self.method(0):
                yield "error"

        def method(self, arg):
            res = list(self.c)
            if len(res) < arg:
                return self.method(arg - 1)

        @property
        def c(self):
            return self.b.values()

    assert find_end_dependencies(Test, Test.pseudo_validate) == {"a", "b"}
