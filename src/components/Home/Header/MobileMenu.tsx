'use client';
import React, { RefObject } from 'react';
import { useTranslations } from 'next-intl';
import { scrollToSection } from '@/app/utils/scrollToSection';
import { useTheme } from 'next-themes'; // Import useTheme

interface MobileMenuProps {
  topRef: RefObject<HTMLElement>;
  projectRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  topRef,
  projectRef,
  aboutRef,
  setIsOpen,
}) => {
  const { theme } = useTheme(); // Get the current theme
  const t = useTranslations('Header');

  // Define the dynamic colors based on the theme
  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const hoverColor = theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200';

  return (
    <div className={`absolute top-16 right-0 z-40 w-1/3 p-4 shadow-lg rounded-md flex flex-col gap-4 ${bgColor}`}>
      <button
        onClick={() => {
          scrollToSection(topRef);
          setIsOpen(false);
        }}
        className={`px-4 py-2 text-lg font-medium rounded-md ${textColor} ${hoverColor}`}
      >
        {t('Home')}
      </button>
      <button
        onClick={() => {
          scrollToSection(projectRef);
          setIsOpen(false);
        }}
        className={`px-4 py-2 text-lg font-medium rounded-md ${textColor} ${hoverColor}`}
      >
        {t('Projects')}
      </button>
      <button
        onClick={() => {
          scrollToSection(aboutRef);
          setIsOpen(false);
        }}
        className={`px-4 py-2 text-lg font-medium rounded-md ${textColor} ${hoverColor}`}
      >
        {t('About')}
      </button>
    </div>
  );
};

export default MobileMenu;
