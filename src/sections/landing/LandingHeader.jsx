import { BrandLogo } from "../../components";
import { brandName, landingNavLinks } from "../../data";
import { ProjectDialogButton } from "./ProjectDialog.jsx";

export default function LandingHeader() {
  return (
    <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
      <a href="#" aria-label={brandName} className="shrink-0">
        <BrandLogo compact />
      </a>
      <nav className="hidden items-center gap-8 text-sm font-black text-white/90 lg:flex">
        {landingNavLinks.map(([label, href]) => (
          <a key={label} href={href} className="transition hover:text-blue-300">
            {label}
          </a>
        ))}
      </nav>
      <ProjectDialogButton />
    </header>
  );
}
