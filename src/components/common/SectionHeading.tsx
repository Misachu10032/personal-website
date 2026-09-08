import React from 'react';

interface SectionHeadingProps {
  index: string;
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ index, title }) => (
  <div>
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="text-2xl laptop:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>
    </div>
    <div className="mt-3 h-px w-full bg-neutral-200 dark:bg-neutral-800" />
  </div>
);

export default SectionHeading;
