"use client";

import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import GridPattern from "@/components/magicui/animated-grid-pattern";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useEffect, useRef } from "react";

export default function Home() {
  const projectRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (section: string) => {
    switch (section) {
      case "Projects":
        projectRef.current?.scrollIntoView({
          block: "center",
          behavior: "smooth" });
        break;
      case "Testimonials":
        testimonialsRef.current?.scrollIntoView({
          block: "center",
          behavior: "smooth" });
        break;
      case "Contact":
        contactRef.current?.scrollIntoView({
          block: "center",
          behavior: "smooth" });
        break;
      case "About":
        heroRef.current?.scrollIntoView({
          block: "center",
          behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <main className="h-screen w-screen overflow-y-auto">
      <AuroraBackground className="h-screen">
        <Navbar id={"navbar"} scrollTo={scrollTo} />
        <GridPattern />
        <div ref={heroRef}>
          <HeroSection />
        </div>
      </AuroraBackground>
      <div ref={projectRef}>
        <ProjectSection />
      </div>
      <div ref={testimonialsRef}>
        <TestimonialsSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </main>
  );
}
