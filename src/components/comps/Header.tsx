import { BookOpenText, Code, HomeIcon, NotebookPen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import BottomNavigation from "./BottomNavigation";

interface navItemsType {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

export const navItems: navItemsType[] = [
  {
    title: "Home",
    url: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: <BookOpenText className="h-4 w-4" />,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: <NotebookPen className="h-4 w-4" />,
  },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 w-full h-[90px] sticky top-0 px-10 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md z-10">
      <h2 className="hidden md:flex font-bold text-lg">Vinaypartap Singh</h2>
      <div className="hidden md:flex space-x-10 items-center">
        <ul className="flex space-x-10">
          {navItems.map(({ title, url }, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer text-sm decimalLeadingZero"
              >
                <Link href={`${url}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <Button asChild>
          <Link href={"/contact"}>Contact Me</Link>
        </Button>
      </div>
      <div className="md:hidden flex items-center gap-x-4">
        <div>
          <BottomNavigation />
        </div>
      </div>
    </header>
  );
}
