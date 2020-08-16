export const FETCH_BALANCE_ERROR = 'FETCH_BALANCE_ERROR';
export const FETCH_BALANCE_BEGIN = 'FETCH_BALANCE_BEGIN';
export const FETCH_BALANCE_SUCCESS = 'FETCH_BALANCE_SUCCESS';

export const actionFetchBalanceBegin = () => ({
  type: FETCH_BALANCE_BEGIN,
});

export const actionFetchBalanceFailure = (strError) => ({
  payload: {
    strError,
  },
  type: FETCH_BALANCE_ERROR,
});

export const actionFetchBalanceSuccess = (strBalance) => ({
  payload: {
    strBalance,
  },
  type: FETCH_BALANCE_SUCCESS,
});

export const FETCH_INCOME_ERROR = 'FETCH_INCOME_ERROR';
export const FETCH_INCOME_BEGIN = 'FETCH_INCOME_BEGIN';
export const FETCH_INCOME_SUCCESS = 'FETCH_INCOME_SUCCESS';

export const actionFetchIncomeBegin = () => ({
  type: FETCH_INCOME_BEGIN,
});

export const actionFetchIncomeFailure = (strError) => ({
  payload: {
    strError,
  },
  type: FETCH_INCOME_ERROR,
});

export const actionFetchIncomeSuccess = (strIncome) => ({
  payload: {
    strIncome,
  },
  type: FETCH_INCOME_SUCCESS,
});

export const FETCH_EXPENSE_ERROR = 'FETCH_EXPENSE_ERROR';
export const FETCH_EXPENSE_BEGIN = 'FETCH_EXPENSE_BEGIN';
export const FETCH_EXPENSE_SUCCESS = 'FETCH_EXPENSE_SUCCESS';

export const actionFetchExpenseBegin = () => ({
  type: FETCH_EXPENSE_BEGIN,
});

export const actionFetchExpenseFailure = (strError) => ({
  payload: {
    strError,
  },
  type: FETCH_EXPENSE_ERROR,
});

export const actionFetchExpenseSuccess = (strExpense) => ({
  payload: {
    strExpense,
  },
  type: FETCH_EXPENSE_SUCCESS,
});
