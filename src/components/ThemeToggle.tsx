import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-line bg-white dark:bg-bg-900 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 group"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 dark:group-hover:bg-cyan-400/5 transition-colors" />
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
      ) : (
        <Moon className="w-4 h-4 text-slate-600 group-hover:text-cyan-600 transition-colors" />
      )}
    </button>
  );
}
