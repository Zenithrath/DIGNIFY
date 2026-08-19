import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { services as serviceCatalog } from "@/content/services";
import { enHomeCopy } from "@/content/home-copy";
import type { ServicesCopy } from "@/content/home-copy";

function serviceHref(slug: string) {
  return slug === "website-development" ? "/id/jasa-pembuatan-website" : `/id/services/${slug}`;
}

export function Services({ copy = enHomeCopy.services }: { copy?: ServicesCopy }) {
  if (copy.detailed) {
    return (
      <section
        aria-labelledby="services-heading"
        id="layanan"
        className="border-t border-line bg-paper py-24 sm:py-32"
      >
        <Container>
          <SectionHeader index="01" label={copy.label} title={copy.title} id="services-heading" />

          <div className="mt-12 grid grid-cols-12 gap-4 sm:mt-16">
            {serviceCatalog.map((service) => (
              <article
                key={service.slug}
                className="col-span-12 flex h-full flex-col border border-line bg-pure p-7 transition-colors duration-300 hover:border-emerald-deep sm:p-10 lg:col-span-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="meta-label text-emerald-deep">/ {service.index}</span>
                  <span className="meta-label text-muted">{service.title.toUpperCase()}</span>
                </div>
                <h3 className="display mt-8 text-3xl sm:text-4xl">{service.title}</h3>
                <p className="meta-label mt-3 text-emerald-deep">{service.tagline}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                  {service.descriptionId ?? service.description}
                </p>

                <ul className="mt-7 space-y-3 border-t border-line pt-7">
                  {(service.deliverablesId ?? service.deliverables).map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-text">
                      <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-emerald" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-7">
                  {service.tags.map((tag) => (
                    <span key={tag} className="meta-label border border-line px-2 py-1 text-muted">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={serviceHref(service.slug)}
                  className="group mt-8 inline-flex items-center gap-2 self-start border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-text transition-colors hover:text-emerald-deep"
                >
                  <span className="link-underline">Baca Selengkapnya</span>
                  <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-line pt-8">
            <Button href={copy.allServicesLink.href} variant="outline" arrow>
              {copy.allServicesLink.label}
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="services-heading"
      id="services"
      className="border-t border-line-dark bg-surface py-24 text-paper sm:py-32"
    >
      <Container>
        <SectionHeader index="01" label={copy.label} title={copy.title} tone="dark" id="services-heading" />

        <ul className="mt-10 divide-y divide-line-dark border-b border-line-dark sm:mt-12">
          {copy.rows.map((row) => (
            <li key={row.index}>
              <Link href={row.href} className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-3 py-7 sm:py-8">
                <span className="col-span-12 sm:col-span-1">
                  <span className="meta-label text-muted-dark transition-colors group-hover:text-emerald">
                    /{row.index}
                  </span>
                </span>
                <span className="col-span-12 sm:col-span-5">
                  <span className="display text-2xl transition-colors group-hover:text-emerald sm:text-3xl lg:text-4xl">
                    {row.title}
                  </span>
                </span>
                <span className="col-span-12 text-sm leading-relaxed text-muted-dark sm:col-span-5 sm:col-start-7">
                  {row.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-line-dark pt-8">
          <Button href={copy.allServicesLink.href} variant="outlineLight" arrow>
            {copy.allServicesLink.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}