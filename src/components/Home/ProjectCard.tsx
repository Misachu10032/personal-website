import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
  id: string;
  index: number;
  imageSrc: string;
  url: string;
}

export default function ProjectCard({ id, index, imageSrc, url }: ProjectCardProps) {
  const t = useTranslations('HomePage.ProjectCard');

  const isExternal = /^https?:\/\//.test(url);
  const title = t(`project-${id}`);
  const description = t(`project-${id}-description`);
  const indexLabel = String(index + 1).padStart(2, '0');

  const content = (
    <div
      className="
        group
        border border-neutral-200 dark:border-neutral-800
        bg-white dark:bg-surface-dark-subtle
        transition-colors duration-200
        hover:border-accent
      "
    >
      {/* Image */}
      <div className="
        relative aspect-[16/9] overflow-hidden
        border-b border-neutral-200 dark:border-neutral-800
        bg-neutral-100 dark:bg-neutral-900
      ">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-[1.03]
          "
        />

        <span className="
          absolute top-2 left-2
          font-mono text-[10px] tracking-widest
          px-1.5 py-0.5
          bg-black/80 text-white
        ">
          {indexLabel}
        </span>
      </div>

      {/* Text */}
      <div className="p-4 space-y-1">
        <h3 className="
          text-base laptop:text-lg font-semibold leading-tight
          text-neutral-900 dark:text-neutral-100
        ">
          {title}
        </h3>

        <p className="
          text-sm
          text-neutral-600 dark:text-neutral-400
        ">
          {description}
        </p>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={`/${url}`} className="block">
      {content}
    </Link>
  );
}
