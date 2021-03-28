import React, { useEffect, useState } from "react";

export function extractApiData(url) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch(url)
      .then((response) => response.json())
      .then((data) => (mounted ? setData(data) : null))
      .catch((error) => (mounted ? setError(true) : null))
      .finally(() => (mounted ? setLoading(false) : null));
    return () => {
      mounted = false;
    };
  }, []);
  return { isLoading, data, isError };
}
