import { Icon } from "../../components";
import { landingCtaBadges } from "../../data/landing.js";
import { PrimaryButton, SecondaryButton } from "./LandingButton.jsx";

export default function FinalCta() {
  return (
    <section id="contact" className="px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-xl border border-blue-400/18 bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:grid-cols-[auto_1fr_auto_auto] md:items-center">
        <div className="grid h-20 w-20 place-items-center rounded-full border border-blue-400/45 bg-blue-500/10 text-blue-200 shadow-[0_0_44px_rgba(0,102,255,0.28)]">
          <Icon name="spark" className="h-8 w-8" />
        </div>
        <div>
          <h2 className="max-w-xl text-2xl font-black leading-tight text-white sm:text-3xl">
            Prêt à transformer votre idée en un site web performant ?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
            Discutons ensemble de votre projet et créons une présence en ligne moderne et efficace.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <PrimaryButton href="#contact">Discutons de votre projet</PrimaryButton>
          <SecondaryButton href="#services">En savoir plus</SecondaryButton>
        </div>
        <div className="grid gap-3 text-xs text-slate-400 sm:grid-cols-3 md:grid-cols-1">
          {landingCtaBadges.map((item) => (
            <p key={item} className="flex items-center gap-2">
              <Icon name="shield" className="h-4 w-4 text-blue-300" />
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
