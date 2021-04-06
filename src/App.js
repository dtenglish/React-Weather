import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Forecast from './components/Forecast';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container direction="column">
        {/* Header Row */}
        <Grid item>
          <Header />
        </Grid>
        {/* Content Row */}
        <Grid item container>
          <Forecast />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
