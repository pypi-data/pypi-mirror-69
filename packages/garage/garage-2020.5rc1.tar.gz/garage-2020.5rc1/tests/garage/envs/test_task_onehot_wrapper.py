"""Tests for garage.envs.TaskOnehotWrapper"""

import numpy as np

from garage.envs import PointEnv, TaskOnehotWrapper


class TestSingleWrappedEnv:

    def setup_method(self):
        self.env = PointEnv()
        self.base_len = len(self.env.reset())
        self.n_total_tasks = 5
        self.task_index = 1
        self.wrapped = TaskOnehotWrapper(self.env, self.task_index,
                                         self.n_total_tasks)

    def test_produces_correct_onehots(self):
        obs = self.wrapped.reset()
        assert len(obs) == self.base_len + self.n_total_tasks
        assert (obs[-self.n_total_tasks:] == np.array([0, 1, 0, 0, 0])).all()

    def test_spec_obs_space(self):
        obs = self.wrapped.reset()
        assert self.wrapped.observation_space.contains(obs)
        assert self.wrapped.spec.observation_space.contains(obs)
        assert (self.wrapped.spec.observation_space ==
                self.wrapped.observation_space)


def test_wrapped_env_list_produces_correct_onehots():
    envs = [PointEnv(), PointEnv(), PointEnv(), PointEnv()]
    base_len = len(envs[0].reset())
    n_total_tasks = len(envs)
    wrapped = TaskOnehotWrapper.wrap_env_list(envs)
    assert len(wrapped) == n_total_tasks
    for i, env in enumerate(wrapped):
        obs = env.reset()
        assert len(obs) == base_len + n_total_tasks
        onehot = np.zeros(n_total_tasks)
        onehot[i] = 1.
        assert (obs[-n_total_tasks:] == onehot).all()
        next_obs, _, _, _ = env.step(env.action_space.sample())
        assert (next_obs[-n_total_tasks:] == onehot).all()


def test_wrapped_env_cons_list_produces_correct_onehots():
    env_cons = [PointEnv] * 6
    base_len = 2
    n_total_tasks = len(env_cons)
    wrapped_cons = TaskOnehotWrapper.wrap_env_cons_list(env_cons)
    wrapped_envs = [cons() for cons in wrapped_cons]
    assert len(wrapped_envs) == n_total_tasks
    for i, env in enumerate(wrapped_envs):
        obs = env.reset()
        assert len(obs) == base_len + n_total_tasks
        onehot = np.zeros(n_total_tasks)
        onehot[i] = 1.
        assert (obs[-n_total_tasks:] == onehot).all()
        next_obs, _, _, _ = env.step(env.action_space.sample())
        assert (next_obs[-n_total_tasks:] == onehot).all()
