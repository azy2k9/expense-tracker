import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../layouts/Wrapper/Wrapper';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';
import { useSelector, useDispatch } from 'react-redux';
import { actionDeleteExpense } from '../../../actions/ActionExpense';

const Container = styled.div`
  width: 50%;
  margin: 1rem;
  padding: 1rem;
`;

const HistoryItem = styled.div`
  display: flex;
  padding: 1.5rem;
  margin: 0.5rem;
  justify-content: space-between;
  width: 100%;
  border-right: 0.3rem solid ${({ bExpense }) => (bExpense ? 'red' : 'green')};
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
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>History</Title>
      {arrExpenses.length ? (
        arrExpenses.map((objTransaction) => (
          <Wrapper key={objTransaction.strId}>
            <HistoryItem bExpense={objTransaction.strType === 'expense'}>
              <span>{objTransaction.strName}</span>
              <span>{objTransaction.strPrice}</span>
            </HistoryItem>
            <Button
              onClick={() => {
                dispatch(actionDeleteExpense(objTransaction.strId));
              }}
              key={objTransaction.strId}
              color="red"
              accent="#F44336">
              Delete
            </Button>
          </Wrapper>
        ))
      ) : (
        <Wrapper strJustifyContent="center">
          You have no expense History!
        </Wrapper>
      )}
    </Container>
  );
};

export default History;
