import React from 'react';
import { Box, Grid } from '@material-ui/core';
import ForecastItem from './ForecastItem';

const Forecast = props => {
  const forecastData = props;

  console.log(forecastData);

  return (
    <Box flexGrow={1} mt={"2rem"}>
      <Grid container>
        {/* Forecast Content */}
        <Grid item container spacing={1}>
          {/* Forecast Items */}
          <Grid item xs>
            <ForecastItem {...forecastData[0]} />
          </Grid>
          <Grid item xs>
            <ForecastItem {...forecastData[1]} />
          </Grid>
          <Grid item xs>
            <ForecastItem {...forecastData[2]} />
          </Grid>
          <Grid item xs>
            <ForecastItem {...forecastData[3]} />
          </Grid>
          <Grid item xs>
            <ForecastItem {...forecastData[4]} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Forecast;
