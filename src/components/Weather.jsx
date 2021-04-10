import React, { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { Grid } from '@material-ui/core';
import FetchForecast from './FetchForecast';
import FetchWeather from './FetchWeather';
import Forecast from './Forecast';
import SearchBar from './SearchBar';
import Loading from './Loading';
import WeatherDetails from './WeatherDetails';

const Weather = () => {
  const [location, setLocation] = useState('San Francisco');

  const debounceSearch = useCallback(
    debounce(searchTerm => setLocation(searchTerm), 500)
  );

  const onLocationChange = e => {
    debounceSearch(e.target.value);
  };

  const weather = FetchWeather(location);
  const forecast = FetchForecast(location);
  if (weather && forecast) {
    console.log(weather);
    console.log(forecast);
    return (
      <Grid container direction="row" spacing={1}>
        {/* Gutter */}
        <Grid item xs={false} sm={1} />
        {/* Content */}
        <Grid item container xs={12} sm={10}>
          <Grid item xs={8}>
            <WeatherDetails {...weather} />
          </Grid>
          <Grid item xs={4}>
            <SearchBar {...{ onLocationChange }} />
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
