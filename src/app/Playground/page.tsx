'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const ITEMS = [
  { key: 'games', href: '/Games', image: '/projectsCover/ArcadeGame.png' },
  { key: 'photoDump', href: '/PhotoDump', image: '/projectsCover/CanadianWildLife.jpg' },
  { key: 'vexCalculator', href: '/VexIQ-Calculator', image: '/projectsCover/VexIQCalculator.png' },
] as const;

export default function PlaygroundPage() {
  const t = useTranslations('Playground');

  return (
    <div className="p-4 laptop:p-0 mt-10 laptop:mt-20">
      <Link
        href="/Home"
        className="text-sm text-neutral-500 hover:text-accent dark:text-neutral-400 dark:hover:text-accent"
      >
        {t('back')}
      </Link>

      <h1 className="mt-4 text-2xl laptop:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
        {t('title')}
      </h1>
      <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
        {t('subtitle')}
      </p>

      <div className="mt-8 grid grid-cols-1 tablet:grid-cols-3 gap-6">
        {ITEMS.map((item) => (
          <Link href={item.href} key={item.key} className="block">
            <div
              className="
                group rounded-2xl
                border border-neutral-200 dark:border-neutral-700
                bg-white dark:bg-neutral-800
                shadow-sm p-3
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/60
                hover:border-accent/40 dark:hover:border-accent/50
              "
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/5 dark:bg-neutral-700/50">
                <Image
                  src={item.image}
                  alt={t(`${item.key}.title`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h2 className="text-lg font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
                  {t(`${item.key}.title`)}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {t(`${item.key}.description`)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
