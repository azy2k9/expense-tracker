import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../layouts/Wrapper';
import Card from '../../atoms/Card';

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
  return (
    <Card>
      <Wrapper
        strDirection="row"
        strJustifyContent="space-around"
        strAlignItems="center">
        <Wrapper>
          <Wrapper strDirection="column">
            <StatHeader>BALANCE</StatHeader>
            <Stat>£ 500</Stat>
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Wrapper strDirection="column">
            <StatHeader>INCOME</StatHeader>
            <Income>£ 1000</Income>
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Wrapper strDirection="column">
            <StatHeader>EXPENSE</StatHeader>
            <Expense>£ 500</Expense>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Card>
  );
};

Balance.propTypes = {};

export default Balance;
