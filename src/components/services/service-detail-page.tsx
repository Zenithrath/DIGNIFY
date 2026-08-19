import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { JsonLd } from "@/components/seo/json-ld";
import type { ServiceDetailContent } from "@/content/service-details";
import { serviceDetailsEn, serviceDetailsId } from "@/content/service-details";
import { projects as staticProjects, statusLabel } from "@/content/projects";
import { fetchProjectsFromDb } from "@/lib/cms-store";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type Locale = "en" | "id";

const serviceDetailMeta: Record<
  Locale,
  Record<string, { title: string; description: string }>
> = {
  en: Object.fromEntries(
    Object.entries(serviceDetailsEn).map(([slug, content]) => [slug, content.meta]),
  ),
  id: Object.fromEntries(
    Object.entries(serviceDetailsId).map(([slug, content]) => [slug, content.meta]),
  ),
};

const servicePaths: Record<Locale, (slug: string) => string> = {
  en: (slug) => `/services/${slug}`,
  id: (slug) => `/id/services/${slug}`,
};

export function generateServiceMetadata(
  locale: Locale,
  slug: string,
  fallbackMeta: { title: string; description: string },
): Metadata {
  const meta = serviceDetailMeta[locale][slug] ?? fallbackMeta;
  const path = servicePaths[locale](slug);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: path,
      languages: { id: servicePaths.id(slug), "x-default": servicePaths.id(slug) },
    },
    openGraph: {
      title: `${meta.title} | Dignify`,
      description: meta.description,
      url: path,
      locale: locale === "id" ? "id_ID" : "en_US",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/opengraph-image"],
    },
  };
}

const detailCopy: Record<
  Locale,
  {
    allServices: string;
    allServicesHref: string;
    included: string;
    scopeLabel: string;
    processLabel: string;
    workLabel: string;
    workTitle: string;
    viewPortfolio: string;
    viewWorkShort: string;
    faqLabel: string;
    faqTitle: string;
    nextStep: string;
    ctaHeading: string;
    ctaSub: string;
    startProject: string;
    startHref: string;
    portfolioHref: string;
    projectsPrefix: string;
  }
> = {
  en: {
    allServices: "All Services",
    allServicesHref: "/services",
    included: "INCLUDES",
    scopeLabel: "WHAT WE WORK ON",
    processLabel: "HOW IT RUNS",
    workLabel: "RELATED WORK",
    workTitle: "Projects shaped by the same service.",
    viewPortfolio: "View the full portfolio",
    viewWorkShort: "View Portfolio",
    faqLabel: "FAQ",
    faqTitle: "Common questions, answered plainly.",
    nextStep: "NEXT STEP",
    ctaHeading: "Let's build something clear.",
    ctaSub:
      "A focused conversation about your project, its scope, and its constraints. We will tell you clearly whether we are the right fit.",
    startProject: "Start a Project",
    startHref: "/contact",
    portfolioHref: "/portfolio",
    projectsPrefix: "/portfolio/",
  },
  id: {
    allServices: "Semua Layanan",
    allServicesHref: "/id/services",
    included: "TERMASUK",
    scopeLabel: "YANG BISA DIKERJAKAN",
    processLabel: "CARA KERJANYA",
    workLabel: "KARYA TERKAIT",
    workTitle: "Project yang dibikin dengan layanan yang sama.",
    viewPortfolio: "Lihat portfolio lengkap",
    viewWorkShort: "Lihat Portfolio",
    faqLabel: "FAQ",
    faqTitle: "Pertanyaan umum, dijawab terus terang.",
    nextStep: "LANGKAH BERIKUTNYA",
    ctaHeading: "Ayo bangun sesuatu yang jelas.",
    ctaSub:
      "Obrolan singkat dan terarah soal project kamu: tujuannya, lingkupnya, dan kendalanya. Kami akan bilang jujur kalau kami cocok atau tidak.",
    startProject: "Mulai Project",
    startHref: "/id/contact",
    portfolioHref: "/id/portfolio",
    projectsPrefix: "/id/portfolio/",
  },
};

