import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds. Kept small so nothing feels like it is waiting. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Entrance animation for a block of content.
 *
 * This is a server component on purpose: it ships no JavaScript and nothing
 * here hydrates. It only marks an element, and the single <RevealRuntime />
 * mounted once on the page drives every marked element. A page with a hundred
 * of these still costs one client component, not a hundred.
 *
 * The server output carries no hidden state, so with no JavaScript, a failed
 * hydration, a crawler, or reduced motion enabled, the content is simply
 * visible.
 */
export function Reveal({ children, delay = 0, as, className = "" }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      className={`reveal ${className}`.trim()}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
