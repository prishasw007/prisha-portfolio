import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(url, transformData, delay = 0) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        if(delay) await new Promise(res => setTimeout(res, delay)); // delay if passed
        const res = await axios.get(url);
        let fetchedData = res.data;

        if (transformData) {
          fetchedData = transformData(fetchedData);
        }

        if (isMounted) {
          setData(fetchedData);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Error fetching data");
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, transformData, delay]);

  return { data, loading, error };
}

export default useFetchData;
