import { about, hero, site } from "@/lib/content";
import { Avatar } from "@/components/ui/avatar";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="About">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 60}>
              <p
                className={
                  i === 0
                    ? "t-lead max-w-2xl text-fg"
                    : "t-body mt-5 max-w-2xl text-fg-muted"
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Avatar size={132} alt="Krish Desai, full-stack AI engineer" className="mb-8" />

          <dl className="border-t border-border">
            <Fact label="Role" value={site.role} />
            <Fact label="Focus" value={hero.disciplines.join(", ")} />
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-border py-3.5">
      <dt className="t-mono-label text-fg-subtle">{label}</dt>
      <dd className="t-meta max-w-[26ch] text-right text-fg">{value}</dd>
    </div>
  );
}
