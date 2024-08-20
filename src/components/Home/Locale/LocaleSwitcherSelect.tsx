'use client';

import { CheckIcon, LanguageIcon } from '@heroicons/react/24/solid';
import * as Select from '@radix-ui/react-select';
import clsx from 'clsx';
import { useTransition } from 'react';
import { useTheme } from 'next-themes';
import { Locale } from '@/config';
import { setUserLocale } from '@/services/locale';

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
  const { theme } = useTheme();

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
            'rounded-sm p-2',
            theme === 'dark' ? 'hover:bg-slate-600' : 'hover:bg-slate-200',
            isPending && 'pointer-events-none opacity-60'
          )}
        >
          <Select.Icon>
            <LanguageIcon
              className={clsx(
                'h-6 w-6',
                theme === 'dark' ? 'text-white' : 'text-black'
              )}
            />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            align="end"
            className={clsx(
              'min-w-[8rem] overflow-hidden rounded-sm py-1 shadow-md',
              theme === 'dark'
                ? 'bg-slate-800 text-white'
                : 'bg-white text-black'
            )}
            position="popper"
          >
            <Select.Viewport>
              {items.map((item) => (
                <Select.Item
                  key={item.value}
                  className={clsx(
                    'flex cursor-default items-center px-3 py-2 text-base',
                    theme === 'dark'
                      ? 'data-[highlighted]:bg-slate-600'
                      : 'data-[highlighted]:bg-slate-100'
                  )}
                  value={item.value}
                >
                  <div className="mr-2 w-[1rem]">
                    {item.value === defaultValue && (
                      <CheckIcon
                        className={clsx(
                          'h-5 w-5',
                          theme === 'dark' ? 'text-white' : 'text-slate-600'
                        )}
                      />
                    )}
                  </div>
                  <span>{item.label}</span>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.Arrow
              className={theme === 'dark' ? 'fill-slate-800' : 'fill-white'}
            />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
