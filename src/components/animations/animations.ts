
export const animations = {
  sectionVariant: {
    offscreen: {
      opacity: 0,
      scale: 0.8,
      y: 10,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.4,
      },
    },
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
  figure: {
    hidden: { scale: 0.7, opacity: 0, rotate: -10 },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.8 + index * 0.01,
      },
    }),
  },
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
  letter: {
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
