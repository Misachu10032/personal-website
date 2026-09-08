import React from 'react';
import { useTranslations } from 'next-intl';
import Socials from './Socials';

const Footer: React.FC = () => {
  const t = useTranslations('HomePage.footer');
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
      <h2 className="text-2xl laptop:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
        {t('title')}
      </h2>
      <Socials className="mt-4" />
      <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
        &copy; {year} John Zhou
      </p>
    </div>
  );
};

export default Footer;
