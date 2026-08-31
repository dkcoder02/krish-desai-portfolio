import { booking, contact, isPlaceholder, profile } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight, GitHub, LinkedIn } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section";

export function Contact() {
  // No email set yet, so the primary action falls back to the booking link
  // rather than rendering a dead button. The label follows the destination.
  const hasEmail = !isPlaceholder(profile.email);
  const primaryHref = hasEmail ? `mailto:${profile.email}` : booking.url;
  const primaryLabel = hasEmail ? "Start a conversation" : "Book a call";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="hairline-top relative overflow-hidden py-20 md:py-28 lg:py-32"
    >
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(90%_70%_at_50%_100%,black,transparent_75%)]"
      />

      <div className="shell relative">
        <Reveal>
          <SectionLabel index="08">Contact</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <h2 id="contact-heading" className="t-h2 mt-6 max-w-3xl">
            {contact.title}
          </h2>
        </Reveal>

        <Reveal delay={110}>
          <p className="t-lead mt-6 max-w-2xl text-fg-muted">{contact.body}</p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href={primaryHref} variant="primary">
              {primaryLabel}
              <ArrowRight className="arrow-nudge size-4" />
            </ButtonLink>

            <ButtonLink
              href={profile.github}
              variant="secondary"
              placeholderHint="Add the GitHub profile URL in lib/content.ts"
            >
              <GitHub className="size-4" />
              View GitHub
            </ButtonLink>

            <ButtonLink
              href={profile.linkedin}
              variant="secondary"
              placeholderHint="Add the LinkedIn profile URL in lib/content.ts"
            >
              <LinkedIn className="size-4" />
              LinkedIn
            </ButtonLink>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
