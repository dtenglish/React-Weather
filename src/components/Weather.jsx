import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import FetchForecast from './FetchForecast';
import FetchWeather from './FetchWeather';
import Forecast from './Forecast';
import Loading from './Loading';
import WeatherDetails from './WeatherDetails';

const Weather = () => {
  const weather = FetchWeather('San Francisco');
  const forecast = FetchForecast('San Francisco');
  if (weather && forecast) {
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
            <Forecast forecast={forecast} />
          </Grid>
        </Grid>
        {/* Gutter */}
        <Grid item xs={false} sm={1} />
      </Grid>
    );
  } else {
    return (
      <Loading />
    );
  }
}

export default Weather;
