import { expertise } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";

export function Expertise() {
  return (
    <Section
      id="expertise"
      index="02"
      eyebrow="Expertise"
      title="What I build"
      intro="Five areas I work in, and the tools I actually use in each. Nothing listed here is aspirational."
    >
      <div className="border-t border-border">
        {expertise.map((group, i) => (
          <Reveal
            key={group.index}
            delay={Math.min(i * 60, 240)}
            className={[
              "grid gap-6 border-b border-border py-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-12 lg:py-11",
              group.featured ? "relative" : "",
            ].join(" ")}
          >
            {group.featured ? (
              <span
                aria-hidden
                className="absolute inset-y-0 -left-4 w-px bg-accent md:-left-6"
              />
            ) : null}

            <div>
              <div className="t-mono-label flex items-center gap-3 text-fg-subtle">
                <span className="tabular text-accent">{group.index}</span>
                {group.featured ? (
                  <span className="rounded border border-accent/35 bg-accent-soft px-1.5 py-0.5 text-[0.625rem] text-accent">
                    Specialization
                  </span>
                ) : null}
              </div>
              <h3 className="t-h4 mt-4 text-fg">{group.title}</h3>
              <p className="t-body mt-3 max-w-md text-fg-muted">{group.summary}</p>
            </div>

            <TagList
              items={group.skills}
              label={`${group.title} technologies`}
              className="content-start lg:pt-1"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
