import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { glassBase, projectCatalog, scaleIn } from "../data";
import { AnimatedSection, Icon } from "../components";
import { getProjectImageSrcSet, setImageWidth } from "../utils";

const projectFilters = ["Tous", ...Array.from(new Set(projectCatalog.map((project) => project.category)))];
const technologyLogos = {
  HTML: { label: "HTML", mark: "H", className: "border-orange-300/25 bg-orange-500/12 text-orange-100" },
  CSS: { label: "CSS", mark: "C", className: "border-sky-300/25 bg-sky-500/12 text-sky-100" },
  "HTML/CSS": { label: "HTML/CSS", mark: "</>", className: "border-blue-300/25 bg-blue-500/12 text-blue-100" },
  "HTML/CSS/JS": { label: "HTML/CSS/JS", mark: "</>", className: "border-blue-300/25 bg-blue-500/12 text-blue-100" },
  JavaScript: { label: "JavaScript", mark: "JS", className: "border-yellow-300/25 bg-yellow-400/12 text-yellow-100" },
  React: { label: "React", mark: "R", className: "border-cyan-300/25 bg-cyan-400/12 text-cyan-100" },
  "React Native": { label: "React Native", mark: "RN", className: "border-cyan-300/25 bg-cyan-500/12 text-cyan-100" },
  TailwindCSS: { label: "Tailwind", mark: "TW", className: "border-teal-300/25 bg-teal-400/12 text-teal-100" },
  WordPress: { label: "WordPress", mark: "W", className: "border-blue-200/25 bg-blue-400/12 text-blue-100" },
  "Theme custom": { label: "Theme custom", mark: "UI", className: "border-violet-300/25 bg-violet-500/12 text-violet-100" },
  UX: { label: "UX", mark: "UX", className: "border-fuchsia-300/25 bg-fuchsia-500/12 text-fuchsia-100" },
  Motion: { label: "Motion", mark: "M", className: "border-pink-300/25 bg-pink-500/12 text-pink-100" },
  "Responsive UI": { label: "Responsive UI", mark: "UI", className: "border-emerald-300/25 bg-emerald-500/12 text-emerald-100" },
  "API-ready": { label: "API-ready", mark: "API", className: "border-indigo-300/25 bg-indigo-500/12 text-indigo-100" },
  "SEO base": { label: "SEO", mark: "SEO", className: "border-lime-300/25 bg-lime-500/12 text-lime-100" },
  SEO: { label: "SEO", mark: "SEO", className: "border-lime-300/25 bg-lime-500/12 text-lime-100" },
  Hosting: { label: "Hosting", mark: "H", className: "border-slate-300/25 bg-slate-500/12 text-slate-100" },
};

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
    { value: projectCatalog.length, label: "réalisations" },
    { value: "2", label: "formats site web" },
    { value: "100 EUR", label: "prix de depart" },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-200">Portfolio</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Des réalisations concrètes pour montrer ce que votre futur projet peut accomplir.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Pour les sites web, je travaille en deux formats : intégration HTML/CSS/JS pour une maquette sur mesure, ou
          WordPress quand vous voulez modifier vos contenus facilement.
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
          <motion.button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            whileHover={{ scale: isActive ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-xl border px-4 py-2 text-sm font-black transition ${
              isActive
                ? "border-blue-400 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "border-white/15 bg-white/[0.05] text-slate-300 hover:border-blue-400/60 hover:text-white hover:bg-white/[0.08] hover:shadow-lg hover:shadow-blue-400/20"
            }`}
          >
            {filter}
          </motion.button>
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
      className={`mt-10 overflow-hidden rounded-2xl ${glassBase} border-blue-400/20 shadow-2xl shadow-blue-600/20 hover:border-blue-400/40 hover:shadow-3xl hover:shadow-blue-500/30 transition duration-300`}
    >
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <button type="button" onClick={onOpen} className="group relative min-h-80 overflow-hidden text-left">
          <img
            src={setImageWidth(project.image, 1600)}
            srcSet={getProjectImageSrcSet(project.image)}
            sizes="(min-width: 1024px) 58vw, 100vw"
            alt={project.imageAlt}
            className="motion-media h-full min-h-80 w-full object-cover saturate-110 group-hover:saturate-125 transition duration-500"
            style={{ objectFit: project.imageFit ?? "cover", objectPosition: project.imagePosition }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/60 group-hover:via-black/20 transition duration-500" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-3">
            <ProjectBadge>{project.category}</ProjectBadge>
            <ProjectBadge>{project.status}</ProjectBadge>
            {project.gallery?.length > 1 && <ProjectBadge>{project.gallery.length} images</ProjectBadge>}
          </div>
        </button>

        <div className="p-6 sm:p-8 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
          <ProjectBrand project={project} />
          <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-sky-300">Projet sélectionné</p>
          <h3 className="mt-4 text-3xl font-black tracking-tight text-white leading-tight">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>
          <ProjectThumbStrip project={project} />

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <ProjectMeta label="Budget" value={project.budget} />
            <ProjectMeta label="Délai" value={project.timeline} />
            <ProjectMeta label="Resultat" value={project.result} />
          </div>
          <TechStack items={project.stack} compact variant="hero" />

          <motion.button
            type="button"
            onClick={onOpen}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 text-sm font-black text-white transition shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-600/30"
          >
            Ouvrir la fiche complète
            <Icon name="arrow" className="h-4 w-4" />
          </motion.button>
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
      className={`overflow-hidden rounded-2xl transition duration-300 hover:border-blue-400/40 hover:bg-white/[0.06] shadow-xl shadow-blue-600/10 hover:shadow-2xl hover:shadow-blue-500/20 ${glassBase}`}
    >
      <button type="button" onClick={onOpen} className="group relative block w-full overflow-hidden text-left">
        <img
          src={setImageWidth(project.image, 960)}
          srcSet={getProjectImageSrcSet(project.image)}
          sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
          alt={project.imageAlt}
          className="motion-media aspect-[16/10] w-full object-cover saturate-110 group-hover:saturate-125 transition duration-500"
          style={{ objectFit: project.imageFit ?? "cover", objectPosition: project.imagePosition }}
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
            <ProjectMeta label="Délai" value={project.timeline} />
            <ProjectMeta label="Resultat" value={project.result} />
          </div>

          <TechStack items={project.stack} variant="inline" />

          <motion.button
            type="button"
            onClick={onOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-5 text-sm font-black text-white transition shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-600/30"
          >
            Lire la fiche projet
            <Icon name="arrow" className="h-4 w-4" />
          </motion.button>
      </div>
    </motion.article>
  );
}

function ProjectMeta({ label, value }) {
  return (
    <div className="rounded-2xl border border-blue-400/15 bg-gradient-to-br from-blue-500/8 to-sky-400/5 p-4 shadow-lg shadow-blue-600/5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-2 text-sm font-black text-white">{value}</p>
    </div>
  );
}

function ProjectBadge({ children }) {
  return (
    <span className="rounded-lg border border-white/20 bg-gradient-to-r from-blue-500/20 to-sky-400/20 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur-md shadow-lg shadow-blue-600/20">
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
            style={{ objectFit: image === project.image ? project.imageFit ?? "cover" : "cover" }}
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
  const [zoomImage, setZoomImage] = useState(null);

  if (images.length < 2) {
    return null;
  }

  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <div className="flex items-center justify-between gap-3 px-1 pb-3">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-300">Galerie projet</p>
        <p className="text-xs font-bold text-slate-500">{images.length} visuels</p>
      </div>
      <button
        type="button"
        onClick={() => setZoomImage(activeImage)}
        className="group block w-full overflow-hidden rounded-xl border border-white/10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label="Agrandir le visuel sélectionné"
      >
        <motion.img
          key={activeImage}
          initial={{ opacity: 0, scale: 0.985, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          src={setImageWidth(activeImage, 1280)}
          alt={`${project.title} - visuel actif`}
          className="motion-media aspect-[16/10] w-full cursor-zoom-in object-cover saturate-110 transition duration-500 group-hover:scale-[1.025]"
          style={{ objectFit: activeImage === project.image ? project.imageFit ?? "cover" : "cover" }}
          decoding="async"
        />
      </button>
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
              style={{ objectFit: image === project.image ? project.imageFit ?? "cover" : "cover" }}
                loading="lazy"
                decoding="async"
              />
            </button>
          );
        })}
      </div>
      {zoomImage && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-black/86 p-4 backdrop-blur-md"
          onMouseDown={() => setZoomImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image projet agrandie"
        >
          <button
            type="button"
            onClick={() => setZoomImage(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/10 text-xl font-black text-white transition hover:border-blue-400/50 hover:text-blue-200"
            aria-label="Fermer le zoom"
          >
            x
          </button>
          <img
            src={setImageWidth(zoomImage, 1600)}
            alt={`${project.title} - zoom`}
            className="max-h-[86vh] max-w-[94vw] rounded-2xl border border-white/10 object-contain shadow-2xl shadow-black/50"
            onMouseDown={(event) => event.stopPropagation()}
            decoding="async"
          />
        </div>
      )}
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

function TechStack({ items, compact = false, variant = "default" }) {
  if (!items?.length) {
    return null;
  }

  const isHero = variant === "hero";
  const isInline = variant === "inline";

  return (
    <div
      className={
        isInline
          ? "mt-5 border-t border-white/10 pt-5"
          : isHero
            ? "mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
            : "mt-6"
      }
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-200">Technologies</p>
        {isHero && <p className="text-xs font-bold text-slate-500">{items.length} outils</p>}
      </div>
      <div className={`mt-3 flex flex-wrap gap-2 ${compact ? "" : ""}`}>
        {items.map((item) => (
          <TechnologyBadge key={item} item={item} dense={isInline} />
        ))}
      </div>
    </div>
  );
}

function TechnologyBadge({ item, dense = false }) {
  const logo = technologyLogos[item] ?? {
    label: item,
    mark: item.slice(0, 2).toUpperCase(),
    className: "border-white/15 bg-white/[0.06] text-slate-100",
  };

  return (
    <span
      className={`flex min-w-0 items-center gap-2 rounded-xl border ${logo.className} ${
        dense ? "px-2.5 py-2" : "px-3 py-2.5"
      }`}
    >
      <span
        className={`grid shrink-0 place-items-center rounded-lg border border-white/15 bg-black/20 font-black ${
          dense ? "h-7 w-7 text-[10px]" : "h-8 w-8 text-[11px]"
        }`}
      >
        {logo.mark}
      </span>
      <span className="truncate text-xs font-black">{logo.label}</span>
    </span>
  );
}

function ProjectDialog({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/75 px-4 py-8 backdrop-blur-lg"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
      onMouseDown={onClose}
    >
      <motion.article
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.92 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onMouseDown={(event) => event.stopPropagation()}
        className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#0b0f16] to-[#07101f] shadow-2xl shadow-blue-600/30"
      >
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border-b border-blue-400/15 bg-gradient-to-br from-[#0b0f16] to-[#08101a] p-5 lg:border-b-0 lg:border-r">
            <img
              src={setImageWidth(project.image, 1280)}
              srcSet={getProjectImageSrcSet(project.image)}
              sizes="(min-width: 1024px) 45vw, 100vw"
              alt={project.imageAlt}
              className="motion-media aspect-[16/11] w-full rounded-2xl object-cover saturate-110"
              style={{ objectFit: project.imageFit ?? "cover", objectPosition: project.imagePosition }}
              decoding="async"
            />
            <ProjectGallery key={project.title} project={project} />
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <ProjectMeta label="Budget" value={project.budget} />
              <ProjectMeta label="Délai" value={project.timeline} />
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
              <ProjectTextBlock title="Problème" text={project.challenge} />
              <ProjectTextBlock title="Solution" text={project.solution} />
            </div>

            <TechStack items={project.stack} />
            <TagGroup title="Fonctionnalités" items={project.features} />
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
