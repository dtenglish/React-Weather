import React, { useCallback, useState } from 'react';
import debounce from 'lodash-es/debounce';
import { Box, Divider, Container, Grid } from '@material-ui/core';
import FetchForecast from './FetchForecast';
import FetchWeather from './FetchWeather';
import Forecast from './Forecast';
import SearchBar from './SearchBar';
import Loading from './Loading';
import WeatherDetails from './WeatherDetails';

const Weather = () => {
  const [location, setLocation] = useState('San Francisco');

  const weather = FetchWeather(location);
  const forecast = FetchForecast(location);

  const debounceSearch = useCallback(
    debounce(searchTerm => setLocation(searchTerm), 500), []
  );

  const onLocationChange = e => {
    debounceSearch(e.target.value);
  };

  if (weather && forecast) {
    console.log(weather);
    console.log(forecast);
    return (
      <Container maxWidth="sm">
        <Box mt="2rem">
          <Grid container direction="row" spacing={2}>
            {/* Details & Search */}
            <Grid item xs={12}>
              <SearchBar {...{ onLocationChange }} />
            </Grid>
            <Grid item xs={12}>
              <WeatherDetails {...weather} />
              <Divider variant="middle" />
            </Grid>
            {/* Forecast */}
            <Grid item xs={12}>
              <Forecast forecast={forecast} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  } else {
    return (
      <Loading />
    );
  }
}

export default Weather;

// To do: add toggles for dark/light mode, measurement units
