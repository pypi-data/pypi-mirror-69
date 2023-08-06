#!/usr/bin/env python
# -*- coding: utf-8 -*-
# This file is part of the COVID-surge application.
# https://github/dpploy/covid-surge

import math

import matplotlib
import matplotlib.pyplot as plt
import numpy as np
import numpy.linalg
import pandas as pd
from asserts import (assert_equal, assert_in, assert_is_instance,
                     assert_is_none, assert_true)


class Surge:
    """Surge class for critical period analysis of COVID-19 data.

    Notes
    -----
    Usage examples can be found in the examples/ directory.
    In addition, the Jupyter notebooks/ directory also shows how to use the
    class in various ways.
    """

    def __init__(self, locale='US', sub_locale=None,
                 save_all_original_data_html=False):
        """Construct a Surge object.

        Parameters
        ----------
        locale: str
            The place data is retrieved from. Values: 'US' or 'global'.
            US will store the states data. Global will store all countries
            data.
            Default: 'US'.
        sub_locale: str
            The sub-place data is retrived from. This depends of `locale`.
            If `locale` is US, then `sub_locale` must be one of the state
            names. There is no `sub_locale` for countries.
            Default: None
        save_all_original_data_html: bool
            Save in a file, an `html` version of the entire data retrived
            from the repository.
        # TODO log_filename='covid_surge'):
        log_filename: str
            Name of the file to save logging information. Not used at the
            moment.

        Attributes
        ----------
        names: list(str)
            List of names of communities; countries or states or towns, etc.
            Created by `get_covid_us_data` or `get_covid_global_data`.
        populations: list(int)
            List of population for each community if available. Otherwise,
            `None`. Created by `get_covid_us_data`.
            Created by `get_covid_us_data` or `get_covid_global_data`.
        dates: numpy.ndarray(str)
            Vector of `str` for dates in the numeric form MM/DD/YY.
            Created by `get_covid_us_data` or `get_covid_global_data`.
        cases: numpy.ndarray(float)
            Matrix of `float` for cases. Number of rows equal to dimension of
            `dates`. Number of columns equal to dimension of `names`.
            Created by `get_covid_us_data` or `get_covid_global_data`.
        __dates: numpy.ndarray(str)
            Original copy of `dates`.
        __cases: numpy.ndarray(float)
            Original copy of `cases`.
        __end_date: str or None
            End date of `dates`. The end date of `__dates` remains original.
            End case of `cases`. The end case of `__cases` remains original.
        __ignore_last_n_days: int
            Ignore this many days from the end of cases and dates.
        min_n_cases_abs: int
            Minimum number of cases before the analysis is carried on.
        trim_rel_small_n_cases: float
            Remove this percentage of cases from the begining of the data.
        deaths_100k_minimum: float
            Minimum number of deaths per 100k population per year before the
            analysis is carried on.
        sigmoid_formula: str
            Formula of the sigmoid function as a `str`.

        Examples
        --------
        See also the examples/ directory.

        >>> us_surge = Surge()
        >>> us_surge = Surge(locale='US')
        >>> ny_surge = Surge(locale='US', sub_locale='New York')

        >>> global_surge = Surge(locale='global')
        """

        # Initializations
        if locale == 'global':
            assert_is_none(sub_locale)

        self.locale = locale
        self.sub_locale = sub_locale

        self.__end_date = None
        self.__ignore_last_n_days = 0

        self.min_n_cases_abs = 100  # absolute minimum # of cases (go-no-go)

        self.trim_rel_small_n_cases = 0.5  # 0.5% of total; clean up early data

        self.deaths_100k_minimum = 40  # US death per 100,000 for
        #                                Chronic Lower Respiratory Diseases
        #                                per year: 41 (2019)

        self.populations = None

        self.sigmoid_formula = 'null-formula'

        # Read data
        if self.locale == 'US':

            if self.sub_locale:

                (county_names, populations, dates, cases) = \
                 get_covid_us_data(self.sub_locale,
                                   save_html=save_all_original_data_html)

                assert_equal(dates.size, cases.shape[0])
                assert_equal(len(county_names), cases.shape[1])

                self.names = county_names

            else:

                (state_names, populations, dates, cases) = \
                 get_covid_us_data(save_html=save_all_original_data_html)

                assert_equal(dates.size, cases.shape[0])
                assert_equal(len(state_names), cases.shape[1])

                self.names = state_names

            self.populations = populations

        elif self.locale == 'global':
            (country_names, dates, cases) = \
             get_covid_global_data(cumulative=True)
            self.names = country_names

        else:
            assert_true(False, 'Bad locale: %r (US, global)'%(self.locale))

        self.__dates = dates # preserve original
        self.__cases = cases # preserve original

        self.dates = None # modification of __dates
        self.cases = None # modification of __cases

        self.__reset_data()

    def __reset_data(self):
        """"Reset data to original values."""

        self.cases = np.copy(self.__cases)
        self.dates = np.copy(self.__dates)

    def __set_end_date(self, v):
        """End date setter and `dates` and `cases` modifier."""

        assert_true(isinstance(v, str) or v is None)

        self.__end_date = v
        self.__reset_data()

        if self.__end_date is not None:
            assert_is_instance(self.__end_date, str)
            assert_is_instance(self.__cases, np.ndarray)
            (ids,) = np.where(self.dates == self.__end_date)
            assert_equal(ids.size, 1)
            self.dates = np.copy(self.dates[:ids[0]+1])
            self.cases = np.copy(self.cases[:ids[0]+1, :])
        elif self.__ignore_last_n_days != 0:
            self.__set_ignore_last_n_days(self.__ignore_last_n_days)
        else:
            pass

    def __get_end_date(self):

        return self.__end_date
    end_date = property(__get_end_date, __set_end_date, None, None)

    def __set_ignore_last_n_days(self, val):
        """Ignore last n days setter and `dates` and `cases` modifier."""

        assert_is_instance(val, int)
        assert_true(val >= 0)

        self.__ignore_last_n_days = val
        self.__reset_data()

        if self.__ignore_last_n_days != 0:

            self.dates = np.copy(self.dates[:-self.__ignore_last_n_days])
            self.cases = np.copy(self.cases[:-self.__ignore_last_n_days])

    def __get_ignore_last_n_days(self):

        return self.__ignore_last_n_days
    ignore_last_n_days = property(__get_ignore_last_n_days,
                                  __set_ignore_last_n_days, None, None)

    def plot_covid_data(self, name=None, save=False):
        """Plot the COVID-19 input data.

        Parameters
        ----------
        name: str
            Name of the community. `None` will combine
            all communities. Default: `None`.
        save: bool
            Save the plot as a `png` image file.
        """

        population = None

        if name is None:  # Combine all column data in the surge
            cases_plot = np.sum(self.cases, axis=1)
            if self.populations:
                population = np.sum(self.populations)
        elif name in self.names:
            name_id = self.names.index(name)
            if self.populations:
                population = self.populations[name_id]
            cases_plot = self.cases[:, name_id]
        else:
            assert_in(name, self.names)

        # Select data with # of cases greater than the minimum
        (nz_cases_ids,) = np.where(cases_plot > self.trim_rel_small_n_cases/100*cases_plot[-1])
        cases_plot = cases_plot[nz_cases_ids]
        dates_plot = self.dates[nz_cases_ids]

        # Report on deaths per 100k per year if available

        if population:
            deaths_100k_y = cases_plot[-1]*100000/population *\
                    365/cases_plot.size
            deaths_100k_y = round(deaths_100k_y, 1)

        xlabel = 'Date'
        ylabel = 'Cumulative Deaths []'

        if name is None:
            locale = self.locale+' Combined '
        else:
            locale = name
        if population:
            title = 'COVID-19 in '+locale+'; population: '+str(population)+\
                    '; deaths per 100k/y: '+str(deaths_100k_y)
        else:
            title = 'COVID-19 in '+locale

        source = 'Johns Hopkins CSSE: https://github.com/CSSEGISandData/COVID-19'

        fig, ax = plt.subplots(figsize=(15, 6))
        # plt.rcParams['figure.figsize'] = [12, 5]

        ax.plot(range(len(dates_plot)), cases_plot, 'r*', label=source)

        plt.xticks(range(len(dates_plot)), dates_plot, rotation=60, fontsize=14)

        ax.set_ylabel(ylabel, fontsize=16)
        ax.set_xlabel(xlabel, fontsize=16)

        plt.title(title, fontsize=20)
        plt.legend(loc='best', fontsize=12)
        plt.grid(True)
        plt.tight_layout(1)

        plt.show()
        if save:
            if self.sub_locale is None:
                stem = self.__filename(self.locale)
            else:
                stem = self.__filename(self.locale+'_'+self.sub_locale)
            stem += '_'+self.__filename(locale)
            plt.savefig('data_'+stem+'.png', dpi=100)
        plt.close()

        return

    def fit_data(self, name=None):
        """Fit a sigmoid curve to data in a Surge object.

        Parameters
        ----------
        name: str
            Name of the community. `None` will combine
            all communities. Default: `None`.

        Returns
        -------
        param_vec: numpy.ndarray(float)
            Vector of sigmoid parameters `a_0`, `a_1`, `a_0`.

        """

        if name is None:  # Combine all column data in the surge
            cases = np.sum(self.cases, axis=1)
        elif name in self.names:
            name_id = self.names.index(name)
            cases = self.cases[:, name_id]
        else:
            assert_in(name, self.names)

        # Select data with # of cases greater than the minimum
        (nz_cases_ids,) = np.where(cases > self.trim_rel_small_n_cases/100*cases[-1])
        cases = np.copy(cases[nz_cases_ids])
        dates = self.dates[nz_cases_ids]

        scaling = cases.max()
        cases /= scaling

        a_0 = cases[-1]
        a_1 = a_0/cases[0] - 1
        a_2 = -0.15

        param_vec_0 = np.array([a_0, a_1, a_2])

        times = np.array(range(dates.size), dtype=np.float64)

        k_max = 25
        rel_tol = 0.01 / 100.0  # (0.01%)

        (param_vec, rr2, k) = \
            newton_nlls_solve(times, cases,
                              self.sigmoid_func,
                              self.__grad_p_sigmoid_func,
                              param_vec_0, k_max, rel_tol, verbose=False)

        assert_true(param_vec[0] > 0.0)
        assert_true(param_vec[1] > 0.0)
        assert_true(param_vec[2] < 0.0)

        param_vec[0] *= scaling

        print('')
        np.set_printoptions(precision=3, threshold=20, edgeitems=12,
                            linewidth=100)
        print('Unscaled root =', param_vec)
        print('R2            = %1.3f'%rr2)
        print('k iterations  = %3i'%k)

        return param_vec

    def plot_covid_nlfit(self, param_vec, name=None, save=False,
                         plot_prime=False, plot_double_prime=False,
                         option='dates',
                         ylabel='null-ylabel',
                         title='null-title', formula='null-formula'):
        """Plot COVID-19 data nonlinear fit.

        Parameters
        ----------
        param_vec: numpy.ndarray(float)
            Vector of sigmoid parameters `a_0`, `a_1`, `a_0`.
        name: str
            Name of the community. `None` will combine
            all communities. Default: `None`.
        save: bool
            Save plots to `png` files.
        plot_prime: bool
            Plot the first derivative of the fit.
        plot_double_prime: bool
            Plot the second derivative of the fit.
        option: str
            Use dates or days for the independent variable.
        ylabel: str
            Label for the y axis.
        title: str
            Title of the plots. There are good defaults available.
        formula
            Formula to be printed in the inset of plots. Defaults to the
            sigmoid function.

        """

        formula = self.sigmoid_formula

        population = None

        if name is None:  # Combine all column data in the surge
            cases_plot = np.sum(self.cases, axis=1)
            if self.populations:
                population = np.sum(self.populations)
        elif name in self.names:
            name_id = self.names.index(name)
            if self.populations:
                population = self.populations[name_id]
            cases_plot = self.cases[:, name_id]
        else:
            assert_in(name, self.names)

        # Select data with # of cases greater than the minimum
        (nz_cases_ids, ) = \
                np.where(cases_plot >
                         self.trim_rel_small_n_cases/100*cases_plot[-1])

        cases_plot = cases_plot[nz_cases_ids]
        dates_plot = self.dates[nz_cases_ids]

        ylabel = 'Cumulative Deaths []'

        if population:
            deaths_100k_y = \
            round(cases_plot[-1]*100000/population * 365/cases_plot.size, 1)

        if name is None:
            locale = self.locale+' Combined '
        else:
            locale = name
        if population:
            title = 'COVID-19 in '+locale+'; population: '+str(population)+\
                '; deaths per 100k/y: '+str(deaths_100k_y)
        else:
            title = 'COVID-19 in '+locale

        source = 'Johns Hopkins CSSE: https://github.com/CSSEGISandData/COVID-19'

        plt.figure(1, figsize=(15, 5))

        if option == 'dates':
            plt.plot(dates_plot, cases_plot, 'r*', label=source)
        elif option == 'days':
            plt.plot(range(len(dates_plot)), cases_plot, 'r*', label=source)

        n_plot_pts = 100
        dates_fit = np.linspace(0, range(len(dates_plot))[-1], n_plot_pts)

        cases_fit = self.sigmoid_func(dates_fit, param_vec)

        plt.plot(dates_fit, cases_fit, 'b-', label='Covid-surge fitting')

        if option == 'dates':
            plt.xticks(range(len(dates_plot)), dates_plot, rotation=60,
                       fontsize=14)
            plt.xlabel(r'Date', fontsize=16)
        elif option == 'days':
            plt.xlabel(r'Time [day]', fontsize=16)
        else:
            #assert False
            assert_true(False)

        plt.ylabel(ylabel, fontsize=16)
        plt.title(title, fontsize=20)

        (tcc, dtc) = self.report_critical_times(param_vec, name, verbose=False)

        time_max_prime = tcc
        time_min_max_double_prime = [tcc-dtc, tcc+dtc]

        fit_func = self.sigmoid_func

        # Plot marker
        if time_max_prime is not None:

            cases = fit_func(time_max_prime, param_vec)
            plt.plot(time_max_prime, cases, '*', color='green', markersize=16)

            (x_min, x_max) = plt.xlim()
            dx = abs(x_max-x_min)
            x_text = time_max_prime - dx*0.15

            (y_min, y_max) = plt.ylim()
            dy = abs(y_max-y_min)
            y_text = cases + dy*0.00

            plt.text(x_text, y_text, r'(%3.2f, %1.3e)'%(time_max_prime, cases),
                fontsize=16)

        # Plot marker
        if time_min_max_double_prime is not None:

            t_min = time_min_max_double_prime[0]
            t_max = time_min_max_double_prime[1]

            cases = self.sigmoid_func(t_max, param_vec)
            plt.plot(t_max, cases, '*', color='orange', markersize=16)

            (x_min, x_max) = plt.xlim()
            dx = abs(x_max-x_min)
            x_text = t_max - dx*0.15

            (y_min, y_max) = plt.ylim()
            dy = abs(y_max-y_min)
            y_text = cases + dy*0.00

            plt.text(x_text, y_text, r'(%3.2f, %1.3e)'%(t_max, cases),
                fontsize=16)

            cases = self.sigmoid_func(t_min, param_vec)
            plt.plot(t_min, cases, '*', color='orange', markersize=16)

            (x_min, x_max) = plt.xlim()
            dx = abs(x_max-x_min)
            x_text = t_min - dx*0.15

            (y_min, y_max) = plt.ylim()
            dy = abs(y_max-y_min)
            y_text = cases + dy*0.00

            plt.text(x_text, y_text, r'(%3.2f, %1.3e)'%(t_min, cases),
                fontsize=16)

        # Plot fit formula
        (x_min, x_max) = plt.xlim()
        dx = abs(x_max-x_min)
        x_text = x_min + dx*0.02

        (y_min, y_max) = plt.ylim()
        dy = abs(y_max-y_min)
        y_text = y_min + dy*0.7

        plt.text(x_text, y_text, formula, fontsize=16)

        for (i, p) in enumerate(param_vec):
            y_text -= dy*0.1
            plt.text(x_text, y_text, r'$\alpha_{%i}$=%8.2e'%(i, p),
                     fontsize=16)

        plt.xticks(fontsize=14)
        plt.yticks(fontsize=14)
        plt.legend(loc='best', fontsize=12)
        plt.grid(True)
        plt.tight_layout(1)

        plt.show()
        if save:
            if self.sub_locale is None:
                stem = self.__filename(self.locale)
            else:
                stem = self.__filename(self.locale+'_'+self.sub_locale)
            stem += '_'+self.__filename(locale)
            plt.savefig('fit_'+stem+'_0'+'.png', dpi=100)

        plt.close()

        # Additional plot for first derivative
        if plot_prime:

            fit_func_prime = self.__sigmoid_func_prime

            plt.figure(2, figsize=(15, 5))

            n_rows = 1
            n_cols = 1
            plt.subplot(n_rows, n_cols, 1)

            cases_rate_plot = [0.0]
            for (b, a) in zip(cases_plot[1:], cases_plot[:-1]):
                cases_rate_plot.append(b-a)
            cases_rate_plot = np.array(cases_rate_plot)

            plt.plot(np.array(range(dates_plot.size)), cases_rate_plot,
                    'r*', label=source)

            n_plot_pts = 100
            dates_fit = np.linspace(0, range(len(dates_plot))[-1], n_plot_pts)

            cases_fit = fit_func_prime(dates_fit, param_vec)

            plt.plot(dates_fit, cases_fit, 'b-',
                     label='Covid-surge fitting derivative')

            if time_max_prime is not None:

                peak = fit_func_prime(time_max_prime, param_vec)
                plt.plot(time_max_prime, peak, '*', color='green',
                         markersize=16)

                (x_min, x_max) = plt.xlim()
                dx = abs(x_max-x_min)
                x_text = time_max_prime - dx*0.35

                (y_min, y_max) = plt.ylim()
                dy = abs(y_max-y_min)
                y_text = peak + dy*0.00

                plt.text(x_text, y_text, r'(%3.2f, %1.3e)'%(time_max_prime, peak),
                    fontsize=14)

            plt.title(title, fontsize=20)
            plt.ylabel('Surge Speed [case/day]', fontsize=16)
            plt.grid(True)
            plt.legend(loc='best', fontsize=12)
            plt.tight_layout(1)

            plt.show()
            if save:
                if self.sub_locale is None:
                    stem = self.__filename(self.locale)
                else:
                    stem = self.__filename(self.locale+'_'+self.sub_locale)
                stem += '_'+self.__filename(locale)
                plt.savefig('fit_'+stem+'_1'+'.png', dpi=100)
            plt.close()

        # Additional plot for second derivative
        if plot_double_prime:

            fit_func_double_prime = self.__sigmoid_func_double_prime

            plt.figure(3, figsize=(15, 5))

            n_rows = 1
            n_cols = 1
            plt.subplot(n_rows, n_cols, 1)

            n_plot_pts = 100
            dates_fit = np.linspace(0, range(len(dates_plot))[-1], n_plot_pts)

            cases_fit = fit_func_double_prime(dates_fit, param_vec)

            plt.plot(dates_fit, cases_fit, 'b-', label='Fitting derivative')

            if time_min_max_double_prime is not None:

                t_min = time_min_max_double_prime[0]
                t_max = time_min_max_double_prime[1]

                max_val = fit_func_double_prime(t_max, param_vec)
                plt.plot(t_max, max_val, '*', color='orange', markersize=16)

                (x_min, x_max) = plt.xlim()
                dx = abs(x_max-x_min)
                x_text = t_max - dx*0.35

                (y_min, y_max) = plt.ylim()
                dy = abs(y_max-y_min)
                y_text = max_val + dy*0.00

                plt.text(x_text, y_text, r'(%3.2f, %1.3e)'%(t_max, max_val),
                    fontsize=14)

                min_val = fit_func_double_prime(t_min, param_vec)
                plt.plot(t_min, min_val, '*', color='orange', markersize=16)

                (x_min, x_max) = plt.xlim()
                dx = abs(x_max-x_min)
                x_text = t_min - dx*0.35

                (y_min, y_max) = plt.ylim()
                dy = abs(y_max-y_min)
                y_text = min_val + dy*0.00

                plt.text(x_text, y_text, r'(%3.2f, %1.3e)'%(t_min, min_val),
                    fontsize=14)

            plt.title(title, fontsize=20)
            plt.ylabel('Surge Acceleration [case/day$^2$]', fontsize=16)
            plt.grid(True)
            plt.tight_layout(1)

            plt.show()
            if save:
                if self.sub_locale is None:
                    stem = self.__filename(self.locale)
                else:
                    stem = self.__filename(self.locale+'_'+self.sub_locale)
                stem += '_'+self.__filename(locale)
                plt.savefig('fit_'+stem+'_2.png', dpi=100)
            plt.close()

        return

    def sigmoid_func(self, xval, param_vec):
        """Compute the sigmoid function at x.

        Parameters
        ----------
        xval: float, int, or numpy.ndarray
            Values of the argument of the function.
        param_vec: numpy.ndarray(float)
            Vector of sigmoid parameters `a_0`, `a_1`, `a_0`.

        Returns
        -------
        f_x: numpy.ndarray(float)
            Values of the function as a `numpy` vector.
        """

        self.sigmoid_formula = r'$y = \frac{\alpha_0}{1 + \alpha_1 \, e^{\alpha_2\,t}  }$'

        a_0 = param_vec[0]
        a_1 = param_vec[1]
        a_2 = param_vec[2]

        f_x = a_0 / (1 + a_1 * np.exp(a_2*xval))

        return f_x

    def __sigmoid_func_prime(self, x, param_vec):

        a_0 = param_vec[0]
        a_1 = param_vec[1]
        a_2 = param_vec[2]

        f_x = a_0 / (1 + a_1 * np.exp(a_2*x))
        g_x = (-1) * a_1 * a_2 * np.exp(a_2*x) / (1.0 + a_1 * np.exp(a_2*x))

        fprime = g_x * f_x

        return fprime

    def __sigmoid_func_double_prime(self, x, param_vec):

        a_0 = param_vec[0]
        a_1 = param_vec[1]
        a_2 = param_vec[2]

        f_x = a_0 / (1 + a_1 * np.exp(a_2*x))
        g_x = (-1) * a_1 * a_2 * np.exp(a_2*x) / (1.0 + a_1 * np.exp(a_2*x))
        g_prime_x = (-1) * a_1 * a_2**2 * np.exp(a_2*x) / (1.0 + a_1 * np.exp(a_2*x))**2

        double_prime = (g_prime_x + g_x**2)*f_x

        return double_prime

    def __grad_p_sigmoid_func(self, x, param_vec):

        a_0 = param_vec[0]
        a_1 = param_vec[1]
        a_2 = param_vec[2]

        grad_p_f_0 = 1./(1. + a_1 * np.exp(a_2*x))
        grad_p_f_1 = - a_0/(1. + a_1 * np.exp(a_2*x))**2 * np.exp(a_2*x)
        grad_p_f_2 = - a_0/(1. + a_1 * np.exp(a_2*x))**2 * a_1 * x*np.exp(a_2*x)

        return (grad_p_f_0, grad_p_f_1, grad_p_f_2)

    def report_critical_times(self, param_vec, name=None, verbose=False):
        """Report critical times and errors.

        Parameters
        ----------
        param_vec: numpy.ndarray(float)
            Vector of sigmoid parameters `a_0`, `a_1`, `a_0`.
        name: str
            Name of the community for creating the report. `None` will combine
            all communities. Default: `None`.
        verbose: bool
            Print out additional information.

        Returns
        -------
        time_max_prime: float
            Time of maximum surge rate.
        dtc: float
            Time difference between either maximum or minimum curvature
            points and `time_max_prime`.
        """

        a_0 = param_vec[0]
        a_1 = param_vec[1]
        a_2 = param_vec[2]

        if name is None: # Combine all column data in the surge
            cases = np.sum(self.cases, axis=1)
        elif name in self.names:
            name_id = self.names.index(name)
            cases = self.cases[:, name_id]
        else:
            #assert name in self.names, \
            #  '\n\n Name: %r not in %r'%(name,self.names)
            assert_in(name, self.names)

        # Select data with non-zero cases only
        (nz_cases_ids,) = np.where(cases > 0)
        dates = self.dates[nz_cases_ids]

        # Peak
        (time_max_prime, prime_max) = self.__sigmoid_prime_max(param_vec)

        if time_max_prime%1:
            time_max_id = int(time_max_prime) + 1
        else:
            time_max_id = int(time_max_prime)

        if verbose:
            print('Maximum growth rate            = %3.2e [case/day]'%(prime_max))
            print('Maximum normalized growth rate = %3.2e [%%/day]'%(prime_max/a_0*100))
            print('Time at maximum growth rate    = %3.1f [day]'%(time_max_prime))
            if time_max_id > dates.size-1:
                print('WARNING: Ignore maximum growth rate; time at max. growth exceeds time length.')
            else:
                print('Date at maximum growth rate = %s '%(dates[time_max_id]))

            print('')

        # Maximum curvature
        time_max_double_prime = -math.log(a_1/(2+math.sqrt(3)))/a_2 # time at maximum growth acceleration

        if time_max_double_prime%1:
            time_max_id = int(time_max_double_prime) + 1
        else:
            time_max_id = int(time_max_double_prime)

        #assert abs( a_0*a_2**2*(5+3*math.sqrt(3))/(3+math.sqrt(3))**3 - self.__sigmoid_func_double_prime(time_max_double_prime,param_vec) ) <= 1.e-8
        assert_true(abs(a_0*a_2**2*(5+3*math.sqrt(3))/(3+math.sqrt(3))**3 - self.__sigmoid_func_double_prime(time_max_double_prime, param_vec)) <= 1.e-8 )

        if verbose:
            print('Maximum growth acceleration            = %3.2e [case/day^2]'%(a_0*a_2**2*(5+3*math.sqrt(3))/(3+math.sqrt(3))**3))
            print('Maximum normalized growth acceleration = %3.2e [%%/day^2]'%(a_2**2*(5+3*math.sqrt(3))/(3+math.sqrt(3))**3*100))
            print('Time at maximum growth accel.          = %3.1f [day]'%(time_max_double_prime))
            print('Shifted time at maximum growth accel.  = %3.1f [day]'%(time_max_double_prime-time_max_prime))
            if time_max_id > dates.size-1:
                print('WARNING: Ignore maximum growth accel.; time at max. growth accel. exceeds time length.')
            else:
                print('Date at maximum growth accel. = %s '%(dates[time_max_id]))

            print('')

        # Minimum curvature
        # time at minimum growth acceration
        time_min_double_prime = -math.log(a_1/(2-math.sqrt(3)))/a_2

        if time_min_double_prime%1:
            time_min_id = int(time_min_double_prime) + 1
        else:
            time_min_id = int(time_min_double_prime)

        assert_true(abs(a_0*a_2**2*(5-3*math.sqrt(3))/(3-math.sqrt(3))**3 - self.__sigmoid_func_double_prime(time_min_double_prime, param_vec)) <= 1.e-8)

        if verbose:
            print('')
            print('Minimum growth acceleration            = %3.2e [case/day^2]'%(a_0*a_2**2*(5-3*math.sqrt(3))/(3-math.sqrt(3))**3))
            print('Minimum normalized growth acceleration = %3.2e [%%/day^2]'%(a_2**2*(5-3*math.sqrt(3))/(3-math.sqrt(3))**3*100))
            print('Time at minimum growth accel.          = %3.1f [day]'%(time_min_double_prime))
            print('Shifted time at maximum growth accel.  = %3.1f [day]'%(time_min_double_prime-time_max_prime))
            if time_min_id > dates.size-1:
                print('WARNING: Ignore maximum growth accel.; time at min. growth accel. exceeds time length.')
            else:
                print('Date at minimum growth accel. = %s '%(dates[time_min_id]))

            print('')
            print('Surge period = %3.1f [day]'%(time_min_double_prime-time_max_double_prime))

        assert_true(abs((time_max_prime-time_max_double_prime) - (time_min_double_prime - time_max_prime)) <= 1.e-5)


        return (time_max_prime, time_max_prime-time_max_double_prime)

    def __sigmoid_prime_max(self, param_vec):

        a_0 = param_vec[0]
        a_1 = param_vec[1]
        a_2 = param_vec[2]

        tcc = -math.log(a_1)/a_2 # time at maximum growth rate

        prime_max = -a_0*a_2/4.0

        assert_true(abs(prime_max -
                        self.__sigmoid_func_prime(tcc, param_vec)) <= 1.e-8)

        return (tcc, prime_max)

    def __sigmoid_double_prime_max(self, param_vec):

        a_0 = param_vec[0]
        a_1 = param_vec[1]
        a_2 = param_vec[2]

        # time at maximum growth acceleration
        time_max_double_prime = -math.log(a_1/(2+math.sqrt(3)))/a_2

        fdp = self.__sigmoid_func_double_prime(time_max_double_prime,
                                               param_vec)
        fdp_analytical = a_0*a_2**2*(5+3*math.sqrt(3))/(3+math.sqrt(3))**3

        assert_true(abs(fdp_analytical - fdp) <= 1.e-8)

        return

    def report_error_analysis(self, param_vec, tcc, dtc, name=None):
        """Report error of data fitting.

        param_vec: numpy.ndarray(float)
            Vector of parameters `a_0`, `a_1`, `a_0`.
        tcc: float
            Critical time for maximum surge rate. Previously computed by
            `report_critical_times`.
        dtc: float
            Time difference from `tcc` to either of the maximum and minimum
            curvature points. Previously computed by `report_critical_times`.
        name: str
            Name of the community for creating the report. `None` will combine
            all communities. Default: `None`.

        """

        if name is None: # Combine all column data in the surge
            cases = np.sum(self.cases, axis=1)
        elif name in self.names:
            name_id = self.names.index(name)
            cases = self.cases[:, name_id]
        else:
            assert_in(name, self.names)

        # Select data with # of cases greater than the minimum
        (nz_cases_ids,) = np.where(cases > self.trim_rel_small_n_cases/100*cases[-1])
        cases = cases[nz_cases_ids]
        dates = self.dates[nz_cases_ids]

        times = np.array(range(dates.size), dtype=np.float64)

        sigmoid_func = self.sigmoid_func

        print('')
        print('Pointwise Error Analysis')
        print('')
        print('Total error')
        (idx,) = np.where(np.abs(cases) >= 0)
        rel_error = np.abs(sigmoid_func(times, param_vec) - cases)[idx]/cases[idx]*100
        mean_rel_error = np.mean(rel_error)
        print('mean relative error [%%] = %5.2f'%(mean_rel_error))
        std_rel_error = np.std(rel_error)
        print('std  relative error [%%] = %5.2f'%(std_rel_error))

        print('')
        print('Pre-exponential error')
        (idx,) = np.where(times < tcc - dtc)
        rel_error = np.abs(sigmoid_func(times, param_vec) - cases)[idx]/cases[idx]*100
        mean_rel_error = np.mean(rel_error)
        print('mean relative error [%%] = %5.2f'%(mean_rel_error))
        std_rel_error = np.std(rel_error)
        print('std  relative error [%%] = %5.2f'%(std_rel_error))

        print('')
        print('Post-linear error')
        (idx,) = np.where(times > tcc + dtc)
        if len(idx) > 0:
            rel_error = np.abs(sigmoid_func(times, param_vec) - cases)[idx]/cases[idx]*100
            mean_rel_error = np.mean(rel_error)
            print('mean relative error [%%] = %5.2f'%(mean_rel_error))
            std_rel_error = np.std(rel_error)
            print('std  relative error [%%] = %5.2f'%(std_rel_error))
        else:
            print('Post-linear error unavailable; not enough evolution.')
            print('This data set is not suitable for analysis yet.')

        print('')
        print('Surge period error')
        (idx_min,) = np.where(times >= tcc - dtc)
        (idx_max,) = np.where(times <= tcc + dtc)
        idx = idx_min[:idx_max[-1]]
        rel_error = np.abs(sigmoid_func(times, param_vec) - cases)[idx]/cases[idx]*100
        mean_rel_error = np.mean(rel_error)
        print('mean relative error [%%] = %5.2f'%(mean_rel_error))
        std_rel_error = np.std(rel_error)
        print('std  relative error [%%] = %5.2f'%(std_rel_error))

        return

    def multi_fit_data(self,
                       blocked_list=None,
                       verbose=False, plot=False, save_plots=False):
        """Fit a sigmoid curve to multiple data in a Surge object.

        Parameters
        ----------
        blocked_list: list
            List of names of communitiies to be blocked from fitting.
        verbose: bool
            Print out internal looping info.
        plot: bool
            Plot various plots during the fitting procedure.
        save_plots: bool
            Save a `png` version of the plots.

        Returns
        -------
        sorted_fit_data: list(tuple)
            List of the data fit operation sorted by surge period.

        """

        if blocked_list is None:
            blocked_list = list()

        names = self.names
        cases = self.cases

        # Sort the states by descending number of total cases
        sorted_list = sorted(zip(names, cases[-1, :]),
                             key=lambda entry: entry[1], reverse=True)

        # Post processing data storage
        fit_data = list()
        names_past_peak_surge_period = list()
        names_no_peak_surge_period = list()
        names_below_deaths_100k_minimum = list()
        names_below_deaths_abs_minimum = list()

        top_id = 0

        for (name, dummy) in sorted_list:

            if name in blocked_list:
                continue

            #assert name in names, 'Name: %r not in %r'%(name,names)
            assert_in(name, names)
            name_id = names.index(name)
            if self.populations:
                population = self.populations[name_id]
            icases = cases[:, name_id]

            if icases[-1] < self.min_n_cases_abs:
                if verbose:
                    print('')
                    print('WARNING: name %r # deaths: %r below absolute minimum'%(name, icases[-1]))
                    print('')
                names_below_deaths_abs_minimum.append((name, icases[-1]))
                continue

            # Select data with # of cases greater than the minimum
            (nz_cases_ids,) = np.where(icases > self.trim_rel_small_n_cases/100*icases[-1])

            if nz_cases_ids.size == 0:
                if verbose:
                    print('')
                    print('WARNING: No data for state %r. Continuing...'%name)
                    print('')
                continue

            icases = np.copy(icases[nz_cases_ids])
            dates = self.dates[nz_cases_ids]

            if self.populations:
                deaths_100k = round(icases[-1]*100000/population * 365/dates.size, 1)

                if deaths_100k < self.deaths_100k_minimum:
                    if verbose:
                        print('')
                        print('WARNING: name %r deaths per 100k: %r below minimum'%(name, deaths_100k))
                        print('')
                    names_below_deaths_100k_minimum.append((name, deaths_100k))
                    continue

            if verbose:
                print('')
                print('******************************************************')
                print('                     '+name)
                print('******************************************************')
                print('')

            scaling = icases.max()
            icases /= scaling

            a_0 = icases[-1]
            a_1 = a_0/icases[0] - 1
            a_2 = -0.15
            if name == 'Michigan':
                a_2 = -.1

            param_vec_0 = np.array([a_0, a_1, a_2])

            times = np.array(range(dates.size), dtype=np.float64)

            k_max = 25
            rel_tol = 0.01 / 100.0 # (0.1%)

            (param_vec, rr2, k) = \
                newton_nlls_solve(times, icases, self.sigmoid_func,
                                  self.__grad_p_sigmoid_func,
                                  param_vec_0, k_max,
                                  rel_tol, verbose=False)

            if k > k_max and verbose:
                print(" NO Newton's method convergence")
                continue

            if verbose:
                print('')
                print('Fitting coeff. of det. R2 = %1.3f'%rr2)
                print('')

            assert_true(param_vec[0] > 0.0)
            assert_true(param_vec[1] > 0.0)
            assert_true(param_vec[2] < 0.0)

            param_vec[0] *= scaling
            icases *= scaling

            if verbose:
                print('')
                print('Unscaled root =', param_vec)
                print('')

            # Compute critical times
            (tcc, dtc) = self.report_critical_times(param_vec, name, verbose=verbose)

            if tcc > times[-1]:
                if verbose:
                    print('')
                    print('WARNING: Time at peak surge rate exceeds time data.')
                    print('WARNING: Skipping this data set.')
                # not needed or incorrect
                #assert int(tcc-dtc)+1 <= dates.size,\
                        #'\n\n value = %r; dates.sizes = %r; times.size = %r'%(int(tcc-dtc)+1,dates.size,times.size)

                names_no_peak_surge_period.append((name, tcc, dtc, times[-1], dates[-1]))
                continue

            if tcc + dtc > times[-1]:
                if verbose:
                    print('')
                    print('WARNING: Time at mininum acceleration exceeds time data.')
                    print('WARNING: Skipping this data set.')
                assert_true(int(tcc)+1 <= dates.size)
                names_past_peak_surge_period.append((name, tcc, dates[int(tcc)+1], dtc))
                continue

            top_id += 1

            if plot:
                self.plot_covid_nlfit(param_vec, name, save=save_plots)

            n_last_days = 7
            if verbose:
                print('')
                print('Last %i days'%n_last_days,
                      ' # of cumulative cases = ', icases[-n_last_days:])
                print('Last %i days'%n_last_days,
                      ' # of added cases =',
                      [round(b-a, 0) for (b, a) in
                       zip(icases[-(n_last_days-1):], icases[-n_last_days:-1])
                      ])
                print('')

            # Report erros
            if verbose:
                self.report_error_analysis(param_vec, tcc, dtc, name)

            # 60-day look-ahead
            n_prediction_days = 60

            last_day = dates.size
            total_deaths_predicted = int(self.sigmoid_func(n_prediction_days + last_day, param_vec))

            if verbose:
                print('')
                print('Estimated cumulative deaths in %s days from %s = %6i'%(n_prediction_days, dates[-1], total_deaths_predicted))
                print('# of cumulative deaths today, %s               = %6i'%(dates[-1], icases[-1]))
                print('')


            fit_data.append([name,
                             dates,
                             icases,
                             param_vec,
                             tcc,
                             dtc])

        if verbose:
            print('Names with significant deaths past peak in surge period:')
            print('')
            for (name, tcc, tc_date, dtc) in names_past_peak_surge_period:
                print('%20s tc = %3.1f [d] tc_date = %8s pending days = %3.1f'%(name, tcc, tc_date, dtc))

            print('')

            print('Names with significant deaths before peak in surge period:')
            print('')
            for (name, tcc, dtc, t_max, d_max) in names_no_peak_surge_period:
                print('%15s tc = %3.1f [d] dtc = %3.1f [d] t_max = %3.1f [d] d_max %7s'%(name, tcc, dtc, t_max, d_max))

            print('')

            print('Names with deaths per 100k below mininum:')
            print('')
            for (name, deaths_100k) in names_below_deaths_100k_minimum:
                print('%15s deaths per 100k/y = %5.2f'%(name, deaths_100k))

            print('')

            print('Names with deaths below the absolute mininum:')
            print('')
            for (name, case) in names_below_deaths_abs_minimum:
                print('%15s deaths = %5.2f'%(name, case))

        # Order fit_data

        #sorted_by_max_rel_death_rate = sorted(
        #     [ (self.__sigmoid_func_prime(i[4],i[3])/i[3][0]*100, i )
        #        for i in fit_data ], key = lambda entry: entry[0], reverse=True )

        sorted_by_surge_period =\
            sorted([(2*i[5], i) for i in fit_data],
                   key=lambda entry: entry[0], reverse=False)

        sorted_fit_data = sorted_by_surge_period

        if verbose:
            print('')
            for (sort_key, data) in sorted_fit_data:
                name = data[0]
                print('%15s: surge period %1.2f [day]'%(name, sort_key))

        return sorted_fit_data

    def plot_multi_fit_data(self, fit_data, option=None, save=False):
        """Plot joint experimental data or joint sigmoid fit for communities.

        Parameters
        ----------
        fit_data: list(tuple)
            List of tuples obtained from the `multi_fit_data` member function.
        option: str
            Either `experimental` or `fit`. The default does nothing.
        save: bool
            Save plot to `png` image file.

        """

        if option == 'experimental':

            legend_title = 'Max. Relative Death Rate [%/day]'
            legend_title = 'Surge Period [day]'

            fig, ax1 = plt.subplots(1, figsize=(15, 6))

            colors = color_map(len(fit_data))

            for (sort_key, data) in fit_data:
                color = colors[fit_data.index((sort_key, data))]
                state = data[0]
                n_dates = data[1].size
                param_vec = data[3]
                tshift = data[4]
                value = '%1.1f'%sort_key

                ax1.plot(np.array(range(n_dates))-tshift, data[2]/param_vec[0],
                         '*', label=state+': '+value, color=color)

            ax1.set_xlabel(r'Shifted Time [day]', fontsize=16)
            ax1.set_ylabel(r'Normalized Cumulative Death', fontsize=16, color='black')

            if matplotlib.__version__ >= '3.0.2':
                ax1.legend(loc='best', fontsize=12, title=legend_title, title_fontsize=14)
            else:
                ax1.legend(loc='best', fontsize=12, title=legend_title)

            ax1.grid(True)

            data_name = 'null-data-name'
            if self.locale == 'US' and self.sub_locale is None:
                data_name = 'US States'
            if self.locale == 'US' and self.sub_locale != None:
                data_name = self.sub_locale+' Counties/Cities'
            elif self.locale == 'global':
                data_name = 'Countries'

            plt.title('COVID-19 Pandemic 2020 for '+data_name+
                      ' w/ Evolved Mortality ('+data[1][-1]+')', fontsize=20)

            plt.show()
            if save:
                if self.sub_locale is None:
                    stem = self.__filename(self.locale)
                else:
                    stem = self.__filename(self.locale+'_'+self.sub_locale)
                plt.savefig('data_'+stem+'_overlap'+'.png', dpi=100)
            plt.close()


        if option == 'fit':

            legend_title = 'Max. Relative Death Rate [%/day]'
            legend_title = 'Surge Period [day]'

            fig, ax1 = plt.subplots(1, figsize=(15, 6))

            colors = color_map(len(fit_data))

            for (sort_key, data) in fit_data:
                color = colors[fit_data.index((sort_key, data))]
                state = data[0]
                n_dates = data[1].size
                param_vec = data[3]
                tshift = data[4]

                t1 = tshift - data[5]
                t2 = tshift + data[5]
                value = '%1.1f'%sort_key

                ax1.plot(np.array(range(n_dates))-tshift, self.sigmoid_func(np.array(range(n_dates)), param_vec)/param_vec[0],
                     'b-', label=state+': '+value, color=color)

                ax1.plot(t1-tshift, self.sigmoid_func(t1, param_vec)/param_vec[0], '*', color=color, markersize=12)

                ax1.plot(t2-tshift, self.sigmoid_func(t2, param_vec)/param_vec[0], '*', color=color, markersize=12)

            ax1.set_xlabel(r'Shifted Time [day]', fontsize=16)
            ax1.set_ylabel(r'Normalized Cumulative Death', fontsize=16, color='black')
            if matplotlib.__version__ >= '3.0.2':
                ax1.legend(loc='best', fontsize=12, title=legend_title, title_fontsize=14)
            else:
                ax1.legend(loc='best', fontsize=12, title=legend_title)

            ax1.grid(True)

            data_name = 'null-data-name'
            if self.locale == 'US' and self.sub_locale is None:
                data_name = 'US States'
            if self.locale == 'US' and self.sub_locale != None:
                data_name = self.sub_locale+' Counties/Cities'
            elif self.locale == 'global':
                data_name = 'Countries'

            plt.title('COVID-19 Pandemic 2020 for '+ data_name+
                      ' w/ Evolved Mortality ('+data[1][-1]+')', fontsize=20)

            plt.show()
            if save:
                if self.sub_locale is None:
                    stem = self.__filename(self.locale)
                else:
                    stem = self.__filename(self.locale+'_'+self.sub_locale)
                plt.savefig('fit_'+stem+'_overlap'+'.png', dpi=100)
            plt.close()

        return

    def fit_data_bins(self, sorted_fit_data, bin_width, option='surge_period'):
        """Build data bins for`fit_data`.

        Parameters
        ----------
        sorted_fit_data: list(tuple)
            List of tuples obtained from the `multi_fit_data` member function.
        bin_width: float or int
            Width of the sorting key in `sorted_fit_data` first elmenet.
        option: str
            The `surge_period` option clusters the data in integer bins.

        Returns
        -------
        bins: dict(list)
            Dictionary with bin values. Keys are the indices of the bins.
            Values are a list with beginning and ending of interval.

        Examples
        --------
        >>> global_surge = Surge(locale='global')
        >>> fit_data = global_surge.multi_fit_data()
        >>> bins = global_surge.fit_data_bins(fit_data, 2)

        """

        max_value = max([key for (key, data) in sorted_fit_data])
        min_value = min([key for (key, data) in sorted_fit_data])

        if len(sorted_fit_data) == 1:
            bins = {0:[float(int(min_value)), float(int(max_value)+1)]}
            return bins

        small_value = (max_value - min_value)* 1./100.0

        max_value = round(max_value, 1) + small_value
        min_value = round(min_value, 1) - small_value

        if option == 'surge_period':
            max_value = int(max_value) + 1
            min_value = int(min_value)

        n_bins = int((max_value - min_value)/bin_width)

        pts = np.linspace(min_value, max_value, n_bins+1)


        bins = dict()
        for i in range(n_bins):
            pti = pts[i]
            pti1 = pts[i+1]
            bins[i] = [pti, pti1]

        return bins

    def get_bin_id(self, value, bins):
        """Return the bin`id` `value` is in.

        Parameters
        ----------
        value: float or int
            Value for intended bin interval.
        bins: dict
            Bins created by `fit_data_bins`

        Returns
        -------
        key: int
            If key is found return an `int` else stop.

        """

        if len(bins) == 0:
            return None

        for (key, val) in bins.items():
            if value >= val[0] and value < val[1]:
                return key

        assert_true(False,
                    '\n\n FATAL: key search failed: key = %r, value = %r, bins = %r'%(key, value, bins))

        return

    def plot_group_fit_data(self, groups, fit_data, save=False):
        """Plot sigmoid fit functions for each community in the group.

        Parameters
        ----------
        groups: dict
            Dictionary with keys equal to the group `id` and values equal
            to lists of names of communities. User must create this data
            structure. See `examples/`.
        fit_data: list(tuple)
            Fit data structure as created by `multi_fit_data`.

        save: bool
            Save plot in a `png` image file.
        """

        legend_title = 'Max. Relative Death Rate [%/day]'
        legend_title = 'Surge Period [day]'

        for (grp, states) in enumerate(groups):

            fig, ax1 = plt.subplots(1, figsize=(20, 8))
            colors = color_map(len(states))

            for state in states:
                color = colors[states.index(state)]

                for (sort_key_i, data_i) in fit_data:

                    if data_i[0] != state:
                        continue
                    else:
                        sort_key = sort_key_i
                        data = data_i

                n_dates = data[1].size
                param_vec = data[3]
                tshift = data[4]
                ti1 = tshift - data[5]
                ti2 = tshift + data[5]
                sort_value = '%1.1f'%sort_key

                ax1.plot(np.array(range(n_dates))-tshift,
                         self.sigmoid_func(np.array(range(n_dates)),
                                           param_vec)/param_vec[0],
                         'b-', label=state+': '+sort_value, color=color)

                ax1.plot(ti1-tshift,
                         self.sigmoid_func(ti1, param_vec)/param_vec[0], '*',
                         color=color, markersize=12)

                ax1.plot(ti2-tshift,
                         self.sigmoid_func(ti2, param_vec)/param_vec[0], '*',
                         color=color, markersize=12)

            ax1.set_xlabel(r'Shifted Time [day]', fontsize=16)
            ax1.set_ylabel(r'Normalized Cumulative Death', fontsize=16,
                           color='black')
            if matplotlib.__version__ >= '3.0.2':
                ax1.legend(loc='best', fontsize=16, title=legend_title,
                           title_fontsize=18)
            else:
                ax1.legend(loc='best', fontsize=16, title=legend_title)

            ax1.grid(True)

            data_name = 'null-data-name'
            if self.locale == 'US' and self.sub_locale is None:
                data_name = 'US States'
            if self.locale == 'US' and self.sub_locale is not None:
                data_name = self.sub_locale+' Counties/Cities'
            elif self.locale == 'global':
                data_name = 'Countries'

            plt.title('COVID-19 Pandemic 2020 for '+data_name+
                      ' w/ Evolved Mortality ('+data[1][-1]+')', fontsize=20)

            plt.show()
            if save:
                if self.sub_locale is None:
                    stem = self.__filename(self.locale)
                else:
                    stem = self.__filename(self.locale+'_'+self.sub_locale)
                plt.savefig('fit_group_'+str(grp)+'_'+stem+'.png', dpi=100)
            plt.close()

        return

    def plot_group_surge_periods(self, fit_data, bins, save=False):
        """Plot surge period for communities in a bar plot colored by bins.

        Parameters
        ----------
        fit_data: list(tuple)
            Fit data structure as created by `multi_fit_data`.
        bins: dict(list)
        """

        #plt.rcParams['figure.figsize'] = [20, 4]
        fig, ax = plt.subplots(figsize=(20, 6))

        surge_periods = list()
        states = list()

        for (key, data) in fit_data:
            surge_periods.append(2*data[5])
            states.append(data[0])

        mean = np.mean(np.array(surge_periods))
        std  = np.std(np.array(surge_periods))

        # created sorted list
        sorted_list = sorted(zip(states, surge_periods),
                key = lambda entry: entry[1], reverse=False)

        colors = color_map(len(bins))

        for (mid, (state, val)) in enumerate(sorted_list):

            color = colors[self.get_bin_id(val, bins)]
            ax.bar(mid, val, color=color)

        # Fine tunning the axes
        ax.set_xlim((-.75, len(fit_data)))

        # make space for annotation
        (ymin, ymax) = ax.get_ylim()
        ax.set_ylim((ymin, ymax+(ymax-ymin)*0.15))

        (xmin, xmax) = ax.get_xlim()
        (ymin, ymax) = ax.get_ylim()

        for group_id in range(len(bins.keys())):
            b = bins[group_id]
            ax.plot((-.75, len(fit_data)), [b[0], b[0]], 'k-.', linewidth=0.75 )
            if group_id == len(bins.keys())-1:
                ax.plot((-.75, len(fit_data)), [b[1], b[1]], 'k-.',linewidth=0.75 )

        # Annotation
        annot = 'mean: %2.1f; std: %2.1f (%2.1f %%)'%(mean, std, std/mean*100)
        dx = abs(xmax-xmin)
        xtext = xmin + dx*0.02

        dy = abs(ymax-ymin)
        ytext = ymin + dy*0.90

        ax.text(xtext, ytext, annot, fontsize=16)

        plt.xticks(range(len(states)), [state for (state, val) in sorted_list],
                rotation=80, fontsize=16)
        plt.yticks(fontsize=18)

        ax.set_ylabel('Surge Period [day]', fontsize=16)
        ax.set_xlabel('', fontsize=20)
        ax.xaxis.grid(True, linestyle='-', which='major', color='lightgrey', alpha=0.9)

        data_name = 'null-data-name'
        if self.locale == 'US' and self.sub_locale is None:
            data_name = 'US States'
        if self.locale == 'US' and self.sub_locale != None:
            data_name = self.sub_locale+' Counties/Cities'
        elif self.locale == 'global':
            data_name = 'Countries'

        plt.title('COVID-19 Pandemic 2020 for '+data_name+
                  ' w/ Evolved Mortality ('+data[1][-1]+')', fontsize=20)

        plt.tight_layout(1)

        plt.show()
        if save:
            if self.sub_locale is None:
                stem = self.__filename(self.locale)
            else:
                stem = self.__filename(self.locale+'_'+self.sub_locale)
            plt.savefig('group_surge_periods_'+stem+'.png', dpi=100)
        plt.close()

        return

    def __filename(self, name):

        filename = name.lower().strip().split(' ')

        if len(filename) == 1:
            filename = filename[0]
        else:
            tmp = filename[0]
            for (i, val) in enumerate(filename):
                if i == 0:
                    continue
                tmp = tmp+'_'+val
            filename = tmp

        return filename

