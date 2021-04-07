import React from 'react';
import { Box, Grid } from '@material-ui/core';
import ForecastItem from './ForecastItem';

const Forecast = () => {
  const tempProps = {
    day: 'Monday',
    date: 'April 7th',
    description: 'Sunny',
    icon: 'sun',
    temperature: '70*',
    weather: 'Sunny'
  }

  return (
    <Box flexGrow={1} mt={"2rem"}>
      <Grid container>
        {/* Forecast Content */}
        <Grid item container spacing={1}>
          {/* Forecast Items */}
          <Grid item xs>
            <ForecastItem {...tempProps} />
          </Grid>
          <Grid item xs>
            <ForecastItem {...tempProps} />
          </Grid>
          <Grid item xs>
            <ForecastItem {...tempProps} />
          </Grid>
          <Grid item xs>
            <ForecastItem {...tempProps} />
          </Grid>
          <Grid item xs>
            <ForecastItem {...tempProps} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Forecast;
