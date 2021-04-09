import React from 'react';
import { Box, Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const ForecastItem = props => {
  console.log(props);
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
        <WbSunnyIcon fontSize="large" />
      </Box>
      <CardContent>
        <Typography variant="h2">{temperature}&deg;F</Typography>
        {/* To do: Add Real Feel Temp */}
        <Typography variant="body2" color="textSecondary" component="p" style={{ textTransform: 'capitalize' }}>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default ForecastItem;
