import React from 'react';
import { useStyles } from '../theme'

const RenderWeatherIcon = (props) => {
  const { condition, isDay } = props;
  const classes = useStyles();
  let iconClass = '';
  if (isDay === true) {
    iconClass = `wi wi-owm-day-${condition}`;
  } else if (isDay === false) {
    iconClass = `wi wi-owm-night-${condition}`;
  } else if (isDay === undefined || null) {
    iconClass = `wi wi-owm-${condition}`;
  } else {
    iconClass = `wi wi-owm-${condition}`;
    console.warn("Unexpected value of isDay:" + isDay);
  }
  return (
    <i className={`${iconClass} ${classes.animatedText}`}></i>
  );
};

export default RenderWeatherIcon;
