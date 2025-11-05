import { useState, useEffect } from "react";

const useTimer = (initialTime = 45) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  const handleTimerActive = () => {
    setIsActive(true);
  };

  useEffect(() => {
    if (time <= 0 || !isActive) return;

    const timer = setInterval(() => {
      setTime((prev) => {
        const next = prev - 0.1;
        return Number(next.toFixed(2));
      });
    }, 100);

    return () => clearInterval(timer);
  }, [time, isActive]);

  const resetTimer = (goalTime) => {
    console.log("resetTimer called with goalTime:", goalTime);
    setTime(goalTime);
    setIsActive(false);
  };

  return { time, handleTimerActive, resetTimer };
};

export default useTimer;
