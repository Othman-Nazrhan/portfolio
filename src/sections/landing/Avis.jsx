import { motion } from "framer-motion";
import LandingSection from "./LandingSection.jsx";
import { landingTestimonials } from "../../data/landing.js";
import { fadeUp, stagger } from "./motion.js";

export default function Avis({ motionConfig }) {
  return (
    <LandingSection id="avis" title="Des clients accompagnés avec clarté">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mt-10 grid gap-6 lg:grid-cols-3"
      >
        {landingTestimonials.map((testimonial, index) => (
          <motion.article
            key={index}
            variants={fadeUp}
            transition={{ ...motionConfig.transition, delay: motionConfig.reduceMotion ? 0 : index * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl"
          >
            <p className="text-lg italic leading-relaxed text-slate-200">“{testimonial.text}”</p>
          </motion.article>
        ))}
      </motion.div>
    </LandingSection>
  );
}
