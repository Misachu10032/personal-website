"use client";
import Header from "@/components/Header";
import ProjectCard from "@/components/Home/ProjectCard";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import projectData from "@/lib/projects.json";
import { scrollToSection } from "../utils/scrollToSection";
import Introduction from "@/components/Home/Introduction";
import Socials from "@/components/Home/Socials";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const projectRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Header topRef={topRef} aboutRef={aboutRef} projectRef={projectRef} />
      <div className="mt-10 laptop:mt-20 p-4 laptop:p-0" ref={topRef}>
        <Introduction />
        <Socials />
      </div>

      <div className="mt-10 laptop:mt-20 p-4 laptop:p-0" ref={projectRef}>
        <h1 className="text-4xl mx-3 font-extrabold shadow-md bg-clip-text">
          {t("projectTitle")}
        </h1>
        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
          {projectData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 laptop:mt-20 p-4 laptop:p-0" ref={aboutRef}>
        <h1 className="text-4xl mx-3 font-extrabold shadow-md bg-clip-text">
          {t("aboutTitle")}
        </h1>
        <p className="mt-2 mx-3 text-xl laptop:text-2xl">{t("aboutContent")}</p>
      </div>

      <Socials />
    </>
  );
}
