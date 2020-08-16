import { combineReducers } from 'redux';
import ReducerExpense from './ReducerExpense';
import ReducerStats from './ReducerStats';

export default combineReducers({
  ReducerExpense,
  ReducerStats,
});
