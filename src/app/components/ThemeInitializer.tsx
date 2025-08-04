'use client';

import { useEffect } from 'react';

export function ThemeInitializer() {
  useEffect(() => {
    // Get stored theme or default to system
    const stored = localStorage.getItem('theme');
    const root = document.documentElement;
    
    if (stored === 'light' || stored === 'dark') {
      root.classList.remove('light', 'dark');
      root.classList.add(stored);
    } else {
      // Use system preference
      root.classList.remove('light', 'dark');
    }
  }, []);

  return null;
}