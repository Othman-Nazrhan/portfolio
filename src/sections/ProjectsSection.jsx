import { motion } from "framer-motion";
import { fadeUp, featuredProjects, glassBase } from "../data";
import { AnimatedSection, Button, Icon, SectionHeader } from "../components";
import { getProjectImageSrcSet, setImageWidth } from "../utils";

export default function ProjectsSection({ motionConfig }) {
  return (
    <AnimatedSection id="projects" motionConfig={motionConfig}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projets"
          title="Des exemples de realisations faciles a imaginer."
          description="Restaurant, cafe shop, agence immobiliere, salon de beaute ou boutique: chaque exemple aide le client a demander le meme type de projet."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} motionConfig={motionConfig} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/portfolio" variant="secondary">
            Voir le portfolio complet
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProjectCard({ project, motionConfig }) {
  return (
    <motion.article
      variants={fadeUp}
      transition={motionConfig.transition}
      whileHover={motionConfig.hoverLift}
      className={`overflow-hidden rounded-2xl transition duration-300 hover:border-lime-300/35 hover:bg-white/[0.08] ${glassBase}`}
    >
      <div className="p-5">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080b12]">
          <img
            src={setImageWidth(project.image, 960)}
            srcSet={getProjectImageSrcSet(project.image)}
            sizes="(min-width: 1024px) 31vw, 100vw"
            alt={project.imageAlt}
            className="aspect-[16/11] w-full object-cover saturate-110 transition duration-500 hover:scale-105"
            style={{ objectPosition: project.imagePosition }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="p-6 pt-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-bold text-slate-400">{project.type}</p>
          <p className="rounded-lg border border-lime-300/20 bg-lime-300/10 px-3 py-1 text-sm font-black text-lime-200">
            {project.result}
          </p>
        </div>
        <h3 className="mt-4 text-lg font-black tracking-tight text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
        <a
          href="/portfolio"
          className="mt-6 inline-flex items-center gap-2 text-sm font-black text-lime-200 transition hover:text-lime-100"
        >
          Voir le detail
          <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}
