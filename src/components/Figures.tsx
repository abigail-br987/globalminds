"use client";
import Figure1 from "../svg/Figure1";
import Figure8 from "../svg/Figure8";
import Figure11 from "../svg/Figure11";
import Figure10 from "../svg/Figure10";
import Figure12 from "../svg/Figure12";
import Figure13 from "../svg/Figure13";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { animations } from "./animations/animations";
import BrainColorSvg from "../svg/BrainColorSvg";

const figures = [
  {
    Component: Figure1,
    className: "h-32",
    className2: "left-36 max-lg:hidden",
  },
  {
    Component: Figure10,
    className: "h-32 -rotate-45",
    className2: "right-36 top-20",
  },
  {
    Component: Figure8,
    className: "h-80 opacity-20 rotate-90",
    className2: "-right-44 max-sm:hidden",
  },
  {
    Component: Figure8,
    className: "h-80 opacity-20 -rotate-90",
    className2: "-left-44",
  },
  {
    Component: BrainColorSvg,
    className: "rotate-180",
    className2: "-top-80 h-1/2 hidden 2xl:block",
  },
  {
    Component: Figure11,
    className: "h-52",
    className2: "bottom-20 right-24",
    color: "gbRed",
  },
  {
    Component: Figure13,
    className: "h-24 rotate-12",
    className2: "bottom-16 right-96 hidden 2xl:block",
    color: "gbYellow ",
  },
  {
    Component: Figure13,
    className: "h-32 rotate-45",
    className2: "top-96 right-96 hidden 2xl:block",
    color: "gbBlue ",
  },
  {
    Component: Figure13,
    className: "h-32 rotate-180",
    className2: "top-80 left-96 hidden 2xl:block",
    color: "gbGreen",
  },
  {
    Component: Figure11,
    className: "h-20 -rotate-45",
    className2: "top-20 left-48",
    color: "gbRed max-lg:hidden",
  },
  {
    Component: Figure12,
    className: "h-16",
    className2: "top-14 right-96",
    color: "gbBlue",
  },
  {
    Component: Figure12,
    className: "h-24 -rotate-45",
    className2: "bottom-20 left-72",
    color: "gbGreen max-lg:hidden",
  },
];

function Figures() {
  const { scrollY } = useScroll();

  const transforms = figures.map((_, index) => ({
    rotate: useTransform(scrollY, [0, 1000], [0, -20]),
    scale: useTransform(scrollY, [0, 1000], [1, 1.2]),
    opacity: useTransform(scrollY, [0, 1000], [1, 0.01]),
  }));

  return (
    <div className="fixed flex justify-center items-center h-screen w-full -top-10 z-0">
      {figures.map(({ Component, className, className2, color }, index) => {
        const { rotate, scale, opacity } = transforms[index];

        return (
          <motion.span
            key={index}
            custom={index}
            className={`z-0 absolute ${className2}`}
            variants={animations.figure}
            whileHover="whileHover"
            style={{ rotate, scale, opacity }}
          >
            <Component className={className} color={color} />
          </motion.span>
        );
      })}
    </div>
  );
}

export default Figures;
