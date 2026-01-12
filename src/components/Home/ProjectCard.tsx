import React from 'react';
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
  img: string;
  name: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  name,
  description,
  url,
}) => {
  const t = useTranslations('HomePage.ProjectCard');

  const isExternal = /^https?:\/\//.test(url);
  const href = isExternal ? url : `/${url}`;

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="
        group block rounded-2xl border border-black/5 bg-white
        p-3 laptop:p-4
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/5">
        <img
          src={img}
          alt={name}
          className="
            h-full w-full object-contain
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* subtle gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
      </div>

      {/* Text */}
      <div className="mt-4 space-y-1">
        <h3 className="text-xl laptop:text-2xl font-semibold leading-tight">
          {name && t(name)}
        </h3>

        <p className="text-sm laptop:text-base text-black/60">
          {description && t(description)}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
