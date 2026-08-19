import type { Metadata, Viewport } from "next";
import { fontDisplay, fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { organizationJsonLd, seo } from "@/content/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { baseViewport, localeRedirect, revealNoscript, themeInit } from "@/lib/root-layout";
import { SkipLink } from "@/components/layout/skip-link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.homeId.title,
    template: `%s | ${site.name}`,
  },
  description: seo.homeId.description,
  applicationName: site.name,
  authors: [{ name: "Dije, Ignas and Daniel", url: site.url }],
  creator: "Dije, Ignas and Daniel",
  publisher: site.name,
  category: "technology",
  verification: {
    google: "GjrR4z1xGp9nSxeH0cZCnzHOfRIJGtHbG3x-BG5oKu8",
  },
  alternates: {
    canonical: "/id",
    languages: { en: "/", id: "/id", "x-default": "/" },
  },
  openGraph: {
    title: seo.homeId.title,
    description: seo.homeId.description,
    url: "/id",
    siteName: site.name,
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dignify studio digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.homeId.title,
    description: seo.homeId.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = baseViewport;

export default function IndonesianSiteRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={cn(fontSans.variable, fontDisplay.variable, fontMono.variable, "h-full antialiased")}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script dangerouslySetInnerHTML={{ __html: localeRedirect }} />
      </head>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink-text">
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: revealNoscript }} />
        </noscript>
        <JsonLd data={organizationJsonLd} />
        <SkipLink />
        <SiteHeader />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter locale="id" />
      </body>
    </html>
  );
}
