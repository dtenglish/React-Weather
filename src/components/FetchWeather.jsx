import useFetch from '../hooks/useFetch';

const mapWeatherData = data => {
  console.log(data);
  const mapped = {
    condition: data.cod,
    country: data.sys.country,
    date: data.dt,
    description: data.weather[0].description,
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    location: data.name,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    temperature: Math.round(data.main.temp),
    timezone: data.timezone,
    wind_speed: Math.round(data.wind.speed),
  }
  return mapped;
}

const FetchWeather = location => {
  const weather = useFetch(location);
  if (weather.data) {
    return mapWeatherData(weather.data);
  }
}

export default FetchWeather;
