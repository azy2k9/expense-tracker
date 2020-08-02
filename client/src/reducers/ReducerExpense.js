import { ADD_EXPENSE, DELETE_EXPENSE } from '../actions/ActionExpense';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  arrExpenses: [
    {
      strID: uuidv4(),
      strTransaction: 'Car Lease',
      price: 300,
      strType: 'Expense',
    },
    {
      strID: uuidv4(),
      strTransaction: 'Mobile Contract',
      price: 50,
      strType: 'Expense',
    },
    {
      strID: uuidv4(),
      strTransaction: 'Savings',
      price: 150,
      strType: 'Income',
    },
  ],
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
