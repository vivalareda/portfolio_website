"use client";
import { use, useEffect, useRef, useState } from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { vsCodeVideo } from '@/utils';
import { codeAnimation } from "@/utils";

const HeroSection = () => {

  const [text, setText] = useState("DevOps");
  const [videoDuration, setVideoDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);


  useEffect(() => {
    const interval = setInterval(() => {
      text === "DevOps" ? setText("Frontend") : setText("DevOps");
    }, 2000);
    return () => clearInterval(interval);
  }, [text]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
      console.log(videoRef.current.duration);
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('vs-code-video') as HTMLVideoElement;
    setVideoDuration(video.duration);
  });

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
          <h1 id="job-title" className="text-4xl font-bold tracking-tight text-white sm:text-6xl absolute p-10">{text}</h1>
            <video
              ref={videoRef}
              id="vs-code-video"
              src={codeAnimation}
              style={{ width: '120%', borderRadius: '18px'}}
              autoPlay
              muted
              onLoadedMetadata={handleLoadedMetadata}
            />
          </div>
        </span>
      </NeonGradientCard>
    </>
  );
};

export default HeroSection;
