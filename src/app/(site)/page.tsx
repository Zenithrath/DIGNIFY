import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { SelectedWork } from "@/components/home/selected-work";
import { WhyDignify } from "@/components/home/why-dignify";
import { Process } from "@/components/home/process";
import { FinalCta } from "@/components/home/final-cta";
import { seo } from "@/content/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: seo.home.title },
  description: seo.home.description,
  alternates: {
    canonical: "/",
    languages: { en: "/", id: "/id", "x-default": "/" },
  },
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: "/",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dignify Digital Studio" }],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <SelectedWork />
      <WhyDignify />
      <Process />
      <FinalCta />
    </>
  );
}