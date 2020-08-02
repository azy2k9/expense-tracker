import axios from 'axios';

import {
  actionFetchExpensesBegin,
  actionFetchExpensesSuccess,
  actionFetchExpensesFailure,
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
