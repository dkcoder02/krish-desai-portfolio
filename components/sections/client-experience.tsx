import { engagements } from "@/lib/content";
import { Star } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function ClientExperience() {
  return (
    <Section
      id="clients"
      index="06"
      eyebrow="Client Experience"
      title="Real client work"
      intro="I work directly with founders, startups, and businesses to build production software. These are recent engagements, with the client's own words."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {engagements.map((item, i) => (
          <Reveal key={item.index} delay={i * 90}>
            <article className="flex h-full flex-col rounded-xl border border-border bg-panel p-6 transition-colors duration-150 hover:border-border-strong md:p-8">
              {/* No wrapping here: a long title must not push the rating onto
                  its own line, or the two cards stop matching. */}
              <header className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="t-mono-label tabular text-accent">{item.index}</span>
                  <h3 className="t-h4 mt-3 text-fg">{item.title}</h3>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <span aria-hidden className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }, (_, star) => (
                      <Star key={star} />
                    ))}
                  </span>
                  <span className="t-meta tabular font-mono text-fg">
                    {item.rating}
                    <span className="text-fg-subtle">/5</span>
                  </span>
                </div>
              </header>

              <blockquote className="mt-7 border-l-2 border-accent/40 pl-5">
                <p className="t-lead text-fg">{item.quote}</p>
                <footer className="t-meta mt-4 text-fg-subtle">{item.attribution}</footer>
              </blockquote>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
