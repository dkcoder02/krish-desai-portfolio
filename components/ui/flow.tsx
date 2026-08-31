import type { ReactNode } from "react";

export type FlowNode = { label: string; note?: string };

/**
 * Vertical node chain used for every architecture diagram on the page.
 * Vertical by default so it degrades to mobile without a second layout, and the
 * travelling pulse on each connector is a single CSS animation, not a library.
 */
export function FlowChain({
  nodes,
  tone = "default",
  className = "",
  label,
}: {
  nodes: readonly FlowNode[];
  tone?: "default" | "accent";
  className?: string;
  label: string;
}) {
  return (
    <ol aria-label={label} className={`flex flex-col ${className}`.trim()}>
      {nodes.map((node, i) => (
        <li key={`${node.label}-${i}`} className="flex flex-col">
          <FlowBox node={node} tone={tone} />
          {i < nodes.length - 1 ? <Connector delay={i * 0.32} /> : null}
        </li>
      ))}
    </ol>
  );
}

export function FlowBox({
  node,
  tone = "default",
}: {
  node: FlowNode;
  tone?: "default" | "accent";
}) {
  return (
    <div
      className={[
        "rounded-lg border px-4 py-3 transition-colors duration-150",
        tone === "accent"
          ? "border-accent/35 bg-accent-soft"
          : "border-border bg-panel hover:border-border-strong",
      ].join(" ")}
    >
      <div className="t-meta font-medium text-fg">{node.label}</div>
      {node.note ? (
        <div className="t-meta mt-0.5 font-mono text-[0.75rem] text-fg-subtle">{node.note}</div>
      ) : null}
    </div>
  );
}

export function Connector({ delay = 0 }: { delay?: number }) {
  return (
    <div aria-hidden className="flex h-7 justify-center">
      <span
        className="flow-line w-px"
        style={{ "--flow-delay": `${delay}s` } as React.CSSProperties}
      />
    </div>
  );
}

/** Two-way link between two systems, used for the CRM and EHR sync loop. */
export function FlowLoop({
  nodes,
  label,
}: {
  nodes: readonly string[];
  label: string;
}) {
  return (
    <ol aria-label={label} className="flex flex-col">
      {nodes.map((node, i) => (
        <li key={node} className="flex flex-col">
          <FlowBox node={{ label: node }} tone={i === 1 ? "accent" : "default"} />
          {i < nodes.length - 1 ? (
            // The label is positioned off the centre line so the connector
            // stays aligned with the boxes above and below it.
            <div aria-hidden className="relative flex h-7 justify-center">
              <span
                className="flow-line w-px"
                style={{ "--flow-delay": `${i * 0.4}s` } as React.CSSProperties}
              />
              <span className="t-meta absolute top-1/2 left-1/2 ml-3 -translate-y-1/2 font-mono text-fg-subtle">
                two-way
              </span>
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function DiagramPanel({
  title,
  caption,
  children,
}: {
  title: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-bg-subtle/60 p-5 md:p-6">
      <div className="t-mono-label text-fg-subtle">{title}</div>
      {caption ? <p className="t-meta mt-2 text-fg-muted">{caption}</p> : null}
      <div className="mt-6">{children}</div>
    </div>
  );
}
