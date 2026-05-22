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

export const revealScale = {
  hidden: { opacity: 0, scale: 0.88, y: 32, filter: "blur(16px)" },
  visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
};

export const slideUpStagger = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const parallaxFloat = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 12 }
  },
};

export const shimmer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0.8],
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

export const glowPulse = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: [1, 1.02, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  },
};

