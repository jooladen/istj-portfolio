"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-4" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="font-mono text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      aria-label="테마 전환"
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}
