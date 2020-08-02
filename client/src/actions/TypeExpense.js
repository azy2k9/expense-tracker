export const FETCH_EXPENSES_ERROR = 'FETCH_EXPENSES_ERROR';
export const FETCH_EXPENSES_BEGIN = 'FETCH_EXPENSES_BEGIN';
export const FETCH_EXPENSES_SUCCESS = 'FETCH_EXPENSES_SUCCESS';

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

export const ADD_EXPENSES_ERROR = 'ADD_EXPENSES_ERROR';
export const ADD_EXPENSES_BEGIN = 'ADD_EXPENSES_BEGIN';
export const ADD_EXPENSES_SUCCESS = 'ADD_EXPENSES_SUCCESS';

export const actionAddExpensesBegin = () => ({
  type: ADD_EXPENSES_BEGIN,
});

export const actionAddExpensesFailure = (strError) => ({
  payload: {
    strError,
  },
  type: ADD_EXPENSES_ERROR,
});

export const actionAddExpensesSuccess = (objExpense) => ({
  payload: {
    objExpense,
  },
  type: ADD_EXPENSES_SUCCESS,
});
