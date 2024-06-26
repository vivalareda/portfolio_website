"use client";
import { use, useEffect, useRef, useState } from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { heroPresentation } from "@/utils";
import { portrait } from "@/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const HeroSection = () => {

  const [text, setText] = useState("DevOps");
  const [currentPresentation, setCurrentPresentation] = useState(heroPresentation[0]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    gsap.fromTo("#job-title", { opacity: 0 }, { opacity: 1, duration: 1, delay: 2});
  });

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0, paused: true });

    tl.to("#job-title", { opacity: 0, duration: 1 })
      .fromTo("#job-title", { opacity: 0 }, { opacity: 1, duration: 1, delay: 2});

    const interval = setInterval(() => {
      tl.restart();
    }, currentPresentation.videoDuration * 1000);

    tl.play();

    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, []);

  // const handleVideoEnded = () => {
  //   const nextPresentation = heroPresentation.find(presentation => presentation.id === currentPresentation.id + 1);
  //   if (nextPresentation) {
  //     setCurrentPresentation(nextPresentation);
  //   } else {
  //     setCurrentPresentation(heroPresentation[0]);
  //   }
  // };

  return (
    <>
      <div className="h-screen w-full flex flex-col flex-1 justify-center items-center gap-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to my portfolio website
        </h1>
        <h1 className="font-bold tracking-tight text-gray-900 sm:text-xl">
          Here is where you will learn about my personal projects, the stack used
        </h1>
      </div>
      <NeonGradientCard className="w-[1200px] h-[500px] items-center justify-center text-center">
        <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          <div className="flex justify-center">
          <h1 id="job-title" className="text-4xl font-bold tracking-tight text-white sm:text-6xl absolute p-10 opacity-0">{currentPresentation.text}</h1>
            <video
              ref={videoRef}
              id="animationVideo"
              src={currentPresentation.video}
              style={{ width: '120%', borderRadius: '18px'}}
              autoPlay
              muted
              // onEnded={handleVideoEnded}
            />
          </div>
          {/* <div className="flex justify-end">

          <Image
            src={portrait}
            alt={"portrait"}
            width={405}
            height={405}
            className="justify-end"
            />
          </div> */}
        </span>
      </NeonGradientCard>
    </>
  );
};

export default HeroSection;
