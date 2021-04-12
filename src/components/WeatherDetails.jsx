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
    <Box mt={"1rem"}>
      <Grid container>
        {/* Weather Icon */}
        <Grid item container xs={3}>
          <Box textAlign="center" pl="1rem">
            <Typography variant="h1">
              <RenderWeatherIcon id={condition} />
            </Typography>
            <Typography variant="h6" component="p" style={{ textTransform: 'capitalize' }}>
              {description}
            </Typography>
          </Box>
        </Grid>
        {/* Current Weather Basic Information */}
        <Grid item xs={3}>
          <Box pt="1rem">
            <Typography variant="h3" component="h2">
              {temperature}&deg;F
            </Typography>
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
        </Grid>
        {/* Weather Detailed Information */}

        {/* Location & Date Information */}
        <Grid item xs={6}>
          <Box textAlign="right" pr="1rem" pt="1rem">
            <Typography variant="h4">{location}, {country}</Typography>
            <Typography variant="h5" component="p">
              {formattedDay}, {formattedDate}
            </Typography>
            <Typography variant="h5" component="p">{formattedTime}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box >
  );
}

export default WeatherDetails;

// To do: Adjust heading levels for accessibility, display state instead of country if inside US
