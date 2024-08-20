'use client';

import {useTheme} from 'next-themes';

function DarkModeToggle() {
  const {setTheme, theme} = useTheme();

  return (
    <button
      className={`flex items-center rounded-sm p-2 transition-all duration-300 ease-out laptop:m-2
        ${theme === 'dark' ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} 
        hover:scale-105 active:scale-100`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      type="button"
    >
      <img
        alt="Toggle Dark Mode"
        className={`h-6 ${theme === 'dark' ? 'invert filter' : 'text-black'}`}
        src="/icons/sun.svg"
      />
    </button>
  );
}

export default DarkModeToggle;
