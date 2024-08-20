'use client';
import {useTranslations} from 'next-intl';
import {useEffect, useRef, useState} from 'react';
import {scrollToSection} from '../utils/scrollToSection';
import Header from '@/components/Home/Header';
import Introduction from '@/components/Home/Introduction';
import ProjectCard from '@/components/Home/ProjectCard';
import Socials from '@/components/Home/Socials';
import projectData from '@/lib/projects.json';

export default function HomePage() {
  const t = useTranslations('HomePage');
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
      <Header aboutRef={aboutRef} projectRef={projectRef} topRef={topRef} />
      <div ref={topRef} className="mt-10 p-4 laptop:mt-20 laptop:p-0">
        <Introduction />
        <Socials />
      </div>

      <div ref={projectRef} className="mt-10 p-4 laptop:mt-20 laptop:p-0">
        <h1 className="mx-3 bg-clip-text text-4xl font-extrabold shadow-md">
          {t('projectTitle')}
        </h1>
        <div className="mt-5 grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:mt-10">
          {projectData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              description={project.description}
              img={project.imageSrc}
              name={project.title}
              url={project.url}
            />
          ))}
        </div>
      </div>

      <div ref={aboutRef} className="mt-10 p-4 laptop:mt-20 laptop:p-0">
        <h1 className="mx-3 bg-clip-text text-4xl font-extrabold shadow-md">
          {t('aboutTitle')}
        </h1>
        <p className="mx-3 mt-2 text-xl laptop:text-2xl">{t('aboutContent')}</p>
      </div>

      <Socials />
    </>
  );
}
