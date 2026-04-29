import { inputClass } from "../data";

export default function SelectField({ label, name, options }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-200">{label}</span>
      <select name={name} required className={inputClass} defaultValue="">
        <option value="" disabled>
          Choisir
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

