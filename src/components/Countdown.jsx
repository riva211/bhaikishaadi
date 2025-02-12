import React, { useState, useEffect } from 'react';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-02-18T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days:0, hours:0, minutes:0, seconds:0 });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label, showColon }) => (
    <div className="flex flex-col items-center p-3">
      <div className="flex items-center">
        <span className="text-3xl font-bold text-gray-800">{value}</span>
        {showColon && <span className="text-3xl font-bold text-gray-800 ml-1">:</span>}
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );

  return (
    <div className="">
      <div className="mb-6"></div>
      <div className="flex justify-center items-center">
        <TimeBlock value={timeLeft.days} label="Days" showColon={true} />
        <TimeBlock value={timeLeft.hours} label="Hours" showColon={true} />
        <TimeBlock value={timeLeft.minutes} label="Minutes" showColon={true} />
        <TimeBlock value={timeLeft.seconds} label="Seconds" showColon={false} />
      </div>
    </div>
  );
}

export default Countdown;