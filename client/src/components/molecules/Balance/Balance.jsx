import React, { useEffect } from 'react';
import styled from 'styled-components';
import Wrapper from '../../../layouts/Wrapper';
import Card from '../../atoms/Card';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionFetchBalance,
  actionFetchIncome,
  actionFetchExpense,
} from '../../../actions/ActionStats';

const StatHeader = styled.span`
  font-weight: bold;
`;

const Stat = styled.span`
  font-size: 2rem;
`;

const Income = styled(Stat)`
  color: green;
`;

const Expense = styled(Stat)`
  color: red;
`;

const Balance = () => {
  const strBalance = useSelector((state) => state.ReducerStats.strBalance);
  const strIncome = useSelector((state) => state.ReducerStats.strIncome);
  const strExpense = useSelector((state) => state.ReducerStats.strExpense);
  const arrExpenses = useSelector((state) => state.ReducerExpense.arrExpenses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchBalance());
    dispatch(actionFetchIncome());
    dispatch(actionFetchExpense());
  }, [dispatch, arrExpenses]);

  return (
    <Card>
      <Wrapper
        strDirection="row"
        strJustifyContent="space-around"
        strAlignItems="center">
        <Wrapper>
          <Wrapper strDirection="column">
            <StatHeader>INCOME</StatHeader>
            <Income>£{strIncome}</Income>
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Wrapper strDirection="column">
            <StatHeader>BALANCE</StatHeader>
            <Stat>£{strBalance}</Stat>
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Wrapper strDirection="column">
            <StatHeader>EXPENSE</StatHeader>
            <Expense>£{strExpense}</Expense>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Card>
  );
};

Balance.propTypes = {};

export default Balance;
