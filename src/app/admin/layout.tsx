import type { Metadata, Viewport } from "next";
import { fontDisplay, fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { baseViewport, themeInit } from "@/lib/root-layout";
import { site } from "@/content/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dignify Admin",
    template: `%s | Dignify Admin`,
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = baseViewport;

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(fontSans.variable, fontDisplay.variable, fontMono.variable, "h-full antialiased")}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-full flex-col bg-ink font-sans text-paper">{children}</body>
    </html>
  );
}
