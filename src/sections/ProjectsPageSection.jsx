import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { glassBase, projectCatalog, scaleIn } from "../data";
import { AnimatedSection, Icon } from "../components";
import { getProjectImageSrcSet, setImageWidth } from "../utils";

const projectFilters = ["Tous", ...Array.from(new Set(projectCatalog.map((project) => project.category)))];

export default function ProjectsPageSection({ motionConfig }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Tous");

  const visibleProjects =
    activeFilter === "Tous" ? projectCatalog : projectCatalog.filter((project) => project.category === activeFilter);
  const featuredProject = visibleProjects[0] ?? projectCatalog[0];
  const secondaryProjects = visibleProjects.filter((project) => project.title !== featuredProject.title);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <AnimatedSection
      id="projects-page"
      motionConfig={motionConfig}
      className="border-y border-white/10 bg-[#070a10]"
      background="bg-[radial-gradient(circle_at_18%_10%,rgba(0,132,255,0.1),transparent_28%),radial-gradient(circle_at_90%_34%,rgba(0,102,255,0.08),transparent_26%)]"
    >
      <div className="relative mx-auto max-w-7xl">
        <ProjectPageHeader />

        <ProjectFilters activeFilter={activeFilter} onChange={setActiveFilter} />

        <FeaturedProject project={featuredProject} motionConfig={motionConfig} onOpen={() => setSelectedProject(featuredProject)} />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {secondaryProjects.map((project) => (
            <ProjectDetailCard
              key={project.title}
              project={project}
              motionConfig={motionConfig}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </AnimatedSection>
  );
}

function ProjectPageHeader() {
  const stats = [
    { value: projectCatalog.length, label: "projets types" },
    { value: "6", label: "services couverts" },
    { value: "100 EUR", label: "prix de depart" },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-200">Portfolio</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Des exemples de realisations que vos clients peuvent demander.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Restaurant, cafe shop, agence, boutique ou cabinet: chaque fiche montre une realisation concrete pour aider
          le visiteur a se projeter et demander un projet similaire.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-2xl font-black tracking-tight text-white">{item.value}</p>
            <p className="mt-1 text-sm font-semibold text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectFilters({ activeFilter, onChange }) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {projectFilters.map((filter) => {
        const isActive = filter === activeFilter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`rounded-xl border px-4 py-2 text-sm font-black transition ${
              isActive
                ? "border-blue-500 bg-blue-500 text-white"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-blue-500/40 hover:text-white"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

function FeaturedProject({ project, motionConfig, onOpen }) {
  return (
    <motion.article
      variants={scaleIn}
      transition={motionConfig.transition}
      whileHover={motionConfig.hoverLift}
      whileTap={motionConfig.tapPress}
      className={`mt-10 overflow-hidden rounded-2xl ${glassBase}`}
    >
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <button type="button" onClick={onOpen} className="group relative min-h-80 overflow-hidden text-left">
          <img
            src={setImageWidth(project.image, 1600)}
            srcSet={getProjectImageSrcSet(project.image)}
            sizes="(min-width: 1024px) 58vw, 100vw"
            alt={project.imageAlt}
            className="motion-media h-full min-h-80 w-full object-cover saturate-110"
            style={{ objectPosition: project.imagePosition }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/22 to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-3">
            <ProjectBadge>{project.category}</ProjectBadge>
            <ProjectBadge>{project.status}</ProjectBadge>
            {project.gallery?.length > 1 && <ProjectBadge>{project.gallery.length} images</ProjectBadge>}
          </div>
        </button>

        <div className="p-6 sm:p-8">
          <ProjectBrand project={project} />
          <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-sky-200">Projet selectionne</p>
          <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>
          <ProjectThumbStrip project={project} />

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <ProjectMeta label="Budget" value={project.budget} />
            <ProjectMeta label="Delai" value={project.timeline} />
            <ProjectMeta label="Resultat" value={project.result} />
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 text-sm font-black text-white transition hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Ouvrir la fiche complete
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectDetailCard({ project, motionConfig, onOpen }) {
  return (
    <motion.article
      variants={scaleIn}
      transition={motionConfig.transition}
      whileHover={motionConfig.hoverLift}
      whileTap={motionConfig.tapPress}
      className={`overflow-hidden rounded-2xl transition duration-300 hover:border-blue-500/35 hover:bg-white/[0.08] ${glassBase}`}
    >
      <button type="button" onClick={onOpen} className="group relative block w-full overflow-hidden text-left">
        <img
          src={setImageWidth(project.image, 960)}
          srcSet={getProjectImageSrcSet(project.image)}
          sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
          alt={project.imageAlt}
          className="motion-media aspect-[16/10] w-full object-cover saturate-110"
          style={{ objectPosition: project.imagePosition }}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          <ProjectBadge>{project.category}</ProjectBadge>
          <ProjectBadge>{project.result}</ProjectBadge>
          {project.gallery?.length > 1 && <ProjectBadge>{project.gallery.length} images</ProjectBadge>}
        </div>
      </button>

      <div className="p-6">
          <ProjectBrand project={project} compact />
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-blue-100">
              {project.category}
            </span>
            <span className="rounded-lg border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-sky-100">
              {project.status}
            </span>
          </div>

          <h3 className="mt-5 text-xl font-black tracking-tight text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
          <ProjectThumbStrip project={project} compact />

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <ProjectMeta label="Budget" value={project.budget} />
            <ProjectMeta label="Delai" value={project.timeline} />
            <ProjectMeta label="Resultat" value={project.result} />
          </div>

          <TagGroup title="Stack" items={project.stack} />

          <button
            type="button"
            onClick={onOpen}
            className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 text-sm font-black text-white transition hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Lire la fiche projet
            <Icon name="arrow" className="h-4 w-4" />
          </button>
      </div>
    </motion.article>
  );
}

function ProjectMeta({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-black text-white">{value}</p>
    </div>
  );
}

function ProjectBadge({ children }) {
  return (
    <span className="rounded-lg border border-white/15 bg-black/45 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur-md">
      {children}
    </span>
  );
}
function ProjectBrand({ project, compact = false }) {
  const { brand } = project;

  if (!brand) {
    return null;
  }

  return (
    <div className={`flex items-center gap-3 ${compact ? "mb-5" : ""}`}>
      <div
        className={`grid ${compact ? "h-11 w-11" : "h-14 w-14"} shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${
          brand.accent
        } text-sm font-black text-slate-950 shadow-lg shadow-black/25`}
      >
        {brand.initials}
      </div>
      <div className="min-w-0">
        <p className="truncate text-base font-black tracking-tight text-white">{brand.name}</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{brand.industry}</p>
      </div>
    </div>
  );
}
function BrandAssetBadges({ assets }) {
  if (!assets?.length) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {assets.map((asset) => (
        <span
          key={asset}
          className="rounded-lg border border-white/10 bg-white/[0.07] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-200"
        >
          {asset}
        </span>
      ))}
    </div>
  );
}
function ProjectThumbStrip({ project, compact = false }) {
  const images = project.gallery ?? [];

  if (images.length < 2) {
    return null;
  }

  return (
    <div className={`${compact ? "mt-4" : "mt-5"} grid grid-cols-3 gap-2`}>
      {images.map((image, index) => (
        <div key={image} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
          <img
            src={setImageWidth(image, 640)}
            alt={`${project.title} - apercu ${index + 1}`}
            className={`motion-media ${compact ? "aspect-[4/3]" : "aspect-[16/10]"} w-full object-cover saturate-110`}
            loading="lazy"
            decoding="async"
          />
          <span className="absolute bottom-1.5 left-1.5 rounded-md bg-black/55 px-2 py-0.5 text-[10px] font-black text-white backdrop-blur">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      ))}
    </div>
  );
}
function ProjectGallery({ project }) {
  const images = project.gallery ?? [project.image];
  const [activeImage, setActiveImage] = useState(images[0]);

  if (images.length < 2) {
    return null;
  }

  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <div className="flex items-center justify-between gap-3 px-1 pb-3">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-300">Galerie projet</p>
        <p className="text-xs font-bold text-slate-500">{images.length} visuels</p>
      </div>
      <motion.img
        key={activeImage}
        initial={{ opacity: 0, scale: 0.985, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        src={setImageWidth(activeImage, 1280)}
        alt={`${project.title} - visuel actif`}
        className="motion-media aspect-[16/10] w-full rounded-xl border border-white/10 object-cover saturate-110"
        decoding="async"
      />
      <div className="mt-3 grid grid-cols-3 gap-3">
        {images.map((image, index) => {
          const isActive = image === activeImage;

          return (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(image)}
              className={`gallery-thumb overflow-hidden rounded-xl border text-left ${
                isActive ? "border-blue-500 ring-2 ring-blue-500/25" : "border-white/10 hover:border-blue-500/40"
              }`}
            >
              <img
                src={setImageWidth(image, 640)}
                alt={`${project.title} - miniature ${index + 1}`}
                className="motion-media aspect-[4/3] w-full object-cover saturate-110"
                loading="lazy"
                decoding="async"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
function ProjectTextBlock({ title, text }) {
  return (
    <div>
      <p className="text-sm font-black text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}
function TagGroup({ title, items }) {
  return (
    <div className="mt-6">
      <p className="text-sm font-black text-white">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectDialog({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/72 px-4 py-8 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
      onMouseDown={onClose}
    >
      <motion.article
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onMouseDown={(event) => event.stopPropagation()}
        className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0b0f16] shadow-2xl shadow-black/50"
      >
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border-b border-white/10 bg-[#080b12] p-5 lg:border-b-0 lg:border-r">
            <img
              src={setImageWidth(project.image, 1280)}
              srcSet={getProjectImageSrcSet(project.image)}
              sizes="(min-width: 1024px) 45vw, 100vw"
              alt={project.imageAlt}
              className="motion-media aspect-[16/11] w-full rounded-2xl object-cover saturate-110"
              style={{ objectPosition: project.imagePosition }}
              decoding="async"
            />
            <ProjectGallery key={project.title} project={project} />
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <ProjectMeta label="Budget" value={project.budget} />
              <ProjectMeta label="Delai" value={project.timeline} />
              <ProjectMeta label="Resultat" value={project.result} />
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <ProjectBrand project={project} />
                <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-sky-200">{project.category}</p>
                <h3 id="project-dialog-title" className="mt-3 text-2xl font-black tracking-tight text-white">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-xl font-black text-white transition hover:border-blue-500/40 hover:text-sky-200"
                aria-label="Fermer la fiche projet"
              >
                x
              </button>
            </div>

            <p className="mt-5 text-base leading-8 text-slate-300">{project.description}</p>
            <BrandAssetBadges assets={project.brand?.assets} />

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <ProjectTextBlock title="Probleme" text={project.challenge} />
              <ProjectTextBlock title="Solution" text={project.solution} />
            </div>

            <TagGroup title="Stack" items={project.stack} />
            <TagGroup title="Fonctionnalites" items={project.features} />
            <TagGroup title="Livrables" items={project.deliverables} />

            <a
              href="/#contact"
              onClick={onClose}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 text-sm font-black text-white transition hover:bg-blue-400"
            >
              Discuter d'un projet similaire
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
