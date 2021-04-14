const RenderTemperatureUnit = isMetric => {
  let tempUnit = '°F';

  if (isMetric === true) {
    tempUnit = '°C';
  }

  return tempUnit;
};

export default RenderTemperatureUnit;
