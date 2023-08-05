# Copyright (c) 2019-2020, RTE (https://www.rte-france.com)
# See AUTHORS.txt
# This Source Code Form is subject to the terms of the Mozilla Public License, version 2.0.
# If a copy of the Mozilla Public License, version 2.0 was not distributed with this file,
# you can obtain one at http://mozilla.org/MPL/2.0/.
# SPDX-License-Identifier: MPL-2.0
# This file is part of Grid2Op, Grid2Op a testbed platform to model sequential decision making in power systems.

import copy
import pdb
import time
import warnings

from grid2op.tests.helper_path_test import *

from grid2op.Exceptions import *
from grid2op.Environment import Environment
from grid2op.Backend import PandaPowerBackend
from grid2op.Parameters import Parameters
from grid2op.Chronics import ChronicsHandler, GridStateFromFile, ChangeNothing
from grid2op.Reward import L2RPNReward
from grid2op.MakeEnv import make
from grid2op.Rules import RulesChecker, DefaultRules
from grid2op.Action import *
from grid2op.dtypes import dt_float

DEBUG = False
PROFILE_CODE = False
if PROFILE_CODE:
    import cProfile


class TestLoadingBackendPandaPower(unittest.TestCase):
    def setUp(self):
        # powergrid
        self.backend = PandaPowerBackend()
        self.path_matpower = PATH_DATA_TEST_PP
        self.case_file = "test_case14.json"

        # chronics
        self.path_chron = os.path.join(PATH_CHRONICS, "chronics")
        self.chronics_handler = ChronicsHandler(chronicsClass=GridStateFromFile, path=self.path_chron)

        self.tolvect = dt_float(1e-2)
        self.tol_one = dt_float(1e-5)
        self.id_chron_to_back_load = np.array([0, 1, 10, 2, 3, 4, 5, 6, 7, 8, 9])

        # force the verbose backend
        self.backend.detailed_infos_for_cascading_failures = True

        self.names_chronics_to_backend = {"loads": {"2_C-10.61": 'load_1_0', "3_C151.15": 'load_2_1',
                                                    "14_C63.6": 'load_13_2', "4_C-9.47": 'load_3_3',
                                                    "5_C201.84": 'load_4_4',
                                                    "6_C-6.27": 'load_5_5', "9_C130.49": 'load_8_6',
                                                    "10_C228.66": 'load_9_7',
                                                    "11_C-138.89": 'load_10_8', "12_C-27.88": 'load_11_9',
                                                    "13_C-13.33": 'load_12_10'},
                                          "lines": {'1_2_1': '0_1_0', '1_5_2': '0_4_1', '9_10_16': '8_9_2',
                                                    '9_14_17': '8_13_3',
                                                    '10_11_18': '9_10_4', '12_13_19': '11_12_5', '13_14_20': '12_13_6',
                                                    '2_3_3': '1_2_7', '2_4_4': '1_3_8', '2_5_5': '1_4_9',
                                                    '3_4_6': '2_3_10',
                                                    '4_5_7': '3_4_11', '6_11_11': '5_10_12', '6_12_12': '5_11_13',
                                                    '6_13_13': '5_12_14', '4_7_8': '3_6_15', '4_9_9': '3_8_16',
                                                    '5_6_10': '4_5_17',
                                                    '7_8_14': '6_7_18', '7_9_15': '6_8_19'},
                                          "prods": {"1_G137.1": 'gen_0_4', "3_G36.31": "gen_2_1", "6_G63.29": "gen_5_2",
                                                    "2_G-56.47": "gen_1_0", "8_G40.43": "gen_7_3"},
                                          }

        # _parameters for the environment
        self.env_params = Parameters()

        self.env = Environment(init_grid_path=os.path.join(self.path_matpower, self.case_file),
                               backend=self.backend,
                               chronics_handler=self.chronics_handler,
                               parameters=self.env_params,
                               names_chronics_to_backend=self.names_chronics_to_backend,
                               name="test_env_env1")

    def tearDown(self):
        pass

    def compare_vect(self, pred, true):
        return dt_float(np.max(np.abs(pred- true))) <= self.tolvect

    def test_step_doesnt_change_action(self):
        act = self.env.action_space()
        act_init = copy.deepcopy(act)
        res = self.env.step(act)
        assert act == act_init

    def test_load_env(self):
        """
        Just executes the SetUp and tearDown functions.
        :return:
        """
        if DEBUG:
            if PROFILE_CODE:
                cp = cProfile.Profile()
                cp.enable()
            import pandapower as pp
            nb_powerflow = 5000
            beg_ = time.time()
            for i in range(nb_powerflow):
                pp.runpp(self.backend._grid)
            end_ = time.time()
            print("Time to compute {} powerflows: {:.2f}".format(nb_powerflow, end_-beg_))
            if PROFILE_CODE:
                cp.disable()
                cp.print_stats(sort="tottime")
        pass

    def test_proper_injection_at_first(self):
        injs_act, *_ = self.env.backend.loads_info()
        # below: row as found in the file
        vect = np.array([18.8, 86.5, 44.5, 7.1, 10.4, 27.6, 8.1, 3.2, 5.6, 11.9, 13.6])
        # now it's in the "backend" order (ie properly reordered)
        vect = vect[self.id_chron_to_back_load]
        # and now i make sure everything is working as intentended
        assert self.compare_vect(injs_act, vect)

    def test_proper_voltage_modification(self):
        do_nothing = self.env.helper_action_player({})
        obs, reward, done, info = self.env.step(do_nothing)  # should load the first time stamp
        vect = np.array([143.9, 139.1,   0.2,  13.3, 146. ])
        assert self.compare_vect(obs.prod_v, vect), "Production voltages setpoint have not changed at first time step"
        obs, reward, done, info = self.env.step(do_nothing)  # should load the first time stamp
        vect = np.array([145.3, 140.4,   0.2,  13.5, 147.4])
        assert self.compare_vect(obs.prod_v, vect), "Production voltages setpoint have not changed at second time step"

    def test_number_of_timesteps(self):
        for i in range(287):
            do_nothing = self.env.helper_action_player({})
            obs, reward, done, info = self.env.step(do_nothing)  # should load the first time stamp
        injs_act, *_ = self.env.backend.loads_info()
        vect = np.array([19.0, 87.9, 44.4, 7.2, 10.4, 27.5, 8.4, 3.2, 5.7, 12.2, 13.6])
        vect = vect[self.id_chron_to_back_load]
        assert self.compare_vect(injs_act, vect)

    def test_stop_right_time(self):
        done = False
        i = 0
        while not done:
            do_nothing = self.env.helper_action_player({})
            obs, reward, done, info = self.env.step(do_nothing)  # should load the first time stamp
            i += 1
        assert i == 287

    def test_reward(self):
        done = False
        i = 0
        self.chronics_handler.next_chronics()
        self.env = Environment(init_grid_path=os.path.join(self.path_matpower, self.case_file),
                               backend=self.backend,
                               chronics_handler=self.chronics_handler,
                               parameters=self.env_params,
                               rewardClass=L2RPNReward,
                               names_chronics_to_backend=self.names_chronics_to_backend,
                               name="test_env_env2")
        if PROFILE_CODE:
            cp = cProfile.Profile()
            cp.enable()
        beg_ = time.time()
        cum_reward = dt_float(0.0)
        while not done:
            do_nothing = self.env.helper_action_player({})
            obs, reward, done, info = self.env.step(do_nothing)  # should load the first time stamp
            cum_reward += reward
            i += 1
        end_ = time.time()
        if DEBUG:
            msg_ = "\nEnv: {:.2f}s\n\t - apply act {:.2f}s\n\t - run pf: {:.2f}s\n\t - env update + observation: {:.2f}s\nTotal time: {:.2f}\nCumulative reward: {:1f}"
            print(msg_.format(
                self.env._time_apply_act+self.env._time_powerflow+self.env._time_extract_obs,
                self.env._time_apply_act, self.env._time_powerflow, self.env._time_extract_obs, end_-beg_, cum_reward))
        if PROFILE_CODE:
            cp.disable()
            cp.print_stats(sort="tottime")
        assert i == 287, "Wrong number of timesteps"
        expected_reward = dt_float(5739.9336)
        assert dt_float(np.abs(cum_reward - expected_reward)) <= self.tol_one, "Wrong reward"


