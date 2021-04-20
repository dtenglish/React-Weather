import { useEffect, useState } from 'react';
import API from '../api';

const useFetch = (path, query, isMetric, setError) => {
  const [data, setData] = useState(null);
  const units = isMetric !== true
    ? 'imperial'
    : 'metric'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/${path}?q=${query}&units=${units}`);
        setData(response.data);
        // setError(null);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [path, query, isMetric, units]);
  return { data };
}

export default useFetch;
