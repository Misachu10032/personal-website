'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/common/SectionHeading';

const ITEMS = [
  { key: 'games', href: '/Games', image: '/projectsCover/ArcadeGame.png' },
  { key: 'photoDump', href: '/PhotoDump', image: '/projectsCover/CanadianWildLife.jpg' },
  { key: 'vexCalculator', href: '/VexIQ-Calculator', image: '/projectsCover/VexIQCalculator.png' },
] as const;

export default function PlaygroundPage() {
  const t = useTranslations('Playground');

  return (
    <div className="p-4 laptop:p-0 mt-16 laptop:mt-24">
      <Link
        href="/Home"
        className="font-mono text-xs uppercase tracking-widest text-neutral-500 hover:text-accent dark:text-neutral-400 dark:hover:text-accent"
      >
        {t('back')}
      </Link>

      <div className="mt-6">
        <SectionHeading index="00" title={t('title')} />
      </div>
      <p className="mt-4 max-w-xl text-base text-neutral-600 dark:text-neutral-400">
        {t('subtitle')}
      </p>

      <div className="mt-8 grid grid-cols-1 tablet:grid-cols-3 gap-4">
        {ITEMS.map((item, index) => (
          <Link href={item.href} key={item.key} className="block">
            <div
              className="
                group
                border border-neutral-200 dark:border-neutral-800
                bg-white dark:bg-surface-dark-subtle
                transition-colors duration-200
                hover:border-accent
              "
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                <Image
                  src={item.image}
                  alt={t(`${item.key}.title`)}
                  fill
                  className="object-cover grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                <span className="absolute top-2 left-2 font-mono text-[10px] tracking-widest px-1.5 py-0.5 bg-black/80 text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h2 className="text-base font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
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
