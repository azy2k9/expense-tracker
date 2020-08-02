import React from 'react';
import Balance from './components/molecules/Balance';
import History from './components/molecules/History';
import Header from './layouts/Header';
import Wrapper from './layouts/Wrapper';
import AddExpense from './components/molecules/AddExpense';

const App = () => {
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
