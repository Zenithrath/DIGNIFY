import type { Metadata, Viewport } from "next";
import { fontDisplay, fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { organizationJsonLd, seo } from "@/content/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { THEME_KEY } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} Digital Studio`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Dije and Ignas", url: site.url }],
  creator: "Dije and Ignas",
  publisher: site.name,
  category: "technology",
  keywords: [
    "Dignify",
    "digital studio",
    ...seo.serviceTerms,
  ],
  verification: {
    google: "GjrR4z1xGp9nSxeH0cZCnzHOfRIJGtHbG3x-BG5oKu8",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} Digital Studio`,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dignify Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} Digital Studio`,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

const themeInit = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");var p=(t==="light"||t==="dark"||t==="system")?t:"light";var r=p==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):p;var d=document.documentElement;d.dataset.theme=r;d.style.colorScheme=r;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",r==="dark"?"#0b0b0b":"#f3f1ec");}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(fontSans.variable, fontDisplay.variable, fontMono.variable, "h-full antialiased")}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink-text">
        <JsonLd data={organizationJsonLd} />
        {children}
      </body>
    </html>
  );
}
