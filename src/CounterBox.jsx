import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";

function CounterBox({
  days,
  setDays,
  hours,
  setHours,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
  start,
}) {
  const handleInputChange = (setter, min, max) => (e) => {
    const value = e.target.value;
    if (
      !value.includes("e") &&
      !value.includes("E") &&
      value >= min &&
      value <= max
    ) {
      setter(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "e" || e.key === "E") {
      e.preventDefault();
    }
  };

  function formatNumber(value) {
    return value < 10 ? `0${value}` : value;
  }

  const calculateProgress = (value, max) => {
    return (value / max) * 100;
  };

  return (
    <div className="w-full flex sm:flex-row flex-col justify-center items-center sm:my-8 my-2 lg:gap-10 sm:gap-4 gap-2">
      {/* Days */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            ease: easeInOut,
            duration: 0.5,
            delay: 0.5,
          },
        }}
        className="lg:w-72 sm:w-40 w-28 lg:h-72 sm:h-40 h-28 p-2 rounded-full"
        style={{
          background: `conic-gradient(
            red ${calculateProgress(days, 7)}%, 
            transparent ${calculateProgress(days, 7)}%
          )`,
        }}
      >
        <div className="w-full h-full rounded-full flex flex-col justify-center items-center bg-slate-800">
          <input
            type="number"
            name="days"
            id="days"
            value={formatNumber(days)}
            disabled={start}
            min={0}
            max={7}
            onChange={handleInputChange(setDays, 0, 7)}
            className="w-full bg-transparent text-center text-white border-none outline-none lg:text-8xl sm:text-6xl text-3xl"
          />
          <span className="text-slate-400 lg:text-2xl sm:text-xl text-lg">
            days
          </span>
        </div>
      </motion.div>

      {/* Hours */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            ease: easeInOut,
            duration: 0.5,
            delay: 0.5,
          },
        }}
        className="lg:w-72 sm:w-40 w-28 lg:h-72 sm:h-40 h-28 p-2 rounded-full"
        style={{
          background: `conic-gradient(
            orange ${calculateProgress(hours, 23)}%, 
            transparent ${calculateProgress(hours, 23)}%
          )`,
        }}
      >
        <div className="w-full h-full rounded-full flex flex-col justify-center items-center bg-slate-800">
          <input
            type="number"
            name="hours"
            id="hours"
            value={formatNumber(hours)}
            disabled={start}
            min={0}
            max={23}
            onChange={handleInputChange(setHours, 0, 23)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-center text-white border-none outline-none lg:text-8xl sm:text-6xl text-3xl"
          />
          <span className="text-slate-400 lg:text-2xl sm:text-xl text-lg">
            hours
          </span>
        </div>
      </motion.div>

      {/* Minutes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            ease: easeInOut,
            duration: 0.5,
            delay: 0.5,
          },
        }}
        className="lg:w-72 sm:w-40 w-28 lg:h-72 sm:h-40 h-28 p-2 rounded-full"
        style={{
          background: `conic-gradient(
            blue ${calculateProgress(minutes, 59)}%, 
            transparent ${calculateProgress(minutes, 59)}%
          )`,
        }}
      >
        <div className="w-full h-full rounded-full flex flex-col justify-center items-center bg-slate-800">
          <input
            type="number"
            name="minutes"
            id="minutes"
            value={formatNumber(minutes)}
            disabled={start}
            min={0}
            max={59}
            onChange={handleInputChange(setMinutes, 0, 59)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-center text-white border-none outline-none lg:text-8xl sm:text-6xl text-3xl"
          />
          <span className="text-slate-400 lg:text-2xl sm:text-xl text-lg">
            minutes
          </span>
        </div>
      </motion.div>

      {/* Seconds */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            ease: easeInOut,
            duration: 0.5,
            delay: 0.5,
          },
        }}
        className="lg:w-72 sm:w-40 w-28 lg:h-72 sm:h-40 h-28 p-2 rounded-full"
        style={{
          background: `conic-gradient(
            green ${calculateProgress(seconds, 59)}%, 
            transparent ${calculateProgress(seconds, 59)}%
          )`,
        }}
      >
        <div className="w-full h-full rounded-full flex flex-col justify-center items-center bg-slate-800">
          <input
            type="number"
            name="seconds"
            id="seconds"
            value={formatNumber(seconds)}
            disabled={start}
            min={0}
            max={59}
            onChange={handleInputChange(setSeconds, 0, 59)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-center text-white border-none outline-none lg:text-8xl sm:text-6xl text-3xl"
          />
          <span className="text-slate-400 lg:text-2xl sm:text-xl text-lg">
            seconds
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default CounterBox;
