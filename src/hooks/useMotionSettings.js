import { useReducedMotion } from "framer-motion";

export default function useMotionSettings() {
  const reduceMotion = useReducedMotion();

  return {
    reduceMotion,
    viewport: { once: true, amount: 0.22 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    hoverLift: reduceMotion ? undefined : { y: -8, scale: 1.015 },
    tapPress: reduceMotion ? undefined : { scale: 0.985 },
    floatTransition: reduceMotion
      ? { duration: 0 }
      : { duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  };
}