export function ServiceDetailPage({
  content,
  locale,
  slug,
}: {
  content: ServiceDetailContent;
  locale: Locale;
  slug: string;
}) {
  const copy = detailCopy[locale];
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${servicePaths[locale](slug)}#service`,
    name: content.hero.title[0],
    url: `${site.url}${servicePaths[locale](slug)}`,
    description: content.meta.description,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "ID",
    serviceType: content.hero.title[0],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: content.scope.title,
      itemListElement: content.scope.items.map((item, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.description,
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />

      <section aria-labelledby="sd-hero-heading" className="bg-ink py-24 text-paper sm:py-32">
        <Container>
          <Reveal>
            <Link
              href={copy.allServicesHref}
              className="meta-label inline-flex items-center gap-2 text-muted-dark transition-colors hover:text-emerald"
            >
              <span aria-hidden>←</span> {copy.allServices}
            </Link>
            <p className="meta-label mt-10 text-emerald">/ {content.hero.label}</p>
            <h1 id="sd-hero-heading" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              {content.hero.title[0]}
              <br />
              {content.hero.title[1]}
            </h1>
          </Reveal>
          <div className="mt-12 grid grid-cols-12 gap-x-4">
            <Reveal delay={0.08} className="col-span-12 md:col-span-6 lg:col-span-4">
              <p className="text-base leading-relaxed text-muted-dark">{content.hero.intro}</p>
            </Reveal>
            <Reveal delay={0.16} className="col-span-12 mt-10 md:col-span-5 md:col-start-8 md:mt-0">
              <p className="meta-label border-t border-line-dark pt-3 text-emerald">{content.hero.meta}</p>
              {content.stack.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {content.stack.map((tag) => (
                    <span key={tag} className="meta-label border border-line-dark px-2 py-1 text-muted-dark">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={copy.startHref} variant="emerald" size="lg" arrow>
                  {copy.startProject}
                </Button>
                <Button href={copy.portfolioHref} variant="outlineLight" size="lg">
                  {copy.viewWorkShort}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="sd-scope-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ {content.scope.label}</p>
              <h2 id="sd-scope-heading" className="display mt-6 max-w-4xl text-4xl sm:text-5xl">
                {content.scope.title}
              </h2>
            </div>
          </Reveal>
          <div className="mt-10">
            {content.scope.items.map((item, i) => {
              const isDark = i % 2 === 1;
              return (
                <Reveal key={item.title}>
                  <article
                    className={cn(
                      "grid grid-cols-12 gap-x-4 border-x border-b border-line px-6 py-12 sm:px-10",
                      isDark && "border-line-dark bg-ink text-paper",
                    )}
                  >
                    <div className="col-span-12 lg:col-span-4">
                      <p className={cn("meta-label", isDark ? "text-emerald" : "text-emerald-deep")}>
                        / {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="display mt-4 text-3xl sm:text-4xl">{item.title}</h3>
                    </div>
                    <p className={cn("col-span-12 mt-6 text-base leading-relaxed lg:col-span-4 lg:col-start-6 lg:mt-0", isDark ? "text-muted-dark" : "text-muted")}>
                      {item.description}
                    </p>
                    <div className="col-span-12 mt-8 border-t pt-6 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:border-t-0 lg:pt-0" style={{ borderColor: isDark ? "var(--color-line-dark)" : "var(--color-line)" }}>
                      <p className={cn("meta-label", isDark ? "text-muted-dark" : "text-muted")}>{copy.included}</p>
                      <ul className="mt-4 space-y-3">
                        {item.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-start gap-3 text-sm">
                            <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-emerald" />
                            <span className={isDark ? "text-paper" : "text-ink-text"}>{deliverable}</span>
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

      <section aria-labelledby="sd-process-heading" className="border-t border-line bg-cream py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ {content.process.label}</p>
              <h2 id="sd-process-heading" className="display mt-6 text-4xl sm:text-5xl">
                {content.process.title}
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-12 gap-x-4">
            {content.process.steps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.07} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="h-full border border-line bg-pure p-8">
                  <div className="flex items-center justify-between">
                    <span className="meta-label text-muted">/ {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="display mt-6 text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <RelatedWork category={content.related} copy={copy} locale={locale} />

      <section aria-labelledby="sd-faq-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-4">
              <div className="border-b border-line pb-6">
                <p className="meta-label text-emerald-deep">/ {copy.faqLabel}</p>
                <h2 id="sd-faq-heading" className="display mt-6 text-4xl">
                  {copy.faqTitle}
                </h2>
              </div>
            </Reveal>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              {content.faqs.map((faq) => (
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

      <section
        aria-labelledby="sd-cta-heading"
        className="bg-ink py-24 text-paper sm:py-32"
        style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <Container>
          <Reveal>
            <p className="meta-label text-emerald">/ {copy.nextStep}</p>
            <h2 id="sd-cta-heading" className="display mt-8 text-[clamp(3rem,8.5vw,8.5rem)]">
              {copy.ctaHeading}
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-dark">{copy.ctaSub}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={copy.startHref} variant="emerald" size="lg" arrow>
                {copy.startProject}
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

async function RelatedWork({
  category,
  copy,
  locale,
}: {
  category: string;
  copy: (typeof detailCopy)[Locale];
  locale: Locale;
}) {
  const allProjects = await fetchProjectsFromDb().catch(() => staticProjects);
  const related = allProjects.filter((project) => project.category === category).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section aria-labelledby="sd-work-heading" className="bg-ink py-20 text-paper sm:py-28">
      <Container>
        <Reveal>
          <div className="border-b border-line-dark pb-6">
            <p className="meta-label text-emerald">/ {copy.workLabel}</p>
            <h2 id="sd-work-heading" className="display mt-6 text-4xl sm:text-5xl">
              {copy.workTitle}
            </h2>
          </div>
        </Reveal>
        <ul className="mt-10 divide-y divide-line-dark border-b border-line-dark">
          {related.map((project, i) => (
            <li key={project.slug}>
              <Link
                href={`${copy.projectsPrefix}${project.slug}`}
                className="group grid grid-cols-12 items-center gap-x-4 gap-y-3 py-7 transition-colors hover:bg-surface/40 sm:py-8"
              >
                <span className="col-span-2 meta-label text-muted-dark">/{String(i + 1).padStart(2, "0")}</span>
                <span className="col-span-9 sm:col-span-5">
                  <span className="display text-2xl text-paper transition-colors group-hover:text-emerald sm:text-3xl">
                    {project.title}
                  </span>
                </span>
                <span className="col-span-9 col-start-3 flex flex-wrap items-center gap-3 sm:col-span-4 sm:col-start-7">
                  <StatusBadge status={statusLabel(project.status, locale)} tone="dark" />
                  <span className="meta-label text-muted-dark">
                    {project.category} / {project.year}
                  </span>
                </span>
                <span aria-hidden className="col-span-1 hidden justify-end text-emerald sm:flex">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button href={copy.portfolioHref} variant="outlineLight" arrow>
            {copy.viewPortfolio}
          </Button>
        </div>
      </Container>
    </section>
  );
}
