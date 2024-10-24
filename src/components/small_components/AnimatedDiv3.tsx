"use client";
import { motion } from "framer-motion";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  index: number;
  isInView: boolean;
}

const AnimatedDiv3 = ({
  children,
  className = "",
  index,
  isInView,
}: AnimatedDivProps) => {
  const animations = {
    initial: { opacity: 0.1, y: 10 },
    animate: {
      opacity: isInView ? 1 : 0.1,
      y: isInView ? 0 : 10,
    },
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: isInView ? index * 0.05 : 0,
    },
  };

  return (
    <motion.div
      initial={animations.initial}
      animate={animations.animate}
      transition={animations.transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv3;
