import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer = () => {
  const WORK_DURATION = 25 * 60; // 25 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(WORK_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  // Format seconds into MM:SS
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(WORK_DURATION);
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // Optional circle fill percentage (for styling later)
  const progress = (1 - timeLeft / WORK_DURATION) * 100;

  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-md shadow-md max-w-xs mx-auto bg-white">
      <h2 className="text-lg font-semibold mb-2">Pomodoro Timer</h2>

      <div className="relative w-40 h-40 flex items-center justify-center rounded-full border-4 border-red-500">
        <span className="text-3xl font-bold">{formatTime(timeLeft)}</span>
        {/* Future enhancement: fill animation background */}
      </div>

      <div className="flex mt-4 gap-3">
        <button
          onClick={toggleTimer}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
