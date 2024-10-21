
"use client"
import Figure1 from "../svg/Figure1";
import Figure8 from "../svg/Figure8";
import Figure11 from "../svg/Figure11";
import Figure12 from "../svg/Figure12";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { animations } from "./animations/animations";
import Figure3 from "@/svg/Figure3";
const figures = [
  {
    Component: Figure8,
    className: "h-80 opacity-10 rotate-90",
    className2: "-right-44 top-30  max-sm:hidden",
  },
  {
    Component: Figure8,
    className: "h-80 opacity-10 rotate-180",
    className2: " bottom-0 -rotate-90 -left-44",
  },
  {
    Component: Figure1,
    className: "h-80 rotate-180",
    className2: "-left-32 max-2xl:hidden ",
  },
  {
    Component: Figure3,
    className: "h-80 rotate-180 fill-gbGreen",
    className2: "-right-32 bottom-10 max-2xl:hidden ",
  },
  {
    Component: Figure3,
    className: "h-56 fill-gbYellow",
    className2: "-right-32 top-44 max-2xl:hidden ",
  },
  {
    Component: Figure11,
    className: "h-56 fill-gbBlue",
    className2: "",
  },
  {
    Component: Figure12,
    className: "h-56 fill-gbRed",
    className2: "bottom-10 right-64",
  },
  {
    Component: Figure12,
    className: "h-24 rotate-45 fill-gbYellow",
    className2: "top-46 right-80",
  },

];

function Figures2() {
  const { scrollY } = useScroll();

  const rotate = useTransform(scrollY, [0, 1000], [0, -20]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 1000], [1, 0.01]);

  return (
    <div className="fixed flex justify-center items-center h-screen w-full -top-10 -z-10">
      {figures.map(({ Component, className, className2 }, index) => (
        <motion.span
          key={index}
          custom={index}
          className={`absolute ${className2}`}
          variants={animations.figure}
          whileHover="whileHover"
          style={{ rotate, scale, opacity }} 
        >
          <Component className={className} />
        </motion.span>
      ))}
    </div>
  );
}

export default Figures2;
