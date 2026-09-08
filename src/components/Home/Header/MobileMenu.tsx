'use client';
import React, { RefObject } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { scrollToSection } from '@/app/utils/scrollToSection';

interface MobileMenuProps {
  topRef: RefObject<HTMLElement>;
  projectRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MOBILE_LINK_CLASS =
  'px-4 py-2 text-base font-medium rounded-md text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700';

const MobileMenu: React.FC<MobileMenuProps> = ({
  topRef,
  projectRef,
  aboutRef,
  setIsOpen,
}) => {
  const t = useTranslations('Header');

  return (
    <div className="absolute top-16 right-0 z-40 w-1/2 tablet:w-1/3 p-4 shadow-lg rounded-md flex flex-col gap-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
      <button
        onClick={() => {
          scrollToSection(topRef);
          setIsOpen(false);
        }}
        className={MOBILE_LINK_CLASS}
      >
        {t('Home')}
      </button>
      <button
        onClick={() => {
          scrollToSection(projectRef);
          setIsOpen(false);
        }}
        className={MOBILE_LINK_CLASS}
      >
        {t('Projects')}
      </button>
      <button
        onClick={() => {
          scrollToSection(aboutRef);
          setIsOpen(false);
        }}
        className={MOBILE_LINK_CLASS}
      >
        {t('About')}
      </button>
      <Link href="/Playground" className={MOBILE_LINK_CLASS} onClick={() => setIsOpen(false)}>
        {t('Playground')}
      </Link>
    </div>
  );
};

export default MobileMenu;
