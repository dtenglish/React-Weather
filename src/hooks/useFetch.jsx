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
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, query, isMetric]);
  return { data };
}

export default useFetch;
