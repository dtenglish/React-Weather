import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Content from './components/Content';
import Header from './components/Header';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Header */}
      <Header />
      {/* Body */}
      <Content />
    </React.Fragment>
  );
}

export default App;
