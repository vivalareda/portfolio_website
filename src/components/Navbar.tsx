import { FC, useRef } from "react";

import ShineBorder from "./magicui/shine-border";
import { navList } from "@/lib/constants";

type SectionRef = React.RefObject<HTMLElement>;

interface NavbarProps {
  id: string;
  scrollTo: (section: string) => void;
}

const Navbar: FC<NavbarProps> = ({ id, scrollTo }) => {

  return (
    <header className="absolute top-44 z-50">
      <ShineBorder
        className="text-center text-md font-bold capitalize shadow-lg opacity-0"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        id={id}
      >
        <div id={id} className="flex flex-1 justify-between">
          {navList.map((nav) => (
            <div key={nav} className="px-3 py-1">
              <button onClick={() => { scrollTo(nav) }}>{nav}</button>
            </div>
          ))}
        </div>
      </ShineBorder>
    </header>
  );
};

export default Navbar;