def get_covid_us_data(sub_locale=None, case_type='deaths', save_html=False):
    """COVID-19 data loader.

    Load COVID-19 pandemic cumulative data from:

     `https://github.com/CSSEGISandData/COVID-19`.

    Parameters
    ----------
    case_type:  str, optional
            Type of data. Deaths ('deaths') and confirmed cases
            ('confirmed'). Default: 'deaths'.

    Returns
    -------
    data: tuple(int, list(str), list(int))
           (population, dates, cases)
    """
    if case_type == 'deaths':

        dtf = pd.read_csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_US.csv')
        if save_html:
            dtf.to_html('covid_19_deaths.html')

    elif case_type == 'confirmed':

        dtf = pd.read_csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv')
        dtf_pop = pd.read_csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_US.csv')
        if save_html:
            dtf.to_html('covid_19_confirmed.html')

    else:
        assert_true(False,
        'invalid query type: %r (valid: "deaths", "confirmed"'%(case_type))

    dtf = dtf.drop(['UID', 'iso2', 'iso3', 'Combined_Key', 'code3', 'FIPS', 'Lat', 'Long_', 'Country_Region'], axis=1)

    dtf = dtf.rename(columns={'Province_State':'state/province', 'Admin2':'county'})

    state_names = list()
    state_names_tmp = list()

    for (i, istate) in enumerate(dtf['state/province']):

        if istate.strip() == 'Wyoming' and dtf.loc[i, 'county'] == 'Weston':
            break

        state_names_tmp.append(istate)

    state_names_set = set(state_names_tmp)

    state_names = list(state_names_set)
    state_names = sorted(state_names)

    dates = np.array(list(dtf.columns[3:]))

    if sub_locale is None:

        population = [0]*len(state_names)

        cases = np.zeros((len(dtf.columns[3:]), len(state_names)),
                         dtype=np.float64)

        for (i, istate) in enumerate(dtf['state/province']):

            if istate.strip() == 'Wyoming' and\
                (dtf.loc[i, 'county']).strip() == 'Weston':
                break

            state_id = state_names.index(istate)

            if case_type == 'confirmed':
                population[state_id] += int(dtf_pop.loc[i, 'Population'])
            else:
                population[state_id] += int(dtf.loc[i, 'Population'])

            # Add all counties/city/towns columnwise states
            cases[:, state_id] += np.array(list(dtf.loc[i, dtf.columns[3:]]))

        return (state_names, population, dates, cases)

    elif sub_locale in state_names:

        county_names = list()
        county_names_tmp = list()

        for (i, istate) in enumerate(dtf['state/province']):

            if istate.strip() == 'Wyoming' and dtf.loc[i, 'county'] == 'Weston':
                break

            if istate.strip() == sub_locale:

                county_names_tmp.append(dtf.loc[i, 'county'])

        county_names_set = set(county_names_tmp)

        county_names = list(county_names_set)
        county_names = sorted(county_names)

        population = [0]*len(county_names)

        cases = np.zeros((len(dtf.columns[3:]), len(county_names)),
                         dtype=np.float64)

        for (i, istate) in enumerate(dtf['state/province']):

            if istate.strip() == 'Wyoming' and dtf.loc[i, 'county'] == 'Weston':
                break

            icounty = dtf.loc[i, 'county']

            if istate.strip() == sub_locale:

                county_id = county_names.index(icounty)

                if case_type == 'confirmed':
                    population[county_id] += int(dtf_pop.loc[i, 'Population'])
                else:
                    population[county_id] += int(dtf.loc[i, 'Population'])

                cases[:, county_id] = \
                        np.array(list(dtf.loc[i, dtf.columns[3:]]))

        return (county_names, population, dates, cases)

    else:
        assert_in(sub_locale, state_names)

    return

