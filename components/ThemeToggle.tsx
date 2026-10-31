"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as "light" | "dark") ||
      "light";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("acedtc-theme", next);
    } catch {
      /* storage blocked, theme still applies for this session */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-2 transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {/* sun (shown in dark mode → click for light) */}
      <svg
        className={mounted && theme === "dark" ? "block h-[18px] w-[18px]" : "hidden"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      {/* moon (shown in light mode → click for dark) */}
      <svg
        className={!mounted || theme === "light" ? "block h-[18px] w-[18px]" : "hidden"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
