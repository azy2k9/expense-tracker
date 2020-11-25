import { instance as axios } from '../instance';

import {
  actionFetchExpensesBegin,
  actionFetchExpensesSuccess,
  actionFetchExpensesFailure,
  actionAddExpenseBegin,
  actionAddExpenseSuccess,
  actionAddExpenseFailure,
  actionDeleteExpenseBegin,
  actionDeleteExpenseFailure,
  actionDeleteExpenseSuccess,
} from './TypeExpense';

export const URI_EXPENSES = `/api/v1/expenses`;

export const actionFetchExpenses = () => (dispatch) => {
  dispatch(actionFetchExpensesBegin());
  return axios
    .get(URI_EXPENSES)
    .then(({ data }) => {
      return dispatch(actionFetchExpensesSuccess(data));
    })
    .catch(({ error }) => {
      console.error(`Failed to fetch expenses. ${error}`, 'ActionExpense');
      return dispatch(actionFetchExpensesFailure(error));
    });
};

export const actionAddExpense = (objExpense, onSuccessCallback = () => {}) => (
  dispatch
) => {
  dispatch(actionAddExpenseBegin());
  return axios
    .post(`${URI_EXPENSES}`, objExpense)
    .then(({ data }) => {
      onSuccessCallback();
      return dispatch(actionAddExpenseSuccess(data));
    })
    .catch(({ error }) => {
      console.error(`Failed to add expense. ${error}`, 'ActionExpense');
      return dispatch(actionAddExpenseFailure(error));
    });
};

export const actionDeleteExpense = (strId) => (dispatch) => {
  dispatch(actionDeleteExpenseBegin());
  return axios
    .delete(`${URI_EXPENSES}/${strId}`)
    .then(({ data }) => {
      return dispatch(actionDeleteExpenseSuccess(data));
    })
    .catch(({ error }) => {
      console.error(`Failed to fetch expenses. ${error}`, 'ActionExpense');
      return dispatch(actionDeleteExpenseFailure(error));
    });
};
