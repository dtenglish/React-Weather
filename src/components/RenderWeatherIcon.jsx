import React from 'react';

const RenderWeatherIcon = props => {
  const iconClass = 'wi wi-owm-' + props.id;

  return (
    <i className={iconClass}></i>
  );
};

export default RenderWeatherIcon;
