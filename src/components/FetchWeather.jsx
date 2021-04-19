import dayjs from 'dayjs';
import useFetch from '../hooks/useFetch';
import ConvertCountryCode from './ConvertCountryCode';
import ConvertTimestamp from './ConvertTimestamp';
import RenderTemperatureUnit from './RenderTemperatureUnit';

// Required for Day.js advanced formatting
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

// Use useFetch hook to pull weather data from OpenWeather API
const FetchWeather = (query, isMetric) => {
  const weather = useFetch('weather', query, isMetric);

  // Map API weather data to more usable format
  const mapWeatherData = data => {
    const convertedTimestamp = ConvertTimestamp(data.dt, data.timezone);

    const mapped = {
      condition: data.weather[0].id,
      country: data.sys.country,
      description: data.weather[0].description,
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      location: data.name,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      temperature: Math.round(data.main.temp),
      timestamp: data.dt,
      timezone: data.timezone,
      windSpeed: Math.round(data.wind.speed),
      convertedCountry: ConvertCountryCode(data.sys.country),
      formattedDay: dayjs(convertedTimestamp).format('dddd'),
      formattedDate: dayjs(convertedTimestamp).format('MMM Do'),
      formattedTime: dayjs(convertedTimestamp).format('h:mm A'),
      isDay: data.dt > data.sys.sunrise && data.dt < data.sys.sunset,
      tempUnit: RenderTemperatureUnit(isMetric),
      speedUnit: isMetric !== true ? 'mph' : 'kph'
    }

    return mapped;
  }

  if (weather.data) {
    return mapWeatherData(weather.data);
  }
}

export default FetchWeather;
