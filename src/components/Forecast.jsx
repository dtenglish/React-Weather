import React from 'react';
import { Box, Grid } from '@material-ui/core';
import ForecastItem from './ForecastItem';

const Forecast = () => {
  return (
    <Box flexGrow={1} mt={"2rem"}>
      <Grid container>
        {/* Forecast Content */}
        <Grid item container spacing={1}>
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
      </Grid>
    </Box>
  );
}

export default Forecast;
