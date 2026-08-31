"use client";

import { useEffect } from "react";

/**
 * Drives every <Reveal> on the page from one place. Mount it once.
 *
 * Two things matter here.
 *
 * 1. Reads and writes are kept in separate phases. Measuring an element and
 *    then immediately setting an attribute that CSS selects on invalidates
 *    layout, so doing both per element in a loop forces one layout per element.
 *    Measuring everything first costs a single layout for the whole page.
 *
 * 2. This deliberately does not use IntersectionObserver. A fast scroll can
 *    carry an element from below the viewport to above it without the
 *    intersection ratio ever changing from zero, so no callback is delivered
 *    and the element would stay invisible for good. A frame-throttled position
 *    check has no such gap: on any given frame an element is either above the
 *    fold or it is not.
 */
export function RevealRuntime() {
  useEffect(() => {
    if (
      typeof requestAnimationFrame === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const waiting = new Set<HTMLElement>();
    let frame = 0;

    /** Read every position first, then write every attribute. */
    function sweep(fold: number, onAbove: (node: HTMLElement) => void, nodes: HTMLElement[]) {
      const tops = nodes.map((node) => node.getBoundingClientRect().top);
      nodes.forEach((node, i) => {
        if (tops[i] < fold) onAbove(node);
      });
    }

    function check() {
      frame = 0;
      if (!waiting.size) return;

      // Trigger slightly before the element is fully in view, so the entrance
      // is already finishing by the time the reader looks at it.
      sweep(
        window.innerHeight * 0.92,
        (node) => {
          node.dataset.reveal = "in";
          waiting.delete(node);
        },
        [...waiting],
      );

      if (!waiting.size) stop();
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(check);
    }

    function stop() {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    }

    // Initial pass: anything already in view plays now and is never hidden.
    const all = [...document.querySelectorAll<HTMLElement>(".reveal")];
    const fold = window.innerHeight;
    const tops = all.map((node) => node.getBoundingClientRect().top);

    all.forEach((node, i) => {
      if (tops[i] < fold) {
        node.dataset.reveal = "in";
      } else {
        node.dataset.reveal = "pending";
        waiting.add(node);
      }
    });

    if (!waiting.size) return;

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return stop;
  }, []);

  return null;
}
