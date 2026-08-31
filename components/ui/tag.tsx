import { isPlaceholder } from "@/lib/content";

export function Tag({ children }: { children: string }) {
  const pending = isPlaceholder(children);

  return (
    <li
      data-placeholder={pending ? "true" : undefined}
      className={[
        "t-meta rounded-md border px-2.5 py-1 font-mono transition-colors duration-150",
        pending
          ? "border-dashed border-border-strong text-fg-subtle"
          : "border-border bg-panel-raised/60 text-fg-muted hover:border-border-strong hover:text-fg",
      ].join(" ")}
    >
      {children}
    </li>
  );
}

export function TagList({
  items,
  label,
  className = "",
}: {
  items: readonly string[];
  label: string;
  className?: string;
}) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}
