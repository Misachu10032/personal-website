'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="
        m-2 p-2 rounded-md
        transition-all duration-300
        hover:scale-105 active:scale-100
        hover:bg-neutral-200 dark:hover:bg-neutral-700
      "
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="h-6 w-6 text-neutral-200" />
      ) : (
        <MoonIcon className="h-6 w-6 text-neutral-800" />
      )}
    </button>
  );
};

export default DarkModeToggle;
