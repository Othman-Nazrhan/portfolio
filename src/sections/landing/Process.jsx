import { motion } from "framer-motion";
import { Icon } from "../../components";
import { landingSteps } from "../../data";
import LandingSection from "./LandingSection.jsx";

export default function Process({ motionConfig }) {
  return (
    <LandingSection id="process" eyebrow="Comment \u00e7a marche ?" title="Une méthode fluide, de l'idée à la mise en ligne">
      <div className="mt-7 grid gap-5 lg:grid-cols-4">
        {landingSteps.map(([number, icon, title, text], index) => (
          <motion.article
            key={number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...motionConfig.transition, delay: motionConfig.reduceMotion ? 0 : index * 0.06 }}
            className="relative flex gap-4 lg:block"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-sm font-black shadow-[0_0_34px_rgba(0,102,255,0.36)]">
                {number}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500/12 text-blue-200">
                <Icon name={icon} />
              </span>
            </div>
            <div className="mt-0 lg:mt-6">
              <h3 className="text-base font-black text-white">{title}</h3>
              <p className="mt-2 max-w-xs text-xs leading-6 text-slate-400">{text}</p>
            </div>
            {index < landingSteps.length - 1 && (
              <div className="absolute left-28 top-6 hidden h-px w-40 border-t border-dashed border-blue-300/25 lg:block" />
            )}
          </motion.article>
        ))}
      </div>
    </LandingSection>
  );
}
