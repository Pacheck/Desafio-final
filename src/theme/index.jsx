import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  bgWhite: '#F6E9E9',
  bgDarker: '#272121',
  bgDark: '#363333',
  orange: '#E16428',
};

const GlobalThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default GlobalThemeProvider;
