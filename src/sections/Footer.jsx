import { contactEmail, contactPhone, contactPhoneHref, instagramHandle, instagramUrl, navItems } from "../data";
import { BrandLogo } from "../components";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandLogo compact />
          <p className="mt-1">Sites vitrines, WordPress, dashboards, mobile, refonte et maintenance.</p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-4 font-semibold">
            {navItems.map(({ label, href }) => (
              <a key={href} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-slate-300 md:justify-end">
            <a href={`mailto:${contactEmail}`} className="transition hover:text-sky-200">
              Email : {contactEmail}
            </a>
            <a href={`tel:${contactPhoneHref}`} className="transition hover:text-sky-200">
              Telephone : {contactPhone}
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="transition hover:text-sky-200">
              Instagram : @{instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
