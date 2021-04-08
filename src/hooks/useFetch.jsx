import { useEffect, useState } from 'react';
import API from '../api';

const useFetch = (query) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/weather?q=${query}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);
  return { data, error };
}

export default useFetch;
