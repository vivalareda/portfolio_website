import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

import { NeonGradientCard } from "./magicui/neon-gradient-card";

import { portrait, svgGithub2 } from "@/lib";

const ContactSection = () => {
  return (
    <div className="h-auto w-full flex flex-row justify-center gap-10 text-center items-center">
      <div className="h-full w-1/3 flex flex-col justify-center items-center text-center">
        <h1 className="p-5 pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Get in touch !
        </h1>
        <div className="flex justify-center items-baseline gap-3">
          <a href="mailto:tarzaltreda@gmail.com">
            <Mail width={30} height={30} />
          </a>
          <a href="https://github.com/vivalareda">
            <Image src={svgGithub2} alt="GitHub" width={30} height={30} />
          </a>
          <a href="https://ca.linkedin.com/in/tarzaltreda">
            <Linkedin width={30} height={30} />
          </a>
        </div>
      </div>
      <div className="pt-10 flex items-center justify-end w-1/3">
        <NeonGradientCard className="flex items-end w-[500px] justify-end">
          <div className="w-full flex justify-end">
            <Image src={portrait} width={350} height={350} alt={"portrait"} />
          </div>
        </NeonGradientCard>
      </div>
    </div>
  );
};

export default ContactSection;
