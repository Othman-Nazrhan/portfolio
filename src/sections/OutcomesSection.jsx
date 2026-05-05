import { motion } from "framer-motion";
import { fadeUp, glassBase, outcomes } from "../data";
import { AnimatedSection, SectionHeader } from "../components";

export default function OutcomesSection({ motionConfig }) {
  return (
    <AnimatedSection
      id="outcomes"
      motionConfig={motionConfig}
      className="border-y border-white/10 bg-white/[0.03]"
      background="bg-[radial-gradient(circle_at_50%_20%,rgba(0,132,255,0.12),transparent_30%)]"
    >
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Resultat"
          title="Le site final doit donner envie de vous choisir."
          description="L'objectif n'est pas seulement de paraitre moderne. Votre site doit expliquer, rassurer et guider le client vers une action."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {outcomes.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={motionConfig.transition}
              whileHover={motionConfig.hoverLift}
              className={`rounded-2xl p-7 transition hover:border-blue-500/35 ${glassBase}`}
            >
              <p className="bg-gradient-to-r from-sky-200 via-blue-400 to-white bg-clip-text text-4xl font-black tracking-tight text-transparent">
                {item.value}
              </p>
              <h3 className="mt-6 text-xl font-black tracking-tight text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
