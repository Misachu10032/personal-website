import { useTranslations } from 'next-intl';
import React from 'react';
import { ReactTyped } from 'react-typed';

const Introduction: React.FC = () => {
  const t = useTranslations('HomePage.introduction');

  return (
    <>
      <div className="text-4xl tablet:text-6xl laptop:text-8xl font-semibold tracking-tight whitespace-pre-line">
        <ReactTyped
          strings={[t('Line1')]}
          typeSpeed={50}
          backSpeed={20}
          backDelay={1000}
          startDelay={100}
          loop={false}
          showCursor={false}
        />
      </div>
      <div className="text-2xl tablet:text-5xl laptop:text-6xl mt-2 font-semibold tracking-tight whitespace-pre-line">
        <ReactTyped
          strings={[t('Line2')]}
          typeSpeed={50}
          backSpeed={20}
          startDelay={2000}
          loop={false}
          showCursor={false}
        />
      </div>
      <div className="text-2xl tablet:text-5xl laptop:text-6xl mt-2 font-semibold tracking-tight whitespace-pre-line">
        <ReactTyped
          strings={[t('Line3')]}
          typeSpeed={50}
          backSpeed={20}
          startDelay={5000}
          loop={false}
          showCursor={false}
        />
      </div>
    </>
  );
};

export default Introduction;
