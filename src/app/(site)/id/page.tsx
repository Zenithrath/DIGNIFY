import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/seo/json-ld";
import { seo } from "@/content/seo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Jasa Website, UI/UX, AI & Automasi n8n",
  description: seo.home.description,
  alternates: {
    canonical: "/id",
    languages: { en: "/", id: "/id", "x-default": "/" },
  },
  openGraph: {
    title: "Dignify | Jasa Website, UI/UX, AI & Automasi n8n",
    description: seo.home.description,
    url: "/id",
    locale: "id_ID",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dignify studio digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dignify | Jasa Website, UI/UX, AI & Automasi n8n",
    description: seo.home.description,
    images: ["/opengraph-image"],
  },
};

const indonesianPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site.url}/id#webpage`,
  url: `${site.url}/id`,
  name: "Dignify | Jasa Website, UI/UX, AI & Automasi n8n",
  description: seo.home.description,
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
      <section className="bg-ink py-24 text-paper sm:py-32">
        <Container>
          <p className="meta-label text-emerald">/ STUDIO DIGITAL</p>
          <h1 className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
            Jasa website, UI/UX, AI, dan automasi yang dibangun dengan jelas.
          </h1>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-dark sm:text-lg">
            Dignify adalah digital studio yang membantu tim merancang website, antarmuka, solusi AI,
            workflow n8n, dan integrasi API. Kami bekerja secara modular, transparan, dan tanpa klaim
            yang berlebihan.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" variant="emerald" size="lg" arrow>
              Diskusikan Proyek
            </Button>
            <Button href="/portfolio" variant="outlineLight" size="lg" arrow>
              Lihat Portfolio
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <p className="meta-label text-emerald-deep">/ LAYANAN</p>
          <h2 className="display mt-6 max-w-4xl text-4xl sm:text-5xl">
            Layanan digital untuk pekerjaan yang perlu berjalan dengan rapi.
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
        </Container>
      </section>

      <section className="border-t border-line bg-cream py-20 sm:py-28">
        <Container>
          <p className="meta-label text-emerald-deep">/ BAHASA INDONESIA & ENGLISH</p>
          <h2 className="display mt-6 max-w-4xl text-4xl sm:text-5xl">
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
