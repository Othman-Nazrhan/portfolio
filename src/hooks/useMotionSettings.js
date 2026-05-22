import { useReducedMotion } from "framer-motion";

export default function useMotionSettings() {
  const reduceMotion = useReducedMotion();

  const easeCustom = [0.22, 1, 0.36, 1];
  const easeQuick = [0.34, 1.56, 0.64, 1];

  return {
    reduceMotion,
    viewport: { once: true, amount: 0.22 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.65, ease: easeCustom },
    transitionFast: reduceMotion ? { duration: 0 } : { duration: 0.4, ease: easeCustom },
    transitionSlow: reduceMotion ? { duration: 0 } : { duration: 0.85, ease: easeCustom },
    springTransition: reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 14 },
    hoverLift: reduceMotion ? undefined : { y: -10, scale: 1.018 },
    hoverGlow: reduceMotion ? undefined : { boxShadow: "0 0 40px rgba(56, 189, 248, 0.4)" },
    tapPress: reduceMotion ? undefined : { scale: 0.98 },
    floatTransition: reduceMotion
      ? { duration: 0 }
      : { duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  };
}

