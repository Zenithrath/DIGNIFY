import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { services as staticServices, engagement } from "@/content/services";
import { fetchServicesFromDb } from "@/lib/cms-store";
import { site } from "@/content/site";
import { seo } from "@/content/seo";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: seo.services.title,
  description: seo.services.description,
  alternates: {
    canonical: "/services",
    languages: { en: "/services", id: "/id", "x-default": "/services" },
  },
  openGraph: {
    title: `${seo.services.title} | Dignify`,
    description: seo.services.description,
    url: "/services",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dignify services" }],
  },
};

export default async function ServicesPage() {
  const services = await fetchServicesFromDb().catch(() => staticServices);

  return (
    <>
      <section aria-labelledby="services-hero" className="bg-ink py-24 text-paper sm:py-32">
        <Container>
          <Reveal>
            <p className="meta-label text-emerald">/ SERVICES</p>
            <h1 id="services-hero" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              Capabilities, stated plainly.
            </h1>
          </Reveal>
          <div className="mt-12 grid grid-cols-12 gap-x-4">
            <Reveal delay={0.08} className="col-span-12 md:col-span-6 lg:col-span-4">
              <p className="text-base leading-relaxed text-muted-dark">
                Five services, one way of working. We scope the problem, design the right structure,
                and deliver work that is clear enough to maintain.
              </p>
            </Reveal>
            <Reveal delay={0.16} className="col-span-12 mt-10 md:col-span-5 md:col-start-8 md:mt-0">
              <dl className="border-t border-line-dark">
                {services.map((service) => (
                  <div key={service.slug} className="flex justify-between border-b border-line-dark py-3">
                    <dt className="meta-label text-muted-dark">SVC/{service.index}</dt>
                    <dd className="meta-label text-paper">{service.title}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <div id="services-index" className="bg-paper">
        <Container>
          {services.map((service, i) => {
            const isDark = i % 2 === 1;
            return (
              <section
                key={service.slug}
                id={service.slug}
                aria-labelledby={`service-${service.slug}`}
                className={
                  isDark
                    ? "border-x border-line bg-ink px-6 py-16 text-paper sm:px-10 sm:py-24"
                    : "border-x border-line bg-paper px-6 py-16 sm:px-10 sm:py-24"
                }
              >
                <Reveal>
                  <div className="flex items-center justify-between">
                    <span className={isDark ? "meta-label text-emerald" : "meta-label text-emerald-deep"}>/ {service.index}</span>
                    <span className={cn("meta-label hidden sm:block", isDark ? "text-muted-dark" : "text-muted")}>
                      SYS / {site.wordmark}
                    </span>
                  </div>
                  <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-10">
                    <div className="col-span-12 lg:col-span-6">
                      <h2 id={`service-${service.slug}`} className="display text-4xl sm:text-6xl">
                        {service.title}
                      </h2>
                      <p
                        className={
                          isDark
                            ? "meta-label mt-5 text-emerald"
                            : "meta-label mt-5 text-emerald-deep"
                        }
                      >
                        {service.tagline}
                      </p>
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                      <p
                        className={
                          isDark ? "text-base leading-relaxed text-muted-dark" : "text-base leading-relaxed text-muted"
                        }
                      >
                        {service.description}
                      </p>
                    </div>
                    <div className="col-span-12 border-t pt-8 lg:col-span-6 lg:col-start-7" style={{ borderColor: isDark ? "var(--color-line-dark)" : "var(--color-line)" }}>
                      <p className={isDark ? "meta-label text-muted-dark" : "meta-label text-muted"}>
                        DELIVERABLES
                      </p>
                      <ul className="mt-5 space-y-3">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm">
                            <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-emerald" />
                            <span className={isDark ? "text-paper" : "text-ink-text"}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className={
                              isDark
                                ? "meta-label border border-line-dark px-2 py-1 text-muted-dark"
                                : "meta-label border border-line px-2 py-1 text-muted"
                            }
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </section>
            );
          })}
        </Container>
      </div>

      <section aria-labelledby="engagement-heading" className="bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ ENGAGEMENT</p>
              <h2 id="engagement-heading" className="display mt-6 text-4xl sm:text-5xl">
                How a project runs.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-12 gap-x-4">
            {engagement.map((phase, i) => (
              <Reveal key={phase.index} delay={i * 0.07} className="col-span-12 sm:col-span-4">
                <div className="h-full border border-line bg-pure p-8">
                  <div className="flex items-center justify-between">
                    <span className="meta-label text-muted">PHASE / {phase.index}</span>
                    <span className="meta-label text-emerald-deep">{String(i + 1).padStart(2, "0")}</span>
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
                <p className="meta-label text-emerald">NOT SURE WHERE TO START?</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-dark">
                  A free consultation is a conversation about the problem. We will help you define
                  the next step and tell you honestly whether we are the right fit.
                </p>
              </div>
              <p className="meta-label mt-3 text-emerald">INCLUDED / FREE OF CHARGE</p>
              <Button href="/contact" variant="emerald" arrow>
                Start a Project
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
