import axios from 'axios';

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

const strHost =
  process.env.REACT_APP_MODE === 'development'
    ? process.env.REACT_APP_HOST_LOCALHOST
    : process.env.REACT_APP_HOST;

export const URI_BALANCE = `${strHost}/api/v1/stats`;

export const actionFetchBalance = () => (dispatch) => {
  dispatch(actionFetchBalanceBegin());
  return axios
    .get(`${URI_BALANCE}/balance`)
    .then((result) => {
      return dispatch(actionFetchBalanceSuccess(result.data));
    })
    .catch((error) => {
      console.error(
        `Failed to fetch balance. ${error.message}`,
        'ActionBalance'
      );
      return dispatch(actionFetchBalanceFailure(error.message));
    });
};

export const actionFetchIncome = () => (dispatch) => {
  dispatch(actionFetchIncomeBegin());
  return axios
    .get(`${URI_BALANCE}/income`)
    .then((result) => {
      return dispatch(actionFetchIncomeSuccess(result.data));
    })
    .catch((error) => {
      console.error(
        `Failed to fetch income. ${error.message}`,
        'ActionBalance'
      );
      return dispatch(actionFetchIncomeFailure(error.message));
    });
};

export const actionFetchExpense = () => (dispatch) => {
  dispatch(actionFetchExpenseBegin());
  return axios
    .get(`${URI_BALANCE}/expense`)
    .then((result) => {
      return dispatch(actionFetchExpenseSuccess(result.data));
    })
    .catch((error) => {
      console.error(
        `Failed to fetch expenses. ${error.message}`,
        'ActionBalance'
      );
      return dispatch(actionFetchExpenseFailure(error.message));
    });
};
