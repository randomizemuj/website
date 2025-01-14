import React, { useState, useEffect } from "react";
import "./TheFestCountdownCss.css"; // We'll create this file for animations

const TheFestCountdown = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((time) => Math.max(time - 1000, 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let total_days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60)
      .toString()
      .padStart(2, "0");
    let minutes = parseInt(total_minutes % 60)
      .toString()
      .padStart(2, "0");
    let hours = parseInt(total_hours % 24)
      .toString()
      .padStart(2, "0");
    let days = total_days.toString().padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const timeParts = getFormattedTime(time);
  const labels = ["Days", "Hours", "Minutes", "Seconds"];

  return (
    <div className="flex flex-col mt-20 items-center text-white">
      <h3 className="text-2xl md:text-4xl font-bold mb-7 text-gray-300">
        The Hackathon Starts In
      </h3>
      <div className="flex justify-center space-x-2">
        {Object.entries(timeParts).map(([label, value], index) => (
          <div key={index} className="flex items-center flex-col">
            <div className="flex items-center">
              {index > 0 && (
                <span className="mx-1 text-2xl md:text-5xl">:</span>
              )}
              {value.split("").map((char, i) => (
                <div
                  key={`${label}-${i}-${char}`}
                  className="bg-gray-900 text-white w-6 h-9 md:w-20 md:h-28 border-y md:border-y-2 border-gray-500 flex items-center justify-center mx-1 md:mx-2 rounded-lg text-xl md:text-6xl overflow-hidden"
                >
                  <div className="digit-animation">{char}</div>
                </div>
              ))}
            </div>
            <div className="mt-2 md:mt-4 text-base md:text-3xl">
              {labels[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheFestCountdown;
