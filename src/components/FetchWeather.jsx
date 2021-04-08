import useFetch from '../hooks/useFetch';

const mapWeatherData = data => {
  const mapped = {
    location: data.name,
    condition: data.cod,
    country: data.sys.country,
    date: data.dt,
    description: data.weather[0].id,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    temperature: Math.round(data.main.temp),
    timezone: data.timezone,
    wind_speed: Math.round(data.wind.speed),
  }
  console.log(mapped);
  return mapped;
}

const FetchWeather = location => {
  const weather = useFetch(location);
  if (weather.data) {
    return mapWeatherData(weather.data);
  }
}

export default FetchWeather;
