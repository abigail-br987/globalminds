"use client";
import Figure1 from "@/svg/Figure1";
import Figure8 from "@/svg/Figure8";
import Figure11 from "@/svg/Figure11";
import Figure10 from "@/svg/Figure10";
import Figure12 from "@/svg/Figure12";
import Figure13 from "@/svg/Figure13";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { animations } from "../animations/animations";
import BrainColorSvg from "@/svg/BrainColorSvg";

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
    className2: "bottom-20 right-24 fill-gbGreen",
  },
  {
    Component: Figure13,
    className: "h-24 rotate-12",
    className2: "bottom-16 right-96 hidden 2xl:block fill-gbBlue",
  },
  {
    Component: Figure13,
    className: "h-32 rotate-45",
    className2: "top-96 right-96 hidden 2xl:block fill-gbRed",
  },
  {
    Component: Figure13,
    className: "h-32 rotate-180",
    className2: "top-80 left-96 hidden 2xl:block fill-gbYellow",
  },
  {
    Component: Figure11,
    className: "h-20 -rotate-45",
    className2: "top-20 left-48 fill-gbYellow",
  },
  {
    Component: Figure12,
    className: "h-16",
    className2: "top-14 right-96 fill-gbBlue",
  },
  {
    Component: Figure12,
    className: "h-24 -rotate-45",
    className2: "bottom-20 left-72 fill-gbBlue",
  },
];

function Figures() {
  const { scrollY } = useScroll();

  const rotateTransform = useTransform(scrollY, [0, 1400], [0, -20]);
  const scaleTransform = useTransform(scrollY, [0, 1400], [1, 1.2]);
  const opacityTransform = useTransform(scrollY, [0, 1400], [1, 0.01]);

  return (
    <div className="fixed flex justify-center items-center h-screen w-full -top-10 z-0">
      {figures.map(({ Component, className, className2 }, index) => {
        return (
          <motion.span
            key={index}
            className={`z-0 absolute ${className2}`}
            variants={animations.figure}
            whileHover="whileHover"
            style={{
              rotate: rotateTransform,
              scale: scaleTransform,
              opacity: opacityTransform,
            }}
          >
            <Component className={className} />
          </motion.span>
        );
      })}
    </div>
  );
}

export default Figures;
