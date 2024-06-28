import { BentoCard, BentoGrid } from "./magicui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { FaFileContract } from "react-icons/fa";
import { tarmousTrad } from "@/lib/index";
import { portrait } from "@/lib/index";



const features = [
  {
    Icon: FaFileContract,
    name: "File translation management website ",
    description: "A website I created for my dad's translation busines so that clients can upload files.",
    href: "/",
    cta: "Go to website",
    background: (
        <div className="gradient-mask-b-0">
            <img src={tarmousTrad} alt="File Translation Management" className="w-full object-cover pb-2"/>
        </div>

    ),
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const ProjectSection = () => {
  return (
    <div className="h-screen w-screen flex">
        <div className="p-8 pt-14 pb-14 flex justify-center">

            <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
            </BentoGrid>
        </div>
    </div>
  );
};

export default ProjectSection;