def get_covid_global_data(case_type='deaths', distribution=True,
                          cumulative=False, save_html=False):
    """COVID-19 data loader.

    Load COVID-19 pandemic cumulative data from:

        https://github.com/CSSEGISandData/COVID-19

    Parameters
    ----------
    case_type: str, optional
        Type of data. Deaths ('deaths') and confirmed cases ('confirmed').
        Default: 'deaths'.

    distribution: bool, optional
        Distribution of new cases over dates.
        Default: True

    cumulative: bool, optional
        Cumulative number of cases over dates.
        Default: False

    Returns
    -------
    data: tuple(int, list(str), list(int))
           (contry_names, dates, cases)
    """

    if cumulative is True:
        distribution = False

    if case_type == 'deaths':
        dtf = pd.read_csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv')
        if save_html:
            dtf.to_html('covid_19_global_deaths.html')

    else:
        assert_true(False, 'invalid query type: %r (valid: "deaths"'%(case_type))

    dtf = dtf.drop(['Lat', 'Long'], axis=1)
    dtf = dtf.rename(columns={'Province/State':'state/province', 'Country/Region':'country/region'})

    country_names = list()

    country_names_tmp = list()

    for (i, icountry) in enumerate(dtf['country/region']):
        country_names_tmp.append(icountry)

    country_names_set = set(country_names_tmp)

    country_names = list(country_names_set)
    country_names = sorted(country_names)

    dates = np.array(list(dtf.columns[2:]))

    cases = np.zeros((len(dtf.columns[2:]), len(country_names)),
                     dtype=np.float64)

    for (i, icountry) in enumerate(dtf['country/region']):

        country_id = country_names.index(icountry)

        cases[:, country_id] += np.array(list(dtf.loc[i, dtf.columns[2:]]))

    if distribution:

        for j in range(cases.shape[1]):
            cases[:, j] = np.round(np.gradient(cases[:, j]), 0)

    return (country_names, dates, cases)

