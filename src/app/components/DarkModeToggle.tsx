'use client';

import { useTheme } from '../contexts/ThemeContext';

export default function DarkModeToggle() {
  const { theme, actualTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return (
        <svg 
          className="w-5 h-5 transition-transform duration-300 ease-in-out" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    }
    
    if (actualTheme === 'dark') {
      return (
        <svg 
          className="w-5 h-5 transition-transform duration-300 ease-in-out rotate-0" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      );
    }
    
    return (
      <svg 
        className="w-5 h-5 transition-transform duration-300 ease-in-out rotate-0" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  };

  const getTooltipText = () => {
    if (theme === 'system') return 'System theme (auto)';
    if (theme === 'light') return 'Light mode';
    return 'Dark mode';
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        className="
          relative p-2 rounded-full transition-all duration-300 ease-in-out
          bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
          border border-gray-200 dark:border-gray-700
          hover:scale-110 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          dark:focus:ring-offset-gray-900
        "
        aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
        title={getTooltipText()}
      >
        <div className="text-gray-700 dark:text-gray-300">
          {getIcon()}
        </div>
      </button>
      
      {/* Tooltip */}
      <div className="
        absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
        bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900
        px-2 py-1 rounded text-xs whitespace-nowrap
        pointer-events-none z-10
      ">
        {getTooltipText()}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
      </div>
    </div>
  );
}