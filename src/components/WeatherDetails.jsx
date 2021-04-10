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
        {/* Current Weather Basic Information */}
        <Grid item container xs={6}>
          <Grid item container xs={6}>
            <Box textAlign="center">
              <Typography variant="h2">
                <RenderWeatherIcon id={condition} />
              </Typography>
            </Box>
            <Grid item>
              <Typography variant="h3" component="h2" display="inline">
                {temperature}&deg;F
            </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Feels Like: {feels_like}&deg;F
            </Typography>
            </Grid>
          </Grid>
          {/* Current Weather Detailed Information */}
          <Grid item xs={6}>
            <Typography variant="h6" component="p" style={{ textTransform: 'capitalize' }}>
              {description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Humidity: {humidity} %
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Wind: {wind_speed} mph
          </Typography>
          </Grid>
        </Grid>
        {/* Location & Date Information */}
        <Grid item xs={6}>
          <Box textAlign="right">
            <Typography variant="h4">{location}, {country}</Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {formattedDay}, {formattedDate}
            </Typography>
            <Typography variant="h5" component="p">{formattedTime}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WeatherDetails;

// To do: Adjust heading levels for accessibility
