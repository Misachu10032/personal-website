'use client';

import { CheckIcon, LanguageIcon } from '@heroicons/react/24/solid';
import * as Select from '@radix-ui/react-select';
import clsx from 'clsx';
import { useTransition } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/i18n/services/locale';

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
        <Select.Trigger
          aria-label={label}
          className={clsx(
            'rounded-sm p-2 transition-colors',
            'hover:bg-slate-200 dark:hover:bg-slate-600',
            isPending && 'pointer-events-none opacity-60'
          )}
        >
          <Select.Icon>
            <LanguageIcon
              className="h-6 w-6 text-slate-900 dark:text-slate-100"
            />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            align="end"
            position="popper"
            className={clsx(
              'min-w-[8rem] overflow-hidden rounded-sm py-1 shadow-md',
              'bg-white text-slate-900',
              'dark:bg-slate-800 dark:text-slate-100'
            )}
          >
            <Select.Viewport>
              {items.map((item) => (
                <Select.Item
                  key={item.value}
                  value={item.value}
                  className={clsx(
                    'flex cursor-default items-center px-3 py-2 text-base',
                    'data-[highlighted]:bg-slate-100',
                    'dark:data-[highlighted]:bg-slate-600'
                  )}
                >
                  <div className="mr-2 w-[1rem]">
                    {item.value === defaultValue && (
                      <CheckIcon
                        className="h-5 w-5 text-slate-600 dark:text-slate-200"
                      />
                    )}
                  </div>
                  <span>{item.label}</span>
                </Select.Item>
              ))}
            </Select.Viewport>

            <Select.Arrow className="fill-white dark:fill-slate-800" />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
