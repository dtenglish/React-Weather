import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const ForecastItem = (props) => {
  const { day, date, description, icon, temperature, weather } = props;
  return (
    <Card>
      <CardHeader
        title={day}
        subheader={date}
      />
      <Box textAlign="center">
        <WbSunnyIcon fontSize="large" />
      </Box>
      <CardContent>
        <Typography variant="h2">{temperature}</Typography>
        {/* To do: Add Real Feel Temp */}
        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default ForecastItem;