class TestIllegalAmbiguous(unittest.TestCase):
    """
    This function test that the behaviour of "step" is the one we want: it does nothing if an action if ambiguous
    or illegal

    """
    def setUp(self):
        # powergrid
        self.tolvect = 1e-2
        self.tol_one = 1e-4
        with warnings.catch_warnings():
            warnings.filterwarnings("ignore")
            self.env = make("rte_case5_example", test=True)

    def tearDown(self):
        self.env.close()

    def compare_vect(self, pred, true):
        return np.max(np.abs(pred- true)) <= self.tolvect

    def test_ambiguous_detected(self):
        self.skipTest("deprecated test as the reconnection is handled by backend action")
        act = self.env.helper_action_player({"set_line_status": [(1, 1)]})
        obs, reward, done, info = self.env.step(act)
        assert info['is_ambiguous']
        assert not info["is_illegal"]

    def test_notambiguous_correct(self):
        act = self.env.helper_action_player({"set_line_status": [(1, -1)]})
        obs, reward, done, info = self.env.step(act)
        assert not info['is_ambiguous']
        assert not info["is_illegal"]
        assert np.sum(obs.line_status) == 7

    def test_illegal_detected(self):
        act = self.env.helper_action_player({"set_line_status": [(1, -1)]})
        self.env.game_rules = RulesChecker(legalActClass=DefaultRules)
        self.env.times_before_line_status_actionable[1] = 1
        obs, reward, done, info = self.env.step(act)

        # the action is illegal and it has not been implemented on the powergrid
        assert not info['is_ambiguous']
        assert info["is_illegal"]
        assert np.sum(obs.line_status) == 8


