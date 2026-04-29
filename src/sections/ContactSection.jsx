import { motion } from "framer-motion";
import { budgets, contactEmail, fadeUp, glassBase, inputClass, projectTypes, timelines } from "../data";
import { AnimatedSection, Button, Icon, SelectField } from "../components";
import { buildMailto } from "../utils";

const contactHighlights = [
  { icon: "globe", label: "Site vitrine" },
  { icon: "wordpress", label: "WordPress administrable" },
  { icon: "dashboard", label: "Dashboard / app web" },
  { icon: "refresh", label: "Maintenance et refonte" },
];

export default function ContactSection({ motionConfig }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailto(event.currentTarget);
  };

  return (
    <AnimatedSection id="contact" motionConfig={motionConfig} className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <ContactCopy motionConfig={motionConfig} />
        <ContactForm motionConfig={motionConfig} onSubmit={handleSubmit} />
      </div>
    </AnimatedSection>
  );
}

function ContactCopy({ motionConfig }) {
  return (
    <motion.div variants={fadeUp} transition={motionConfig.transition}>
      <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-200">Contact</p>
      <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
        Dites-moi ce que vous voulez creer, corriger ou ameliorer.
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
        Envoyez votre activite, vos objectifs, les pages ou fonctionnalites souhaitees et vos delais. Je vous reponds
        avec une direction claire et une estimation simple.
      </p>
      <div className="mt-8 space-y-4">
        {contactHighlights.map((item) => (
          <div key={item.label} className="flex items-center gap-3 text-sm font-bold text-slate-200">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-lime-300/20 bg-lime-300/10 text-lime-200">
              <Icon name={item.icon} className="h-4 w-4" />
            </span>
            {item.label}
          </div>
        ))}
      </div>
      <a href={`mailto:${contactEmail}`} className="mt-8 inline-flex items-center gap-3 font-bold text-white transition hover:text-lime-200">
        <Icon name="mail" className="h-5 w-5" />
        {contactEmail}
      </a>
    </motion.div>
  );
}
function ContactForm({ motionConfig, onSubmit }) {
  return (
    <motion.form
      variants={fadeUp}
      transition={motionConfig.transition}
      onSubmit={onSubmit}
      className={`rounded-2xl p-6 sm:p-8 ${glassBase}`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-slate-200">Nom</span>
          <input type="text" name="name" placeholder="Votre nom" required className={inputClass} />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-slate-200">Email</span>
          <input type="email" name="email" placeholder="vous@entreprise.com" required className={inputClass} />
        </label>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        <SelectField label="Type de projet" name="projectType" options={projectTypes} />
        <SelectField label="Budget estime" name="budget" options={budgets} />
        <SelectField label="Delai souhaite" name="timeline" options={timelines} />
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-bold text-slate-200">Brief du projet</span>
        <textarea
          name="message"
          placeholder="Exemple: je veux un site pour mon restaurant avec menu, galerie, horaires, reservation et une page contact."
          required
          className={`${inputClass} min-h-36 resize-none`}
        />
      </label>

      <p className="mt-4 rounded-xl border border-lime-300/15 bg-lime-300/10 px-4 py-3 text-sm leading-6 text-lime-50">
        Reponse claire sous 24h ouvrables avec les prochaines etapes, les points a clarifier et une estimation adaptee
        au projet.
      </p>

      <Button
        type="submit"
        className="mt-6 w-full font-black sm:w-auto"
      >
        Recevoir une proposition
      </Button>
    </motion.form>
  );
}
