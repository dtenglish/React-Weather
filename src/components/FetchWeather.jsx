import dayjs from 'dayjs';
import useFetch from '../hooks/useFetch';
import ConvertCountryCode from './ConvertCountryCode';
import ConvertTimestamp from './ConvertTimestamp';

// Required for Day.js advanced formatting
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

// Use useFetch hook to pull weather data from OpenWeather API
const FetchWeather = query => {
  const weather = useFetch('weather', query);

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
      isDay: data.timestamp > data.sunrise && data.timestamp < data.sunset,
    }

    return mapped;
  }

  if (weather.data) {
    return mapWeatherData(weather.data);
  }
}

export default FetchWeather;
