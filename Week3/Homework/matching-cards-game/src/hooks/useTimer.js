import { useState, useEffect } from "react";
import { LEVEL_TIMER } from "../constants/constants";
const useTimer = (initialTime) => {
  const [time, setTime] = useState(initialTime || LEVEL_TIMER[1]);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
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

  return { time, startTimer, resetTimer, stopTimer };
};

export default useTimer;
