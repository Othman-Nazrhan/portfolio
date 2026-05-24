import { Icon } from "../../components";

function openBriefDialog() {
  window.dispatchEvent(new Event("open-project-dialog"));
}

export function PrimaryButton({ href, children, className = "" }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-black text-white shadow-[0_14px_46px_rgba(0,102,255,0.32)] transition hover:-translate-y-0.5 hover:bg-blue-500 ${className}`;

  if (href === "#contact") {
    return (
      <button type="button" onClick={openBriefDialog} className={classes}>
        {children}
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    );
  }

  return (
    <a
      href={href}
      className={classes}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </a>
  );
}

export function SecondaryButton({ href, children, className = "" }) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.035] px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-blue-500/10 ${className}`;

  if (href === "#contact") {
    return (
      <button type="button" onClick={openBriefDialog} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={classes}
    >
      {children}
    </a>
  );
}
