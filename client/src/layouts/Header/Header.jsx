import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${({ intFontSize }) =>
    intFontSize ? `${intFontSize}rem` : '3rem'};
  font-weight: bold;
  padding: 2rem 0px;
  color: ${({ strColor }) => strColor};
`;

const Header = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

Header.defaultProps = {
  strColor: 'black',
  intFontSize: 3,
};

Header.propTypes = {
  children: PropTypes.string || PropTypes.arrayOf(PropTypes.node),
  strColor: PropTypes.string,
};

export default Header;
