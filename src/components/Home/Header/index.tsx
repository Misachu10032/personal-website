'use client';
import React, { RefObject, useState } from 'react';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/Home/Locale/LocaleSwitcher';
import DarkModeToggle from '@/components/Home/Header/DarkModeToggleButton';
import { scrollToSection } from '@/app/utils/scrollToSection';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileMenuToggleButton from './MobileMenuToggleButton';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  projectRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  topRef: RefObject<HTMLElement>;
}

const Header: React.FC<HeaderProps> = ({ projectRef, aboutRef, topRef }) => {
  const t = useTranslations('Header');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-end p-4 pt-6 mt-2 laptop:p-0 sticky top-0 z-50">
      <div className="hidden laptop:block">
        <nav className="flex gap-6">
          <button
            onClick={() => scrollToSection(topRef)}
            className="px-6 py-3 text-3xl font-semibold rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {t('Home')}
          </button>
          <button
            onClick={() => scrollToSection(projectRef)}
            className="px-6 py-3 text-3xl font-semibold rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {t('Projects')}
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="px-6 py-3 text-3xl font-semibold rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {t('About')}
          </button>
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
