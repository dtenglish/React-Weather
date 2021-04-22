import React from 'react';
import { Box, Typography } from '@material-ui/core';
import RenderWeatherIcon from './RenderWeatherIcon';

const ForecastItem = props => {
  const {
    condition,
    description,
    temperature,
    formattedDay,
    tempUnit,
  } = props;

  return (
    <Box textAlign="center">
      <Typography variant="h6">
        {formattedDay}
      </Typography>
      <Box my=".5rem">
        <Typography variant="h3" color="secondary">
          <RenderWeatherIcon condition={condition} />
        </Typography>
      </Box>
      <Typography variant="h5">{temperature}{tempUnit}</Typography>
      {/* <Typography variant="body2" color="textSecondary" component="p" style={{ textTransform: 'capitalize' }}>{description}</Typography> */}
    </Box>
  );
}

export default ForecastItem;

// to do: include description in phone list style format
