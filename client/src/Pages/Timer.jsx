import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [countdown, setCountdown] = useState(3600); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      setCountdown(3600); 
    }
  }, [countdown]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <h2>Next Update In: {formatTime(countdown)}</h2>
    </div>
  );
};

export default Timer;