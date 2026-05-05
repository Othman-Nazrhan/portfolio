import { motion } from "framer-motion";
import { brandName, fadeUp, heroOffers, metrics, navItems, pageGradient, processSteps, stagger } from "../data";
import { BrandLogo, Button, GlassCard, GradientText, Icon } from "../components";

export default function HeroSection({ motionConfig }) {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-white/10">
      <div className={`animated-aurora absolute inset-0 ${pageGradient}`} />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:84px_84px]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#05070b] to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <motion.a
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={motionConfig.transition}
          href="#contact"
          className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-center text-sm font-black text-blue-100 shadow-lg shadow-blue-500/10 backdrop-blur-2xl transition hover:border-blue-500/45 hover:bg-blue-500/15"
        >
          Site professionnel a partir de 100 EUR
          <Icon name="arrow" className="h-4 w-4" />
        </motion.a>

        <HeaderNav />

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.04fr_0.96fr] lg:py-14">
          <HeroContent motionConfig={motionConfig} />
          <HeroPreview motionConfig={motionConfig} />
        </div>
      </div>
    </section>
  );
}

function HeaderNav() {
  return (
    <nav className="flex items-center justify-between gap-4">
      <a href="#" className="flex items-center text-white" aria-label={brandName}>
        <BrandLogo />
      </a>

      <div className="hidden items-center gap-5 rounded-2xl border border-white/10 bg-[#0b0f16]/80 px-5 py-3 text-sm font-semibold text-slate-300 shadow-2xl shadow-black/20 backdrop-blur-2xl lg:flex xl:gap-7">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-sky-200">
            {item.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white backdrop-blur-xl transition hover:border-blue-500/50 hover:bg-white/12"
      >
        Devis
      </a>
    </nav>
  );
}
function HeroContent({ motionConfig }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
      <motion.div
        variants={fadeUp}
        transition={motionConfig.transition}
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-100 shadow-lg shadow-black/20 backdrop-blur-xl"
      >
        <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(0,132,255,0.9)]" />
        Creation web pour independants, commerces et petites entreprises
      </motion.div>

      <motion.h1
        variants={fadeUp}
        transition={motionConfig.transition}
        className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        Transformez vos visiteurs en clients avec un <GradientText>site web moderne.</GradientText>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        transition={motionConfig.transition}
        className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
      >
        Site vitrine, WordPress, dashboard, mobile ou maintenance: je transforme votre besoin en interface claire,
        responsive et facile a faire evoluer.
      </motion.p>

      <motion.div variants={fadeUp} transition={motionConfig.transition} className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button>Demander mon devis</Button>
        <Button href="#contact" variant="secondary">
          Voir les possibilites
        </Button>
      </motion.div>

      <motion.div
        variants={fadeUp}
        transition={motionConfig.transition}
        className="mt-9 grid max-w-3xl gap-4 sm:grid-cols-3"
      >
        {metrics.map((item) => (
          <GlassCard key={item.label} className="rounded-2xl p-5">
            <p className="text-2xl font-black tracking-tight text-blue-100">{item.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
          </GlassCard>
        ))}
      </motion.div>
    </motion.div>
  );
}
function HeroPreview({ motionConfig }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ...motionConfig.transition, delay: motionConfig.reduceMotion ? 0 : 0.2 }}
      className="relative"
    >
      <FloatingBadge motionConfig={motionConfig} className="-left-5 top-12 text-blue-100">
        Site des 100 EUR
      </FloatingBadge>
      <FloatingBadge motionConfig={motionConfig} delay={0.7} className="-right-4 bottom-20 text-sky-100">
        Retour sous 24h
      </FloatingBadge>

      <GlassCard className="float-soft rounded-3xl p-3">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080b12]">
          <PreviewHeader />
          <div className="grid gap-4 p-4 sm:p-5">
            <div className="grid gap-4 sm:grid-cols-[1.25fr_0.75fr]">
              <PricePreview motionConfig={motionConfig} />
              <OfferPreview motionConfig={motionConfig} />
            </div>
            <ProcessPreview motionConfig={motionConfig} />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
function FloatingBadge({ children, motionConfig, delay = 0, className = "" }) {
  return (
    <motion.div
      animate={motionConfig.reduceMotion ? undefined : { y: [0, delay ? 16 : -14, 0] }}
      transition={{ ...motionConfig.floatTransition, delay }}
      className={`absolute hidden rounded-2xl border border-white/10 bg-[#0d1118]/90 px-5 py-4 text-sm font-bold shadow-2xl shadow-black/30 backdrop-blur-2xl lg:block ${className}`}
    >
      {children}
    </motion.div>
  );
}
function PreviewHeader() {
  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-4">
      <div>
        <p className="text-sm font-black text-white">Votre projet web</p>
        <p className="text-xs text-slate-400">Site, WordPress, dashboard ou maintenance</p>
      </div>
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
      </div>
    </div>
  );
}
function PricePreview({ motionConfig }) {
  return (
    <motion.div whileHover={motionConfig.hoverLift} className="rounded-2xl border border-white/10 bg-[#10151f] p-5 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-slate-200">Prix de depart</p>
        <Icon name="euro" className="h-5 w-5 text-blue-500" />
      </div>
      <div className="mt-7 flex items-end gap-3">
        <p className="text-4xl font-black tracking-tight text-white">100 EUR</p>
        <p className="pb-2 text-sm font-bold text-blue-500">depart</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        Une base professionnelle pour etre visible vite, avec un design responsive et un contact clair.
      </p>
      <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: "24%" }}
          animate={{ width: "74%" }}
          transition={{ duration: motionConfig.reduceMotion ? 0 : 1.2, delay: 0.4 }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
        />
      </div>
    </motion.div>
  );
}
function OfferPreview({ motionConfig }) {
  return (
    <motion.div whileHover={motionConfig.hoverLift} className="rounded-2xl border border-sky-400/15 bg-sky-400/10 p-5 backdrop-blur-xl">
      <p className="text-sm font-black text-white">Services rapides</p>
      <div className="mt-5 space-y-3">
        {heroOffers.map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2 text-sm font-bold text-slate-100">
            <Icon name="check" className="h-4 w-4 text-blue-500" />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
function ProcessPreview({ motionConfig }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {processSteps.map((item) => (
        <motion.div
          key={item.step}
          whileHover={motionConfig.hoverLift}
          className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-500">{item.step}</p>
          <p className="mt-3 font-bold text-white">{item.title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
