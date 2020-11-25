import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from '../../../layouts/Wrapper';

const InputContainer = styled.input`
  padding: 1.2rem;
  width: ${({ strWidth }) => strWidth};
  ${({ adornment }) =>
    adornment
      ? `
    margin: 0.5rem 0rem;
    border-top: 1px;
    border-bottom: 1px;
    border-right: 1px;
    border-left: 0px;
    border-color: black;
    border-style: solid;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  `
      : `
  margin: 0.5rem;
  border: 1px solid black;
  border-radius: 4px;
  `};

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

const Adornment = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 1.2rem 1rem;
  margin: 0.5rem 0rem;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: lightgrey;
  border-top: 1px;
  border-bottom: 1px;
  border-left: 1px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
`;

const Input = (props) => {
  if (props.adornment) {
    return (
      <Wrapper>
        {props.adornment && <Adornment>{props.adornment}</Adornment>}
        <InputContainer {...props} />
      </Wrapper>
    );
  }

  return (
    <>
      <InputContainer {...props} />
    </>
  );
};

Input.defaultProps = {
  placeholder: 'Name',
  strWidth: '',
  adornment: null,
};

Input.propTypes = {
  adornment: PropTypes.node,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  strWidth: PropTypes.string,
};

export default Input;
