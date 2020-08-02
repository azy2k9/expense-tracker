import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Wrapper from '../../../layouts/Wrapper/Wrapper';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';

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

const arrTransactions = [
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
];

const History = () => {
  return (
    <Container>
      <Title>History</Title>
      {arrTransactions.map((objTransaction) => (
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
