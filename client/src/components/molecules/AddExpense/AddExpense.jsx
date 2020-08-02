import React, { useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../../../layouts/Wrapper/Wrapper';
import Title from '../../atoms/Title/Title';
import Input from '../../atoms/Input/Input';
import Radio from '../../atoms/Radio/Radio';
import Button from '../../atoms/Button/Button';
import { actionAddExpense } from '../../../actions/ActionExpense';
import { useDispatch } from 'react-redux';

const Container = styled.div`
  width: 50%;
  margin: 1rem;
  padding: 1rem;
`;

const AddExpense = () => {
  const [strName, setStrName] = useState(null);
  const [strPrice, setStrPrice] = useState(null);
  const [strType, setStrType] = useState('income');

  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Add Expense</Title>
      <Wrapper strDirection="column">
        <Input
          type="text"
          placeholder="Name"
          onChange={(e) => setStrName(e.target.value)}
          value={strName}
        />
        <Input
          type="text"
          placeholder="Value (£)"
          onChange={(e) => setStrPrice(e.target.value)}
          value={strPrice}
        />
        <Wrapper strJustifyContent="center" strPadding="1rem">
          <Radio
            strId="income"
            strName="expense-type"
            strValue="income"
            strLabel="Income"
            onClick={(event) => setStrType(event.target.value)}
            bChecked={strType === 'income'}
          />
          <Radio
            strId="expense"
            strName="expense-type"
            strValue="expense"
            strLabel="Expense"
            onClick={(event) => setStrType(event.target.value)}
            bChecked={strType === 'expense'}
          />
        </Wrapper>
        <Button
          onClick={() => {
            const objExpense = {
              name: strName,
              price: strPrice,
              type: strType,
            };

            dispatch(
              actionAddExpense(objExpense, () => {
                setStrName('');
                setStrPrice('');
                setStrType('income');
              })
            );
          }}
          color="#4c4"
          accent="#4c4"
          large>
          Add
        </Button>
      </Wrapper>
    </Container>
  );
};

AddExpense.propTypes = {};

export default AddExpense;
