import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../layouts/Wrapper/Wrapper';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';
import { useSelector } from 'react-redux';

const Container = styled.div`
  width: 50%;
  margin: 16px;
  padding: 16px;
`;

const HistoryItem = styled.div`
  display: flex !important;
  padding: 24px !important;
  margin: 8px !important;
  justify-content: space-between !important;
  width: 100% !important;
  border-right: 5px solid ${({ bExpense }) => (bExpense ? 'green' : 'red')} !important;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s box-shadow;
  &:hover {
    transition: 0.5s box-shadow;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const History = () => {
  const arrExpenses = useSelector((state) => state.ReducerExpense.arrExpenses);
  return (
    <Container>
      <Title>History</Title>
      {arrExpenses.map((objTransaction) => (
        <Wrapper>
          <HistoryItem
            key={objTransaction.strID}
            bExpense={objTransaction.strType === 'Expense'}>
            <span>{objTransaction.strTransaction}</span>
            <span>{objTransaction.price}</span>
          </HistoryItem>
          <Button color="red" accent="#F44336">
            Delete
          </Button>
        </Wrapper>
      ))}
    </Container>
  );
};

export default History;
