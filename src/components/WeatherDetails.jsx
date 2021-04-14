import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import RenderWeatherIcon from './RenderWeatherIcon';

const WeatherDetails = props => {
  console.log(props);
  const {
    condition,
    description,
    feelsLike,
    humidity,
    location,
    sunrise,
    sunset,
    temperature,
    windSpeed,
    formattedDay,
    formattedDate,
    formattedTime,
    isDay,
    convertedCountry
  } = props;

  return (
    <Grid container>
      {/* Location & Date Information */}
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography variant="h5">{location},<br />{convertedCountry}</Typography>
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
        <Box pt="2rem">
          <Typography variant="h1" component="h2">
            {temperature}&deg;F
          </Typography>
          <Box pl=".5rem">
            <Typography variant="body1" component="p">
              Feels Like: {feelsLike}&deg;F
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Humidity: {humidity} %
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Wind: {windSpeed} mph
            </Typography>
          </Box>
        </Box>
      </Grid>
      {/* Current Weather Icon */}
      <Grid item xs={6}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          height="100%"
          pb="1rem"
        >
          <Typography style={{ fontSize: '9rem', lineHeight: '0' }}>
            <RenderWeatherIcon condition={condition} isDay={isDay} />
          </Typography>
        </Box>
      </Grid>
      {/* Current Weather Description */}
      <Grid item xs={12}>
        <Box textAlign="center" py="1rem">
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
