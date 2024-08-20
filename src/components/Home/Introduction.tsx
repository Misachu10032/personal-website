import {useTranslations} from 'next-intl';
import React from 'react';
import Typed, {ReactTyped} from 'react-typed';

const Introduction: React.FC = () => {
  const t = useTranslations('HomePage.introduction');

  return (
    <>
      <div className="whitespace-pre-line text-4xl font-semibold tracking-tight tablet:text-6xl laptop:text-8xl">
        <ReactTyped
          backDelay={1000}
          backSpeed={20}
          loop={false}
          showCursor={false}
          startDelay={100}
          strings={[t('Line1')]}
          typeSpeed={50}
        />
      </div>
      <div className="mt-2 whitespace-pre-line text-2xl font-semibold tracking-tight tablet:text-5xl laptop:text-6xl">
        <ReactTyped
          backSpeed={20}
          loop={false}
          showCursor={false}
          startDelay={2000}
          strings={[t('Line2')]}
          typeSpeed={50}
        />
      </div>
      <div className="mt-2 whitespace-pre-line text-2xl font-semibold tracking-tight tablet:text-5xl laptop:text-6xl">
        <ReactTyped
          backSpeed={20}
          loop={false}
          showCursor={false}
          startDelay={5000}
          strings={[t('Line3')]}
          typeSpeed={50}
        />
      </div>
    </>
  );
};

export default Introduction;
