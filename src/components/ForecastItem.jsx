import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';



const ForecastItem = () => {
  return (
    <Card>
      <CardHeader
        title="Day Goes Here"
        subheader="Date Goes Here"
      />
      <Box textAlign="center">
        <WbSunnyIcon fontSize="large" />
      </Box>
      <CardContent>
        <Typography>Temperature Goes Here</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Forecast Information Goes Here</Typography>
      </CardContent>
    </Card>
  );
}

export default ForecastItem;
