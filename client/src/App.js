import React, { useEffect } from 'react';
import History from './components/molecules/History';
import Header from './layouts/Header';
import Balance from './components/molecules/Balance';
import Wrapper from './layouts/Wrapper';
import AddExpense from './components/molecules/AddExpense';
import { useDispatch } from 'react-redux';
import { actionFetchExpenses } from './actions/ActionExpense';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchExpenses());
  }, [dispatch]);

  return (
    <Wrapper
      strDirection="column"
      strJustifyContent="center"
      strAlignItems="center">
      <Header>Expense Tracker</Header>
      <Balance />
      <History />
      <AddExpense />
    </Wrapper>
  );
};

export default App;
