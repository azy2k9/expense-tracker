import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: ${({ strDirection }) => strDirection};
  justify-content: ${({ strJustifyContent }) => strJustifyContent};
  justify-items: ${({ strJustifyItems }) => strJustifyItems};
  justify-self: ${({ strJustifySelf }) => strJustifySelf};
  align-items: ${({ strAlignItems }) => strAlignItems};
  align-content: ${({ strAlignContent }) => strAlignContent};
  align-self: ${({ strAlignSelf }) => strAlignSelf};
  padding: ${({ strPadding }) => strPadding};
  min-height: ${({ bFullscreen, remFullscreenOffset }) =>
    bFullscreen && `calc(100vh - ${remFullscreenOffset}rem);`};
  min-width: ${({ bFullscreen }) => bFullscreen && '100vw'};
  text-align: center;
`;

const Wrapper = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

Wrapper.defaultProps = {
  strDirection: '',
  strJustifyContent: '',
  strJustifyItems: '',
  strJustifySelf: '',
  strAlignItems: '',
  strAlignContent: '',
  strAlignSelf: '',
  strPadding: '',
  remFullscreenOffset: 0,
  bFullscreen: false,
};

Wrapper.propTypes = {
  bFullscreen: PropTypes.bool,
  remFullscreenOffset: PropTypes.number,
  strDirection: PropTypes.string,
  strJustifyContent: PropTypes.string,
  strJustifyItems: PropTypes.string,
  strJustifySelf: PropTypes.string,
  strAlignItems: PropTypes.string,
  strAlignContent: PropTypes.string,
  strAlignSelf: PropTypes.string,
  strPadding: PropTypes.string,
};

export default Wrapper;