def newton_nlls_solve(x_vec, y_vec, fit_func, grad_p_fit_func,
                      param_vec_0,
                      k_max=10, rel_tol=1.0e-3, verbose=True):
    """Newton's nonlinear least-squares fitting method.

    Parameters
    ----------
    x_vec: numpy.ndarray(float)
        Values of the independent variable.
    y_vec: numpy.ndarray(float)
        Values of the dependent variable.
    fit_func: def f(x,p):
        Function definitio of the sigma function.
    grad_p_fit_func: def f_p(x,p):
        Gradient of f wrt to the parameter vector.
    param_vec_0: numpy.ndarray(float)
        Parameter vector initial guess.
    rel_tol: float
        Relative tolerance for convergence of Newton's method
    verbose: bool
        Flag for print out of internal information.
    """

    assert_equal(x_vec.size, y_vec.size)

    # Other initialization
    delta_vec_k = np.ones(param_vec_0.size, dtype=np.float64)*1e10
    r_vec_k = np.ones(x_vec.size, dtype=np.float64)*1e10
    j_mtrx_k = np.ones((x_vec.size, param_vec_0.size), dtype=np.float64)*1e10
    param_vec = np.copy(param_vec_0)

    if verbose is True:
        print('\n')
        print('**************************************************************************')
        print("                      Newton's Method Iterations                          ")
        print('**************************************************************************')
        print('k  ||r(p_k)||  ||J(p_k)||  ||J^T r(p_k)||  ||del p_k||   ||p_k||  |convg| ')
        print('--------------------------------------------------------------------------')
    #         1234567890 12345678901 123456789012345 123456789012 123456789 12345678

    assert_true(k_max >= 1)
    k = 1

    while (np.linalg.norm(delta_vec_k/param_vec) > rel_tol or np.linalg.norm(j_mtrx_k.transpose()@r_vec_k) > 1e-3) and k <= k_max:

        # build the residual vector
        r_vec_k = y_vec - fit_func(x_vec, param_vec)

        # build the Jacobian matrix
        grad_p_f = grad_p_fit_func(x_vec, param_vec)

        j_mtrx_k = np.zeros((x_vec.size, param_vec.size), dtype=np.float64 )  # initialize matrix
        for (i, grad_p_f_i) in enumerate(grad_p_f):
            j_mtrx_k[:, i] = - grad_p_f_i

        delta_vec_k_old = np.copy(delta_vec_k)

        rank = numpy.linalg.matrix_rank(j_mtrx_k.transpose()@j_mtrx_k)

        if rank != param_vec.size and verbose == True:
            print('')
            print('*********************************************************************')
            print('                             RANK DEFICIENCY')
            print('*********************************************************************')
            print('rank(JTJ) = %3i; shape(JTJ) = (%3i,%3i)'%
                  (rank, (j_mtrx_k.transpose()@j_mtrx_k).shape[0],
                         (j_mtrx_k.transpose()@j_mtrx_k).shape[1]))
            print('JTJ = \n', j_mtrx_k.transpose()@j_mtrx_k)
            print('*********************************************************************')
            print('')

        if rank == param_vec.size:
            delta_vec_k = numpy.linalg.solve(j_mtrx_k.transpose()@j_mtrx_k,
                                             -j_mtrx_k.transpose()@r_vec_k)
        else:
            a_mtrx_k = j_mtrx_k.transpose()@j_mtrx_k
            b_vec_k = -j_mtrx_k.transpose()@r_vec_k
            delta_vec_k = numpy.linalg.solve(a_mtrx_k.transpose()@a_mtrx_k +
                                             1e-3*np.eye(param_vec.size),
                                             a_mtrx_k.transpose()@b_vec_k)

        r_vec_k_old = np.copy(r_vec_k)
        step_size = 1.0
        r_vec_k = y_vec - fit_func(x_vec, param_vec + delta_vec_k)

        n_steps_max = 5
        n_steps = 0
        while (np.linalg.norm(r_vec_k) > np.linalg.norm(r_vec_k_old)) \
              and n_steps <= n_steps_max:
            step_size *= 0.5
            r_vec_k = y_vec - fit_func(x_vec, param_vec +
                                       step_size*delta_vec_k)
            n_steps += 1

        if step_size != 1.0 and verbose is True:
            print('Step_size = ', step_size, ' n_steps = ', n_steps,
                  ' n_steps_max = ', n_steps_max)

        # compute the update to the root candidate
        param_vec += step_size * delta_vec_k

        if k > 0:
            if np.linalg.norm(delta_vec_k) != 0.0 and \
                    np.linalg.norm(delta_vec_k_old) != 0.0:

                convergence_factor = math.log(np.linalg.norm(delta_vec_k),
                                              10) / \
                math.log(np.linalg.norm(delta_vec_k_old), 10)
            else:
                convergence_factor = 0.0
        else:
            convergence_factor = 0.0

        if verbose is True:
            print('%2i %+10.2e %+11.2e %+15.2e %+12.2e %+9.2e %8.2f'%\
                  (k, np.linalg.norm(r_vec_k), np.linalg.norm(j_mtrx_k),
                   np.linalg.norm(j_mtrx_k.transpose()@r_vec_k),
                   np.linalg.norm(delta_vec_k), np.linalg.norm(param_vec),
                   convergence_factor))

        k = k + 1

    rr2 = 1.0 - np.sum(r_vec_k**2) / np.sum((y_vec-np.mean(y_vec))**2)

    if verbose is True:
        print('******************************************************')
        print('Root = ', param_vec)
        print('R2   = ', rr2)

    if k > k_max:
        print('')
        print('******************************************************')
        print('WARNING: Convergence failure k > k_max                ')
        print('******************************************************')
        print('')

    return (param_vec, rr2, k)

