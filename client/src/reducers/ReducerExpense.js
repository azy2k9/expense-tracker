import { FETCH_EXPENSES_SUCCESS } from '../actions/TypeExpense';

const initialState = {
  arrExpenses: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // case ADD_EXPENSE: {
    //   const { objExpense } = action.payload;
    //   return {
    //     ...state,
    //     arrExpenses: [...state.arrExpenses, objExpense],
    //   };
    // }
    // case DELETE_EXPENSE: {
    //   const { id } = action.payload;
    //   return {
    //     ...state,
    //     arrExpenses: state.arrExpenses.filter(
    //       (objExpense) => objExpense.id !== id
    //     ),
    //   };
    // }
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
