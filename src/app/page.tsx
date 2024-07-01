"use client"

import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import GridPattern from "@/components/magicui/animated-grid-pattern";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-y-auto">
      <AuroraBackground className="h-screen">
        <Navbar id={'navbar'}/>
        <GridPattern />
        <HeroSection />
      </AuroraBackground>
      <ProjectSection/>
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
