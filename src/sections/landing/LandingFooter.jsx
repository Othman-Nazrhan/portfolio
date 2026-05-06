import { BrandLogo } from "../../components";
import { landingNavLinks } from "../../data";



export default function LandingFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 md:items-start">
        <div>
          <BrandLogo compact />
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
            Web Engineer crée des sites web modernes, performants et optimisés pour développer votre activité en ligne.
          </p>
        </div>
        <div>
          <p className="text-sm font-black text-white">Liens</p>
          <nav className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
            {landingNavLinks.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-blue-300">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="md:text-right">
          <p className="text-xs text-slate-400">📩 hello@webengineer.com</p>
          <p className="text-xs text-slate-400">📱 Instagram : @webengineer</p>
          <p className="mt-4 text-xs text-slate-400">🌐 Web Engineer © 2026</p>
        </div>
      </div>
    </footer>
  );
}


