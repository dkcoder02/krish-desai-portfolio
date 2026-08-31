import Image from "next/image";
import { hero } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Grid is decorative and fades out before it competes with the type. */}
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_80%_at_15%_0%,black,transparent_70%)]"
      />

      <div className="shell relative pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <h1 className="t-hero text-fg">{hero.name}</h1>
            </Reveal>

            <Reveal delay={90}>
              <p className="t-h3 mt-5 max-w-2xl text-fg">{hero.headline}</p>
            </Reveal>

            <Reveal delay={140}>
              <p className="t-lead mt-6 max-w-xl text-fg-muted">{hero.body}</p>
            </Reveal>

            <Reveal delay={190}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href={hero.primaryCta.href} variant="primary">
                  {hero.primaryCta.label}
                  <ArrowDown className="size-4" />
                </ButtonLink>
                <ButtonLink href={hero.secondaryCta.href} variant="secondary">
                  {hero.secondaryCta.label}
                  <ArrowRight className="arrow-nudge size-4" />
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className="t-mono-label mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-fg-subtle">
                {hero.disciplines.map((item, i) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    {i > 0 ? <span aria-hidden>&middot;</span> : null}
                    {item}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <Reveal delay={220}>
              <HeroArt />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Decorative artwork beside the hero copy.
 *
 * Not marked priority on purpose: the panel is display:none below lg, and a
 * priority image would still be preloaded on phones that never show it. Lazy
 * loading means desktop fetches it immediately (it is in view) while mobile
 * skips it entirely. The h1 is the LCP element either way.
 *
 * alt is empty because the image carries no information the copy does not.
 */
function HeroArt() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-panel shadow-[var(--shadow-card)]">
      <Image
        src="/hero-art.jpg"
        alt=""
        width={1100}
        height={733}
        quality={82}
        className="h-auto w-full object-cover"
      />
    </div>
  );
}
