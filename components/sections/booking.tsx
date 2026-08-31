import { booking } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function Booking() {
  return (
    <Section
      id="book"
      index="07"
      eyebrow={booking.label}
      title={booking.title}
      intro={booking.body}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <Reveal>
            <h3 className="t-mono-label text-fg-subtle">{booking.topicsLabel}</h3>
          </Reveal>
          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-1">
            {booking.topics.map((topic, i) => (
              <Reveal key={topic} delay={Math.min(i * 50, 200)} as="li">
                <span className="t-body flex items-start gap-3 text-fg-muted">
                  <span aria-hidden className="mt-[0.62em] size-1.5 shrink-0 rounded-full bg-accent" />
                  {topic}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120}>
          <div className="rounded-xl border border-border bg-panel p-6 shadow-[var(--shadow-card)] md:p-8">
            <dl className="border-b border-border pb-6">
              {booking.meta.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-2"
                >
                  <dt className="t-mono-label text-fg-subtle">{item.label}</dt>
                  <dd className="t-meta text-right text-fg">{item.value}</dd>
                </div>
              ))}
            </dl>

            <ButtonLink href={booking.url} variant="primary" className="mt-6 w-full">
              {booking.cta}
              <ArrowUpRight className="arrow-nudge size-4" />
            </ButtonLink>

            <p className="t-meta mt-4 text-fg-subtle">{booking.note}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
