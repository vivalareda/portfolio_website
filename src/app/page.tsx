import LandingSection from "@/components/LandingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <div className="scroll-container">
                <div className="scroll-card">
                  <LandingSection />
                </div>
            </div>
    </div>
  );
}
