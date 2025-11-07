import { useState, useEffect } from "react";

const useTimer = (initialTime = 45) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const handleTimerActive = () => {
    setIsActive(true);
  };

  const resetTimer = (goalTime) => {
    setTime(goalTime);
    setIsActive(false);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (time <= 0 || !isActive) return;

    const timer = setInterval(() => {
      setTime((prev) => {
        const next = prev - 0.01;
        return Number(next.toFixed(2));
      });
    }, 10);

    return () => clearInterval(timer);
  }, [time, isActive]);

  return { time, handleTimerActive, resetTimer, stopTimer };
};

export default useTimer;
