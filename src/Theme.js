import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';

const theme = {
  colors: {
    pink: '#fc185a',
    green: '#05e591',
    purple: '#6805df',
    yellow: '#fcdc00',
    white: '#FFFFFF',
    black: '#000000',
    orange: '#dd6e2b',
    textColorPrimary: '#19063d',
    backgroundColorGeneral: '#FFFFFF',
    backgroundColorService: '#f3f4f6',
  },
  fontSizes: {
    mSmall: '1.3em',
    small: '1.6em',
    medium: '2em',
    xMedium: '2.5em',
    large: '3em',
  },
  margin: {
    marginElement: '0px',
  },
  sizeDevice: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
