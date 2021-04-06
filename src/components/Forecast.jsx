import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ForecastItem from './ForecastItem';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '2rem 0 0 0',
    flexGrow: 1
  }
}));

const Forecast = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        {/* Gutter */}
        <Grid item xs={false} sm={1} />
        {/* Forecast Items */}
        <Grid item container xs={12} sm={10} spacing={1}>
          <Grid item xs>
            <ForecastItem />
          </Grid>
          <Grid item xs>
            <ForecastItem />
          </Grid>
          <Grid item xs>
            <ForecastItem />
          </Grid>
          <Grid item xs>
            <ForecastItem />
          </Grid>
          <Grid item xs>
            <ForecastItem />
          </Grid>
        </Grid>
        {/* Gutter */}
        <Grid item xs={false} sm={1} />
      </Grid>
    </div>
  );
}

export default Forecast;
