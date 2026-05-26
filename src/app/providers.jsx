"use client";

import { Suspense } from "react";
import ProjectDialog from "../sections/landing/ProjectDialog.jsx";

export default function ClientProviders({ children }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {children}
      <Suspense fallback={null}>
        <ProjectDialog />
      </Suspense>
    </main>
  );
}
