#!/usr/bin/env python
# ------------------------------------------------------------------------------------------------------%
# Created by "Thieu Nguyen" at 13:05, 21/05/2020                                                        %
#                                                                                                       %
#       Email:      nguyenthieu2102@gmail.com                                                           %
#       Homepage:   https://www.researchgate.net/profile/Thieu_Nguyen6                                  %
#       Github:     https://github.com/thieunguyen5991                                                  %
#-------------------------------------------------------------------------------------------------------%

from mealpy.swarm_based.SSA import BaseSSA, MySSA
from opfunu.cec_basic.cec2014_nobias import *

## Setting parameters
objective_func = F1
problem_size = 3000
domain_range = [-15, 15]
log = True

epoch = 100
pop_size = 50

md1 = BaseSSA(objective_func, problem_size, domain_range, log, epoch, pop_size)
best_pos1, best_fit1, list_loss1 = md1._train__()
print(best_fit1)
print("========================================================")

md2 = MySSA(objective_func, problem_size, domain_range, log, epoch, pop_size)
best_pos2, best_fit2, list_loss2 = md2._train__()
print(best_fit2)