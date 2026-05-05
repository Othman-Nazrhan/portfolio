import { motion } from "framer-motion";
import { Icon } from "../../components";
import { landingServices } from "../../data";
import LandingSection from "./LandingSection.jsx";
import { fadeUp, stagger } from "./motion.js";

export default function Services({ motionConfig }) {
  return (
    <LandingSection id="services" eyebrow="Mes services" title="Tout ce qu'il faut pour un site clair, rapide et rentable">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mt-5 grid gap-3 md:grid-cols-3 xl:grid-cols-6"
      >
        {landingServices.map((service) => (
          <motion.article
            key={service.title}
            variants={fadeUp}
            whileHover={motionConfig.hoverLift}
            transition={motionConfig.transition}
            className="group rounded-xl border border-blue-400/18 bg-white/[0.035] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.24)] transition hover:border-blue-400/60 hover:bg-blue-500/[0.08]"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-600 text-white shadow-[0_0_28px_rgba(0,102,255,0.38)]">
              <Icon name={service.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-sm font-black text-white">{service.title}</h3>
            <p className="mt-3 text-xs leading-6 text-slate-400">{service.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </LandingSection>
  );
}
