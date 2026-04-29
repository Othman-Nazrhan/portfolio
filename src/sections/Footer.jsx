import { brandName, navItems } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-black text-white">{brandName}</p>
          <p className="mt-1">Creation de sites web, WordPress, applications web, mobile et maintenance.</p>
        </div>
        <div className="flex flex-wrap gap-4 font-semibold">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
