import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { HeroTileLoader } from "@/components/home/hero-tile-loader";
import { Intro } from "@/components/home/intro";
import { ServiceIndex } from "@/components/home/service-index";
import { FeaturedWork } from "@/components/home/featured-work";
import { ProcessGrid } from "@/components/home/process-grid";
import { WhyDignify } from "@/components/home/why-dignify";
import { FinalCta } from "@/components/home/final-cta";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Digital Studio` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Digital Studio`,
    description: site.description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroTileLoader />
      <Hero />
      <Intro />
      <ServiceIndex />
      <FeaturedWork />
      <ProcessGrid />
      <WhyDignify />
      <FinalCta />
    </>
  );
}
