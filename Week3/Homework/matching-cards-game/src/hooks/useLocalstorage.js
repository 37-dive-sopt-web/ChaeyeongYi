import { useState } from "react";

const useLocalstorage = (key) => {
  const [localStorageData, setLocalStorageData] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        localStorage.setItem(key, JSON.stringify([]));
        return [];
      }
      return JSON.parse(item);
    } catch {
      localStorage.setItem(key, JSON.stringify([]));
      return [];
    }
  });

  /* 
  {
    ranking_id: number,
    level: number,
    recorded_at: string,
    clear_time: number,
  }
*/
  const setLocalstorage = (value) => {
    setLocalStorageData((prev) => {
      const newValue = typeof value === "function" ? value(prev) : value;
      localStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    });
  };

  return [localStorageData, setLocalstorage];
};

export default useLocalstorage;
