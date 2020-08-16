import React, { useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../../../layouts/Wrapper/Wrapper';
import Title from '../../atoms/Title/Title';
import Input from '../../atoms/Input/Input';
import Radio from '../../atoms/Radio/Radio';
import Button from '../../atoms/Button/Button';
import { actionAddExpense } from '../../../actions/ActionExpense';
import { useDispatch } from 'react-redux';
import lodash from 'lodash';
import moment from 'moment';

const Container = styled.div`
  width: 50%;
  margin: 1rem;
  padding: 1rem;
`;

const AddExpense = () => {
  const [strName, setStrName] = useState('');
  const [strPrice, setStrPrice] = useState('');
  const [strType, setStrType] = useState('income');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

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
          type="number"
          step="0.1"
          placeholder="Value (£)"
          onChange={(e) => {
            setStrPrice(e.target.value);
          }}
          value={strPrice}
        />
        <Input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />
        <Wrapper strJustifyContent="center" strPadding="1rem">
          <Radio
            strId="income"
            strName="expense-type"
            strValue="income"
            strLabel="Income"
            onChange={(event) => setStrType(event.target.value)}
            bChecked={strType === 'income'}
          />
          <Radio
            strId="expense"
            strName="expense-type"
            strValue="expense"
            strLabel="Expense"
            onChange={(event) => setStrType(event.target.value)}
            bChecked={strType === 'expense'}
          />
        </Wrapper>
        <Button
          onClick={() => {
            const objExpense = {
              name: strName,
              price: strPrice,
              type: strType,
              date,
            };

            dispatch(
              actionAddExpense(objExpense, () => {
                setStrName('');
                setStrPrice('');
                setStrType('income');
                setDate(moment().format('YYYY-MM-DD'));
              })
            );
          }}
          color="#4c4"
          accent="#4c4"
          large
          disabled={
            lodash.isEmpty(strName) ||
            lodash.isEmpty(strPrice) ||
            !moment(date).isValid()
          }>
          Add
        </Button>
      </Wrapper>
    </Container>
  );
};

AddExpense.propTypes = {};

export default AddExpense;
