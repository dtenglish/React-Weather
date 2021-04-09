import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core'
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const WeatherDetails = props => {
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
    timestamp,
    timezone,
    wind_speed,
    formattedDay,
    formattedDate,
    formattedTime,
  } = props.weather;

  return (
    <Box flexGrow={1} mt="2rem">
      <Grid container>
        {/* Current Weather Basic Information */}
        <Grid item container alignItems="center" xs={4}>
          <Grid item xs={6}>
            <WbSunnyIcon fontSize="large" />
            <Typography variant="h3" component="h2" display="inline">
              {temperature}&deg;F
            </Typography>
          </Grid>
          {/* Current Weather Detailed Information */}
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              Humidity: {humidity} %
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Wind: {wind_speed} mph
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="textSecondary" component="p">
              Feels like: {feels_like}&deg;F
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" style={{ textTransform: 'capitalize' }}>
              {description}
            </Typography>
          </Grid>
        </Grid>
        {/* Center Gutter */}
        <Grid item xs={4} />
        {/* Location & Date Information */}
        <Grid item xs={4}>
          <Box textAlign="right">
            <Typography variant="h6">{location}</Typography>
            <Typography variant="h6">{country}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {formattedDay} {formattedDate} {formattedTime}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WeatherDetails;

// To do: Adjust heading levels for accessibility
