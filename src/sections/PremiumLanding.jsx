import { FinalCta, Hero, LandingFooter, Portfolio, Pricing, Process, ProjectDialog, Services } from "./landing";

export default function PremiumLanding({ motionConfig }) {
  return (
    <div className="min-h-screen bg-[#020813] text-white">
      <Hero motionConfig={motionConfig} />
      <Services motionConfig={motionConfig} />
      <Process motionConfig={motionConfig} />
      <Pricing motionConfig={motionConfig} />
      <Portfolio motionConfig={motionConfig} />
      <FinalCta />
      <LandingFooter />
      <ProjectDialog />
    </div>
  );
}
