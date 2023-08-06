import random
from .base_sequential_update import SequentialUpdateSearch

class TwoOpt(SequentialUpdateSearch):
    """2-Opt: a kind of local search for permutation.

    2-Opt applies neighborhood of swapping a edge.
    Example, we have perm = [0, 1, 2, ..., n-1],
    [0, 1, .., i-1, j, j-1, ..., i+1, i, j+1, ..., n] is in
    neighborhood of perm for all i, j in {0..n} and i is neq j.

    """
    def __init__(self):
        super().__init__()
        self.name = '2-Opt'
        self.can_solve_problems = ['permutation']

    def setNewSolution(self, *args, **kwargs):
        """
        generate new solution from the incumbent solution by
        2-path exchanging.
        """
        for var in self.solution:
            perm = var.value()
            n_perm = len(perm)
            i, j = sorted(random.sample(range(n_perm), 2))
            # 2-opt
            new_perm = perm[:i] + perm[i:j][::-1] + perm[j:]
            var.setValue(new_perm)
            if self.obj.value(self.solution) >= self.best_obj_value:
                var.setValue(perm)


