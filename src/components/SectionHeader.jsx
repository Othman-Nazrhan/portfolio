import { motion } from "framer-motion";
import { fadeUp } from "../data";

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-200">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>}
    </motion.div>
  );
}

