import time
import random

import numpy as np

from flopt.solvers.base import BaseSearch
from flopt.solvers.solver_utils import (
    Log,
    start_solver_message,
    during_solver_message_header,
    during_solver_message,
    end_solver_message
)
from flopt.env import setup_logger
import flopt.constants


logger = setup_logger(__name__)


class ShuffledFrogLeapingSearch(BaseSearch):
    """
    SFLA (Shuffled Frog Leaping Search)
    It has a incumbent solution anytime.

    1. Generate new solutions as frogs at random.
    2. Divide frog set into some memeplexes.
    3. Improve each memeplex a certain number of times respectively.
    4. Update best solution.
    5. Redistribute memeplexes.
    6. Repeat step3 to step5

    Parameters
    ----------
    n_trial : int (default 1e10)
      number of memetic evolution

    n_memetic_iter : int (default 100)
      number of evolution in each memeplex

    n_memeplex : int (default 5)
      number of memeplex

    n_frog_per_memeplex : int (default 10)
      number of frog per memeplex

    max_step : float (default 0.01)
      max size of step when frog move in memetic evolution.
    """

    def __init__(self):
        super().__init__()
        self.name = 'ShuffledFrogLeapingSearch'
        self.can_solve_problems = ['blackbox']
        self.frogs = None
        self.memeplexes = None
        # params
        self.n_memeplex = 5
        self.n_frog_per_memeplex = 10
        self.n_memetic_iter = 100
        self.n_trial = int(1e10)
        self.max_step = int(1e10)

    def search(self):
        if self.constraints:
            logger.error("This Solver does not support the problem with constraints.")
            status = flopt.constants.SOLVER_ABNORMAL_TERMINATE
            return status

        self.startProcess()
        status = flopt.constants.SOLVER_NORMAL_TERMINATE

        for i in range(self.n_trial):
            self.trial_ix += 1
            
            # check time limit
            if time.time() > self.start_time + self.timelimit:
                self.closeProcess()
                status = flopt.constants.SOLVER_TIMELIMIT_TERMINATE
                return status

            self._memetic_evolution()

            obj_value = self.obj.value(self.frogs[0])
            if obj_value < self.best_obj_value:
                self.updateSolution(self.frogs[0])
                self.best_obj_value = obj_value
                if self.msg:
                    self.during_solver_message('*')
                self.recordLog()

            if self.msg and i%100 == 0:
                self.during_solver_message(' ')

            # callback
            for callback in self.callbacks:
                callback(self.frogs, self.best_solution, self.best_obj_value)

        self.closeProcess()
        return status

    def _memetic_evolution(self):
        '''
        memetic evolution
        This function is the key to this method.
        '''
        M = self.n_memeplex
        N = self.n_frog_per_memeplex
        for j, memeplex in enumerate(self.memeplexes):
            for k in range(self.n_memetic_iter):
                # make sub memeplex
                sub_mmplx_ids = random.sample(range(N), N//2)
                sub_mmplx = [memeplex[i] for i in sorted(sub_mmplx_ids)]
                # move frog which has the worst objective
                best_frog = sub_mmplx[0]  # Solution class
                worst_frog = sub_mmplx[-1]  # Solution class
                step = random.random()*(best_frog - worst_frog)  # Solution class
                if step.norm() > self.max_step:
                    step = step * self.max_step / step.norm()
                new_frog = worst_frog + step  # Solution class # issue34
                ###### feasible guard ######
                if self.feasible_guard == 'clip':
                    new_frog.clip()
                ############################
                # evaluate solutions
                fitness_best = self.obj.value(best_frog)
                fitness_worst = self.obj.value(worst_frog)
                fitness_new = self.obj.value(new_frog)
                # if it does not improve (1)
                if fitness_new > fitness_worst:
                    step = random.random()*(self.best_solution - worst_frog)
                    if  step.norm() > self.max_step:
                        step = step * self.max_step / step.norm()
                    new_frog = worst_frog + step
                    ###### feasible guard ######
                    if self.feasible_guard == 'clip':
                        new_frog.clip()
                    ############################
                    fitness_new = self.obj.value(new_frog)
                    # if it does not improve (2)
                    if fitness_new > fitness_worst:
                        new_frog.setRandom()
                # the worst_frog is replaced to the new_frog
                self.memeplexes[j] = sub_mmplx[:-1] + [new_frog]\
                    + [memeplex[i] for i in range(N) if i not in sub_mmplx_ids]
                # evaluate and sort memeplex
                self.memeplexes[j].sort(key=lambda frog: self.obj.value(frog))

        # sort entire memeplexes
        self.frogs = [frog for memeplex in self.memeplexes for frog in memeplex]
        self.frogs.sort(key=lambda frog: self.obj.value(frog))
        self.memeplexes = [[self.frogs[i*M+j] for i in range(N)]
                                              for j in range(M)]

    def startProcess(self):
        M = self.n_memeplex
        N = self.n_frog_per_memeplex
        self.frogs = [self.solution.clone() for _ in range(M*N)]
        for frog in self.frogs:
            frog.setRandom()
        self.frogs.sort(key=lambda frog: self.obj.value(frog))
        self.memeplexes=[[self.frogs[i*M+j] for i in range(N)]
                                            for j in range(M)]
        self.updateSolution(self.frogs[0])
        self.best_obj_value = self.obj.value(self.best_solution)
        self.recordLog()
        if self.msg:
            during_solver_message_header()
            self.during_solver_message('S')

    def closeProcess(self):
        self.recordLog()
