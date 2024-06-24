"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex flex-col flex-1 justify-center items-center gap-10">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl glow-text">
        Welcome to my portfolio website
      </h1>
      <h1 className="font-bold tracking-tight text-gray-900 sm:text-xl">
        Here is where you will learn about my personal projects, the stack used
      </h1>
    </div>
  );
};

export default HeroSection;
