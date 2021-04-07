import axios from 'axios';

const KEY = '662cdc0a54eb4a5851239e3d4566183f';

export default axios.create({
  baseURL: 'api.openweathermap.org/data/2.5/forecast',
  params: {
    zip: '94102',
    appid: KEY
  }
});
