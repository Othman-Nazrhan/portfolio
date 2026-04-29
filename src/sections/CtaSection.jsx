import { motion } from "framer-motion";
import { fadeUp, glassBase, sectionBase, stagger } from "../data";
import { Button } from "../components";

export default function CtaSection({ motionConfig }) {
  return (
    <section className={sectionBase}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(52,211,153,0.12),transparent_28%),radial-gradient(circle_at_78%_40%,rgba(34,211,238,0.12),transparent_28%)]" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={motionConfig.viewport}
        variants={stagger}
        className={`relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] p-7 sm:p-8 lg:p-10 ${glassBase}`}
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div variants={fadeUp} transition={motionConfig.transition}>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-200">Lancer votre projet</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              Pret a transformer votre idee en site clair et credible?
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} transition={motionConfig.transition}>
            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              On part de votre objectif, de votre metier et de vos contenus, puis on construit une experience web
              propre: site vitrine, WordPress, dashboard, mobile ou maintenance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button>Demander un devis</Button>
              <Button href="#contact" variant="secondary">
                Expliquer mon besoin
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
