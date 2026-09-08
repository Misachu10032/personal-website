import React from 'react';
import { useTranslations } from 'next-intl';
import Socials from './Socials';
import SectionHeading from '../common/SectionHeading';

const Footer: React.FC = () => {
  const t = useTranslations('HomePage.footer');
  const year = new Date().getFullYear();

  return (
    <div>
      <SectionHeading index="03" title={t('title')} />
      <Socials className="mt-6" />
      <p className="mt-10 font-mono text-xs text-neutral-500 dark:text-neutral-600">
        &copy; {year} John Zhou
      </p>
    </div>
  );
};

export default Footer;