def color_map(num_colors):
    """Nice colormap internal helper method for plotting.

    Parameters
    ----------
    num_colors: int, required
        Number of colors.

    Returns
    -------
    colors: list(tuple(R,G,B,A))
        List with colors interpolated from internal list of primary colors.

    """

    assert_true(num_colors >= 1)

    # primary colors
    # use the RGBA decimal code
    red = np.array((1, 0, 0, 1))
    blue = np.array((0, 0, 1, 1))
    magenta = np.array((1, 0, 1, 1))
    green = np.array((0, 1, 0, 1))
    orange = np.array((1, 0.5, 0, 1))
    black = np.array((0, 0, 0, 1))
    yellow = np.array((1, 1, 0, 1))
    cyan = np.array((0, 1, 1, 1))

    # order the primary colors here
    colors = list()
    colors = [red, blue, orange, magenta, green, yellow, cyan, black]

    num_primary_colors = len(colors)

    if num_colors <= num_primary_colors:
        return colors[:num_colors]

    # interpolate primary colors
    while len(colors) < num_colors:
        j = 0
        for i in range(len(colors)-1):
            color_a = colors[2*i]
            color_b = colors[2*i+1]
            mid_color = (color_a+color_b)/2.0
            j = 2*i+1
            colors.insert(j, mid_color) # insert before index
            if len(colors) == num_colors:
                break

    return colors
