import { Suspense, lazy, useEffect, useState } from "react";
import { useMotionSettings } from "./hooks";
import { brandName, navItems } from "./data";
import ContactSection from "./sections/ContactSection.jsx";
import CtaSection from "./sections/CtaSection.jsx";
import Footer from "./sections/Footer.jsx";
import FreelancerSection from "./sections/FreelancerSection.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import PricingSection from "./sections/PricingSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import ServicesSection from "./sections/ServicesSection.jsx";

const ProjectsPageSection = lazy(() => import("./sections/ProjectsPageSection.jsx"));

const animatedSections = [
  HeroSection,
  ServicesSection,
  FreelancerSection,
  PricingSection,
  ProjectsSection,
  CtaSection,
  ContactSection,
];

export default function App() {
  const motionConfig = useMotionSettings();
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(window.location.hash);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentPath]);

  const handleNavigation = (event) => {
    const link = event.target.closest("a");

    if (!link || link.target || link.origin !== window.location.origin) {
      return;
    }

    const isInternalPage = link.pathname === "/" || link.pathname === "/portfolio";

    if (!isInternalPage) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", `${link.pathname}${link.hash}`);
    setCurrentPath(link.pathname);

    if (link.pathname === currentPath && link.hash) {
      document.querySelector(link.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main onClick={handleNavigation} className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {currentPath === "/portfolio" ? <PortfolioPage motionConfig={motionConfig} /> : <HomePage motionConfig={motionConfig} />}
    </main>
  );
}

function HomePage({ motionConfig }) {
  return (
    <>
      {animatedSections.map((Section) => (
        <Section key={Section.name} motionConfig={motionConfig} />
      ))}
      <Footer />
    </>
  );
}

function PortfolioPage({ motionConfig }) {
  return (
    <>
      <PortfolioNav />
      <Suspense fallback={<PortfolioFallback />}>
        <ProjectsPageSection motionConfig={motionConfig} />
      </Suspense>
      <CtaSection motionConfig={motionConfig} />
      <Footer />
    </>
  );
}

function PortfolioFallback() {
  return (
    <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-sm font-bold text-slate-300">
        Chargement du portfolio...
      </div>
    </section>
  );
}

function PortfolioNav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#05070b]/88 px-5 py-4 backdrop-blur-2xl sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3 font-bold tracking-tight text-white">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300 text-sm font-black text-slate-950 shadow-lg shadow-lime-500/20">
            DS
          </span>
          {brandName}
        </a>

        <div className="hidden items-center gap-5 text-sm font-semibold text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-lime-200">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/#contact"
          className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white backdrop-blur-xl transition hover:border-lime-300/50 hover:bg-white/12"
        >
          Devis
        </a>
      </div>
    </nav>
  );
}
