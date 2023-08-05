# Copyright (C) 2015-2016 Tomasz Miasko
#               2020 Michael Nowotny
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License version 2 as
# published by the Free Software Foundation.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

import arviz as az
import numpy as np
import typing as tp

from .arviz import convert_pyjags_samples_dict_to_arviz_inference_data
from .chain_utilities import (
    merge_consecutive_chains,
    get_chain_length)

from .model import Model


class MinimumEffectiveSampleSizeCriterion:
    def __init__(self,
                 minimum_ess: int,
                 variable_names: tp.Optional[tp.List[str]] = None):
        """
        This class implements a minimum effective sample size criterion to be
        used with sample_until.

        Parameters
        ----------
        minimum_ess: the minimum effective sample size required
        variable_names: the names of the variables to consider
        """
        self._minimum_ess = minimum_ess
        self._variable_names = variable_names

    @property
    def variable_names(self) -> tp.Optional[tp.List[str]]:
        return self._variable_names

    @property
    def minimum_ess(self) -> int:
        return self._minimum_ess

    def __call__(self,
                 samples: tp.Dict[str, np.ndarray],
                 verbose: bool,
                 ) -> bool:
        print(f'chain_length in __call__ = {get_chain_length(samples)}')
        idata = convert_pyjags_samples_dict_to_arviz_inference_data(samples)
        ess = az.ess(idata, var_names=self.variable_names)

        minimum_ess = min(value['data']
                          for key, value
                          in ess.to_dict()['data_vars'].items())

        if verbose:
            print(f'minimum ess = {minimum_ess}')

        return minimum_ess >= self.minimum_ess


def sample_until(model: Model,
                 criterion: tp.Callable[[tp.Dict[str, np.ndarray], bool], bool],
                 previous_samples: tp.Optional[tp.Dict[str, np.ndarray]] = None,
                 chunk_size: int = 5000,
                 max_iterations: int = 250000,
                 vars: tp.Sequence[str] = None,
                 thin: int = 1,
                 monitor_type: str = "trace",
                 verbose: bool = False) -> tp.Dict[str, np.ndarray]:
    """
    This function progressively samples from a model until a criterion is met.

    Parameters
    ----------
    model: a PyJAGS model
    criterion: a function evaluating a samples dictionary and returning a bool
    previous_samples: an existing sample dictionary to incorporate
    chunk_size: the number of iterations to sample each step
    max_iterations: the maximum number of iterations to sample
    vars: a list of variables to monitor
    thin: a positive integer specifying thinning interval
    monitor_type
    verbose: whether to output step information

    Returns
    -------

    """

    if chunk_size > max_iterations:
        raise ValueError('chunk_size must be less than or equal to '
                         'max_iterations')

    if previous_samples is not None:
        print(f'chain_length at the beginning of sample_until = '
              f'{get_chain_length(previous_samples)}')

    if previous_samples is not None and criterion(previous_samples, verbose):
        return previous_samples

    iterations_left = max_iterations
    while True:
        iterations = min(iterations_left, chunk_size)

        new_samples = model.sample(iterations=iterations,
                                   vars=vars,
                                   thin=thin,
                                   monitor_type=monitor_type)

        if previous_samples is None:
            previous_samples = new_samples
        else:
            previous_samples = \
                merge_consecutive_chains((previous_samples, new_samples))
            print(f'chain_length at the after merging in sample_until = '
                  f'{get_chain_length(previous_samples)}')

        iterations_left -= iterations

        criterion_satisfied = criterion(previous_samples, verbose)

        if criterion_satisfied:
            break
        elif iterations_left <= 1:
            print('maximum number of iterations reached without '
                  'satisfying the criterion')
            break

    return previous_samples
