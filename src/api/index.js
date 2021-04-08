import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL: URL,
  params: {
    appid: KEY,
    units: 'imperial'
  }
});
