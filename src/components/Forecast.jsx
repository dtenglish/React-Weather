import React from 'react';
import { Box, Grid } from '@material-ui/core';
import ForecastItem from './ForecastItem';

const Forecast = props => {
  const weatherData = {
    day: 'Monday',
    date: 'April 7th',
    description: 'Sunny',
    icon: 'sun',
    temperature: '70*',
    weather: 'Sunny'
  }

  console.log(props);

  return (
    <Box flexGrow={1} mt={"2rem"}>
      <Grid container>
        {/* Forecast Content */}
        <Grid item container spacing={1}>
          {/* Forecast Items */}
          <Grid item xs>
            <ForecastItem {...weatherData} />
          </Grid>
          <Grid item xs>
            <ForecastItem {...weatherData} />
          </Grid>
          <Grid item xs>
            <ForecastItem {...weatherData} />
          </Grid>
          <Grid item xs>
            <ForecastItem {...weatherData} />
          </Grid>
          <Grid item xs>
            <ForecastItem {...weatherData} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Forecast;
