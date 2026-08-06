import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { HeroTileLoader } from "@/components/home/hero-tile-loader";
import { ServiceIndex } from "@/components/home/service-index";
import { FeaturedWork } from "@/components/home/featured-work";
import { FinalCta } from "@/components/home/final-cta";
import { seo } from "@/content/seo";

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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dignify Digital Studio" }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroTileLoader />
      <Hero />
      <ServiceIndex />
      <FeaturedWork />
      <FinalCta />
    </>
  );
}
