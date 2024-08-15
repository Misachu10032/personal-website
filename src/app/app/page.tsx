"use client";
import Header from "@/components/Header";
import WorkCard from "@/components/Home/WorkCard";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import projectData from "@/lib/projects.json";
import { scrollToSection } from "../utils/scrollToSection";
import { ReactTyped, Typed } from "react-typed";
import Introduction from "@/components/Home/Introduction";
import Socials from "@/components/Home/Socials";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const workRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  return (
    <>
            <Header topRef={topRef} aboutRef={aboutRef} workRef={workRef} />
      <div className="mt-10 ml-5 laptop:mt-30 p-2 laptop:p-0" ref={topRef}>
      <Introduction/>

      <Socials/>
      </div>



      <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
        <h1 className="text-2xl text-bold">Work.</h1>

        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
          {projectData.projects.map((project) => (
            <WorkCard
              key={project.id}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              onClick={() => window.open(project.url)}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
        <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
        <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5"></p>
      </div>
    </>
  );
}
