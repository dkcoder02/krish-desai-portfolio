"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { navBrand, navLinks, profile } from "@/lib/content";
import { Close, GitHub, LinkedIn, Menu } from "@/components/ui/icons";
import { SmartLink } from "@/components/ui/smart-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Lock the page behind the mobile panel and let Escape dismiss it.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav aria-label="Primary" className="shell flex h-16 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <a
            href="#top"
            className="text-[0.9375rem] font-semibold tracking-[-0.02em] text-fg whitespace-nowrap"
          >
            {navBrand}
          </a>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="t-meta rounded-md px-3 py-2 text-fg-muted transition-colors duration-150 hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <span aria-hidden className="mx-1 hidden h-4 w-px bg-border md:block" />

          <div className="hidden items-center gap-1 sm:flex">
            <SmartLink
              href={profile.github}
              ariaLabel="GitHub profile"
              placeholderHint="Add the GitHub profile URL in lib/content.ts"
              className="grid size-9 place-items-center rounded-md text-fg-muted transition-colors duration-150 hover:text-fg"
            >
              <GitHub />
            </SmartLink>
            <SmartLink
              href={profile.linkedin}
              ariaLabel="LinkedIn profile"
              placeholderHint="Add the LinkedIn profile URL in lib/content.ts"
              className="grid size-9 place-items-center rounded-md text-fg-muted transition-colors duration-150 hover:text-fg"
            >
              <LinkedIn />
            </SmartLink>
          </div>

          <ThemeToggle />

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-md border border-border text-fg-muted transition-colors duration-150 hover:border-border-strong hover:text-fg md:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border bg-bg md:hidden"
        >
          <div className="shell flex flex-col py-8">
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <li key={link.href} className={i === 0 ? "" : "border-t border-border"}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="flex items-baseline gap-4 py-4 text-2xl font-medium tracking-[-0.02em] text-fg"
                  >
                    <span aria-hidden className="t-mono-label tabular text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-8">
              <SmartLink
                href={profile.github}
                showArrow
                placeholderHint="Add the GitHub profile URL in lib/content.ts"
                className="t-meta inline-flex items-center gap-2 text-fg-muted"
              >
                <GitHub className="size-4" />
                GitHub
              </SmartLink>
              <SmartLink
                href={profile.linkedin}
                showArrow
                placeholderHint="Add the LinkedIn profile URL in lib/content.ts"
                className="t-meta inline-flex items-center gap-2 text-fg-muted"
              >
                <LinkedIn className="size-4" />
                LinkedIn
              </SmartLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
