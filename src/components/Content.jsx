import React from 'react';
import { Grid } from '@material-ui/core';
import Forecast from './Forecast';
import ForecastHeader from './ForecastHeader';

const Content = () => {
  return (
    <Grid container direction="row" spacing={1}>
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
  );
}

export default Content;