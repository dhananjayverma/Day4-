import React, { useState, useEffect } from 'react';
import './Timer.css'; 
function Timer() {
  const [seconds, setSeconds] = useState(0);
    useEffect(() => {
    const timerID = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds >= 60) {
          clearInterval(timerID);
          return prevSeconds;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);
return () => {
      clearInterval(timerID);
    };
  }, []);
return (
    <div className="timer-container"> 
      Seconds: {seconds}
    </div>
  );
}
export default Timer;
