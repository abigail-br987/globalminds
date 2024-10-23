"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { animations } from "../animations/animations";

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
}

function AnimatedDiv({ children, className = "" }: AnimatedDivProps) { 
  return (
    <motion.div
      className={`${className}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={animations.sectionVariant}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedDiv;
