import axios from 'axios';

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

export const URI_EXPENSES = 'http://localhost:5000/api/v1/expenses';

export const actionFetchExpenses = () => (dispatch) => {
  dispatch(actionFetchExpensesBegin());
  return axios
    .get(URI_EXPENSES)
    .then((result) => {
      return dispatch(actionFetchExpensesSuccess(result.data));
    })
    .catch((error) => {
      console.error(
        `Failed to fetch expenses. ${error.message}`,
        'ActionExpense'
      );
      return dispatch(actionFetchExpensesFailure(error.message));
    });
};

export const actionAddExpense = (objExpense, onSuccessCallback = () => {}) => (
  dispatch
) => {
  dispatch(actionAddExpenseBegin());
  return axios
    .post(`${URI_EXPENSES}`, objExpense)
    .then((result) => {
      onSuccessCallback();
      return dispatch(actionAddExpenseSuccess(result.data));
    })
    .catch((error) => {
      console.error(`Failed to add expense. ${error.message}`, 'ActionExpense');
      return dispatch(actionAddExpenseFailure(error.message));
    });
};

export const actionDeleteExpense = (strId) => (dispatch) => {
  dispatch(actionDeleteExpenseBegin());
  return axios
    .delete(`${URI_EXPENSES}/${strId}`)
    .then((result) => {
      return dispatch(actionDeleteExpenseSuccess(result.data.strId));
    })
    .catch((error) => {
      console.error(
        `Failed to fetch expenses. ${error.message}`,
        'ActionExpense'
      );
      return dispatch(actionDeleteExpenseFailure(error.message));
    });
};
