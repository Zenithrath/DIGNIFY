import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { SelectedWork } from "@/components/home/selected-work";
import { WhyDignify } from "@/components/home/why-dignify";
import { Process } from "@/components/home/process";
import { FinalCta } from "@/components/home/final-cta";
import { seo } from "@/content/seo";
import { site } from "@/content/site";
import { idHomeCopy } from "@/content/home-copy";

export const metadata: Metadata = {
  title: { absolute: seo.homeId.title },
  description: seo.homeId.description,
  alternates: {
    canonical: "/id",
    languages: { id: "/id", "x-default": "/id" },
  },
  openGraph: {
    title: seo.homeId.title,
    description: seo.homeId.description,
    url: "/id",
    locale: "id_ID",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dignify studio digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.homeId.title,
    description: seo.homeId.description,
    images: ["/opengraph-image"],
  },
};

export const dynamic = "force-dynamic";

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
      <Services copy={idHomeCopy.services} />
      <SelectedWork copy={idHomeCopy.selectedWork} lang="id" />
      <WhyDignify copy={idHomeCopy.why} />
      <Process copy={idHomeCopy.process} />
      <FinalCta copy={idHomeCopy.finalCta} />
    </div>
  );
}