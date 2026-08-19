import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { StatusBadge } from "@/components/ui/status-badge";
import { ProjectPlate } from "@/components/portfolio/project-plate";
import { projects as staticProjects, statusLabel } from "@/content/projects";
import { fetchProjectsFromDb } from "@/lib/cms-store";
import { formatYearIndex } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { enHomeCopy } from "@/content/home-copy";
import type { SelectedWorkCopy } from "@/content/home-copy";

export async function SelectedWork({
  copy = enHomeCopy.selectedWork,
  lang = "en",
}: {
  copy?: SelectedWorkCopy;
  lang?: "en" | "id";
}) {
  const allProjects = await fetchProjectsFromDb().catch(() => staticProjects);
  const featuredProjects = allProjects.filter((p) => p.featured);
  const featured = (featuredProjects.length > 0 ? featuredProjects : allProjects).slice(0, 3);
  const base = "/portfolio";

  return (
    <section
      aria-labelledby="selected-work-heading"
      className="bg-paper py-24 sm:py-32"
      style={{ clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <Container>
        <SectionHeader index="02" label={copy.label} title={copy.title} id="selected-work-heading" />
      </Container>

      <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
        {featured.map((project, i) => {
          const wide = i % 2 === 0;
          return (
            <Reveal key={project.slug}>
              <Container>
                <Link
                  href={`${base}/${project.slug}`}
                  className="group grid grid-cols-12 items-center gap-x-4 gap-y-6"
                >
                  <div
                    className={cn(
                      "col-span-12 aspect-[16/9] overflow-hidden border border-line sm:aspect-[16/8]",
                      wide ? "lg:col-span-8" : "lg:col-span-8 lg:col-start-5",
                    )}
                  >
                    <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                      {project.cover || project.coverUrl ? (
                        <Image
                          src={project.coverUrl ?? project.cover!}
                          alt={`${project.title} ${project.category.toLowerCase()} project by Dignify`}
                          fill
                          sizes="(min-width: 1024px) 66vw, 100vw"
                          className="object-cover object-top"
                        />
                      ) : (
                        <ProjectPlate
                          slug={project.slug}
                          index={formatYearIndex(i + 1)}
                          category={project.category}
                          year={project.year}
                        />
                      )}
                    </div>
                  </div>

                  <div
                    className={cn(
                      "col-span-12 lg:col-span-4",
                      wide ? "lg:pl-8" : "lg:col-start-1 lg:row-start-1 lg:pr-8 lg:text-right",
                    )}
                  >
                    <div className={cn("flex items-center gap-3", !wide && "lg:justify-end")}>
                      <StatusBadge status={statusLabel(project.status, lang)} />
                      <span className="meta-label text-muted">
                        {project.category} / {project.year}
                      </span>
                    </div>
                    <h3 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl">{project.title}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{project.summary}</p>
                    <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-text transition-colors group-hover:text-emerald-deep">
                      {copy.viewProject}
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </p>
                  </div>
                </Link>
              </Container>
            </Reveal>
          );
        })}
      </div>

      <Container className="mt-16">
        <div className="border-t border-line pt-8 text-center">
          <Link
            href={base}
            className="link-underline font-mono text-xs uppercase tracking-[0.14em] text-ink-text"
          >
            {copy.footerLink}
          </Link>
        </div>
      </Container>
    </section>
  );
}