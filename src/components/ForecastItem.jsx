import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from '../Theme'
import RenderWeatherIcon from './RenderWeatherIcon';

const ForecastItem = props => {
  const classes = useStyles();
  const {
    condition,
    description,
    temperature,
    formattedDay,
    tempUnit,
  } = props;

  return (
    <Box textAlign="center">
      <Typography variant="h3">
        {formattedDay}
      </Typography>
      <Box mt=".25rem" mb=".5rem">
        <Typography className={classes.iconSecondary}>
          <RenderWeatherIcon condition={condition} />
        </Typography>
      </Box>
      <Typography variant="h4">{temperature}{tempUnit}</Typography>
      {/* <Typography variant="body2" color="textSecondary" component="p" style={{ textTransform: 'capitalize' }}>{description}</Typography> */}
    </Box>
  );
}

export default ForecastItem;

// to do: include description in phone list style format
