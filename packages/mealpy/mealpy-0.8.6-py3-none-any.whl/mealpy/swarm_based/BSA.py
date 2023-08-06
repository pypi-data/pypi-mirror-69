#!/usr/bin/env python
# ------------------------------------------------------------------------------------------------------%
# Created by "Thieu Nguyen" at 11:59, 17/03/2020                                                        %
#                                                                                                       %
#       Email:      nguyenthieu2102@gmail.com                                                           %
#       Homepage:   https://www.researchgate.net/profile/Thieu_Nguyen6                                  %
#       Github:     https://github.com/thieunguyen5991                                                  %
#-------------------------------------------------------------------------------------------------------%

from numpy import array, mean, sum, exp, argmin, argmax
from numpy.random import uniform, randint, choice
from copy import deepcopy
from mealpy.root import Root

class BaseBSA(Root):
    """
    The original version of: Bird Swarm Algorithm (BSA)
        (A new bio-inspired optimisation algorithm: Bird Swarm Algorithm)
    Link:
        http://doi.org/10.1080/0952813X.2015.1042530
        https://www.mathworks.com/matlabcentral/fileexchange/51256-bird-swarm-algorithm-bsa
    """
    ID_POS = 0
    ID_FIT = 1
    ID_LBP = 2      # local best position
    ID_LBF = 3      # local best fitness

    def __init__(self, objective_func=None, problem_size=50, domain_range=(-1, 1), log=True,
                 epoch=750, pop_size=100, ff=10, p=0.8, c_couples=(1.5, 1.5), a_couples=(1.0, 1.0), fl=0.5):
        Root.__init__(self, objective_func, problem_size, domain_range, log)
        self.epoch = epoch
        self.pop_size = pop_size

        self.ff = ff                # flight frequency - default = 10
        self.p = p                  # the probability of foraging for food - default = 0.8
        self.c_minmax = c_couples   # [c1, c2]: Cognitive accelerated coefficient, Social accelerated coefficient same as PSO
        self.a_minmax = a_couples   # [a1, a2]: The indirect and direct effect on the birds' vigilance behaviours.
        self.fl = fl                # The followed coefficient- default = 0.5

    def _create_solution__(self, minmax=0):
        position = uniform(self.domain_range[0], self.domain_range[1], self.problem_size)
        x_fitness = self._fitness_model__(solution=position, minmax=minmax)
        best_local = deepcopy(position)
        l_fitness = x_fitness
        return [position, x_fitness, best_local, l_fitness]

    def _update_position__(self, pop, index, solution):
        temp = self._amend_solution_faster__(solution)
        fit = self._fitness_model__(temp)
        pop[index][self.ID_POS] = temp
        pop[index][self.ID_FIT] = fit
        return pop

    def _update_population__(self, pop):
        for i in range(0, self.pop_size):
            if pop[i][self.ID_FIT] < pop[i][self.ID_LBF]:
                pop[i][self.ID_LBF] = pop[i][self.ID_FIT]
                pop[i][self.ID_LBP] = pop[i][self.ID_POS]
        return pop

    def _train__(self):
        pop = [self._create_solution__(minmax=0) for _ in range(self.pop_size)]
        g_best = self._get_global_best__(pop=pop, id_fitness=self.ID_FIT, id_best=self.ID_MIN_PROB)

        for epoch in range(0, self.epoch):
            pos_list = array([item[self.ID_POS] for item in pop])
            fit_list = array([item[self.ID_LBF] for item in pop])
            pos_mean = mean(pos_list, axis=0)
            fit_sum = sum(fit_list)

            if epoch % self.ff != 0:
                for i in range(0, self.pop_size):
                    prob = uniform() * 0.2 + self.p  # The probability of foraging for food
                    if uniform() < prob:        # Birds forage for food. Eq. 1
                        x_new = pop[i][self.ID_POS] + self.c_minmax[0] * uniform() * (pop[i][self.ID_LBP] - pop[i][self.ID_POS]) + \
                            self.c_minmax[1] * uniform() * (g_best[self.ID_POS] - pop[i][self.ID_POS])
                    else:                       # Birds keep vigilance. Eq. 2
                        A1 = self.a_minmax[0] * exp( -self.pop_size * pop[i][self.ID_LBF] / (self.EPSILON + fit_sum))
                        k = choice(list(set(range(0, self.pop_size)) - {i}))
                        t1 = (fit_list[i] - fit_list[k]) / (abs(fit_list[i] - fit_list[k]) + self.EPSILON )
                        A2 = self.a_minmax[1] * exp( t1 * self.pop_size * fit_list[k] / (fit_sum + self.EPSILON) )
                        x_new = pop[i][self.ID_POS] + A1 * uniform(0, 1) * (pos_mean - pop[i][self.ID_POS]) + \
                                A2 * uniform(-1, 1) * (g_best[self.ID_POS] - pop[i][self.ID_POS])
                    pop = self._update_position__(pop, i, x_new)
            else:
                # Divide the bird swarm into two parts: producers and scroungers.
                min_idx = argmin(fit_list)
                max_idx = argmax(fit_list)
                choose = 0
                if min_idx < 0.5 * self.pop_size and max_idx < 0.5 * self.pop_size:
                    choose = 1
                if min_idx > 0.5 * self.pop_size and max_idx < 0.5 * self.pop_size:
                    choose = 2
                if min_idx < 0.5 * self.pop_size and max_idx > 0.5 * self.pop_size:
                    choose = 3
                if min_idx > 0.5 * self.pop_size and max_idx > 0.5 * self.pop_size:
                    choose = 4

                if choose < 3:      # Producing (Equation 5)
                    for i in range(int(self.pop_size / 2 + 1), self.pop_size):
                        temp = pop[i][self.ID_POS] + uniform(0, 1, self.problem_size) * pop[i][self.ID_POS]
                        pop = self._update_position__(pop, i, temp)
                    if choose == 1:
                        temp = pop[min_idx][self.ID_POS] + uniform(0, 1, self.problem_size) * pop[min_idx][self.ID_POS]
                        pop = self._update_position__(pop, min_idx, temp)
                    for i in range(0, int(self.pop_size/2)):
                        if choose == 2 or min_idx != i:
                            FL = uniform() * 0.4 + self.fl
                            idx = randint(0.5*self.pop_size+1, self.pop_size)
                            temp = pop[i][self.ID_POS] + (pop[idx][self.ID_POS] - pop[i][self.ID_POS]) * FL
                            pop = self._update_position__(pop, i, temp)

                else:      # Scrounging (Equation 6)
                    for i in range(0, int(0.5*self.pop_size)):
                        temp = pop[i][self.ID_POS] + uniform(0, 1, self.problem_size) * pop[i][self.ID_POS]
                        pop = self._update_position__(pop, i, temp)
                    if choose == 4:
                        temp = pop[min_idx][self.ID_POS] + uniform(0, 1, self.problem_size) * pop[min_idx][self.ID_POS]
                        pop = self._update_position__(pop, min_idx, temp)
                    for i in range(int(self.pop_size/2+1), self.pop_size):
                        if choose == 3 or min_idx != i:
                            FL = uniform() * 0.4 + self.fl
                            idx = randint(0, 0.5*self.pop_size)
                            temp = pop[i][self.ID_POS] + (pop[idx][self.ID_POS] - pop[i][self.ID_POS]) * FL
                            pop = self._update_position__(pop, i, temp)

            pop = self._update_population__(pop)
            g_best = self._update_global_best__(pop, self.ID_MIN_PROB, g_best)
            self.loss_train.append(g_best[self.ID_LBF])
            if self.log:
                print("> Epoch: {}, Best fitness: {}".format(epoch+1, g_best[self.ID_LBF]))

        return g_best[self.ID_LBP], g_best[self.ID_LBF], self.loss_train
