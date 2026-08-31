import type { ReactNode } from "react";
import { isPlaceholder } from "@/lib/content";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "border-accent-solid bg-accent-solid text-accent-contrast hover:bg-accent-solid-hover hover:border-accent-solid-hover",
  secondary:
    "border-border bg-transparent text-fg hover:border-border-strong hover:bg-panel-raised",
  ghost: "border-transparent bg-transparent text-fg-muted hover:text-fg",
};

const shared =
  "inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-[1.0625rem] font-medium transition-[background-color,border-color,color,transform] duration-150 active:translate-y-px";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  placeholderHint,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  placeholderHint?: string;
}) {
  const pending = isPlaceholder(href);
  const classes = `${shared} ${variants[variant]} ${className}`.trim();

  if (pending) {
    return (
      <span
        aria-disabled="true"
        title={placeholderHint ?? `${href} in lib/content.ts`}
        className={`${classes} cursor-help border-dashed opacity-70`}
      >
        {children}
      </span>
    );
  }

  const external = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
    </a>
  );
}
