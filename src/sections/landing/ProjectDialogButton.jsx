import { Icon } from "../../components";

export function ProjectDialogButton({ children = "Discutons de votre projet", className = "" }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-project-dialog"))}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-black text-white shadow-[0_14px_46px_rgba(0,102,255,0.32)] transition hover:-translate-y-0.5 hover:bg-blue-500 ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </button>
  );
}
