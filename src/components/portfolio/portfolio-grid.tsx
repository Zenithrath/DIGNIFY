"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";
import { ProjectPlate } from "@/components/portfolio/project-plate";
import { projects, filterOptions } from "@/content/projects";
import type { FilterKey, Project } from "@/content/types";
import { cn } from "@/lib/utils";

function matches(project: Project, filter: FilterKey) {
  if (filter === "All") return true;
  if (filter === "Internal" || filter === "Concept") return project.status.startsWith(filter);
  return project.category === filter;
}

function readHash() {
  if (typeof window === "undefined") return "All";
  const hash = window.location.hash.replace("#", "");
  return (filterOptions as readonly string[]).includes(hash) ? (hash as FilterKey) : "All";
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const wide = index % 2 === 0;
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group grid grid-cols-12 items-center gap-x-4 gap-y-6"
    >
      <div
        className={cn(
          "col-span-12 aspect-[16/9] overflow-hidden border border-line sm:aspect-[16/8]",
          wide ? "lg:col-span-8" : "lg:col-span-8 lg:col-start-5",
        )}
      >
        <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={`${project.title} project preview`}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <ProjectPlate slug={project.slug} index={String(index + 1).padStart(2, "0")} category={project.category} year={project.year} />
          )}
        </div>
      </div>
      <div
        className={cn(
          "col-span-12 lg:col-span-4",
          wide ? "lg:pl-8" : "lg:col-start-1 lg:row-start-1 lg:pr-8 lg:text-right",
        )}
      >
        <div className={cn("flex flex-wrap items-center gap-3", !wide && "lg:justify-end")}>
          <StatusBadge status={project.status} />
          <span className="meta-label text-muted">{project.category} / {project.year}</span>
        </div>
        <h3 className="display mt-4 text-3xl sm:text-4xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-text transition-colors group-hover:text-emerald-deep">
          Read case study
          <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </p>
      </div>
    </Link>
  );
}

export function PortfolioGrid() {
  const [filter, setFilter] = useState<FilterKey>(() => readHash());

  const counts = useMemo(() => {
    const map = new Map<FilterKey, number>();
    for (const option of filterOptions) {
      const key = option as FilterKey;
      map.set(key, projects.filter((p) => matches(p, key)).length);
    }
    return map;
  }, []);

  const visible = projects.filter((p) => matches(p, filter));

  const select = (key: FilterKey) => {
    setFilter(key);
    window.history.replaceState(null, "", `#${key}`);
  };

  return (
    <div>
      <div
        className="flex flex-wrap items-center gap-2 border border-line bg-paper p-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {filterOptions.map((option) => {
          const key = option as FilterKey;
          const active = filter === key;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => select(key)}
              className={cn(
                "inline-flex items-center gap-2 px-3 py-2 meta-label transition-colors duration-300",
                active
                  ? "bg-ink text-paper"
                  : "text-muted hover:bg-pure hover:text-ink-text",
              )}
            >
              {option}
              <span aria-hidden className={cn(active ? "text-emerald" : "text-emerald-deep")}>
                {String(counts.get(key)).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-14 space-y-16 sm:space-y-20">
        {visible.map((project, i) => (
          <li key={project.slug} className="list-none">
            <ProjectCard project={project} index={i} />
          </li>
        ))}
      </ul>

      {visible.length === 0 ? (
        <p className="meta-label mt-14 text-muted">NO PROJECTS IN THIS CATEGORY YET.</p>
      ) : null}

      <div className="mt-16 border-t border-line pt-8">
        <p className="meta-label text-muted">
          ALL PROJECTS ARE LABELED HONESTLY / CLIENT, INTERNAL, OR CONCEPT.
        </p>
      </div>
    </div>
  );
}
