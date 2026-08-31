import type { ReactNode } from "react";
import { isPlaceholder } from "@/lib/content";
import { ArrowUpRight } from "./icons";

type SmartLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Shown on hover when the href has not been filled in yet. */
  placeholderHint?: string;
  showArrow?: boolean;
  ariaLabel?: string;
};

/**
 * Renders an anchor when the href is real, and inert dashed text when the value
 * is still an "[Add ...]" placeholder. The site never ships a dead link, and an
 * unfilled value is visibly unfinished rather than silently broken.
 */
export function SmartLink({
  href,
  children,
  className = "",
  placeholderHint,
  showArrow = false,
  ariaLabel,
}: SmartLinkProps) {
  if (isPlaceholder(href)) {
    return (
      <span
        data-placeholder="true"
        title={placeholderHint ?? `${href} in lib/content.ts`}
        aria-disabled="true"
        className={`cursor-help underline decoration-dashed decoration-fg-subtle/60 underline-offset-4 ${className}`.trim()}
      >
        {children}
      </span>
    );
  }

  const external = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`group/link ${className}`.trim()}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
      {showArrow ? <ArrowUpRight className="arrow-nudge size-3.5 shrink-0" /> : null}
    </a>
  );
}
