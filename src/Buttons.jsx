import React, { useState } from "react";

import { motion } from "framer-motion";

function Buttons({ status, setStatus, start, setStart,setDays,setHours,setMinutes,setSeconds }) {
  const handleStart = () => {
    setStart(true);
    setStatus("running");
  };

  const handleStop = () => {
    setStatus("stop");
  };

  const handleReset = () => {
    setStart(false);
    setStatus("reset");
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="w-full flex justify-center items-center sm:my-8 my-2 sm:gap-10 gap-2">
      {/* Start Button */}
      {status === "reset" && (
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleStart}
          className="rounded-2xl text-white sm:text-2xl text-lg bg-gradient-to-br from-orange-400 to-red-700 w-36 flex justify-center items-center p-[2px]"
        >
          <span className="w-full h-full py-1">Start</span>
        </motion.button>
      )}

      {/* Stop Button */}
      {status === "running" && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleStop}
          className="rounded-2xl text-white sm:text-2xl text-lg bg-gradient-to-br from-red-700 to-orange-400 w-36 flex justify-center items-center p-[2px]"
        >
          <span className="w-full h-full py-1">Stop</span>
        </motion.button>
      )}

      {/* Continue and Reset Buttons */}
      {status === "stop" && (
        <>
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleStart}
            className="rounded-2xl text-white sm:text-2xl text-lg bg-gradient-to-br from-orange-400 to-red-700 w-36 flex justify-center items-center p-[2px]"
          >
            <span className="w-full h-full py-1">Continue</span>
          </motion.button>
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleReset}
            className="rounded-2xl text-white sm:text-2xl text-lg bg-gradient-to-br from-gray-500 to-slate-700 w-36 flex justify-center items-center p-[2px]"
          >
            <span className="w-full h-full py-1">Reset</span>
          </motion.button>
        </>
      )}
    </div>
  );
}

export default Buttons;


