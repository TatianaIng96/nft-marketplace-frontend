import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { differenceInSeconds } from 'date-fns';
import './timer.scss';

const CountdownTimer = ({ finishDate }) => {
  const specificDate = new Date(finishDate);
  // Fecha y hora específica (formato ISO 8601)
  const calculateTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return {
      days, hours, minutes, seconds,
    };
  };
  const [startDate] = useState(specificDate);
  const calculateRemainingSeconds = () => {
    const now = new Date();
    const diffInSeconds = differenceInSeconds(startDate, now);
    return Math.max(0, diffInSeconds); // Asegurarse de que el tiempo restante no sea negativo
  };
  // Utilizar la fecha y hora específica como fecha de inicio
  const [remainingSeconds, setRemainingSeconds] = useState(calculateRemainingSeconds());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingSeconds(calculateRemainingSeconds());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const timeLeft = calculateTime(remainingSeconds);

  return (
    <div className="countdown-container">
      <div className="countdown-boxes">
        <div className="countdown-box">
          <span className="countdown-value">{timeLeft.days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-box">
          <span className="countdown-value">{timeLeft.hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-box">
          <span className="countdown-value">{timeLeft.minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-box">
          <span className="countdown-value">{timeLeft.seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
