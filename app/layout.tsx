import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { booking, isPlaceholder, profile, site } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#14120f" },
    { media: "(prefers-color-scheme: light)", color: "#f5f1eb" },
  ],
};

/** Replays an explicit theme choice before first paint, so there is no flash. */
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})()`;

/**
 * A linked graph rather than a lone Person node, so search engines can connect
 * the page, the site, the person, and the service she offers.
 *
 * Deliberately omitted: aggregateRating and Review. The client testimonials are
 * real, but Google treats reviews an entity publishes about itself as
 * self-serving and disallows them in structured data. Marking them up risks a
 * manual action, so they stay as plain on-page content where they still build
 * trust with a human reader.
 */
function structuredData() {
  const sameAs = [profile.github, profile.linkedin].filter((url) => !isPlaceholder(url));
  const person = `${site.url}/#person`;
  const website = `${site.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#page`,
        url: site.url,
        name: site.title,
        description: site.description,
        inLanguage: "en",
        isPartOf: { "@id": website },
        mainEntity: { "@id": person },
      },
      {
        "@type": "WebSite",
        "@id": website,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": person },
      },
      {
        "@type": "Person",
        "@id": person,
        name: site.name,
        url: site.url,
        image: `${site.url}/krish-desai.jpg`,
        jobTitle: site.role,
        description: site.description,
        knowsAbout: [...site.keywords],
        knowsLanguage: "en",
        hasOccupation: {
          "@type": "Occupation",
          name: site.role,
          occupationalCategory: "15-1252.00",
          skills: [...site.keywords],
        },
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#consulting`,
        name: "AI engineering and automation consulting",
        description: booking.body,
        url: `${site.url}/#book`,
        provider: { "@id": person },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: booking.url,
          name: booking.title,
        },
        serviceType: [
          "AI integration for SaaS products",
          "AI agent development",
          "Workflow automation",
          "Healthcare and EHR integration",
          "Full-stack product engineering",
        ],
      },
    ],
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:border focus:border-border focus:bg-panel focus:px-4 focus:py-2 focus:text-sm focus:text-fg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
