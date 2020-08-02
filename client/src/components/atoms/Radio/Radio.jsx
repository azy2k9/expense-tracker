import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 0 0.5rem;
`;

const Input = styled.input`
  &[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  &[type='radio']:focus + label {
    border: 2px solid #444;
  }

  &[type='radio']:checked + label {
    background-color: #bfb;
    border-color: #4c4;
  }

  &[type='radio']:active + label {
    box-shadow: 3px 3px #666;
    transform: translateY(3px) translateX(3px);
  }
`;

const Label = styled.label`
  display: inline-block;
  background-color: #f79090;
  padding: 10px 20px;
  border: 2px solid #cc0f0f;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: #dfd;
  }
`;

const Radio = ({
  bChecked = false,
  onClick,
  strLabel,
  strId,
  strValue,
  strName,
}) => {
  return (
    <Container>
      <Input
        type="radio"
        checked={bChecked}
        label={strLabel}
        id={strId}
        value={strValue}
        name={strName}
        onClick={onClick}
      />
      <Label htmlFor={strId}>{strLabel}</Label>
    </Container>
  );
};

Radio.defaultProps = {
  bChecked: false,
};

Radio.propTypes = {
  bChecked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  strLabel: PropTypes.string.isRequired,
  strId: PropTypes.string.isRequired,
  strValue: PropTypes.string.isRequired,
  strName: PropTypes.string.isRequired,
};

export default Radio;
