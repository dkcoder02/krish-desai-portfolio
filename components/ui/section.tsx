import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionProps = {
  id?: string;
  index: string;
  eyebrow: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Adds the hairline rule that separates every band of the page. */
  divider?: boolean;
};

export function Section({
  id,
  index,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  divider = true,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={`${divider ? "hairline-top" : ""} py-20 md:py-28 lg:py-32 ${className}`.trim()}
    >
      <div className="shell">
        <Reveal>
          <SectionLabel index={index}>{eyebrow}</SectionLabel>
        </Reveal>

        {title ? (
          <Reveal delay={60}>
            <h2 id={id ? `${id}-heading` : undefined} className="t-h2 mt-6 max-w-3xl">
              {title}
            </h2>
          </Reveal>
        ) : null}

        {intro ? (
          <Reveal delay={110}>
            <p className="t-lead mt-5 max-w-2xl text-fg-muted">{intro}</p>
          </Reveal>
        ) : null}

        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}

export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="t-mono-label flex items-center gap-2.5 text-fg-subtle">
      <span className="tabular text-accent">{index}</span>
      <span>{children}</span>
    </div>
  );
}
