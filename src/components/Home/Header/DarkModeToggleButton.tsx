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
        m-2 p-2 rounded-sm
        transition-colors duration-200
        hover:bg-neutral-100 dark:hover:bg-neutral-800
      "
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="h-5 w-5 text-neutral-400 hover:text-accent" />
      ) : (
        <MoonIcon className="h-5 w-5 text-neutral-600 hover:text-accent" />
      )}
    </button>
  );
};

export default DarkModeToggle;
