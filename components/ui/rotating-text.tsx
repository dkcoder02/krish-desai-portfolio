"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through phrases in place.
 *
 * Every phrase is rendered into the same grid cell, so the box is always as tall
 * as the longest one and nothing shifts when the text changes (no layout shift,
 * and both phrases stay in the DOM for crawlers). Only opacity and transform
 * animate, which stays off the main thread.
 *
 * The next phrase is drawn at random rather than in sequence, never repeating
 * the one already on screen. Reduced-motion visitors get the first phrase and no
 * rotation at all, since this is auto-updating content.
 */
export function RotatingText({ phrases }: { phrases: readonly string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (phrases.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setActive((current) => {
        let next = current;
        while (next === current) next = Math.floor(Math.random() * phrases.length);
        return next;
      });
    }, 3000);

    return () => clearInterval(id);
  }, [phrases.length]);

  return (
    <span className="grid">
      {phrases.map((phrase, i) => (
        <span
          key={phrase}
          className="rotator col-start-1 row-start-1"
          data-active={i === active}
          aria-hidden={i !== active}
        >
          {phrase}
        </span>
      ))}
    </span>
  );
}
