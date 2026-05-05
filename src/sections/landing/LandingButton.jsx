import { Icon } from "../../components";

export function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-black text-white shadow-[0_14px_46px_rgba(0,102,255,0.32)] transition hover:-translate-y-0.5 hover:bg-blue-500 ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </a>
  );
}

export function SecondaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.035] px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-blue-500/10 ${className}`}
    >
      {children}
    </a>
  );
}
