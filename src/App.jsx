import { Suspense, lazy, useEffect, useState } from "react";
import { useMotionSettings } from "./hooks";
import { brandName, landingNavLinks } from "./data";
import { BrandLogo } from "./components";
import CtaSection from "./sections/CtaSection.jsx";
import Footer from "./sections/Footer.jsx";
import { ProjectDialogButton } from "./sections/landing/ProjectDialogButton.jsx";

const PremiumLanding = lazy(() => import("./sections/PremiumLanding.jsx"));
const ProjectsPageSection = lazy(() => import("./sections/ProjectsPageSection.jsx"));
const ProjectDialog = lazy(() => import("./sections/landing/ProjectDialog.jsx"));

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
      <Suspense fallback={null}>
        <ProjectDialog />
      </Suspense>
    </main>
  );
}

function HomePage({ motionConfig }) {
  return (
    <Suspense fallback={<PageFallback label="Chargement de l'accueil..." fullScreen />}>
      <PremiumLanding motionConfig={motionConfig} />
    </Suspense>
  );
}

function PortfolioPage({ motionConfig }) {
  return (
    <>
      <PortfolioNav />
      <Suspense fallback={<PageFallback label="Chargement du portfolio..." />}>
        <ProjectsPageSection motionConfig={motionConfig} />
      </Suspense>
      <CtaSection motionConfig={motionConfig} />
      <Footer />
    </>
  );
}

function PageFallback({ label, fullScreen = false }) {
  if (fullScreen) {
    return <section className="grid min-h-screen place-items-center px-5 text-sm font-bold text-slate-300">{label}</section>;
  }

  return (
    <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-sm font-bold text-slate-300">
        {label}
      </div>
    </section>
  );
}

function PortfolioNav() {
  const portfolioLinks = landingNavLinks.map(([label, href]) => {
    if (href === "#") {
      return [label, "/"];
    }

    if (href.startsWith("#")) {
      return [label, `/${href}`];
    }

    return [label, href];
  });

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070b]/88 backdrop-blur-2xl">
      <div className="border-b border-blue-300/20 bg-gradient-to-r from-blue-600/24 via-sky-500/18 to-blue-600/24 px-5 py-2.5 text-blue-50 shadow-[0_12px_45px_rgba(0,102,255,0.18)] backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 text-center text-xs font-black uppercase tracking-[0.14em]">
          <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
          <span>Site internet professionnel</span>
          <span className="rounded-full border border-white/25 bg-white/12 px-3 py-1 text-white shadow-[0_0_22px_rgba(56,189,248,0.28)]">
            à partir de 100€
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <a href="/" aria-label={brandName} className="shrink-0">
          <BrandLogo compact />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-black text-white/90 lg:flex">
          {portfolioLinks.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-blue-300">
              {label}
            </a>
          ))}
        </nav>
        <ProjectDialogButton />
      </div>
    </header>
  );
}
