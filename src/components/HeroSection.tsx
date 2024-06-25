"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const HeroSection = () => {
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
    <NeonGradientCard className="w-[950px] h-[500px] items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Neon Gradient Card
      </span>
    </NeonGradientCard>
    </>
  );
};

export default HeroSection;
