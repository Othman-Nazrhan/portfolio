import { useEffect, useRef, useState } from "react";
import { Icon } from "../../components";
import buildMailto from "../../utils/buildMailto";

const projectTypes = ["Site vitrine", "Landing page", "Site WordPress", "Refonte", "Maintenance", "Autre"];
const budgets = ["100 - 300 EUR", "300 - 600 EUR", "600 - 1000 EUR", "1000 EUR et plus"];
const timelines = ["Urgent", "1 a 2 semaines", "Ce mois-ci", "Je compare les options"];

export function ProjectDialogButton({ children = "Discutons de votre projet", className = "" }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-project-dialog"))}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-black text-white shadow-[0_14px_46px_rgba(0,102,255,0.32)] transition hover:-translate-y-0.5 hover:bg-blue-500 ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </button>
  );
}

export default function ProjectDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const openDialog = () => setIsOpen(true);
    window.addEventListener("open-project-dialog", openDialog);
    return () => window.removeEventListener("open-project-dialog", openDialog);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailto(formRef.current);
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center px-4 py-6">
      <button
        type="button"
        aria-label="Fermer"
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-[#020813]/80 backdrop-blur-xl"
      />
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-blue-300/25 bg-[#07101f] p-5 shadow-[0_35px_120px_rgba(0,0,0,0.65)] sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">Brief rapide</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white">Parlez-moi de votre projet</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Répondez à quelques questions. Votre messagerie s'ouvrira ensuite avec un message déjà préparé.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-xl font-black text-white transition hover:border-blue-400/60 hover:text-blue-200"
          >
            ×
          </button>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-7 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Votre nom">
              <input name="name" required placeholder="Nom / entreprise" className={inputClass} />
            </Field>
            <Field label="Votre email">
              <input name="email" type="email" required placeholder="vous@email.com" className={inputClass} />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Type de projet">
              <select name="projectType" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Choisir
                </option>
                {projectTypes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="Budget">
              <select name="budget" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Choisir
                </option>
                {budgets.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="Délai">
              <select name="timeline" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Choisir
                </option>
                {timelines.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Votre objectif principal">
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Ex: présenter mes services, recevoir plus de demandes, refaire un site ancien..."
              className={`${inputClass} resize-none leading-7`}
            />
          </Field>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.035] px-5 text-sm font-black text-white transition hover:border-blue-400/60 hover:bg-blue-500/10"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-black text-white shadow-[0_14px_46px_rgba(0,102,255,0.32)] transition hover:bg-blue-500"
            >
              Envoyer ma demande
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="text-sm font-bold text-slate-200">
      {label}
      {children}
    </label>
  );
}

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-[#030814] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400/70 focus:ring-4 focus:ring-blue-500/10";
