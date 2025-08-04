'use client';

import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle").then(mod => ({ default: mod.ThemeToggle })), {
  ssr: false,
  loading: () => (
    <div className="fixed top-4 right-4 z-10">
      <div className="p-2 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
    </div>
  )
});

export function ThemeToggleWrapper() {
  return (
    <div className="fixed top-4 right-4 z-10">
      <ThemeToggle />
    </div>
  );
}