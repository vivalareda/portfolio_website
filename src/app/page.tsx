import HeroSection from "@/components/HeroSection";
import GridPattern from "@/components/magicui/animated-grid-pattern";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image"; // Import the Image component from the correct package

export default function Home() {
  return (
    <>
      <AuroraBackground className="h-screen">
        <GridPattern />
        <HeroSection />
      </AuroraBackground>
    </>
  );
}
