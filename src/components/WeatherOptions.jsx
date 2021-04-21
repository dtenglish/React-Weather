import React from 'react';
import { Box, FormControlLabel, Grid, Switch } from '@material-ui/core';
import RenderTemperatureUnit from './RenderTemperatureUnit';

const WeatherOptions = props => {
  const { isMetric, setIsMetric } = props;
  const label = RenderTemperatureUnit(isMetric);

  const handleChange = () => {
    setIsMetric(!isMetric);
  };

  return (
    <Box pr="2rem">
      <Grid container justify="flex-end">
        <Grid item xs={1}>
          <FormControlLabel
            control={
              <Switch
                checked={isMetric}
                onChange={handleChange}
                name="metricToggle"
              />
            }
            label={label}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherOptions;