class TestOtherReward(unittest.TestCase):
    """
    This function test that the behaviour of "step" is the one we want: it does nothing if an action if ambiguous
    or illegal

    """
    def setUp(self):
        # powergrid
        self.tolvect = 1e-2
        self.tol_one = 1e-4
        with warnings.catch_warnings():
            warnings.filterwarnings("ignore")
            self.env = make("rte_case5_example", test=True, reward_class=L2RPNReward,
                                other_rewards={"test": L2RPNReward})

    def tearDown(self):
        self.env.close()

    def test_make(self):
        _ = self.env.reset()
        obs, reward, done, info = self.env.step(self.env.action_space())
        assert "rewards" in info
        assert "test" in info["rewards"]
        assert np.abs(info["rewards"]["test"] - reward) <= self.tol_one

    def test_simulate(self):
        obs = self.env.reset()
        obs_simu, reward_simu, done_simu, info_simu = obs.simulate(self.env.action_space())
        assert "rewards" in info_simu
        assert "test" in info_simu["rewards"]
        assert np.abs(info_simu["rewards"]["test"] - reward_simu) <= self.tol_one


class TestResetOk(unittest.TestCase):
    """
    This function test that the behaviour of "step" is the one we want: it does nothing if an action if ambiguous
    or illegal

    """

    def setUp(self):
        # powergrid
        self.tolvect = 1e-2
        self.tol_one = 1e-4
        with warnings.catch_warnings():
            warnings.filterwarnings("ignore")
            self.env = make("rte_case5_example", test=True, reward_class=L2RPNReward,
                            other_rewards={"test": L2RPNReward})

    def tearDown(self):
        self.env.close()

    def test_reset_after_blackout(self):
        # make the grid in bad shape
        act = self.env.action_space({"set_bus": {"substations_id": [(2, [1, 2, 1, 2])]}})
        obs, reward, done, info = self.env.step(act)
        act = self.env.action_space({"set_bus": {"substations_id": [(0, [1, 1, 2, 2, 1, 2])]}})
        obs, reward, done, info = self.env.step(act)
        act = self.env.action_space({"set_bus": {"substations_id": [(3, [1, 1, 2, 2, 1])]}})
        obs, reward, done, info = self.env.step(act)
        act = self.env.action_space.disconnect_powerline(3)
        obs, reward, done, info = self.env.step(act)
        act = self.env.action_space.disconnect_powerline(4)
        obs, reward, done, info = self.env.step(act)
        assert len(info["exception"])
        assert isinstance(info["exception"][0], DivergingPowerFlow)
        # reset the grid
        obs = self.env.reset()
        assert np.all(obs.topo_vect == 1)

        # check that i can simulate
        simobs, simr, simdone, siminfo = obs.simulate(self.env.action_space())
        assert np.all(simobs.topo_vect == 1)


