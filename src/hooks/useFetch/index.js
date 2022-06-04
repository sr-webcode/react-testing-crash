import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(() => true);
    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw Error('Failed to fetch data.');
        return res.json();
      })
      .then((res) => setData(() => res))
      .catch((err) => {
        setError(() => err.message);
      })
      .finally(() => setLoading(() => false));
  }, [url]);

  return {
    data,
    error,
    loading
  };
};

export default useFetch;
