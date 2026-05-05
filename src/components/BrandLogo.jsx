import { brandName, brandLogo } from "../data";

export default function BrandLogo({ compact = false }) {
  const sizeClass = compact ? "h-10 w-36" : "h-12 w-44 sm:w-52";

  return (
    <span className={`block overflow-hidden ${sizeClass}`}>
      <img src={brandLogo} alt={brandName} className="h-full w-full object-cover object-center" />
    </span>
  );
}
