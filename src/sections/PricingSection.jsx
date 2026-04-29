import { motion } from "framer-motion";
import { fadeUp, pricing } from "../data";
import { AnimatedSection, CheckItem, Icon, SectionHeader } from "../components";

export default function PricingSection({ motionConfig }) {
  return (
    <AnimatedSection
      id="pricing"
      motionConfig={motionConfig}
      className="border-y border-white/10 bg-white/[0.03]"
      background="bg-[radial-gradient(circle_at_22%_30%,rgba(34,211,238,0.13),transparent_28%),radial-gradient(circle_at_78%_64%,rgba(167,139,250,0.12),transparent_30%)]"
    >
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Offres"
          title="Des offres flexibles pour creer, refaire ou maintenir votre site."
          description="Commencez avec une base accessible, lancez un site WordPress, developpez une application ou gardez votre site existant en bonne sante."
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
      variants={fadeUp}
      transition={motionConfig.transition}
      whileHover={motionConfig.hoverLift}
      className={`relative rounded-2xl border p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 ${
        plan.highlight ? "border-lime-300/40 bg-lime-300/10" : "border-white/10 bg-[#0d1118]/85 hover:border-lime-300/30"
      }`}
    >
      {plan.highlight && (
        <div className="absolute right-5 top-5 rounded-lg bg-lime-300 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-slate-950">
          populaire
        </div>
      )}
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-lime-300 text-slate-950">
        <Icon name={plan.highlight ? "bolt" : "euro"} />
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
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-black text-white transition hover:border-lime-300/50 hover:bg-white/12"
      >
        Choisir cette offre
        <Icon name="arrow" className="h-4 w-4" />
      </a>
    </motion.article>
  );
}
