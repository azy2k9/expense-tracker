import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  border-bottom: 1px solid black;
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
`;

const Title = ({ children }) => {
  return <Container>{children}</Container>;
};

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
