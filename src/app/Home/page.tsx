'use client';

import Header from '@/components/Home/Header';
import ProjectCard from '@/components/Home/ProjectCard';
import Introduction from '@/components/Home/Introduction';
import Socials from '@/components/Home/Socials';
import GitHubIcon from '@mui/icons-material/GitHub';

import { useTranslations } from 'next-intl';
import { useRef } from 'react';

import projectData from '@/lib/projects.json';

const SECTION_CLASS = 'mt-10 laptop:mt-20 p-4 laptop:p-0';

export default function HomePage() {
  const t = useTranslations('HomePage');

  const topRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header
        topRef={topRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
      />

      <main ref={topRef} className={SECTION_CLASS}>
        <Introduction />
        <Socials />
      </main>

      <section ref={projectRef} className={SECTION_CLASS}>
        <h2 className="mx-3 text-4xl font-extrabold">
          {t('projectTitle')}
        </h2>

        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
          {projectData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </section>

      <section ref={aboutRef} className={SECTION_CLASS}>
        <h2 className="mx-3 text-4xl font-extrabold">
          {t('aboutTitle')}
        </h2>

        <p className="mt-2 mx-3 text-xl laptop:text-2xl">
          {t('aboutContent')}
        </p>
        <a
          href="https://github.com/Misachu10032/personal-website"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 mx-3 inline-flex items-center gap-2 text-xl text-neutral-700 hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400 underline underline-offset-4 decoration-neutral-400 dark:decoration-neutral-500"
        >
          <GitHubIcon />
          <span>{t('viewSource')}</span>
        </a>
      </section>

      <footer className={SECTION_CLASS}>
        <Socials />
      </footer>
    </>
  );
}
