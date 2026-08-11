import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { JsonLd } from "@/components/seo/json-ld";
import { webDevelopment } from "@/content/web-development";
import { projects as staticProjects } from "@/content/projects";
import { fetchProjectsFromDb } from "@/lib/cms-store";
import { site } from "@/content/site";
import { seo } from "@/content/seo";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: seo.webDevelopment.title,
  description: seo.webDevelopment.description,
  alternates: {
    canonical: "/web-development",
    languages: { en: "/web-development", id: "/id/jasa-pembuatan-website", "x-default": "/web-development" },
  },
  openGraph: {
    title: `${seo.webDevelopment.title} | Dignify`,
    description: seo.webDevelopment.description,
    url: "/web-development",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dignify web development services" }],
  },
};

const servicePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${site.url}/web-development#service`,
  name: "Web Development",
  url: `${site.url}/web-development`,
  description: seo.webDevelopment.description,
  provider: { "@id": `${site.url}/#organization` },
  areaServed: "ID",
  serviceType: "Web Development",
} as const;

export default async function WebDevelopmentPage() {
  const allProjects = await fetchProjectsFromDb().catch(() => staticProjects);
  const featured = allProjects.slice(0, 3);

  return (
    <>
      <JsonLd data={servicePageJsonLd} />

      <section aria-labelledby="wd-hero-heading" className="bg-ink py-24 text-paper sm:py-32">
        <Container>
          <Reveal>
            <p className="meta-label text-emerald">/ {webDevelopment.hero.label}</p>
            <h1 id="wd-hero-heading" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              {webDevelopment.hero.title[0]}
              <br />
              {webDevelopment.hero.title[1]}
            </h1>
          </Reveal>
          <div className="mt-12 grid grid-cols-12 gap-x-4">
            <Reveal delay={0.08} className="col-span-12 md:col-span-6 lg:col-span-4">
              <p className="text-base leading-relaxed text-muted-dark">{webDevelopment.hero.intro}</p>
            </Reveal>
            <Reveal delay={0.16} className="col-span-12 mt-10 md:col-span-5 md:col-start-8 md:mt-0">
              <p className="meta-label border-t border-line-dark pt-3 text-emerald">{webDevelopment.hero.meta}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="emerald" size="lg" arrow>
                  Start a Project
                </Button>
                <Button href="/portfolio" variant="outlineLight" size="lg">
                  View Portfolio
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="wd-services-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ WHAT WE BUILD</p>
              <h2 id="wd-services-heading" className="display mt-6 max-w-4xl text-4xl sm:text-5xl">
                Web development services, scoped to the actual problem.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10">
            {webDevelopment.services.map((service, i) => {
              const isDark = i % 2 === 1;
              return (
                <Reveal key={service.slug}>
                  <article
                    id={service.slug}
                    className={cn(
                      "grid grid-cols-12 gap-x-4 border-x border-b border-line px-6 py-12 sm:px-10",
                      isDark && "border-line-dark bg-ink text-paper",
                    )}
                  >
                    <div className="col-span-12 lg:col-span-4">
                      <p className={cn("meta-label", isDark ? "text-emerald" : "text-emerald-deep")}>
                        / {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="display mt-4 text-3xl sm:text-4xl">{service.title}</h3>
                    </div>
                    <p className={cn("col-span-12 mt-6 text-base leading-relaxed lg:col-span-4 lg:col-start-6 lg:mt-0", isDark ? "text-muted-dark" : "text-muted")}>
                      {service.description}
                    </p>
                    <div className="col-span-12 mt-8 border-t pt-6 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:border-t-0 lg:pt-0" style={{ borderColor: isDark ? "var(--color-line-dark)" : "var(--color-line)" }}>
                      <p className={cn("meta-label", isDark ? "text-muted-dark" : "text-muted")}>INCLUDES</p>
                      <ul className="mt-4 space-y-3">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm">
                            <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-emerald" />
                            <span className={isDark ? "text-paper" : "text-ink-text"}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section aria-labelledby="wd-process-heading" className="border-t border-line bg-cream py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ FROM DESIGN TO DEPLOYMENT</p>
              <h2 id="wd-process-heading" className="display mt-6 text-4xl sm:text-5xl">
                A process that keeps the result clear.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-12 gap-x-4">
            {webDevelopment.process.map((phase, i) => (
              <Reveal key={phase.index} delay={i * 0.07} className="col-span-12 sm:col-span-6 lg:col-span-3">
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
        </Container>
      </section>

      <section aria-labelledby="wd-work-heading" className="bg-ink py-20 text-paper sm:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line-dark pb-6">
              <p className="meta-label text-emerald">/ SELECTED WORK</p>
              <h2 id="wd-work-heading" className="display mt-6 text-4xl sm:text-5xl">
                Websites built for company profiles, portfolios, and more.
              </h2>
            </div>
          </Reveal>
          <ul className="mt-10 divide-y divide-line-dark border-b border-line-dark">
            {featured.map((project, i) => (
              <li key={project.slug}>
                <Link href={`/portfolio/${project.slug}`} className="group grid grid-cols-12 items-center gap-x-4 gap-y-3 py-7 transition-colors hover:bg-surface/40 sm:py-8">
                  <span className="col-span-2 meta-label text-muted-dark">/{String(i + 1).padStart(2, "0")}</span>
                  <span className="col-span-9 sm:col-span-5">
                    <span className="display text-2xl text-paper transition-colors group-hover:text-emerald sm:text-3xl">{project.title}</span>
                  </span>
                  <span className="col-span-9 col-start-3 flex flex-wrap items-center gap-3 sm:col-span-4 sm:col-start-7">
                    <StatusBadge status={project.status} tone="dark" />
                    <span className="meta-label text-muted-dark">{project.category} / {project.year}</span>
                  </span>
                  <span aria-hidden className="col-span-1 hidden justify-end text-emerald sm:flex">↗</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/portfolio" variant="outlineLight" arrow>
              View the full portfolio
            </Button>
          </div>
        </Container>
      </section>

      <section aria-labelledby="wd-faq-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-4">
              <div className="border-b border-line pb-6">
                <p className="meta-label text-emerald-deep">/ FAQ</p>
                <h2 id="wd-faq-heading" className="display mt-6 text-4xl">
                  Common questions, answered plainly.
                </h2>
              </div>
            </Reveal>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              {webDevelopment.faqs.map((faq) => (
                <Reveal key={faq.question}>
                  <details className="group border-b border-line py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                      <h3 className="display text-xl sm:text-2xl">{faq.question}</h3>
                      <span aria-hidden className="text-emerald-deep transition-transform duration-300 group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{faq.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="wd-cta-heading" className="bg-ink py-24 text-paper sm:py-32" style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)" }}>
        <Container>
          <Reveal>
            <p className="meta-label text-emerald">/ NEXT STEP</p>
            <h2 id="wd-cta-heading" className="display mt-8 text-[clamp(3rem,8.5vw,8.5rem)]">
              Let&apos;s build something
              <br />
              clear.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-dark">
              A focused conversation about your website, its scope, and its constraints. We will tell
              you clearly whether we are the right fit.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact" variant="emerald" size="lg" arrow>
                Start a Project
              </Button>
              <Button href={`mailto:${site.email}`} variant="outlineLight" size="lg">
                {site.email}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
