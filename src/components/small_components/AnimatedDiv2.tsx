"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  isInViewContainer?: boolean;
}
const AnimatedDiv2 = ({ children, className = "", isInViewContainer }: AnimatedDivProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
    const isInView = isInViewContainer !== undefined ? isInViewContainer : useInView(ref, { once: false, margin: "-40% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 10, rotate: -2, scale: 0.95 }}
      animate={{ 
        x: isInView ? 0 : 10,
        scale: isInView ? 1 : 0.95,
        rotate: isInView ? 0 : -2
      }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv2;