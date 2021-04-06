import React from 'react';
import { Box, Grid } from '@material-ui/core';
import ForecastHeader from './ForecastHeader';
import ForecastItem from './ForecastItem';

const Forecast = () => {
  return (
    <Box flexGrow={1} mt={"2rem"}>

      <Grid container>
        {/* Gutter */}
        <Grid item xs={false} sm={1} />
        {/* Forecast Content */}
        <Grid item container xs={12} sm={10} spacing={1}>
          {/* Forecast Header */}
          <Grid item xs={12}>
            <ForecastHeader />
          </Grid>
          {/* Forecast Items */}
          <Grid item xs>
            <ForecastItem />
          </Grid>
          <Grid item xs>
            <ForecastItem />
          </Grid>
          <Grid item xs>
            <ForecastItem />
          </Grid>
          <Grid item xs>
            <ForecastItem />
          </Grid>
          <Grid item xs>
            <ForecastItem />
          </Grid>
        </Grid>
        {/* Gutter */}
        <Grid item xs={false} sm={1} />
      </Grid>
    </Box>
  );
}

export default Forecast;
