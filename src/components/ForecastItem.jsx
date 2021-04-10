import React from 'react';
import { Box, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
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
    <Card>
      <CardHeader
        title={formattedDay}
        subheader={formattedDate}
      />
      <Box textAlign="center">
        <Typography variant="h4">
          <RenderWeatherIcon id={condition} />
        </Typography>
      </Box>
      <CardContent>
        <Typography variant="h4">{temperature}&deg;F</Typography>
        {/* To do: Add Real Feel Temp */}
        <Typography variant="body2" color="textSecondary" component="p" style={{ textTransform: 'capitalize' }}>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default ForecastItem;