class TestAttachLayout(unittest.TestCase):
    def test_attach(self):
        my_layout = [(0, 0), (0, 400), (200, 400), (400, 400), (400, 0)]

        with warnings.catch_warnings():
            warnings.filterwarnings("ignore")
            with make("rte_case5_example", test=True, reward_class=L2RPNReward, other_rewards={"test": L2RPNReward}) \
                    as env:
                env.attach_layout(my_layout)
                act = env.action_space()
                dict_act = act.to_dict()
                assert "grid_layout" in dict_act
                assert dict_act["grid_layout"] == {k: [x,y] for k,(x,y) in zip(env.name_sub, my_layout)}
                dict_ = env.helper_action_player.to_dict()
                assert "grid_layout" in dict_
                assert dict_["grid_layout"] == {k: [x,y] for k,(x,y) in zip(env.name_sub, my_layout)}
                dict_ = env.helper_action_env.to_dict()
                assert "grid_layout" in dict_
                assert dict_["grid_layout"] == {k: [x,y] for k,(x,y) in zip(env.name_sub, my_layout)}
                dict_ = env.helper_observation.to_dict()
                assert "grid_layout" in dict_
                assert dict_["grid_layout"] == {k: [x,y] for k,(x,y) in zip(env.name_sub, my_layout)}
                dict_ = env.opponent_action_space.to_dict()
                assert "grid_layout" in dict_
                assert dict_["grid_layout"] == {k: [x,y] for k,(x,y) in zip(env.name_sub, my_layout)}


class TestLineChangeLastBus(unittest.TestCase):
    """
    This function test that the behaviour of "step": it updates the action with the last known bus when reconnecting

    """
    def setUp(self):
        with warnings.catch_warnings():
            warnings.filterwarnings("ignore")
            self.params = Parameters()
            self.params.MAX_SUB_CHANGED = 1
            self.params.NO_OVERFLOW_DISCONNECTION = True

            with warnings.catch_warnings():
                warnings.filterwarnings("ignore")
                self.env = make("rte_case14_test", test=True, chronics_class=ChangeNothing, param=self.params)

    def tearDown(self):
        self.env.close()

    def test_set_reconnect(self):
        LINE_ID = 4
        line_ex_topo = self.env.line_ex_pos_topo_vect[LINE_ID]
        line_or_topo = self.env.line_or_pos_topo_vect[LINE_ID]
        bus_action = self.env.action_space({
            "set_bus": {
                "lines_ex_id": [(LINE_ID,2)]
            }
        })
        set_status = self.env.action_space.get_set_line_status_vect()
        set_status[LINE_ID] = -1
        disconnect_action = self.env.action_space({
            'set_line_status': set_status
        })
        set_status[LINE_ID] = 1
        reconnect_action = self.env.action_space({
            'set_line_status': set_status
        })

        obs, r, d, info = self.env.step(bus_action)
        assert d is False
        assert obs.topo_vect[line_ex_topo] == 2
        assert obs.line_status[LINE_ID] == True
        obs, r, d, _ = self.env.step(disconnect_action)
        assert d is False
        assert obs.line_status[LINE_ID] == False
        obs, r, d, info = self.env.step(reconnect_action)
        assert d is False, "Diverged powerflow on reconnection"
        assert info["is_illegal"] == False, "Reconnecting should be legal"
        assert obs.line_status[LINE_ID] == True, "Line is not reconnected"
        # Its reconnected to bus 2, without specifying it
        assert obs.topo_vect[line_ex_topo] == 2, "Line ex should be on bus 2"

    def test_change_reconnect(self):
        LINE_ID = 4
        line_ex_topo = self.env.line_ex_pos_topo_vect[LINE_ID]
        line_or_topo = self.env.line_or_pos_topo_vect[LINE_ID]
        bus_action = self.env.action_space({
            "set_bus": {
                "lines_ex_id": [(LINE_ID,2)]
            }
        })
        switch_status = self.env.action_space.get_change_line_status_vect()
        switch_status[LINE_ID] = True
        switch_action = self.env.action_space({
            'change_line_status': switch_status
        })

        obs, r, d, _ = self.env.step(bus_action)
        assert d is False
        assert obs.topo_vect[line_ex_topo] == 2
        assert obs.line_status[LINE_ID] == True
        obs, r, d, info = self.env.step(switch_action)
        assert d is False
        assert obs.line_status[LINE_ID] == False
        obs, r, d, info = self.env.step(switch_action)
        assert d is False, "Diverged powerflow on reconnection"
        assert info["is_illegal"] == False, "Reconnecting should be legal"
        assert obs.line_status[LINE_ID] == True, "Line is not reconnected"
        # Its reconnected to bus 2, without specifying it
        assert obs.topo_vect[line_ex_topo] == 2, "Line ex should be on bus 2"


