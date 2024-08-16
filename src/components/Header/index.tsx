"use client";
import React, { RefObject } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import DarkModeToggle from "@/components/Header/DarkModeToggleButton";
import { scrollToSection } from "@/app/utils/scrollToSection";

interface HeaderProps {
  projectRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  topRef: RefObject<HTMLElement>;
}

const Header: React.FC<HeaderProps> = ({ projectRef, aboutRef, topRef }) => {
  const t = useTranslations("Header");

  return (
    <div className="flex items-center justify-end p-4 pt-6 mt-2 laptop:p-0">
      <nav className="flex gap-6">
        <button
          onClick={() => scrollToSection(topRef)}
          className="px-6 py-3 text-3xl font-semibold rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection(projectRef)}
          className="px-6 py-3 text-3xl font-semibold rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className="px-6 py-3 text-3xl font-semibold rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          About
        </button>
      </nav>
      <div className="mb-2 mt-1 flex items-center ml-8">
        <LocaleSwitcher />
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Header;
