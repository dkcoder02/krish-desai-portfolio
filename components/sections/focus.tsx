import { focus } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { RotatingText } from "@/components/ui/rotating-text";

export function Focus() {
  return (
    <section aria-label="Focus areas" className="hairline-top bg-bg-subtle/60 py-16 md:py-24">
      <div className="shell">
        <Reveal>
          <p className="t-mono-label text-fg-subtle">{focus.label}</p>
        </Reveal>
        <Reveal delay={60}>
          <p className="t-display mt-6 text-accent">
            <RotatingText phrases={focus.phrases} />
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="t-lead mt-7 max-w-2xl text-fg-muted">{focus.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
