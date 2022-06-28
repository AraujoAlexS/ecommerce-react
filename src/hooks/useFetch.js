import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${BASE_URL}/${endPoint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [endPoint]);

  return { data, loading, error };
};

export default useFetch;
