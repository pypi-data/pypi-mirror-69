# Copyright (c) 2019-2020, RTE (https://www.rte-france.com)
# See AUTHORS.txt
# This Source Code Form is subject to the terms of the Mozilla Public License, version 2.0.
# If a copy of the Mozilla Public License, version 2.0 was not distributed with this file,
# you can obtain one at http://mozilla.org/MPL/2.0/.
# SPDX-License-Identifier: MPL-2.0
# This file is part of Grid2Op, Grid2Op a testbed platform to model sequential decision making in power systems.

import numpy as np

from grid2op.Reward.BaseReward import BaseReward
from grid2op.dtypes import dt_float


class L2RPNSandBoxScore(BaseReward):
    """
    This score represent the L2RPN score.

    It **must not** serve as a reward, as the aim of L2RPN competition is to minimize the score, and a reward
    needs to be maximize! Also, this "reward" is not scaled or anything. Use it as your own risk

    """
    def __init__(self, alpha_redisph=1.0):
        BaseReward.__init__(self)
        self.reward_min = dt_float(1.0)  # carefull here between min and max...
        self.reward_max = dt_float(300.0 * 70.0)
        self.alpha_redisph = dt_float(alpha_redisph)

    def __call__(self,  action, env, has_error, is_done, is_illegal, is_ambiguous):
        # compute the losses
        gen_p, *_ = env.backend.generators_info()
        load_p, *_ = env.backend.loads_info()
        losses = np.sum(gen_p, dtype=dt_float) - np.sum(load_p, dtype=dt_float)

        # compute the marginal cost
        p_t = np.max(env.gen_cost_per_MW[env.gen_activeprod_t > 0.]).astype(dt_float)

        # redispatching amount
        c_redispatching = dt_float(2.0) * self.alpha_redisph * np.sum(np.abs(env.actual_dispatch)) * p_t

        # cost of losses
        c_loss = losses * p_t

        # total "operationnal cost"
        c_operations = dt_float(c_loss + c_redispatching)

        return c_operations
