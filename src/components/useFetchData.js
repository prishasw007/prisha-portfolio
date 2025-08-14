import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(url, transformData, onSuccess, enabled = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasExecuted, setHasExecuted] = useState(false);
  const [onSuccessCalled, setOnSuccessCalled] = useState(false);

  useEffect(() => {
    if (!enabled) {
      // Reset execution when disabled
      setHasExecuted(false);
      setOnSuccessCalled(false);
      return;
    }

    // Only execute if not already done
    if (hasExecuted) return;

    const controller = new AbortController(); // For cleanup/cancel

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url, { signal: controller.signal });
        let fetchedData = response.data;

        if (transformData) {
          fetchedData = transformData(fetchedData);
        }

        setData(fetchedData);
        setLoading(false);
        setHasExecuted(true);

        if (onSuccess && !onSuccessCalled) {
          setOnSuccessCalled(true);
          onSuccess();
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err.message || "Error fetching data");
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Cancel ongoing request on unmount
    };
  }, [url, transformData, onSuccess, enabled, hasExecuted, onSuccessCalled]);

  return { data, loading, error };
}

export default useFetchData;
