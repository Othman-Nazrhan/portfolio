import { motion } from "framer-motion";
import { Icon } from "../../components";
import { landingProjects } from "../../data/landing.js";
import LandingSection from "./LandingSection.jsx";
import { PrimaryButton, SecondaryButton } from "./LandingButton.jsx";
import { fadeUp, stagger } from "./motion.js";

export default function Portfolio({ motionConfig }) {
  const [featuredProject, ...secondaryProjects] = landingProjects;
  const projectStats = [
    ["3", "projets sélectionnés"],
    ["4", "types de besoins"],
    ["100%", "mobile-ready"],
  ];

  return (
    <LandingSection id="portfolio" eyebrow="Réalisations" title="Des projets concrets, conçus pour des besoins réels">
      <div className="mx-auto mt-7 max-w-3xl text-center">
        <p className="text-base leading-7 text-slate-300 sm:text-lg">
          Une présentation sobre de projets récents, pensée pour montrer le rendu final, le contexte et la valeur de chaque
          réalisation sans surcharger la page.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mt-10 rounded-xl border border-white/12 bg-white/[0.035] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:p-4"
      >
        <motion.article
          variants={fadeUp}
          whileHover={motionConfig.hoverLift}
          transition={motionConfig.transition}
          className="group overflow-hidden rounded-lg border border-blue-400/20 bg-[#07101f] transition hover:border-blue-400/55"
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-80 overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="motion-media h-full min-h-80 w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/55 to-transparent p-5 sm:p-6">
                <p className="inline-flex rounded-md border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-black text-white backdrop-blur-xl">
                  Projet mis en avant
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-white/[0.025] p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">{featuredProject.type}</span>
                  <span className="rounded-md border border-blue-300/20 bg-blue-500/10 px-3 py-1.5 text-xs font-black text-blue-100">
                    {featuredProject.result}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-black tracking-tight text-white sm:text-3xl">{featuredProject.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{featuredProject.description}</p>
                <div className="mt-7 grid gap-3">
                  {featuredProject.tags.map((tag) => (
                    <p key={tag} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                      <Icon name="check" className="h-4 w-4 text-blue-300" />
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
              <a
                href="/portfolio"
                className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-black text-white transition hover:bg-blue-500"
              >
                Voir l'étude complète
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.article>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mt-5 grid gap-5 lg:grid-cols-2"
      >
        {secondaryProjects.map((project) => (
          <ProjectMiniCard key={project.title} project={project} motionConfig={motionConfig} />
        ))}
      </motion.div>

      <div className="mt-5 rounded-xl border border-white/12 bg-white/[0.035] p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          {projectStats.map(([value, label]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-[#07101f]/70 p-4 text-center">
              <p className="text-2xl font-black text-white">{value}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-slate-300">
            Besoin de voir plus de cas avant de lancer votre site ? Le portfolio détaillé présente les objectifs, les
            écrans et les livrables.
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <PrimaryButton href="/portfolio">Voir tout</PrimaryButton>
            <SecondaryButton href="#contact">Demander un devis</SecondaryButton>
          </div>
        </div>
      </div>
    </LandingSection>
  );
}

function ProjectMiniCard({ project, motionConfig }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={motionConfig.hoverLift}
      transition={motionConfig.transition}
      className="group grid overflow-hidden rounded-xl border border-white/12 bg-white/[0.035] shadow-[0_22px_70px_rgba(0,0,0,0.22)] transition hover:border-blue-400/50 sm:grid-cols-[15rem_1fr]"
    >
      <div className="h-48 overflow-hidden border-b border-white/10 bg-[#07101f] sm:h-full sm:border-b-0 sm:border-r sm:border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="motion-media h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-200">{project.type}</p>
          <p className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-black text-slate-200">
            {project.result}
          </p>
        </div>
        <h3 className="mt-3 text-lg font-black text-white">{project.title}</h3>
        <p className="mt-3 text-xs leading-6 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-md border border-blue-300/15 bg-blue-500/10 px-2.5 py-1 text-[11px] font-black text-blue-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
