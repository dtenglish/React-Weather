import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash-es';
import { Box, Container, Divider, Grid, Paper } from '@material-ui/core';
import usePersistedState from '../hooks/usePersistedState';
import FetchForecast from './FetchForecast';
import FetchWeather from './FetchWeather';
import Forecast from './Forecast';
import SearchBar from './SearchBar';
import Loading from './Loading';
import WeatherDetails from './WeatherDetails';
import WeatherOptions from './WeatherOptions';

const Weather = () => {
  const [location, setLocation] = usePersistedState('location', 'San Francisco');
  const [lastSearch, setLastSearch] = usePersistedState('lastSearch', 'San Francisco');
  const [isMetric, setIsMetric] = usePersistedState('isMetric', false);
  const [error, setError] = useState(null);
  const weather = FetchWeather(location, isMetric, setError);
  const forecast = FetchForecast(location, isMetric, setError);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceLastSearch = useCallback(
    debounce(() => {
      setLastSearch(location);
    }, 500), [location]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(
    debounce(searchTerm => {
      setError(null);
      setLocation(searchTerm);
    }, 500), []
  );

  const onLocationChange = e => {
    debounceSearch(e.target.value);
  };

  useEffect(() => {
    if (error) {
      setLocation(lastSearch);
      debounceLastSearch.cancel();
    } else {
      debounceLastSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, location]);

  return (
    <Container disableGutters={true} maxWidth="sm" >
      <Box mt="2rem">
        <Paper>
          <Box px="2rem" pt="1.5rem" pb="1rem">
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12}>
                <SearchBar {...{ onLocationChange }} {...{ error }} />
              </Grid>
              {(weather && forecast) ? (
                <>
                  <Grid item xs={12}>
                    <WeatherDetails {...{ weather }} />
                    <Divider variant="middle" />
                  </Grid>
                  <Grid item xs={12}>
                    <Forecast {...{ forecast }} />
                    <Divider variant="middle" />
                  </Grid>
                  <Grid item xs={12}>
                    <WeatherOptions {...{ isMetric }} {...{ setIsMetric }} />
                  </Grid>
                </>
              ) : (
                <Loading />
              )}
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Weather;

// To do: improve light/dark mode colors
//        consider moving header into weather card?
//        adjustments for phone screens
//        add geocoding api
//        switch to one call weather API using lat/long
//        test on other browsers
