import Icon from "./Icon.jsx";

export default function CheckItem({ children }) {
  return (
    <div className="flex items-center gap-3 text-sm font-bold text-slate-200">
      <span className="grid h-6 w-6 place-items-center rounded-lg bg-lime-300/10 text-lime-200">
        <Icon name="check" className="h-3.5 w-3.5" />
      </span>
      {children}
    </div>
  );
}

