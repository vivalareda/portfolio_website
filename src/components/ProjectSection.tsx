import Image from "next/image";


import AvatarCircles from "./magicui/avatar-circles";
import { ExternalLinkIcon } from 'lucide-react';
import { svgGithub } from "@/lib/index";
import { projectsList } from "@/lib/constants";

const ProjectSection = () => {
  return (
    <div className=" w-auto overflow-y-auto-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10">
        {projectsList.map((project, index) => (
          <div key={index} className="flex flex-col rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.coverImage}
                alt="website"
                layout="fill"
                objectFit="cover"
                className="gradient-mask-b-10"
              />
            </div>
            <div className="p-4">
              <p className="text-base sm:text-xl text-black dark:text-neutral-200 mb-2">
                {project.title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <AvatarCircles svgFiles={project.techStackSvg} />
                <div className="flex justify-center items-center align-middle">
                  {project.link && (
                    <a
                      href={project.link}
                      role="button"
                      >
                      <ExternalLinkIcon className="p-1" width={50} height={50}/>
                    </a>
                  )}
                  {project.github && (
                    <a
                    href={project.github}
                    role="button"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white"
                    >
                      <Image
                        src={svgGithub}
                        alt="GitHub"
                        width={110}
                        height={110}
                        className="pt-1"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
