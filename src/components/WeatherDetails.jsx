import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import RenderWeatherIcon from './RenderWeatherIcon';

const WeatherDetails = props => {
  console.log(props);
  const {
    condition,
    country,
    description,
    feels_like,
    humidity,
    location,
    sunrise,
    sunset,
    temperature,
    wind_speed,
    formattedDay,
    formattedDate,
    formattedTime,
  } = props;

  return (
    <Grid container>
      {/* Location & Date Information */}
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography variant="h5">{location}, {country}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box textAlign="right">
            <Typography variant="h5" component="p">
              {formattedDay}, {formattedDate}<br />{formattedTime}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* Current Weather Information */}
      <Grid item xs={6}>
        <Box pt="1rem">
          <Typography variant="h1" component="h2">
            {temperature}&deg;F
            </Typography>
          <Box pl=".5rem">
            <Typography variant="body1" component="p">
              Feels Like: {feels_like}&deg;F
              </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Humidity: {humidity} %
              </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Wind: {wind_speed} mph
              </Typography>
          </Box>
        </Box>
      </Grid>
      {/* Current Weather Icon */}
      <Grid item container xs={6}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <Typography variant="h1" style={{ fontSize: '12rem' }}>
            <RenderWeatherIcon id={condition} />
          </Typography>
        </Box>
      </Grid>
      {/* Current Weather Description */}
      <Grid item xs={12}>
        <Box textAlign="center" pl="1rem" py="1rem">
          <Typography variant="h5" component="p" style={{ textTransform: 'capitalize' }}>
            {description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default WeatherDetails;

// To do: Adjust heading levels for accessibility, display state instead of country if inside US
