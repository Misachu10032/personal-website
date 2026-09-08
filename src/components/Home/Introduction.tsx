import { useTranslations } from 'next-intl';
import React from 'react';

const Introduction: React.FC = () => {
  const t = useTranslations('HomePage.introduction');

  return (
    <div>
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {t('eyebrow')}
      </div>
      <h1 className="mt-4 text-4xl laptop:text-6xl font-semibold tracking-tight whitespace-pre-line text-neutral-900 dark:text-neutral-100">
        {t('Line1')}
      </h1>
      <p className="mt-4 text-base laptop:text-lg text-neutral-600 dark:text-neutral-400 laptop:whitespace-nowrap">
        {t('Line2')} {t('Line3')}
      </p>
    </div>
  );
};

export default Introduction;
