import { combineReducers } from 'redux';
import ReducerExpense from './ReducerExpense';
import ReducerStats from './ReducerStats';
import ReducerAuthenticatedUser from './ReducerAuthenticatedUser';

export default combineReducers({
  ReducerExpense,
  ReducerStats,
  ReducerAuthenticatedUser,
});
