import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import usePersistedState from './hooks/usePersistedState';
import { createTheme } from './Theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Weather from './components/Weather';


const App = () => {
  const [darkMode, setDarkMode] = usePersistedState('darkMode', false);
  const theme = createTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header {...{ darkMode }} {...{ setDarkMode }} />
      <Weather />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
