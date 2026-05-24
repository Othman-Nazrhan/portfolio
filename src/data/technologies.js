export const technologyLogos = {
  HTML: { label: "HTML", icon: "html", className: "border-orange-300/25 bg-orange-500/12 text-orange-100" },
  CSS: { label: "CSS", icon: "css", className: "border-sky-300/25 bg-sky-500/12 text-sky-100" },
  "HTML/CSS": { label: "HTML/CSS", icon: "code", className: "border-blue-300/25 bg-blue-500/12 text-blue-100" },
  "HTML/CSS/JS": { label: "HTML/CSS/JS", icon: "code", className: "border-blue-300/25 bg-blue-500/12 text-blue-100" },
  JavaScript: { label: "JavaScript", icon: "javascript", className: "border-yellow-300/25 bg-yellow-400/12 text-yellow-100" },
  React: { label: "React", icon: "react", className: "border-cyan-300/25 bg-cyan-400/12 text-cyan-100" },
  "React Native": { label: "React Native", icon: "react", className: "border-cyan-300/25 bg-cyan-500/12 text-cyan-100" },
  TailwindCSS: { label: "Tailwind", icon: "tailwind", className: "border-teal-300/25 bg-teal-400/12 text-teal-100" },
  WordPress: { label: "WordPress", icon: "wordpress", className: "border-blue-200/25 bg-blue-400/12 text-blue-100" },
  "Theme custom": { label: "Theme custom", icon: "palette", className: "border-violet-300/25 bg-violet-500/12 text-violet-100" },
  UX: { label: "UX", icon: "ux", className: "border-fuchsia-300/25 bg-fuchsia-500/12 text-fuchsia-100" },
  Motion: { label: "Motion", icon: "motion", className: "border-pink-300/25 bg-pink-500/12 text-pink-100" },
  "Responsive UI": { label: "Responsive UI", icon: "responsive", className: "border-emerald-300/25 bg-emerald-500/12 text-emerald-100" },
  "API-ready": { label: "API-ready", icon: "api", className: "border-indigo-300/25 bg-indigo-500/12 text-indigo-100" },
  "SEO base": { label: "SEO", icon: "seo", className: "border-lime-300/25 bg-lime-500/12 text-lime-100" },
  SEO: { label: "SEO", icon: "seo", className: "border-lime-300/25 bg-lime-500/12 text-lime-100" },
  Hosting: { label: "Hosting", icon: "hosting", className: "border-slate-300/25 bg-slate-500/12 text-slate-100" },
};

export function getTechnologyLogo(name) {
  return (
    technologyLogos[name] ?? {
      label: name,
      icon: "code",
      className: "border-white/15 bg-white/[0.06] text-slate-100",
    }
  );
}
