import { instance as axios } from '../instance';

import {
  actionFetchBalanceBegin,
  actionFetchBalanceSuccess,
  actionFetchBalanceFailure,
  actionFetchIncomeBegin,
  actionFetchIncomeFailure,
  actionFetchIncomeSuccess,
  actionFetchExpenseBegin,
  actionFetchExpenseFailure,
  actionFetchExpenseSuccess,
} from './TypeStats';

export const URI_BALANCE = `/api/v1/stats`;

export const actionFetchBalance = () => (dispatch) => {
  dispatch(actionFetchBalanceBegin());
  return axios
    .get(`${URI_BALANCE}/balance`)
    .then(({ data }) => {
      return dispatch(actionFetchBalanceSuccess(data));
    })
    .catch(({ error }) => {
      console.error(`Failed to fetch balance. ${error}`, 'ActionBalance');
      return dispatch(actionFetchBalanceFailure(error));
    });
};

export const actionFetchIncome = () => (dispatch) => {
  dispatch(actionFetchIncomeBegin());
  return axios
    .get(`${URI_BALANCE}/income`)
    .then(({ data }) => {
      return dispatch(actionFetchIncomeSuccess(data));
    })
    .catch(({ error }) => {
      console.error(`Failed to fetch income. ${error}`, 'ActionBalance');
      return dispatch(actionFetchIncomeFailure(error));
    });
};

export const actionFetchExpense = () => (dispatch) => {
  dispatch(actionFetchExpenseBegin());
  return axios
    .get(`${URI_BALANCE}/expense`)
    .then(({ data }) => {
      return dispatch(actionFetchExpenseSuccess(data));
    })
    .catch(({ error }) => {
      console.error(`Failed to fetch expenses. ${error}`, 'ActionBalance');
      return dispatch(actionFetchExpenseFailure(error));
    });
};
