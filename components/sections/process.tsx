import { process } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function Process() {
  return (
    <Section
      id="process"
      index="04"
      eyebrow="How I Work"
      title="From idea to production"
      intro="The same five steps whether it is a SaaS product, an agent, or an integration between two systems that were never meant to talk."
    >
      <ol className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-0">
        {process.map((step, i) => (
          <Reveal key={step.step} delay={i * 70} as="li" className="relative lg:pr-8">
            <div className="border-t border-border pt-6">
              <span
                aria-hidden
                className="absolute top-0 left-0 size-1.5 -translate-y-1/2 rounded-full bg-accent"
              />
              <span className="t-mono-label tabular text-fg-subtle">{step.step}</span>
              <h3 className="t-h4 mt-3 text-fg">{step.title}</h3>
              <p className="t-meta mt-2.5 text-fg-muted">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
