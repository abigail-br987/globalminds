import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const AnimatedNumber: React.FC<{
  targetNumber: number;
  displayValue: string;
}> = ({ targetNumber, displayValue }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (isInView) {
      const duration = 1200;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * targetNumber));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0.7 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <motion.span
        style={{ fontSize: "3rem", fontWeight: "bold" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0.7 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {count}
        {displayValue.includes("%") ? "%" : ""}
      </motion.span>
    </motion.div>
  );
};

export default AnimatedNumber;
