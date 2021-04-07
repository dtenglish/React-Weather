import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Forecast from './components/Forecast';
import ForecastHeader from './components/ForecastHeader';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container direction="column">
        {/* Header */}
        <Grid item>
          <Header />
        </Grid>
        {/* Body */}
        <Grid item container direction="row" spacing={1}>
          {/* Gutter */}
          <Grid item xs={false} sm={1} />
          {/* Content */}
          <Grid item container xs={12} sm={10}>
            <Grid item xs={12}>
              <ForecastHeader />
            </Grid>
            <Grid item xs={12}>
              <Forecast />
            </Grid>
          </Grid>
          {/* Gutter */}
          <Grid item xs={false} sm={1} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
