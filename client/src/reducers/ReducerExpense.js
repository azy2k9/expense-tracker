import {
  ADD_EXPENSES_SUCCESS,
  DELETE_EXPENSES_SUCCESS,
  FETCH_EXPENSES_SUCCESS,
} from '../actions/TypeExpense';

const initialState = {
  arrExpenses: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSES_SUCCESS: {
      const { objExpense } = action.payload;
      return {
        ...state,
        arrExpenses: [...state.arrExpenses, objExpense],
      };
    }
    case DELETE_EXPENSES_SUCCESS: {
      const { strId } = action.payload;
      return {
        ...state,
        arrExpenses: state.arrExpenses.filter(
          (objExpense) => objExpense.strId !== strId
        ),
      };
    }
    case FETCH_EXPENSES_SUCCESS: {
      const { arrExpenses } = action.payload;
      return {
        ...state,
        arrExpenses,
      };
    }
    default:
      return state;
  }
}