class TestResetAfterCascadingFailure(unittest.TestCase):
    """
    Fake a cascading failure, do a reset of an env, check that it can be loaded

    """
    def setUp(self):
        with warnings.catch_warnings():
            warnings.filterwarnings("ignore")
            params = Parameters()
            params.MAX_SUB_CHANGED = 2
            self.env = make("rte_case14_test", test=True, chronics_class=ChangeNothing, param=params)

    def tearDown(self):
        self.env.close()

    def test_reset_after_cascading(self):
        LINE_ID = 4
        bus_action = self.env.action_space({
            "set_bus": {
                "lines_ex_id": [(LINE_ID,2)],
                "lines_or_id": [(LINE_ID,2)]
            }
        })
        nothing_action = self.env.action_space({})

        for i in range(3):
            obs, r, d, i = self.env.step(bus_action)
            # Ensure cascading happened
            assert d is True
            # Reset env, this shouldn't raise
            self.env.reset()
            # Step once
            obs, r, d, i = self.env.step(nothing_action)
            # Ensure stepping has been successful
            assert d is False


class TestCascadingFailure(unittest.TestCase):
    """
    There has been a bug preventing to reload an environment if the previous one ended with a cascading failure.
    It check that here.
    """
    def setUp(self):

        with warnings.catch_warnings():
            warnings.filterwarnings("ignore")
            params = Parameters()
            params.MAX_SUB_CHANGED = 0
            params.NB_TIMESTEP_POWERFLOW_ALLOWED = 2
            rules = DefaultRules
            self.env = make("rte_case14_test", test=True, chronics_class=ChangeNothing, param=params,
                                gamerules_class=rules)

    def tearDown(self):
        self.env.close()

    def test_simulate_cf(self):
        thermal_limit = np.array([  638.28966637,   305.05042301, 17658.9674809 , 26534.04334098,
                                   10869.23856329,  4686.71726729, 15612.65903298,   300.07915572,
                                     229.8060832 ,   169.97292682,   100.40192958,   265.47505664,
                                   21193.86923911, 21216.44452327, 49701.1565287 ,   124.79684388,
                                      67.59759985,   192.19424706,   666.76961936,  1113.52773632])
        thermal_limit *= 2
        thermal_limit[[0,1]] /= 2.1
        self.env.set_thermal_limit(thermal_limit)
        obs0 = self.env.reset()
        obs1, reward, done, info = self.env.step(self.env.action_space())
        assert not done
        obs2, reward, done, info = self.env.step(self.env.action_space())
        assert not done
        obs3, reward, done, info = self.env.step(self.env.action_space())
        assert done
        obs_new = self.env.reset()
        obs1, reward, done, info = self.env.step(self.env.action_space())
        assert not done


class TestLoading2envDontCrash(unittest.TestCase):
    def setUp(self) -> None:
        with warnings.catch_warnings():
            warnings.filterwarnings("ignore")
            self.env1 = make("rte_case14_test", test=True)
            self.env2 = make("rte_case5_example", test=True)

    def tearDown(self) -> None:
        self.env1.close()
        self.env2.close()

    def test_loading(self):

        donotghing1 = self.env1.action_space()
        donotghing2 = self.env2.action_space()

        assert donotghing1.n_sub == 14
        assert donotghing2.n_sub == 5

        obs1, *_ = self.env1.step(donotghing1)
        obs2, *_ = self.env2.step(donotghing2)

        assert obs1.n_sub == 14
        assert obs2.n_sub == 5


if __name__ == "__main__":
    unittest.main()
