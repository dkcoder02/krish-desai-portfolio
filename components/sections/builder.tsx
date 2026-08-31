import { builder } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function Builder() {
  return (
    <Section
      id="products"
      index="03"
      eyebrow="Products"
      title={builder.title}
      intro={builder.body}
    >
      {/* Stacked full-width rows rather than a grid: each product gets room for
          a real sentence, and the list reads top to bottom on every screen. */}
      <ul className="flex flex-col gap-4">
        {builder.products.map((product, i) => (
          <Reveal key={product.name} delay={i * 90} as="li">
            <a
              href={product.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group/link block rounded-xl border border-border bg-panel p-6 transition-colors duration-150 hover:border-accent/45 md:p-7"
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="t-h4 text-fg transition-colors duration-150 group-hover/link:text-accent">
                  {product.name}
                </h3>
                <ArrowUpRight className="arrow-nudge mt-1 size-4 shrink-0 text-fg-subtle transition-colors duration-150 group-hover/link:text-accent" />
              </div>

              <p className="t-body mt-3 max-w-2xl text-fg-muted">{product.description}</p>

              <p className="t-meta mt-4 font-mono text-fg-subtle">{product.domain}</p>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
