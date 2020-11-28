import {
  DELETE_EXPENSES_BEGIN,
  DELETE_EXPENSES_ERROR,
  DELETE_EXPENSES_SUCCESS,
  ADD_EXPENSES_BEGIN,
  ADD_EXPENSES_ERROR,
  ADD_EXPENSES_SUCCESS,
  FETCH_EXPENSES_BEGIN,
  FETCH_EXPENSES_ERROR,
  FETCH_EXPENSES_SUCCESS,
} from '../actions/TypeExpense';

const initialState = {
  arrExpenses: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSES_BEGIN: {
      return {
        ...state,
        bLoading: true,
      };
    }
    case ADD_EXPENSES_ERROR: {
      const { strError } = action.payload;
      return {
        ...state,
        bLoading: false,
        strError,
      };
    }
    case ADD_EXPENSES_SUCCESS: {
      const { objExpense } = action.payload;
      return {
        ...state,
        bLoading: false,
        arrExpenses: [...state.arrExpenses, objExpense],
      };
    }
    case DELETE_EXPENSES_BEGIN: {
      const { strId } = action.payload;
      return {
        ...state,
        bIsLoading: strId !== null || strId !== undefined,
      };
    }
    case DELETE_EXPENSES_ERROR: {
      const { strError } = action.payload;
      return {
        ...state,
        bLoading: false,
        strError
      };
    }
    case DELETE_EXPENSES_SUCCESS: {
      const { strId } = action.payload;
      return {
        ...state,
        bLoading: false,
        arrExpenses: state.arrExpenses.filter(
          (objExpense) => objExpense.strId !== strId
        ),
      };
    }
    case FETCH_EXPENSES_BEGIN: {
      return {
        ...state,
        bLoading: true,
      };
    }
    case FETCH_EXPENSES_ERROR: {
      const { strError } = action.payload;
      return {
        ...state,
        strError
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
