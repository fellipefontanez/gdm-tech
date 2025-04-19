"use client";
import { useState, useEffect } from "react";

interface TimerProps {
  startTime: string;
}

const Timer: React.FC<TimerProps> = ({ startTime }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    hasStarted: boolean;
    isOver: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hasStarted: false,
    isOver: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const startDate = new Date(startTime);
      const difference = startDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          hasStarted: difference > -3600000,
          isOver: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        hasStarted: false,
        isOver: false,
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  const renderTimeBox = (value: number, label: string) => (
    <div className="flex flex-col items-center mx-1">
      <div className="bg-white/90 text-gray-900 font-bold text-xl rounded-lg py-2 px-3 min-w-[3rem] text-center shadow-sm border border-gray-200">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-sm text-gray-500 mt-1">{label}</span>
    </div>
  );

  const renderStartedMatch = () => (
    <div className="flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full">
      <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
      <span className="font-medium">Em andamento</span>
    </div>
  );

  const renderCountdown = (timeLeft: { days: number; hours: number; minutes: number; seconds: number }) => (
    <div className="text-center">
      <h4 className="text-lg text-gray-500 mb-2">A partida começa em:</h4>
      <div className="flex justify-center items-center">
        {timeLeft.days > 0 && renderTimeBox(timeLeft.days, "Dias")}
        {renderTimeBox(timeLeft.hours, "Horas")}
        {renderTimeBox(timeLeft.minutes, "Min")}
        {timeLeft.days === 0 && renderTimeBox(timeLeft.seconds, "Seg")}
      </div>
    </div>
  );

  const renderContent = () => {
    if (timeLeft.isOver) {
      return <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">Partida encerrada</div>;
    }
    if (timeLeft.hasStarted) {
      return renderStartedMatch();
    }
    return renderCountdown(timeLeft);
  };


  return (
    <div className="flex flex-col justify-self-center items-center justify-center bg-white p-6 rounded-lg h-fit w-full md:w-[400px] border border-gray-200 shadow-sm">
      {renderContent()}
    </div>
  );
};

export default Timer;
