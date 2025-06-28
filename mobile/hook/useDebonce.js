import { useEffect } from "react";
import { useState } from "react";

export function useDebounce  (value, delay)  {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(handler);
  }, [delay, value]);
  return debounceValue;
};
