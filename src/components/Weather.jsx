import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Grid } from '@material-ui/core';
import Forecast from './Forecast';
import WeatherDetails from './WeatherDetails';
import FetchWeather from './FetchWeather';

const Weather = () => {
  const weather = FetchWeather('San Francisco');
  if (weather) {
    return (
      <Grid container direction="row" spacing={1}>
        {/* Gutter */}
        <Grid item xs={false} sm={1} />
        {/* Content */}
        <Grid item container xs={12} sm={10}>
          <Grid item xs={12}>
            <WeatherDetails weather={weather} />
          </Grid>
          <Grid item xs={12}>
            <Forecast />
          </Grid>
        </Grid>
        {/* Gutter */}
        <Grid item xs={false} sm={1} />
      </Grid>
    );
  } else {
    return (
      <Box align="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
}

export default Weather;
