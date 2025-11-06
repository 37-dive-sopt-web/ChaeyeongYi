import { useState, useEffect } from "react";

const useTimer = (initialTime = 45) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [stopTime, setStopTime] = useState(null);
  const handleTimerActive = () => {
    setIsActive(true);
  };

  const resetTimer = (goalTime) => {
    setTime(goalTime);
    setIsActive(false);
  };

  const stopTimer = () => {
    setIsActive(false);
    setStopTime(time);
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

  return { time, handleTimerActive, resetTimer, stopTimer, stopTime };
};

export default useTimer;
