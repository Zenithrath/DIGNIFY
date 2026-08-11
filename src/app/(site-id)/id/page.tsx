import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { Hero } from "@/components/home/hero";
import { ServiceIndex } from "@/components/home/service-index";
import { FeaturedWork } from "@/components/home/featured-work";
import { FinalCta } from "@/components/home/final-cta";
import { seo } from "@/content/seo";
import { site } from "@/content/site";
import { idHomeCopy } from "@/content/home-copy";

export const metadata: Metadata = {
  title: { absolute: seo.homeId.title },
  description: seo.homeId.description,
  alternates: {
    canonical: "/id",
    languages: { en: "/", id: "/id", "x-default": "/" },
  },
  openGraph: {
    title: seo.homeId.title,
    description: seo.homeId.description,
    url: "/id",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dignify studio digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.homeId.title,
    description: seo.homeId.description,
    images: ["/opengraph-image"],
  },
};

export const revalidate = 60;

const indonesianPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site.url}/id#webpage`,
  url: `${site.url}/id`,
  name: seo.homeId.title,
  description: seo.homeId.description,
  inLanguage: "id",
  isPartOf: { "@id": `${site.url}/#website` },
  about: seo.indonesianServices.map((service) => ({
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": `${site.url}/#organization` },
  })),
} as const;

export default function IndonesianHomePage() {
  return (
    <div lang="id">
      <JsonLd data={indonesianPageJsonLd} />
      <Hero copy={idHomeCopy.hero} />
      <ServiceIndex copy={idHomeCopy.serviceIndex} />
      <FeaturedWork copy={idHomeCopy.featuredWork} lang="id" />
      <FinalCta copy={idHomeCopy.finalCta} />
    </div>
  );
}
