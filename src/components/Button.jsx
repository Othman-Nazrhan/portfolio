import { motion } from "framer-motion";
import Icon from "./Icon.jsx";

export default function Button({
  children,
  className = "",
  href = "#contact",
  type,
  variant = "primary",
}) {
  const variants = {
    primary:
      "bg-blue-500 text-white shadow-[0_18px_44px_rgba(0,132,255,0.22)] hover:-translate-y-0.5 hover:bg-blue-400 focus-visible:ring-blue-500",
    secondary:
      "border border-white/12 bg-white/[0.04] text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-sky-400/45 hover:bg-white/[0.08] focus-visible:ring-sky-400",
  };

  const Component = type ? motion.button : motion.a;

  return (
    <Component
      whileTap={{ scale: 0.98 }}
      href={type ? undefined : href}
      type={type}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-black transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-6 ${variants[variant]} ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Component>
  );
}

