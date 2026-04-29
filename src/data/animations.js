export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 18, filter: "blur(12px)" },
  visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -28, filter: "blur(10px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

