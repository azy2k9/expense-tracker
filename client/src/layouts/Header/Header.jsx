import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  padding: 2rem 0px;
`;

const Header = ({ children }) => {
  return <Container>{children}</Container>;
};

Header.propTypes = {
  children: PropTypes.string || PropTypes.arrayOf(PropTypes.node),
};

export default Header;
