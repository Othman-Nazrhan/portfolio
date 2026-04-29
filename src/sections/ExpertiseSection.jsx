import { motion } from "framer-motion";
import { expertise, fadeUp, stagger } from "../data";
import { AnimatedSection } from "../components";

export default function ExpertiseSection({ motionConfig }) {
  return (
    <AnimatedSection id="expertise" motionConfig={motionConfig} className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <motion.div variants={fadeUp} transition={motionConfig.transition}>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-200">Expertise</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            8 ans a creer des produits web propres pour des marques ambitieuses.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Je combine strategie, UI/UX, WordPress, maintenance et developpement React pour livrer des sites et
            applications modernes qui soutiennent vraiment votre activite.
          </p>
        </motion.div>
        <motion.div variants={stagger} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {expertise.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              transition={motionConfig.transition}
              whileHover={motionConfig.hoverLift}
              className="rounded-xl border border-white/10 bg-[#0d1118]/85 px-4 py-5 text-sm font-bold text-slate-100 backdrop-blur-xl transition hover:border-lime-300/40 hover:bg-lime-300/10"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
