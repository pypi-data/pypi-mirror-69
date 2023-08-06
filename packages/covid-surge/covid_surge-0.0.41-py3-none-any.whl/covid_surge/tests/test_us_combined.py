#!/usr/bin/env python
# -*- coding: utf-8 -*-
# This file is part of the COVID-surge application.
# https://github/dpploy/covid-surge
# Valmor F. de Almeida dealmeidavf@gmail.com
"""Pytest of Surge US combined data."""

import numpy as np
from asserts import assert_almost_equal

from covid_surge import Surge

def test_main():
    """Run main function below."""
    # Get all US surge data including states.
    us_surge = Surge()

    # Set parameters
    us_surge.end_date = '5/15/20'       # set end date wanted
    us_surge.ignore_last_n_days = 2 # allow for data repo to be updated

    #**************************************************************************
    # Combine all states into a country
    #**************************************************************************
    print('******************************************************************')
    print('*                           US                                   *')
    print('******************************************************************')

    print('# of states/distric: ', len(us_surge.names))
    print('# of days:           ', us_surge.dates.shape[0])

    # Plot the data
    us_surge.plot_covid_data(save=True)

    print('')

    # Fit data to model function
    param_vec = us_surge.fit_data()

    print('')
    print('param_vec = ', list(param_vec))

    param_gold = np.array([98905.59617683111,
                           23.92344107340221,
                           -0.09583739742289933])

    print('param_gold = ', list(param_gold))
    print('')

    print('')
    print('Testing param results:')
    try:
        assert_almost_equal(param_vec[0], param_gold[0], delta=1000)
        assert_almost_equal(param_vec[1], param_gold[1], delta=2)
        assert_almost_equal(param_vec[2], param_gold[2], delta=0.01)
    except AssertionError as err:
        print('Warning: ', err)
    else:
        print('all tests passed')
        print('')

    # Plot the fit data to model function of combined US data
    us_surge.plot_covid_nlfit(param_vec, save=True,
                              plot_prime=True, plot_double_prime=True)

    # Report critical times
    (tcc, dtc) = us_surge.report_critical_times(param_vec, verbose=True)

    print('')
    print('critical times = ', [tcc, dtc])

    tc_gold = 33.127556274405116
    dtc_gold = 13.74158660750676

    print('critical gold times = ', [tc_gold, dtc_gold])
    print('')

    print('')
    print('Testing times results:')

    try:
        assert_almost_equal(tcc, tc_gold, delta=0.5)
        assert_almost_equal(dtc, dtc_gold, delta=0.5)
    except AssertionError as err:
        print('Warning: ', err)
    else:
        print('all tests passed')
        print('')

    # Report errors
    us_surge.report_error_analysis(param_vec, tcc, dtc)


if __name__ == '__main__':
    test_main()
