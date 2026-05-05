import { motion } from "framer-motion";
import { scaleIn, pricing } from "../data";
import { AnimatedSection, CheckItem, Icon, SectionHeader } from "../components";

export default function PricingSection({ motionConfig }) {
  return (
    <AnimatedSection
      id="pricing"
      motionConfig={motionConfig}
      className="border-y border-white/10 bg-white/[0.03]"
      background="bg-[radial-gradient(circle_at_22%_30%,rgba(0,102,255,0.13),transparent_28%),radial-gradient(circle_at_78%_64%,rgba(0,102,255,0.12),transparent_30%)]"
    >
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Offres"
          title="Des offres simples pour avancer sans confusion."
          description="Demarrez petit, passez sur un site complet, ajoutez WordPress, creez un outil web ou gardez votre site en bonne sante."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pricing.map((plan) => (
            <PricingCard key={plan.name} plan={plan} motionConfig={motionConfig} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-400">
          Les prix sont indicatifs. Chaque devis depend du nombre de pages, des contenus, des integrations, des
          animations, des fonctionnalites et du niveau d'accompagnement souhaite.
        </p>
      </div>
    </AnimatedSection>
  );
}

function PricingCard({ plan, motionConfig }) {
  return (
    <motion.article
      variants={scaleIn}
      transition={motionConfig.transition}
      whileHover={motionConfig.hoverLift}
      whileTap={motionConfig.tapPress}
      className={`relative rounded-2xl border p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 ${
        plan.highlight ? "border-blue-500/40 bg-blue-500/10" : "border-white/10 bg-[#0d1118]/85 hover:border-blue-500/30"
      }`}
    >
      {plan.highlight && (
        <div className="absolute right-5 top-5 rounded-lg bg-blue-500 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white">
          populaire
        </div>
      )}
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500 text-white">
        <Icon name={plan.icon ?? (plan.highlight ? "bolt" : "euro")} />
      </div>
      <h3 className="mt-6 text-xl font-black tracking-tight text-white">{plan.name}</h3>
      <p className="mt-3 text-2xl font-black tracking-tight text-white">{plan.price}</p>
      <p className="mt-4 min-h-16 text-sm leading-6 text-slate-300">{plan.description}</p>
      <div className="mt-7 space-y-3">
        {plan.features.map((feature) => (
          <CheckItem key={feature}>{feature}</CheckItem>
        ))}
      </div>
      <a
        href="#contact"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-black text-white transition hover:border-blue-500/50 hover:bg-white/12"
      >
        Choisir cette offre
        <Icon name="arrow" className="h-4 w-4" />
      </a>
    </motion.article>
  );
}
