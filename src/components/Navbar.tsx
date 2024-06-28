import { FC, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ShineBorder from "./magicui/shine-border";
import { navList } from "@/lib/constants"

interface NavbarProps {
    id: string;
}

const Navbar: FC<NavbarProps> = ({ id }) => {

  return (
    <div>
      <ShineBorder
        className="text-center text-md font-bold capitalize shadow-lg opacity-0"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        id={id}
      >
          <div id={id} className="flex flex-1 justify-between">
          {navList.map((nav) => (
              <div key={nav} className="px-3 py-1">
              {nav}
              </div>
          ))}
        </div>
      </ShineBorder>
    </div>
  );
};

export default Navbar;
