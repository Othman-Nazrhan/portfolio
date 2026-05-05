import { motion } from "framer-motion";
import { fadeUp, freelancerHighlights, glassBase, scaleIn } from "../data";
import { AnimatedSection, Icon, SectionHeader } from "../components";

export default function FreelancerSection({ motionConfig }) {
  return (
    <AnimatedSection
      id="freelance"
      motionConfig={motionConfig}
      className="border-y border-white/10 bg-white/[0.025]"
      background="bg-[radial-gradient(circle_at_12%_20%,rgba(0,132,255,0.12),transparent_30%),radial-gradient(circle_at_88%_40%,rgba(0,102,255,0.12),transparent_28%)]"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Freelance web"
          title="Une collaboration directe, rapide et sans complication."
          description="Vous gardez un interlocuteur unique pour clarifier le besoin, construire une interface propre et faire avancer le projet avec des retours simples."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {freelancerHighlights.map((item) => (
            <motion.article
              key={item.title}
              variants={scaleIn}
              transition={motionConfig.transition}
              whileHover={motionConfig.hoverLift}
              whileTap={motionConfig.tapPress}
              className={`rounded-2xl p-6 transition duration-300 hover:border-blue-500/35 hover:bg-white/[0.08] ${glassBase}`}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-black tracking-tight text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          transition={motionConfig.transition}
          className="mt-10 rounded-2xl border border-blue-500/15 bg-blue-500/10 p-5 text-sm font-bold leading-6 text-blue-50 sm:p-6"
        >
          Ideal pour independants, petites entreprises, createurs de services, artisans, consultants et porteurs de
          projet qui veulent un site clair sans process lourd.
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
