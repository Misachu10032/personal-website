'use client';
import {useTranslations} from 'next-intl';
import {useFormStatus} from 'react-dom';
import NavLink from '@/components/NavLink';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import DarkModeToggle from '@/components/Header/DarkModeToggleButton';

export default function Header() {

const t = useTranslations('Header');
  return (
    <div className="p-2 laptop:p-0">
    <div className="mx-auto flex max-w-2xl items-end justify-between">
      <nav className="flex gap-6 pt-6">
        <NavLink href="/app">{t('home')}</NavLink>
        <NavLink href="/app/profile">{t('profile')}</NavLink>
      </nav>
      <div className="mb-[2px] flex items-center">
        <LocaleSwitcher />
        <DarkModeToggle />
      </div>
    </div>
  </div>
  );
}
