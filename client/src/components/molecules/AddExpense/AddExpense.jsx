import React, { useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../../../layouts/Wrapper/Wrapper';
import Title from '../../atoms/Title/Title';
import Input from '../../atoms/Input/Input';
import Radio from '../../atoms/Radio/Radio';
import Button from '../../atoms/Button/Button';

const Container = styled.div`
  width: 50%;
  margin: 1rem;
  padding: 1rem;
`;

const AddExpense = () => {
  const [strChecked, setStrChecked] = useState('income');

  return (
    <Container>
      <Title>Add Expense</Title>
      <Wrapper strDirection="column">
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Value (£)" />
        <Wrapper strJustifyContent="center" strPadding="1rem">
          <Radio
            strId="income"
            strName="expense-type"
            strValue="income"
            strLabel="Income"
            onClick={(event) => setStrChecked(event.target.value)}
            bChecked={strChecked === 'income'}
          />
          <Radio
            strId="expense"
            strName="expense-type"
            strValue="expense"
            strLabel="Expense"
            onClick={(event) => setStrChecked(event.target.value)}
            bChecked={strChecked === 'expense'}
          />
        </Wrapper>
        <Button color="#4c4" accent="#4c4" large>
          Add
        </Button>
      </Wrapper>
    </Container>
  );
};

AddExpense.propTypes = {};

export default AddExpense;
