"use client"

import HeroSection from "@/components/HeroSection";
import GridPattern from "@/components/magicui/animated-grid-pattern";
import ProjectSection from "@/components/ProjectSection";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-y-auto">
      <AuroraBackground className="h-screen">
        <GridPattern />
        <HeroSection />
      </AuroraBackground>
      <ProjectSection/>
    </main>
  );
}
