<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useEffect, useState } from 'react'
>>>>>>> origin

async function apiCall({ src, setLoading, setSuccess, setError }) {
  setLoading(true);
  const response = await fetch(src);

  if (response.ok) {
    const json = await response.json();
    setSuccess(json);
  } else {
<<<<<<< HEAD
    setError({ isError: !response.ok, code: response.code });
=======
    setError({ isError: !response.ok, status: response.code });
>>>>>>> origin
  }

  setLoading(false);
}

function useFetch({ initialState = null, src, dataKey = 'data', onError, onSuccess }) {
  const [data, setSuccess] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiCall({
      setSuccess: data => (onSuccess ? setSuccess(onSuccess(data)) : setSuccess(data)),
      setLoading,
      setError: data => (onError ? setError(onError(data)) : setError(data)),
      src,
    });
  }, [onError, onSuccess, src]);

<<<<<<< HEAD
  return { [dataKey]: data, loading, error };
}

export default useFetch;
=======
  return { [dataKey]: data, loading, error }
}

export default useFetch
>>>>>>> origin
