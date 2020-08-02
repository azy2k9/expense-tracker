import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  margin: 0.5rem;
  padding: ${({ large }) => (large ? '1rem 2rem' : '0.5rem 1rem')};
  cursor: pointer;
  background-color: white;
  color: ${({ color }) => color};
  transition: 0.1s all;
  border-color: ${({ accent }) => accent};
  border-radius: 4px;

  &:hover {
    color: white;
    background-color: ${({ accent }) => accent};
  }

  &:active {
    box-shadow: 3px 3px #666;
    transform: translateY(3px) translateX(3px);
  }
`;

const Button = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

Button.propTypes = {};

export default Button;
