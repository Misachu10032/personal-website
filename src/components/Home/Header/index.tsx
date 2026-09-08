'use client';
import React, { RefObject, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocaleSwitcher from '@/components/Home/Locale/LocaleSwitcher';
import DarkModeToggle from '@/components/Home/Header/DarkModeToggleButton';
import { scrollToSection } from '@/app/utils/scrollToSection';
import MobileMenuToggleButton from './MobileMenuToggleButton';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  projectRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  topRef: RefObject<HTMLElement>;
}

const NAV_LINK_CLASS =
  'px-4 py-2 text-sm font-medium rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors';

const Header: React.FC<HeaderProps> = ({ projectRef, aboutRef, topRef }) => {
  const t = useTranslations('Header');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-end p-4 pt-6 mt-2 laptop:p-0 sticky top-0 z-50 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800 transition-colors">
      <div className="hidden laptop:block">
        <nav className="flex gap-2">
          <button onClick={() => scrollToSection(topRef)} className={NAV_LINK_CLASS}>
            {t('Home')}
          </button>
          <button onClick={() => scrollToSection(projectRef)} className={NAV_LINK_CLASS}>
            {t('Projects')}
          </button>
          <button onClick={() => scrollToSection(aboutRef)} className={NAV_LINK_CLASS}>
            {t('About')}
          </button>
          <Link href="/Playground" className={NAV_LINK_CLASS}>
            {t('Playground')}
          </Link>
        </nav>
      </div>

      <div className="mb-2 mt-1 flex items-center ml-8">
        <LocaleSwitcher />
        <DarkModeToggle />
        <MobileMenuToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {isOpen && (
        <MobileMenu
          topRef={topRef}
          projectRef={projectRef}
          aboutRef={aboutRef}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default Header;
