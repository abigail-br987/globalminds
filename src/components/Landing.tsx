"use client";

import { motion } from "framer-motion";
import LogoBrain from "@/svg/LogoBrain";

const animations = {
  logo: {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  },
  letters: {
    hidden: { scale: 0, opacity: 0, y: -20 },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: index * 0.1,
      },
    }),
  },
  square: {
    hidden: { borderWidth: "0px", opacity: 0 },
    visible: {
      borderWidth: "10px",
      opacity: 1,
      transition: { duration: 0.5, delay: 1 },
    },
    whileHover: {
      scale: 1.1,
      rotate: 10,
      transition: { duration: 0.1 },
    },
  },
  showDelayed: {
    hidden: { scale: 1, opacity: 0, y: -20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 1,
      },
    },
  },
};

function Landing() {
  return (
    <div
      className="overflow-hidden relative
     h-screen w-full flex flex-col justify-center 
     items-center text-center space-y-8 text-white"
    >
      <div id="logo" className="z-10 max-sm:scale-50 max-lg:scale-75">
        <motion.h1
          className="flex text-7xl items-end"
          initial="hidden"
          animate="visible"
          variants={animations.logo}
        >
          {[
            "G",
            "l",
            <LogoBrain className="inline-block h-64 mb-7" />,
            "b",
            "a",
            "l",
          ].map((letter, index) => (
            <motion.span
              key={index}
              variants={animations.letters}
              custom={index}
              className={typeof letter === "string" ? "text-[207px]" : ""}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <h1 className="font-gotaRegular justify-center text-7xl flex space-x-5">
          {["M", "i", "n", "d", "s"].map((letter, index) => (
            <motion.span
              key={index}
              className={`relative flex aspect-square items-center justify-center w-20 h-20 ${
                [
                  "border-gbRed",
                  "border-gbYellow",
                  "border-gbGreen",
                  "border-gbBlue",
                  "border-gbRed",
                ][index]
              }`}
              initial="hidden"
              animate="visible"
              whileHover="whileHover"
              variants={animations.square}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
    </div>
    <motion.span
        initial="hidden"
        animate="visible"
        variants={animations.showDelayed}
        className="bg-gbYellow m-6 px-4 font-mono z-10 text-2xl font-bold py-2 rounded-full text-gbBlack"
      >
        empoderando jóvenes latinos
      </motion.span>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={animations.showDelayed}
        className="text-2xl font-bold absolute bottom-10 text-gbWhite animate-bounce"
      >
        ↓
      </motion.span>

    </div>
  );
}

export default Landing;