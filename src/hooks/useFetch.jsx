import { useEffect, useState } from 'react';
import API from '../api';

const useFetch = (path, query) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/${path}?q=${query}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [query]);
  return { data, error };
}

export default useFetch;
