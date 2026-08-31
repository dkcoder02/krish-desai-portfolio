# desaikrish.com

Personal site for Krish Desai, Full-Stack AI Engineer.

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. No UI or animation
libraries: every component here is local, and the only client-side JavaScript is
the navigation, the theme toggle, and a small scroll-reveal runtime.

The palette follows app.inapp.app: warm paper background, near-black text, one
crimson accent. Light is the default; dark is a warm-toned alternative behind
the toggle. Two values are intentionally darker than the reference, which does
not meet WCAG AA on its own tertiary text or on crimson used as text. See the
comment at the top of `app/globals.css`.

## Running it

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

## Fill these in before deploying

One profile field is the only remaining gap. Nothing was invented to fill
space. All of them live in one file, `lib/content.ts`.

Placeholder URLs render as inert, dashed text with a tooltip rather than as a
link, so the site never ships a dead link. Placeholder copy renders in monospace
so it is obvious at a glance.

### 1. Profile links, `profile` in `lib/content.ts`

| Field      | Used by                                  |
| ---------- | ---------------------------------------- |
| `email`    | Contact CTA. While unset, that button falls back to the Cal.com booking link and relabels itself "Book a call". |

## Booking

The consulting section and the contact CTA both point at `booking.url` in
`lib/content.ts` (currently the Cal.com 30 minute event). Changing that one
value updates both.

## SEO

- `app/opengraph-image.png` and `app/twitter-image.png` (1200x630) with matching
  `.alt.txt` files. Next.js emits `og:image`, dimensions, type, and alt from these.
  They were rendered in headless Chrome from `scratchpad/og.html` so they use the
  real Geist fonts and brand tokens rather than approximations.
- Structured data is a linked `@graph` in `app/layout.tsx`: ProfilePage, WebSite,
  Person (with image, sameAs, hasOccupation), and ProfessionalService pointing at
  the booking URL.
- `aggregateRating` and `Review` are deliberately absent. The testimonials are
  real, but Google disallows structured-data reviews an entity publishes about
  itself, and marking them up risks a manual action.

To regenerate the social image after a copy or photo change, re-render
`og.html` at 1200x630 and re-run the palette-quantise step.

## Images

The profile photo drives both the on-page avatar and every app icon. All of them
are generated from one source portrait:

| File                    | Purpose                                    |
| ----------------------- | ------------------------------------------ |
| `public/krish-desai.jpg` | Circular avatar in the hero and About (640px square, head-and-shoulders crop) |
| `app/icon.png`          | Browser tab icon, 256px, circular with transparent corners |
| `app/apple-icon.png`    | iOS home screen, 180px on the brand cream (iOS ignores transparency) |
| `app/favicon.ico`       | 16/32/48px, for clients that request `/favicon.ico` directly |

To swap the photo, replace `public/krish-desai.jpg` with another square crop and
regenerate the icons from the same source.

The `Avatar` component sets no `sizes` prop on purpose: with a fixed width and
height, next/image emits a small 1x/2x srcSet (about 2KB at 84px). Adding
`sizes` would switch it to responsive mode and generate the full ladder up to
3840px for an 84px avatar.

## Structure

```
app/
  layout.tsx     root layout, metadata, JSON-LD Person schema, theme script
  page.tsx       section order for the homepage
  globals.css    design tokens, type scale, animation
  sitemap.ts     robots.ts
components/
  sections/      one file per band of the page
  ui/            shared primitives (Section, Reveal, flow diagrams, tags)
lib/
  content.ts     every word and number on the site
```

Content and presentation are kept apart: to change copy, edit `lib/content.ts`
and touch nothing else.

## Notes on a few decisions

**Scroll reveal.** The server HTML contains no hidden state. Elements start
visible, and `RevealRuntime` only hides the ones below the fold after mount,
where the change cannot be seen. If JavaScript fails, a crawler visits, or
reduced motion is on, the whole page is simply visible. The runtime is one
client component driving every marked element, not one component per element,
and it batches all position reads before any attribute writes so a long page
costs a single layout rather than one per element.

It uses a frame-throttled scroll check rather than IntersectionObserver on
purpose: a fast scroll can carry an element from below the viewport to above it
without the intersection ratio ever leaving zero, which delivers no callback and
leaves the element invisible for good.

**Theming.** Light is the default and is what the server renders, so there is no
flash. A small inline script replays an explicit choice before first paint. The
current theme lives on `<html data-theme>` rather than in React state, so the
toggle has nothing to hydrate and nothing to mismatch.

**Placeholders.** `isPlaceholder()` drives the inert-link and monospace-copy
treatment, which is why an unfilled value looks unfinished instead of broken.

## Verified

- Lighthouse desktop: performance 100, accessibility 100, best practices 100, SEO 100, CLS 0, LCP 0.56s
- Lighthouse mobile (4x CPU throttle, slow 4G): performance ~95, accessibility 100, best practices 100, SEO 100
- WCAG AA contrast verified on every rendered text node, in both themes
- Keyboard: mobile menu traps focus, closes on Escape, and returns focus to its trigger
- No em dashes anywhere in the copy
