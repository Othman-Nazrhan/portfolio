import { motion } from "framer-motion";
import { sectionBase, stagger } from "../data";

export default function AnimatedSection({ id, children, motionConfig, className = "", background }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={motionConfig.viewport}
      variants={stagger}
      className={`${sectionBase} ${className}`}
    >
      {background && <div className={`absolute inset-0 ${background}`} />}
      {children}
    </motion.section>
  );
}

