import React from "react";
import { easeInOut, motion } from "framer-motion";

function Title() {
  return (
    <div className="w-full flex justify-center items-center sm:my-8 my-2">
      <motion.h1
        initial={{
          opacity: 0,
          y: -50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: easeInOut,
          },
        }}
        className="text-slate-200 font-bold lg:text-5xl sm:text-4xl text-2xl uppercase"
      >
        Countdown Timer
      </motion.h1>
    </div>
  );
}

export default Title;
