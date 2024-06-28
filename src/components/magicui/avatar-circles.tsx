import React from "react";
import { cn } from "@/lib/utils";

interface AvatarCirclesProps {
  className?: string;
  svgFiles: string[];
}


const AvatarCircles = ({ className, svgFiles }: AvatarCirclesProps) => {

  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse p-3", className)}>
      {svgFiles.map((svg, index) => (
        <img
          key={index}
          className="h-12 w-12 rounded-full border-2 border-black dark:border-gray-800 bg-white"
          src={svg}
          width={30}
          height={30}
          alt={`Stack ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default AvatarCircles;
