'use client';

import Header from '@/components/Home/Header';
import ProjectCard from '@/components/Home/ProjectCard';
import Introduction from '@/components/Home/Introduction';
import Socials from '@/components/Home/Socials';
import Footer from '@/components/Home/Footer';
import GitHubIcon from '@/components/common/GitHubIcon';

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
        <h2 className="mx-3 text-2xl laptop:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
          {t('projectTitle')}
        </h2>

        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-6">
          {projectData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              imageSrc={project.imageSrc}
              url={project.url}
            />
          ))}
        </div>
      </section>

      <section ref={aboutRef} className={SECTION_CLASS}>
        <h2 className="mx-3 text-2xl laptop:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
          {t('aboutTitle')}
        </h2>

        <p className="mt-2 mx-3 text-base laptop:text-lg text-neutral-700 dark:text-neutral-300">
          {t('aboutContent')}
        </p>
        <a
          href="https://github.com/Misachu10032/personal-website"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 mx-3 inline-flex items-center gap-2 text-base text-neutral-700 hover:text-accent dark:text-neutral-300 dark:hover:text-accent underline underline-offset-4 decoration-neutral-400 dark:decoration-neutral-500"
        >
          <GitHubIcon className="h-5 w-5" />
          <span>{t('viewSource')}</span>
        </a>
      </section>

      <footer className={SECTION_CLASS}>
        <Footer />
      </footer>
    </>
  );
}
