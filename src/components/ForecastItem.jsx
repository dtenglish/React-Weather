import React from 'react';
import { Box, Typography } from '@material-ui/core';
import RenderWeatherIcon from './RenderWeatherIcon';

const ForecastItem = props => {
  const {
    condition,
    description,
    temperature,
    formattedDay,
    formattedDate,
  } = props;

  return (
    <Box textAlign="center">
      <Typography variant="h6">
        {formattedDay}
      </Typography>
      {/* <Typography variant="body1">
          {formattedDate}
        </Typography> */}
      <Typography variant="h5">{temperature}&deg;F</Typography>
      <Box my=".5rem">
        <Typography variant="h3">
          <RenderWeatherIcon id={condition} />
        </Typography>
      </Box>
      <Typography variant="body2" color="textSecondary" component="p" style={{ textTransform: 'capitalize' }}>{description}</Typography>
    </Box>
    /* <Grid item xs>
          <Typography variant="h4">{temperature}&deg;F</Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ textTransform: 'capitalize' }}>{description}</Typography>
        </Grid> */
  );
}

export default ForecastItem;
