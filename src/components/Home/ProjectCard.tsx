import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
  id: string;
  imageSrc: string;
  url: string;
}

export default function ProjectCard({ id, imageSrc, url }: ProjectCardProps) {
  const t = useTranslations('HomePage.ProjectCard');

  const isExternal = /^https?:\/\//.test(url);
  const title = t(`project-${id}`);
  const description = t(`project-${id}-description`);

  const content = (
    <div
      className="
        group rounded-2xl
        border border-neutral-200 dark:border-neutral-700
        bg-white dark:bg-neutral-800
        shadow-sm
        p-3 laptop:p-4
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl dark:hover:shadow-black/60
        hover:border-accent/40 dark:hover:border-accent/50
        hover:ring-2 hover:ring-accent/20 dark:hover:ring-accent/25
      "
    >
      {/* Image */}
      <div className="
        relative aspect-[4/3] overflow-hidden rounded-xl
        bg-black/5 dark:bg-neutral-700/50
      ">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        <div className="
          pointer-events-none absolute inset-0
          bg-gradient-to-t
          from-black/10 dark:from-black/40
          to-transparent
        " />
      </div>

      {/* Text */}
      <div className="mt-4 space-y-1">
        <h3 className="
          text-lg laptop:text-xl font-semibold leading-tight
          text-neutral-900 dark:text-neutral-100
        ">
          {title}
        </h3>

        <p className="
          text-sm laptop:text-base
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
