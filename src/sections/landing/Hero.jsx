import { motion } from "framer-motion";
import LandingHeader from "./LandingHeader.jsx";
import { PrimaryButton, SecondaryButton } from "./LandingButton.jsx";
import { fadeUp, stagger } from "./motion.js";

export default function Hero({ motionConfig }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_28%,rgba(0,102,255,0.28),transparent_31%),radial-gradient(circle_at_16%_16%,rgba(0,132,255,0.12),transparent_24%),linear-gradient(115deg,#020813_0%,#041226_48%,#020813_100%)]" />
      <div className="absolute right-8 top-24 hidden h-[34rem] w-[34rem] rounded-full border border-blue-400/25 lg:block" />
      <div className="absolute right-24 top-36 hidden h-[24rem] w-[24rem] rounded-full border border-blue-500/20 lg:block" />
      <LandingHeader />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 pt-9 sm:px-8 lg:grid-cols-[0.93fr_1.07fr] lg:px-10 lg:pb-14 lg:pt-8">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
          <motion.p
            variants={fadeUp}
            transition={motionConfig.transition}
            className="inline-flex items-center rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-blue-100 shadow-[0_0_28px_rgba(0,102,255,0.22)]"
          >
            Création web sur mesure
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={motionConfig.transition}
            className="mt-6 text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Un site clair, moderne et prêt à convertir.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={motionConfig.transition}
            className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Sites vitrines, WordPress et interfaces web pour présenter votre activité et recevoir plus de demandes.
          </motion.p>
          <motion.div variants={fadeUp} transition={motionConfig.transition} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#contact">Démarrer mon projet</PrimaryButton>
            <SecondaryButton href="#portfolio">Voir mes réalisations</SecondaryButton>
          </motion.div>
        </motion.div>

        <HeroImage motionConfig={motionConfig} />
      </div>
    </section>
  );
}

function HeroImage({ motionConfig }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ ...motionConfig.transition, delay: motionConfig.reduceMotion ? 0 : 0.14 }}
      className="relative"
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-blue-600/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[1.35rem] border border-blue-300/20 bg-[#07101f] p-2 shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
        <img
          src="/hero-image.png"
          alt="Aperçu de création web Web Engineer"
          className="aspect-[3/2] w-full rounded-[1rem] object-contain object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-gradient-to-tr from-[#020813]/25 via-transparent to-blue-500/10" />
      </div>
    </motion.div>
  );
}
