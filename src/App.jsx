import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './theme';
import Weather from './components/Weather';
import Header from './components/Header';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Header */}
      <Header />
      {/* Body */}
      <Weather />
    </ThemeProvider>
  );
}

export default App;
