import { useEffect, useState } from 'react';
import API from '../api';

const useFetch = (query) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const { data } = await API.get(`/weather?q=${query}`);
        setData(data);
        // setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);
  // return { data, error, isLoading };
  return { data, error };
}

export default useFetch;
