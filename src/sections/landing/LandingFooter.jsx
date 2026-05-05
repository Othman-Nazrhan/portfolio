import { BrandLogo, Icon } from "../../components";
import { contactEmail, landingNavLinks } from "../../data";

export default function LandingFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 md:items-start">
        <div>
          <BrandLogo compact />
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
            Sites web modernes, rapides et pens&eacute;s pour convertir vos visiteurs en clients.
          </p>
        </div>
        <div>
          <p className="text-sm font-black text-white">Liens rapides</p>
          <nav className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
            {landingNavLinks.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-blue-300">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="md:text-right">
          <p className="text-sm font-black text-white">Suivez-moi</p>
          <div className="mt-4 flex gap-3 md:justify-end">
            <SocialIcon href="https://instagram.com" label="Instagram" icon="instagram" />
            <SocialIcon href="https://linkedin.com" label="LinkedIn" icon="linkedin" />
            <a
              href={`mailto:${contactEmail}`}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-blue-400/55 hover:text-blue-300"
            >
              <Icon name="mail" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-blue-400/55 hover:text-blue-300"
    >
      <Icon name={icon} className="h-4 w-4" />
    </a>
  );
}
