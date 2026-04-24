import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  url: string;
}

export default function ProjectCard({
  imageSrc,
  title,
  description,
  url,
}: ProjectCardProps) {
  const t = useTranslations('HomePage.ProjectCard');

  const isExternal = /^https?:\/\//.test(url);

  const content = (
 <article
  className="
    group rounded-2xl
    border border-neutral-200 dark:border-zinc-700
    bg-white dark:bg-zinc-800
    shadow-sm
    p-3 laptop:p-4
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-xl dark:hover:shadow-black/60
    hover:border-blue-200 dark:hover:border-blue-500/50
    hover:ring-2 hover:ring-blue-400/20 dark:hover:ring-blue-400/25
  "
>
      {/* Image */}
      <div className="
        relative aspect-[4/3] overflow-hidden rounded-xl
        bg-black/5 dark:bg-zinc-700/50
      ">
        <Image
          src={imageSrc}
          alt={t(title)}
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
          text-xl laptop:text-2xl font-semibold leading-tight
          text-neutral-900 dark:text-neutral-100
        ">
          {t(title)}
        </h3>

        <p className="
          text-sm laptop:text-base
          text-neutral-600 dark:text-neutral-400
        ">
          {t(description)}
        </p>
      </div>
    </article>
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
