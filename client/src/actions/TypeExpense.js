export const FETCH_EXPENSES_ERROR = 'FETCH_ALL_EXPENSES_ERROR';
export const FETCH_EXPENSES_BEGIN = 'FETCH_ALL_EXPENSES_BEGIN';
export const FETCH_EXPENSES_SUCCESS = 'FETCH_ALL_EXPENSES_SUCCESS';

export const actionFetchExpensesBegin = () => ({
  type: FETCH_EXPENSES_BEGIN,
});

export const actionFetchExpensesFailure = (strError) => ({
  payload: {
    strError,
  },
  type: FETCH_EXPENSES_ERROR,
});

export const actionFetchExpensesSuccess = (arrExpenses) => ({
  payload: {
    arrExpenses,
  },
  type: FETCH_EXPENSES_SUCCESS,
});
