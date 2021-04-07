import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Weather from './components/Weather';
import Header from './components/Header';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Header */}
      <Header />
      {/* Body */}
      <Weather />
    </React.Fragment>
  );
}

export default App;
