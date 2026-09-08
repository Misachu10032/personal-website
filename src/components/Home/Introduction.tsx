import { useTranslations } from 'next-intl';
import React from 'react';

const Introduction: React.FC = () => {
  const t = useTranslations('HomePage.introduction');

  return (
    <div>
      <h1 className="text-4xl laptop:text-6xl font-semibold tracking-tight whitespace-pre-line text-neutral-900 dark:text-neutral-100">
        {t('Line1')}
      </h1>
      <p className="mt-2 text-xl laptop:text-2xl text-neutral-600 dark:text-neutral-400 whitespace-pre-line">
        {t('Line2')}
      </p>
      <p className="mt-1 text-xl laptop:text-2xl text-neutral-600 dark:text-neutral-400 whitespace-pre-line">
        {t('Line3')}
      </p>
    </div>
  );
};

export default Introduction;
