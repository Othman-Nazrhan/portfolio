import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getTechnologyLogo, glassBase, projectCatalog, scaleIn } from "../data";
import { AnimatedSection, Icon } from "../components";
import { getProjectImageSrcSet, setImageWidth } from "../utils";

const allProjectsFilter = "all";
const projectFilters = [
  { label: "Tout", value: allProjectsFilter },
  ...Array.from(new Set(projectCatalog.map((project) => project.category))).map((category) => ({
    label: category,
    value: category,
  })),
];

export default function ProjectsPageSection({ motionConfig }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState(allProjectsFilter);

  const visibleProjects =
    activeFilter === allProjectsFilter ? projectCatalog : projectCatalog.filter((project) => project.category === activeFilter);
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
        const isActive = filter.value === activeFilter;

        return (
          <motion.button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            whileHover={{ scale: isActive ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-xl border px-4 py-2 text-sm font-black transition ${
              isActive
                ? "border-blue-400 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "border-white/15 bg-white/[0.05] text-slate-300 hover:border-blue-400/60 hover:text-white hover:bg-white/[0.08] hover:shadow-lg hover:shadow-blue-400/20"
            }`}
          >
            {filter.label}
          </motion.button>
        );
      })}
    </div>
  );
}

function FeaturedProject({ project, motionConfig, onOpen }) {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
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
      initial="hidden"
      animate="visible"
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

function ProjectInsight({ icon, label, value }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-300/20 bg-blue-500/10 text-blue-200">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
        <p className="mt-1 text-sm font-black text-white">{value}</p>
      </div>
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
function ProjectTextBlock({ title, text, icon = "check" }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-blue-300/20 bg-blue-500/10 text-blue-200">
          <Icon name={icon} className="h-4 w-4" />
        </span>
        <p className="text-sm font-black text-white">{title}</p>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
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
  const logo = getTechnologyLogo(item);

  return (
    <span
      className={`flex min-w-0 items-center gap-2 rounded-xl border ${logo.className} ${
        dense ? "px-2.5 py-2" : "px-3 py-2.5"
      }`}
    >
      <span
        className={`grid shrink-0 place-items-center rounded-lg border border-white/15 bg-black/25 shadow-inner shadow-white/5 ${
          dense ? "h-7 w-7" : "h-8 w-8"
        }`}
      >
        <TechLogo name={logo.icon} className={dense ? "h-4 w-4" : "h-5 w-5"} />
      </span>
      <span className="truncate text-xs font-black">{logo.label}</span>
    </span>
  );
}

function TechLogo({ name, className }) {
  const iconClass = className ?? "h-5 w-5";

  if (name === "html" || name === "css") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 3h14l-1.3 15.2L12 21l-5.7-2.8L5 3Z" />
        <path d={name === "html" ? "M9 8h6l-.3 3H10l.2 3 1.8.8 1.8-.8.1-1.5" : "M15.5 8H9l.4 3H15l-.4 4-2.6 1-2.6-1-.2-1.6"} />
      </svg>
    );
  }

  if (name === "javascript") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M9.5 9v5.2c0 1.1-.6 1.8-1.7 1.8-.6 0-1-.2-1.3-.5M13 15.3c.5.5 1.2.7 2 .7 1 0 1.7-.4 1.7-1.2 0-.7-.4-1-1.8-1.4-1.2-.4-1.8-.9-1.8-2 0-1.2 1-2 2.4-2 .8 0 1.4.2 1.9.6" />
      </svg>
    );
  }

  if (name === "react") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.4" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.4" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  if (name === "tailwind") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 13.5c1.7-3.2 3.8-4.8 6.4-4.8 1.6 0 2.6.6 3.6 1.8.8.9 1.6 1.4 2.8 1.4 1.2 0 2.3-.7 3.2-2.1-1.7 3.2-3.8 4.8-6.4 4.8-1.6 0-2.6-.6-3.6-1.8-.8-.9-1.6-1.4-2.8-1.4-1.2 0-2.3.7-3.2 2.1Z" />
      </svg>
    );
  }

  if (name === "wordpress") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M7 8.8 9.4 16M12 8.8 14.1 16M17.2 8.8 14.1 16M5.7 8.8h2.8M10.8 8.8h2.4M15.5 8.8h2.8" />
      </svg>
    );
  }

  if (name === "palette") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3a9 9 0 0 0 0 18h1.1a2 2 0 0 0 1.8-2.8 1.7 1.7 0 0 1 1.5-2.5H18A6.4 6.4 0 0 0 18 3h-6Z" />
        <path d="M7.8 10h.01M10.8 7.8h.01M14.3 8.5h.01" />
      </svg>
    );
  }

  if (name === "ux") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="5" width="16" height="12" rx="2.5" />
        <path d="M8 9h8M8 13h4M10 20h4M12 17v3" />
      </svg>
    );
  }

  if (name === "motion") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m4 15 4-6 4 6 4-6 4 6" />
      </svg>
    );
  }

  if (name === "responsive") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="12" height="10" rx="2" />
        <rect x="16" y="8" width="5" height="11" rx="1.5" />
        <path d="M7 19h5M9.5 15v4" />
      </svg>
    );
  }

  if (name === "api") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 7 3 12l5 5M16 7l5 5-5 5M13.5 4l-3 16" />
      </svg>
    );
  }

  if (name === "seo") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 4.5 4.5M8 11.5l1.5 1.5L13 9" />
      </svg>
    );
  }

  if (name === "hosting") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7.5 18.5h9a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.7-1.6A4.7 4.7 0 0 0 7.5 18.5Z" />
        <path d="M9 14h6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 16.5 5.5 12 10 7.5M14 7.5l4.5 4.5-4.5 4.5M13 4l-2 16" />
    </svg>
  );
}

function ProjectDialog({ project, onClose }) {
  if (!project) {
    return null;
  }

  const openBriefDialog = () => {
    onClose();
    window.dispatchEvent(new Event("open-project-dialog"));
  };

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
        className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-blue-400/20 bg-[#07101f] shadow-2xl shadow-blue-600/30"
      >
        <div className="sticky top-0 z-10 border-b border-white/10 bg-[#07101f]/95 p-5 backdrop-blur-xl sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <ProjectBrand project={project} />
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <ProjectBadge>{project.category}</ProjectBadge>
                <ProjectBadge>{project.status}</ProjectBadge>
              </div>
              <h3 id="project-dialog-title" className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
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
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
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
            <BrandAssetBadges assets={project.brand?.assets} />
          </div>

          <div className="p-6 sm:p-8">
            <div className="rounded-2xl border border-blue-400/15 bg-gradient-to-br from-blue-500/10 to-white/[0.025] p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-200">Résumé du projet</p>
              <p className="mt-3 text-base leading-8 text-slate-300">{project.description}</p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <ProjectInsight icon="target" label="Objectif" value={project.result} />
              <ProjectInsight icon="clock" label="Planning" value={project.timeline} />
              <ProjectInsight icon="euro" label="Budget" value={project.budget} />
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <ProjectTextBlock title="Problème" text={project.challenge} icon="target" />
              <ProjectTextBlock title="Solution" text={project.solution} icon="spark" />
            </div>

            <TechStack items={project.stack} />
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <TagGroup title="Fonctionnalités" items={project.features} />
              <TagGroup title="Livrables" items={project.deliverables} />
            </div>

            <button
              type="button"
              onClick={openBriefDialog}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-5 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition hover:from-blue-400 hover:to-blue-500 sm:w-auto"
            >
              Discuter d'un projet similaire
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
