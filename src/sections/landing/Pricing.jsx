import { motion } from "framer-motion";
import { Icon } from "../../components";
import { landingPlans } from "../../data";
import LandingSection from "./LandingSection.jsx";

export default function Pricing({ motionConfig }) {
  return (
    <LandingSection id="pricing" eyebrow="Nos offres" title="Choisissez la formule adaptée à votre objectif">
      <div className="mx-auto mt-7 grid max-w-5xl gap-5 lg:grid-cols-3">
        {landingPlans.map((plan) => (
          <motion.article
            key={plan.name}
            whileHover={motionConfig.hoverLift}
            className={`relative rounded-xl border p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition ${
              plan.popular
                ? "border-blue-400/65 bg-blue-500/[0.09] shadow-blue-950/40"
                : "border-white/12 bg-white/[0.035] hover:border-blue-400/50"
            }`}
          >
            {plan.popular && (
              <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-xl bg-blue-600 px-4 py-2 text-xs font-black text-white">
                Le plus populaire
              </span>
            )}
            <h3 className="text-lg font-black text-white">{plan.name}</h3>
            {plan.label && <p className="mt-5 text-xs text-slate-400">{plan.label}</p>}
            <p className="mt-1 text-4xl font-black tracking-tight text-white">{plan.price}</p>
            <div className="mt-7 space-y-3">
              {plan.features.map((feature) => (
                <p key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                  <Icon name="check" className="h-4 w-4 text-blue-400" />
                  {feature}
                </p>
              ))}
            </div>
            <a
              href="#contact"
              className={`mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-lg border px-5 text-sm font-black transition ${
                plan.popular
                  ? "border-blue-500 bg-blue-600 text-white hover:bg-blue-500"
                  : "border-white/15 bg-white/[0.03] text-white hover:border-blue-400/60 hover:bg-blue-500/10"
              }`}
            >
              {plan.cta}
            </a>
          </motion.article>
        ))}
      </div>
    </LandingSection>
  );
}
