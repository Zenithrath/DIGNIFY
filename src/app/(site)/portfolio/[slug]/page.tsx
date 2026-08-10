import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { StatusBadge } from "@/components/ui/status-badge";
import { ProjectPlate } from "@/components/portfolio/project-plate";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";
import { projects as staticProjects, getProject as getStaticProject } from "@/content/projects";
import { fetchProjectsFromDb } from "@/lib/cms-store";
import { formatYearIndex } from "@/lib/utils";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateStaticParams() {
  return staticProjects.map((project) => ({ slug: project.slug }));
}

async function getProjectFromDb(slug: string) {
  try {
    const all = await fetchProjectsFromDb();
    const found = all.find((p) => p.slug === slug);
    return found ?? getStaticProject(slug) ?? null;
  } catch {
    return getStaticProject(slug) ?? null;
  }
}

export async function generateMetadata({
  params,
}: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectFromDb(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} | Dignify`,
      description: project.summary,
      url: `/portfolio/${project.slug}`,
      type: "article",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${project.title} case study` }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps<"/portfolio/[slug]">) {
  const { slug } = await params;
  const project = await getProjectFromDb(slug);
  if (!project) notFound();
  const allProjects = await fetchProjectsFromDb().catch(() => staticProjects);

  const nextProject = allProjects.find((p) => p.slug === project.nextSlug) ?? null;
  const projectUrl = `${site.url}/portfolio/${project.slug}`;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Dignify", item: site.url },
          { "@type": "ListItem", position: 2, name: "Portfolio", item: `${site.url}/portfolio` },
          { "@type": "ListItem", position: 3, name: project.title, item: projectUrl },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${projectUrl}#case-study`,
        name: project.title,
        url: projectUrl,
        description: project.summary,
        copyrightYear: project.year,
        genre: project.status,
        keywords: project.tech,
        creator: { "@id": `${site.url}/#organization` },
        isPartOf: { "@id": `${site.url}/#website` },
      },
    ],
  };

  return (
    <>
      <JsonLd data={projectJsonLd} />
      <section aria-labelledby="case-heading" className="bg-ink py-20 text-paper sm:py-28">
        <Container>
          <Reveal>
            <nav aria-label="Breadcrumb" className="border-b border-line-dark pb-4">
              <ol className="flex items-center gap-3 meta-label text-muted-dark">
                <li>
                  <Link href="/portfolio" className="transition-colors hover:text-paper">
                    PORTFOLIO
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-emerald">{project.category.toUpperCase()}</li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-12 grid grid-cols-12 gap-x-4 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-9">
              <p className="meta-label text-muted-dark">/ CASE STUDY / {String(project.year)}</p>
              <h1 id="case-heading" className="display mt-6 text-[clamp(2.75rem,7.5vw,7.5rem)]">
                {project.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="col-span-12 lg:col-span-3 lg:pt-14">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <StatusBadge status={project.status} tone="dark" />
                </div>
                <dl className="space-y-2 border-t border-line-dark pt-4 text-sm">
                  <div className="flex justify-between">
                    <dt className="meta-label text-muted-dark">CATEGORY</dt>
                    <dd className="text-paper">{project.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="meta-label text-muted-dark">YEAR</dt>
                    <dd className="text-paper">{project.year}</dd>
                  </div>
                </dl>
                {project.links ? (
                  <div className="border-t border-line-dark pt-4">
                    <p className="meta-label text-muted-dark">LINKS</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      {project.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 text-paper transition-colors hover:text-emerald"
                          >
                            {link.label}
                            <ArrowUpRight
                              aria-hidden
                              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="overview-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-3">
              <p className="meta-label text-emerald-deep">/ 01 / OVERVIEW</p>
            </Reveal>
            <Reveal delay={0.06} className="col-span-12 lg:col-span-9">
              <h2 id="overview-heading" className="display max-w-4xl text-3xl sm:text-5xl">
                {project.overview}
              </h2>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="challenge-heading" className="bg-ink py-20 text-paper sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-8">
            <Reveal className="col-span-12 lg:col-span-4">
              <div className="border border-line-dark p-8">
                <p className="meta-label text-emerald">/ 02 / CHALLENGE</p>
                <h2 id="challenge-heading" className="display mt-6 text-3xl">
                  The problem.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 lg:col-span-7 lg:col-start-6">
              <p className="mt-2 max-w-2xl text-lg leading-relaxed text-muted-dark sm:text-xl">
                {project.challenge}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="approach-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-8">
            <Reveal className="col-span-12 lg:col-span-3">
              <p className="meta-label text-emerald-deep">/ 03 / APPROACH</p>
            </Reveal>
            <Reveal delay={0.06} className="col-span-12 lg:col-span-9">
              <h2 id="approach-heading" className="display text-2xl sm:text-3xl">
                How we framed it.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                {project.approach}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="solution-heading" className="border-y border-line bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-8">
            <Reveal className="col-span-12 lg:col-span-3">
              <p className="meta-label text-emerald-deep">/ 04 / SOLUTION</p>
            </Reveal>
            <Reveal delay={0.06} className="col-span-12 lg:col-span-9">
              <h2 id="solution-heading" className="display text-2xl sm:text-3xl">
                What we delivered.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                {project.solution}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="process-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ 05 / PROCESS</p>
              <h2 id="process-heading" className="display mt-6 text-4xl">
                How it came together.
              </h2>
            </div>
          </Reveal>
          <ul className="border-b border-line">
            {project.process.map((item, i) => (
              <li key={item.step}>
                <Reveal delay={i * 0.05}>
                  <div className="grid grid-cols-12 gap-x-4 border-t border-line py-8">
                    <span className="col-span-2 sm:col-span-1">
                      <span className="meta-label text-muted">{String(i + 1).padStart(2, "0")}</span>
                    </span>
                    <span className="col-span-10 sm:col-span-4">
                      <span className="meta-label text-emerald-deep">{item.step.toUpperCase()}</span>
                    </span>
                    <span className="col-span-10 col-start-3 mt-3 text-sm leading-relaxed text-muted sm:col-span-6 sm:col-start-6 sm:mt-0">
                      {item.detail}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="gallery-heading" className="bg-paper pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ 06 / GALLERY</p>
              <h2 id="gallery-heading" className="display mt-6 text-4xl">
                System plates.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-8">
            {project.gallery.map((plate, i) => (
              <Reveal key={plate.index} delay={i * 0.06} className={i === 0 ? "col-span-12" : "col-span-12 md:col-span-6"}>
                <figure>
                  <div className="relative aspect-[16/8] overflow-hidden border border-line">
                    {plate.src || plate.url ? (
                      <Image
                        src={plate.url ?? plate.src!}
                        alt={`${project.title} ${plate.caption}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <ProjectPlate slug={project.slug} index={String(plate.index).padStart(2, "0")} category={project.category} year={project.year} />
                    )}
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                    <span className="meta-label text-muted">SYS {String(plate.index).padStart(2, "0")}</span>
                    <span className="text-sm text-muted">{plate.caption}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="tech-heading" className="border-y border-line bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-8">
            <Reveal className="col-span-12 lg:col-span-3">
              <p className="meta-label text-emerald-deep">/ 07 / TECHNOLOGY</p>
            </Reveal>
            <Reveal delay={0.06} className="col-span-12 lg:col-span-9">
              <h2 id="tech-heading" className="meta-label text-muted">THE STACK</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="meta-label border border-line px-3 py-2 text-ink-text">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="reflection-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="grid grid-cols-12 border border-line bg-ink text-paper">
              <div className="col-span-12 p-8 sm:p-12 lg:col-span-8">
                <p className="meta-label text-emerald">/ 08 / REFLECTION</p>
                <h2 id="reflection-heading" className="sr-only">
                  Reflection
                </h2>
                <blockquote className="mt-8 text-xl leading-snug sm:text-2xl">
                  {project.reflection}
                </blockquote>
              </div>
              <div className="col-span-12 border-t border-line-dark p-8 sm:p-12 lg:col-span-4 lg:border-l lg:border-t-0">
                <p className="meta-label text-muted-dark">PROJECT STATUS</p>
                <StatusBadge status={project.status} tone="dark" className="mt-4" />
                <p className="mt-8 text-sm leading-relaxed text-muted-dark">
                  {project.status === "Concept Project"
                    ? "A design exploration produced by the studio. It was not shipped and is not presented as a client result."
                    : project.status === "Client Project"
                      ? "Work delivered for a real client or organization, produced by the Dignify studio."
                      : "Work produced for and by the Dignify studio itself."}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {nextProject ? (
        <section aria-labelledby="next-heading" className="pb-0">
          <Container>
            <Reveal>
              <div className="border-t border-line pt-6">
                <p id="next-heading" className="meta-label text-muted">
                  / 09 / NEXT PROJECT
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="group mt-6 grid grid-cols-12 items-end gap-x-4 gap-y-6 border-b border-line pb-12"
              >
                <div className="col-span-12 aspect-[16/6] overflow-hidden border border-line sm:aspect-[16/7] lg:col-span-9">
                  <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                    {nextProject.cover || nextProject.coverUrl ? (
                      <Image
                        src={nextProject.coverUrl ?? nextProject.cover!}
                        alt={`${nextProject.title} project preview`}
                        fill
                        sizes="(min-width: 1024px) 75vw, 100vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <ProjectPlate
                        slug={nextProject.slug}
                        index={formatYearIndex(allProjects.indexOf(nextProject) + 1)}
                        category={nextProject.category}
                        year={nextProject.year}
                      />
                    )}
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <div className="flex items-center gap-3">
                    <StatusBadge status={nextProject.status} />
                    <span className="meta-label text-muted">{nextProject.category}</span>
                  </div>
                  <h3 className="display mt-4 text-3xl sm:text-4xl">{nextProject.title}</h3>
                  <p className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-text transition-colors group-hover:text-emerald-deep">
                    Open case study
                    <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                </div>
              </Link>
            </Reveal>
          </Container>
        </section>
      ) : null}
    </>
  );
}
