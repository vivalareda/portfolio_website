import { useRef, useState, forwardRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TypingAnimation from "./ui/typing-animation";
import ShinyButton from "./magicui/shinny-button";


const HeroSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const welcomeTextRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      welcomeTextRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );

    tl.fromTo(
      subTextRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.7 }
    );

    tl.call(() => setStartAnimation(true));

    gsap.fromTo("#navbar", {y: -180, opacity: 0}, { y: 0, opacity: 1, duration: 1, delay: 1.5 });
    gsap.to("#button", { opacity:1, duration: 1, delay: 1.5 });
  }, []);

  return (
    <div className="h-screen w-full flex flex-col flex-1 justify-center items-center gap-2">
      <h1
        ref={welcomeTextRef}
        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl opacity-0 pb-"
        >
        Welcome to my portfolio website
      </h1>
      <h1
        ref={subTextRef}
        className="font-bold tracking-tight text-gray-900 sm:text-xl opacity-0"
        >
        Hi, my name is Reda and this is where you will learn about me, my
        personal projects and the stack used to build them.
      </h1>

      <div className="w-full pt-16">
        <TypingAnimation startAnimation={startAnimation} />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 flex justify-center items-center">
      <div>
        <ShinyButton text="See my work"/>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
