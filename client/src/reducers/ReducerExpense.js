import { ADD_EXPENSE, DELETE_EXPENSE } from '../actions/ActionExpense';

const initialState = {
  arrExpenses: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE: {
      const { objExpense } = action.payload;
      return {
        ...state,
        arrExpenses: [...state.arrExpenses, objExpense],
      };
    }
    case DELETE_EXPENSE: {
      const { id } = action.payload;
      return {
        ...state,
        arrExpenses: state.arrExpenses.filter(
          (objExpense) => objExpense.id !== id
        ),
      };
    }
    default:
      return state;
  }
}
