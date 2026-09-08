'use client';

import Header from '@/components/Home/Header';
import ProjectCard from '@/components/Home/ProjectCard';
import Introduction from '@/components/Home/Introduction';
import Socials from '@/components/Home/Socials';
import Footer from '@/components/Home/Footer';
import SectionHeading from '@/components/common/SectionHeading';
import GitHubIcon from '@/components/common/GitHubIcon';

import { useTranslations } from 'next-intl';
import { useRef } from 'react';

import projectData from '@/lib/projects.json';

const SECTION_CLASS = 'mt-16 laptop:mt-28 p-4 laptop:p-0';

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

      <main ref={topRef} className="mt-16 laptop:mt-24 p-4 laptop:p-0">
        <Introduction />
        <Socials className="mt-8" />
      </main>

      <section ref={projectRef} className={SECTION_CLASS}>
        <SectionHeading index="01" title={t('projectTitle')} />

        <div className="mt-8 grid grid-cols-1 tablet:grid-cols-2 gap-x-8 gap-y-10">
          {projectData.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              index={index}
              imageSrc={project.imageSrc}
              url={project.url}
            />
          ))}
        </div>
      </section>

      <section ref={aboutRef} className={SECTION_CLASS}>
        <SectionHeading index="02" title={t('aboutTitle')} />

        <p className="mt-6 max-w-2xl text-base laptop:text-lg text-neutral-700 dark:text-neutral-300">
          {t('aboutContent')}
        </p>
        <a
          href="https://github.com/Misachu10032/personal-website"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 hover:text-accent dark:text-neutral-400 dark:hover:text-accent transition-colors"
        >
          <GitHubIcon className="h-4 w-4" />
          <span>{t('viewSource')}</span>
        </a>
      </section>

      <footer className={SECTION_CLASS}>
        <Footer />
      </footer>
    </>
  );
}
