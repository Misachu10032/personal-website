"use client";
import React, { RefObject } from "react";
import { useTranslations } from "next-intl";
import NavLink from "@/components/NavLink";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import DarkModeToggle from "@/components/Header/DarkModeToggleButton";
import { scrollToSection } from "@/app/utils/scrollToSection";

interface HeaderProps {
    workRef: RefObject<HTMLElement>,
    aboutRef: RefObject<HTMLElement>,
    topRef: RefObject<HTMLElement>,
}

const Header: React.FC<HeaderProps> = ({ workRef, aboutRef,topRef }) => {
  const t = useTranslations("Header");

  return (
    <div className="flex items-center justify-between p-2 mt02 laptop:p-0">
      <nav className="flex gap-6 pt-6">
      <button onClick={()=>scrollToSection(topRef)}>Home</button>
        <button onClick={()=>scrollToSection(workRef)}>Work</button>
        <button onClick={()=>scrollToSection(aboutRef)}>About</button>
      </nav>
      <div className="mb-2 flex items-center">
        <LocaleSwitcher />
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Header;
