import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
  margin: 16px;
  text-align: center;
  width: 60%;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s box-shadow;
  &:hover {
    transition: 0.5s box-shadow;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

Card.propTypes = {
  children: React.Component || PropTypes.arrayOf(React.Component).isRequired,
};

export default Card;
