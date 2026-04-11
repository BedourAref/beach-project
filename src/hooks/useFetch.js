import { useCallback, useEffect, useState } from "react";

function useFetch(fetcher) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");
      const responseData = await fetcher();
      setData(responseData);
    } catch (requestError) {
      setError(
        requestError?.message || "Unexpected error while fetching data.",
      );
    } finally {
      setIsLoading(false);
    }
  }, [fetcher]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { data, isLoading, error, refetch: loadData };
}

export default useFetch;
