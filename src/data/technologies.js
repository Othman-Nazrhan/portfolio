export const technologyLogos = {
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

export function getTechnologyLogo(name) {
  return (
    technologyLogos[name] ?? {
      label: name,
      mark: name.slice(0, 2).toUpperCase(),
      className: "border-white/15 bg-white/[0.06] text-slate-100",
    }
  );
}
