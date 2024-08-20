'use client';
import {useTranslations} from 'next-intl';
import React, {RefObject} from 'react';
import {scrollToSection} from '@/app/utils/scrollToSection';
import DarkModeToggle from '@/components/Home/Header/DarkModeToggleButton';
import LocaleSwitcher from '@/components/Home/Locale/LocaleSwitcher';

interface HeaderProps {
  projectRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  topRef: RefObject<HTMLElement>;
}

const Header: React.FC<HeaderProps> = ({aboutRef, projectRef, topRef}) => {
  const t = useTranslations('Header');

  return (
    <div className="mt-2 flex items-center justify-end p-4 pt-6 laptop:p-0">
      <nav className="flex gap-6">
        <button
          className="rounded-md px-6 py-3 text-3xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => scrollToSection(topRef)}
        >
          {t('Home')}
        </button>
        <button
          className="rounded-md px-6 py-3 text-3xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => scrollToSection(projectRef)}
        >
          {t('Projects')}
        </button>
        <button
          className="rounded-md px-6 py-3 text-3xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => scrollToSection(aboutRef)}
        >
          {t('About')}
        </button>
      </nav>
      <div className="mb-2 ml-8 mt-1 flex items-center">
        <LocaleSwitcher />
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Header;
