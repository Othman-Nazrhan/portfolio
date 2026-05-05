import { motion } from "framer-motion";
import { fadeUp, qualification } from "../data";
import { AnimatedSection, Icon, SectionHeader } from "../components";

export default function QualificationSection({ motionConfig }) {
  return (
    <AnimatedSection
      id="process"
      motionConfig={motionConfig}
      className="border-y border-white/10 bg-white/[0.03]"
      background="bg-[radial-gradient(circle_at_70%_30%,rgba(0,102,255,0.14),transparent_32%)]"
    >
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Qualification"
          title="Pour qui ce service est fait?"
          description="Pour les independants, startups, agences et entreprises qui veulent creer, refaire ou maintenir un site sans complexite inutile."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {qualification.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={motionConfig.transition}
              whileHover={motionConfig.hoverLift}
              className="rounded-2xl border border-white/10 bg-[#0d1118]/85 p-7 backdrop-blur-xl transition hover:border-blue-500/35"
            >
              <div className="mb-6 grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-sky-200">
                <Icon name="target" />
              </div>
              <h3 className="text-xl font-black tracking-tight text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
