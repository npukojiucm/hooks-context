import { useEffect, useState } from "react";

export default function apiHook(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (url) => {
      setData(null);
      setError(null);

      setLoading("Loading....");

      try {
        const res = await fetch(url, {signal: controller.signal});
        const data = await res.json();

        if (res.status === 500) {
          return setError(`Error: Status ${res.status} - ${res.statusText}`);
        }

        setData({ ...data });
      } catch (e) {
        console.log(e);
      }
    };
    if (url !== null) fetchData(url);

    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
}
