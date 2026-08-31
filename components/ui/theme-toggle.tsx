"use client";

import { Moon, Sun } from "./icons";

/**
 * Dark is the default experience; this only records an explicit choice, which
 * the inline script in the layout replays before first paint.
 *
 * The current theme lives on <html data-theme>, not in React state, so there is
 * no effect to sync and nothing to mismatch during hydration. CSS in
 * globals.css picks which icon is visible from that same attribute.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked. The toggle still works for this page view.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={`grid size-9 place-items-center rounded-md border border-border text-fg-muted transition-colors duration-150 hover:border-border-strong hover:text-fg ${className}`.trim()}
    >
      <Sun data-theme-icon="sun" />
      <Moon data-theme-icon="moon" />
    </button>
  );
}
