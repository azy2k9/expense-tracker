import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.input`
  padding: 1.2rem;
  margin: ${({ type }) => (type === 'text' ? '0.5rem' : '')};
  border: 1px solid black;
  border-radius: 4px;

  &:hover {
    transition: 0.2s box-shadow;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  &:focus {
    border-color: lightgrey;
    box-shadow: 0px 0px 5px 2px rgba(21, 194, 27, 1);
    transition: 0.2s box-shadow;
  }

  ::-webkit-input-placeholder {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
  }
`;

const Input = (props) => {
  return <Container {...props} />;
};

Input.defaultProps = {
  placeholder: 'Name',
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
