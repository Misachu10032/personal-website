'use client';

import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
      className={`transition-all ease-out duration-300 laptop:m-2 p-2 flex items-center rounded-sm
        ${theme === "dark" ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} 
        hover:scale-105 active:scale-100`}
    >
      <img
        className={`h-6 ${theme === "dark" ? "filter invert" : "text-black"}`}
        src="sun.svg"
        alt="Toggle Dark Mode"
      />
    </button>
  );
};

export default DarkModeToggle;
