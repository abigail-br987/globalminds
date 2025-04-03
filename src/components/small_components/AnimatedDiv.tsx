"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedDiv = ({ children, className = "" }: AnimatedDivProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-40% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.6, scale: 0.95, y: 20 }}
      animate={{
        opacity: isInView ? 1 : 0.6,
        scale: isInView ? 1 : 0.95,
        y: isInView ? 0 : 20,
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

export default AnimatedDiv;
