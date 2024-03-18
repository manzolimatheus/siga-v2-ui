import { useEffect, useState } from "react";

export default function useSessionStorage(key) {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const data = sessionStorage.getItem(key);
    if (data) {
      setData(JSON.parse(data));
    }
  }, []);

  return data;
}
