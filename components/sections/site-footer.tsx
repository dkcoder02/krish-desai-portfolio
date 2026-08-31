import { builder, profile, site } from "@/lib/content";
import { SmartLink } from "@/components/ui/smart-link";

const links = [
  { label: "GitHub", href: profile.github, hint: "Add the GitHub profile URL in lib/content.ts" },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    hint: "Add the LinkedIn profile URL in lib/content.ts",
  },
  ...builder.products.map((product) => ({
    label: product.name,
    href: product.url,
    hint: undefined,
  })),
];

export function SiteFooter() {
  return (
    <footer className="hairline-top py-10 md:py-12">
      <div className="shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
            {links.map((link) => (
              <li key={link.label}>
                <SmartLink
                  href={link.href}
                  showArrow
                  placeholderHint={link.hint}
                  className="t-meta inline-flex items-center gap-1.5 text-fg-muted transition-colors duration-150 hover:text-fg"
                >
                  {link.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>

        <p className="t-meta font-mono text-fg-subtle">&copy; 2026 {site.name}</p>
      </div>
    </footer>
  );
}
