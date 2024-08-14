import Link from "next/link";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import NavLink from "@/components/NavLink";
import Header from "@/components/Header";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <div className="container mx-auto mb-10">
 
        {children}
      </div>
    </>
  );
}
