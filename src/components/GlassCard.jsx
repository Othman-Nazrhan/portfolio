import { glassBase } from "../data";

export default function GlassCard({ children, className = "" }) {
  return <div className={`${glassBase} ${className}`}>{children}</div>;
}

