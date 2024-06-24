import HeroSection from "@/components/HeroSection";
import GridPattern from "@/components/magicui/animated-grid-pattern";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {

  return (
    <>
      <AuroraBackground>
        <GridPattern />
        <HeroSection />
      </AuroraBackground>
    </>
  );
}
