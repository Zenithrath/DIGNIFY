import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { services as serviceCatalog } from "@/content/services";
import { enHomeCopy } from "@/content/home-copy";
import type { ServicesCopy } from "@/content/home-copy";

function serviceHref(slug: string) {
  return slug === "website-development" ? "/jasa-pembuatan-website" : `/services/${slug}`;
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

          <div className="mt-12 sm:mt-16">
            {serviceCatalog.map((service, i) => (
              <details
                key={service.slug}
                className="service-card group sticky border-b border-line bg-pure first:border-t"
                style={{ top: `calc(5rem + ${i * 0.5}rem)`, zIndex: serviceCatalog.length - i }}
              >
                <summary className="flex cursor-pointer list-none flex-wrap items-baseline justify-between gap-x-6 gap-y-3 px-6 py-7 sm:px-10 sm:py-9">
                  <span className="flex items-baseline gap-4">
                    <span className="meta-label text-emerald-deep">/ {service.index}</span>
                    <span className="display text-2xl sm:text-4xl">{service.title}</span>
                  </span>
                  <span className="flex items-center gap-6">
                    <span className="meta-label hidden text-muted lg:inline">{service.tagline}</span>
                    <span
                      aria-hidden
                      className="meta-label shrink-0 text-emerald-deep transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>

                <div className="accordion-body">
                  <div className="accordion-body-inner">
                    <div className="border-t border-line px-6 pb-9 pt-6 sm:px-10 sm:pb-11 sm:pt-7">
                      <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                        {service.descriptionId ?? service.description}
                      </p>

                      <ul className="mt-6 space-y-3">
                        {(service.deliverablesId ?? service.deliverables).map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-text">
                            <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-emerald" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span key={tag} className="meta-label border border-line px-2 py-1 text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={serviceHref(service.slug)}
                        className="group/link mt-7 inline-flex items-center gap-2 border-t border-line pt-5 font-mono text-xs uppercase tracking-[0.14em] text-ink-text transition-colors hover:text-emerald-deep"
                      >
                        <span className="link-underline">Baca Selengkapnya</span>
                        <ArrowUpRight
                          aria-hidden
                          className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </details>
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