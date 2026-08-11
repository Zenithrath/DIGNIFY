import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/seo/json-ld";
import { seo } from "@/content/seo";
import { site } from "@/content/site";

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
      <section aria-labelledby="id-hero-heading" className="bg-ink py-24 text-paper sm:py-32">
        <Container>
          <p className="meta-label text-emerald">/ STUDIO DIGITAL</p>
          <h1 id="id-hero-heading" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
            Jasa pembuatan website yang dibangun dengan jelas.
          </h1>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-dark sm:text-lg">
            Dignify menyediakan jasa pembuatan website — landing page, website company profile,
            website portfolio, hingga front-end development custom. Setiap project dikerjakan
            dengan scope yang jelas, desain yang konsisten, dan kode yang mudah dirawat.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/id/jasa-pembuatan-website" variant="emerald" size="lg" arrow>
              Lihat Layanan Website
            </Button>
            <Button href="/contact" variant="outlineLight" size="lg" arrow>
              Diskusikan Proyek
            </Button>
            <Button href="/portfolio" variant="outlineLight" size="lg">
              Lihat Portfolio
            </Button>
          </div>
        </Container>
      </section>

      <section aria-labelledby="id-services-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <p className="meta-label text-emerald-deep">/ LAYANAN</p>
          <h2 id="id-services-heading" className="display mt-6 max-w-4xl text-4xl sm:text-5xl">
            Layanan pembuatan website untuk kebutuhan bisnis dan personal brand.
          </h2>
          <div className="mt-12 border-t border-line">
            {seo.indonesianServices.map((service, index) => (
              <article key={service.title} className="grid grid-cols-12 gap-x-4 border-b border-line py-8 sm:py-10">
                <p className="col-span-2 meta-label text-emerald-deep">/{String(index + 1).padStart(2, "0")}</p>
                <div className="col-span-10 lg:col-span-4">
                  <h3 className="display text-2xl sm:text-3xl">{service.title}</h3>
                </div>
                <p className="col-span-10 col-start-3 mt-4 text-sm leading-relaxed text-muted lg:col-span-5 lg:col-start-8 lg:mt-0">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-between">
            <p className="meta-label hidden text-muted sm:block">FRONT-END DEVELOPMENT ADALAH BAGIAN DARI SETIAP PEMBUATAN WEBSITE.</p>
            <Button href="/id/jasa-pembuatan-website" variant="outline" arrow>
              Detail Layanan
            </Button>
          </div>
        </Container>
      </section>

      <section aria-labelledby="id-bilingual-heading" className="border-t border-line bg-cream py-20 sm:py-28">
        <Container>
          <p className="meta-label text-emerald-deep">/ BAHASA INDONESIA & ENGLISH</p>
          <h2 id="id-bilingual-heading" className="display mt-6 max-w-4xl text-4xl sm:text-5xl">
            Ceritakan kebutuhan proyekmu, dalam Bahasa Indonesia atau English.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
            Kirim konteks tentang tujuan, pengguna, sistem yang sudah ada, atau masalah yang ingin
            disederhanakan. Kami akan menjelaskan langkah berikutnya secara langsung.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="solid" size="lg" arrow>
              Hubungi Dignify
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
