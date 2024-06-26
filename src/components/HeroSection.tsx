"use client";
import { use, useEffect, useRef, useState } from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { codeAnimation } from "@/utils";
import { portrait } from "@/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const HeroSection = () => {

  const [text, setText] = useState("DevOps");
  const [videoDuration, setVideoDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    gsap.to("#job-title", { opacity: 1, duration: 2, delay: 2});
  })


  useEffect(() => {
    if (videoDuration > 0) {
      const interval = setInterval(() => {
        setText(currentText => currentText === "DevOps" ? "Frontend" : "DevOps");
      }, videoDuration);
      return () => clearInterval(interval);
    }
  }, [videoDuration]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        console.log("Video duration:", video.duration);
        setVideoDuration(video.duration * 1000);
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);

      if (video.readyState >= 2) {
        handleLoadedMetadata();
      }

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

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
          <h1 id="job-title" className="text-4xl font-bold tracking-tight text-black sm:text-6xl absolute p-10 opacity-0">{text}</h1>
            {/* <video
              ref={videoRef}
              id="vs-code-video"
              src={codeAnimation}
              style={{ width: '120%', borderRadius: '18px'}}
              autoPlay
              muted
            /> */}
          </div>
          <div className="flex justify-end">

          <Image
            src={portrait}
            alt={"portrait"}
            width={405}
            height={405}
            className="justify-end"
            />
          </div>
        </span>
      </NeonGradientCard>
    </>
  );
};

export default HeroSection;
