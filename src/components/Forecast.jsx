import React from 'react';
import { Box, Grid } from '@material-ui/core';
import ForecastItem from './ForecastItem';

const Forecast = props => {
  const forecastArray = props.forecast;

  const getForecastItem = forecastData => {
    return (
      <Grid item xs key={forecastData.timestamp}>
        <ForecastItem {...forecastData} />
      </Grid>
    );
  }

  return (
    <Grid container>
      {/* Forecast Content */}
      <Grid item container spacing={1}>
        {/* Forecast Items */}
        {forecastArray.map(forecastData => getForecastItem(forecastData))}
      </Grid>
    </Grid>
  );
};

export default Forecast;
