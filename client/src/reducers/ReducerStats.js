import {
  FETCH_BALANCE_SUCCESS,
  FETCH_INCOME_SUCCESS,
  FETCH_EXPENSE_SUCCESS,
} from '../actions/TypeStats';

const initialState = {
  strBalance: 0,
  strIncome: 0,
  strExpense: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BALANCE_SUCCESS: {
      const { strBalance } = action.payload;
      return {
        ...state,
        strBalance,
      };
    }
    case FETCH_INCOME_SUCCESS: {
      const { strIncome } = action.payload;
      return {
        ...state,
        strIncome,
      };
    }
    case FETCH_EXPENSE_SUCCESS: {
      const { strExpense } = action.payload;
      return {
        ...state,
        strExpense,
      };
    }
    default:
      return state;
  }
}
