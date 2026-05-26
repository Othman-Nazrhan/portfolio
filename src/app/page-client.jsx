"use client";

import { useMotionSettings } from "../hooks";
import PremiumLanding from "../sections/PremiumLanding.jsx";

export default function HomePageClient() {
  const motionConfig = useMotionSettings();

  return <PremiumLanding motionConfig={motionConfig} />;
}
