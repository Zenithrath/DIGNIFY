import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { services as staticServices, engagementId } from "@/content/services";
import { fetchServicesFromDb } from "@/lib/cms-store";
import { seo } from "@/content/seo";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: seo.servicesId.title,
  description: seo.servicesId.description,
  alternates: {
    canonical: "/services",
    languages: { id: "/services", "x-default": "/services" },
  },
  openGraph: {
    title: `${seo.servicesId.title} | Dignify`,
    description: seo.servicesId.description,
    url: "/services",
    locale: "id_ID",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Layanan Dignify" }],
  },
};

export default async function IdServicesPage() {
  const services = await fetchServicesFromDb().catch(() => staticServices);

  return (
    <>
      <section aria-labelledby="id-services-hero" className="bg-ink py-24 text-paper sm:py-32">
        <Container>
          <Reveal>
            <p className="meta-label text-emerald">/ LAYANAN</p>
            <h1 id="id-services-hero" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              Lima layanan, satu cara kerja: jelas.
            </h1>
          </Reveal>
          <div className="mt-12 grid grid-cols-12 gap-x-4">
            <Reveal delay={0.08} className="col-span-12 md:col-span-6 lg:col-span-4">
              <p className="text-base leading-relaxed text-muted-dark">Lima layanan, satu cara kerja. Kami petakan masalahnya, rancang struktur yang tepat, dan kirim hasil yang cukup jelas buat dirawat.</p>
            </Reveal>
            <Reveal delay={0.16} className="col-span-12 mt-10 md:col-span-5 md:col-start-8 md:mt-0">
              <dl className="border-t border-line-dark">
                {services.map((service) => (
                  <div key={service.slug} className="flex justify-between border-b border-line-dark py-3">
                    <dt className="meta-label text-muted-dark">{service.index}</dt>
                    <dd className="meta-label text-paper">{service.title}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <div id="id-services-index" className="bg-paper">
        <Container>
          {services.map((service, i) => {
            const isDark = i % 2 === 1;
            return (
              <section
                key={service.slug}
                id={service.slug}
                aria-labelledby={`id-service-${service.slug}`}
                className={isDark ? "border-x border-line bg-ink px-6 py-16 text-paper sm:px-10 sm:py-24" : "border-x border-line bg-paper px-6 py-16 sm:px-10 sm:py-24"}
              >
                <Reveal>
                  <div className="flex items-center justify-between">
                    <span className={isDark ? "meta-label text-emerald" : "meta-label text-emerald-deep"}>/ {service.index}</span>
                  </div>
                  <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-10">
                    <div className="col-span-12 lg:col-span-6">
                      <h2 id={`id-service-${service.slug}`} className="display text-4xl sm:text-6xl">
                        {service.title}
                      </h2>
                      <p className={isDark ? "meta-label mt-5 text-emerald" : "meta-label mt-5 text-emerald-deep"}>{service.tagline}</p>
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                      <p className={isDark ? "text-base leading-relaxed text-muted-dark" : "text-base leading-relaxed text-muted"}>{service.descriptionId ?? service.description}</p>
                    </div>
                    <div className="col-span-12 border-t pt-8 lg:col-span-6 lg:col-start-7" style={{ borderColor: isDark ? "var(--color-line-dark)" : "var(--color-line)" }}>
                      <p className={isDark ? "meta-label text-muted-dark" : "meta-label text-muted"}>YANG DISERAHKAN</p>
                      <ul className="mt-5 space-y-3">
                        {(service.deliverablesId ?? service.deliverables).map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm">
                            <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-emerald" />
                            <span className={isDark ? "text-paper" : "text-ink-text"}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 border-t pt-6" style={{ borderColor: isDark ? "var(--color-line-dark)" : "var(--color-line)" }}>
                        <Link
                          href={service.slug === "website-development" ? "/jasa-pembuatan-website" : `/services/${service.slug}`}
                          className={cn(
                            "meta-label inline-flex items-center gap-2 transition-colors",
                            isDark ? "text-emerald hover:text-paper" : "text-emerald-deep hover:text-ink",
                          )}
                        >
                          DETAIL
                          <span aria-hidden>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </section>
            );
          })}
        </Container>
      </div>

      <section aria-labelledby="id-engagement-heading" className="bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ ALUR KERJA</p>
              <h2 id="id-engagement-heading" className="display mt-6 text-4xl sm:text-5xl">
                Bagaimana sebuah proyek berjalan.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-12 gap-x-4">
            {engagementId.map((phase, i) => (
              <Reveal key={phase.index} delay={i * 0.07} className="col-span-12 sm:col-span-4">
                <div className="h-full border border-line bg-pure p-8">
                  <div className="flex items-center justify-between">
                    <span className="meta-label text-muted">/ {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="display mt-6 text-2xl">{phase.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{phase.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="flex flex-col items-start justify-between gap-6 border border-line bg-ink p-8 text-paper sm:flex-row sm:items-center sm:p-10">
              <div>
                <p className="meta-label text-emerald">MASIH BINGUNG MULAI DARI MANA?</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-dark">Konsultasi gratis adalah obrolan soal masalahnya. Kami bantu kamu definisikan langkah berikutnya dan bilang jujur apakah kami cocok.</p>
              </div>
              <p className="meta-label mt-3 text-emerald">TERMASUK / GRATIS</p>
              <Button href="/contact" variant="emerald" arrow>
                Mulai Proyek
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
