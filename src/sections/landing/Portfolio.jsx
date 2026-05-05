import { motion } from "framer-motion";
import { Icon } from "../../components";
import { landingProjects } from "../../data";
import LandingSection from "./LandingSection.jsx";

export default function Portfolio({ motionConfig }) {
  return (
    <LandingSection id="portfolio" eyebrow="R\u00e9alisations" title="Des exemples pensés pour inspirer confiance">
      <div className="mt-7 grid gap-5 lg:grid-cols-[repeat(3,minmax(0,1fr))_0.92fr]">
        {landingProjects.map((project) => (
          <motion.article
            key={project.title}
            whileHover={motionConfig.hoverLift}
            className="overflow-hidden rounded-xl border border-white/12 bg-white/[0.035] shadow-[0_22px_70px_rgba(0,0,0,0.26)] transition hover:border-blue-400/55"
          >
            <div className="h-40 overflow-hidden border-b border-white/10 bg-[#07101f]">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="p-5">
              <p className="text-xs text-slate-400">{project.type}</p>
              <h3 className="mt-2 text-lg font-black text-white">{project.title}</h3>
              <a href="/portfolio" className="mt-4 inline-flex items-center gap-2 text-xs font-black text-blue-300 transition hover:text-white">
                Voir le projet
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.article>
        ))}
        <motion.aside
          whileHover={motionConfig.hoverLift}
          className="rounded-xl border border-white/12 bg-white/[0.045] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.26)]"
        >
          <h3 className="text-lg font-black text-white">Ils m'ont fait confiance</h3>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            "Le rendu est moderne, clair et beaucoup plus professionnel. Mes clients comprennent mieux mon offre et me contactent plus facilement."
          </p>
          <div className="mt-6 flex gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon key={index} name="star" className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="mt-6 text-sm font-bold text-white">- Client satisfait</p>
        </motion.aside>
      </div>
    </LandingSection>
  );
}
