import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const ForecastItem = () => {
  return (
    <Card>
      <CardHeader
        title="Day Goes Here"
        subheader="Date Goes Here"
      />
      <WbSunnyIcon />
      <CardContent></CardContent>
      <Typography>Temperature Goes Here</Typography>
      <Typography variant="body2" color="textSecondary" component="p">Forecast Information Goes Here</Typography>
    </Card>
  );
}

export default ForecastItem;
