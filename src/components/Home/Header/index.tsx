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
  'font-mono text-xs uppercase tracking-widest px-1 py-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 border-b-2 border-transparent hover:border-accent transition-colors';

const Header: React.FC<HeaderProps> = ({ projectRef, aboutRef, topRef }) => {
  const t = useTranslations('Header');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-end p-4 laptop:px-0 laptop:py-4 sticky top-0 z-50 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="hidden laptop:block absolute left-1/2 -translate-x-1/2">
        <nav className="flex gap-6">
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

      <div className="flex items-center">
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
