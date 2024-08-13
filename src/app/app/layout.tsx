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
        <Header />
        <div className="mx-auto flex w-full max-w-2xl grow flex-col py-10">
          {children}
          <Link
            className="mt-auto font-semibold text-slate-600 transition-colors hover:text-slate-900"
            href="/"
          >
            logout
          </Link>
        </div>
      </div>
    </>
  );
}
