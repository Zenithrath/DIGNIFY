"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Search, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { Project } from "@/content/types";
import { cn } from "@/lib/utils";

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/admin/portfolio")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data?.projects) {
          setProjects(data.projects);
        }
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  async function handleDelete(slug: string, title: string) {
    if (!confirm(`Are you sure you want to delete project "${title}"?`)) return;
    setDeletingSlug(slug);
    try {
      const res = await fetch(`/api/admin/portfolio?slug=${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setProjects((prev) => prev.filter((p) => p.slug !== slug));
      }
    } catch {
      alert("Failed to delete project");
    } finally {
      setDeletingSlug(null);
    }
  }

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.summary.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = categoryFilter === "All" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container className="py-10 sm:py-14">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-line-dark pb-6 gap-4">
        <div>
          <p className="meta-label text-emerald">/ PORTFOLIO CMS</p>
          <h1 className="display mt-2 text-4xl sm:text-5xl text-paper">Project Management</h1>
        </div>
        <Link
          href="/admin/portfolio/new"
          className="inline-flex items-center justify-center gap-2 bg-emerald px-5 py-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink hover:bg-emerald-deep hover:text-paper transition-colors"
        >
          <Plus className="size-3.5" />
          <span>New Project</span>
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-4 border border-line-dark p-4 bg-surface/40">
        <div className="col-span-12 sm:col-span-7 flex items-center border border-line-dark bg-ink px-3 py-2">
          <Search className="size-4 text-muted-dark mr-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects by title, summary, or tech..."
            className="w-full bg-transparent font-mono text-xs text-paper placeholder:text-muted-dark/50 outline-none"
          />
        </div>

        <div className="col-span-12 sm:col-span-5 flex items-center justify-end gap-2">
          <span className="meta-label text-muted-dark">Filter:</span>
          {["All", "Website", "UI/UX", "Automation"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={cn(
                "px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.1em] border transition-colors",
                categoryFilter === cat
                  ? "border-emerald bg-emerald/10 text-emerald"
                  : "border-line-dark text-muted-dark hover:text-paper",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 border border-line-dark overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-line-dark bg-surface/80 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-dark">
              <th className="px-5 py-3.5">Title &amp; Status</th>
              <th className="px-5 py-3.5">Category</th>
              <th className="px-5 py-3.5">Year</th>
              <th className="px-5 py-3.5">Tech Stack</th>
              <th className="px-5 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line-dark font-mono text-xs">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center text-muted-dark">
                  Loading project index...
                </td>
              </tr>
            ) : filteredProjects.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center text-muted-dark">
                  No projects match your filter.
                </td>
              </tr>
            ) : (
              filteredProjects.map((project) => (
                <tr key={project.slug} className="hover:bg-surface/50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-paper text-sm">{project.title}</span>
                      <a
                        href={`/portfolio/${project.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-dark hover:text-emerald"
                        title="View Live Case Study"
                      >
                        <ExternalLink className="size-3" />
                      </a>
                    </div>
                    <p className="text-[0.6875rem] text-muted-dark mt-0.5">{project.status}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-block border border-line-dark px-2 py-0.5 text-[0.6875rem] text-paper">
                      {project.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-paper">{project.year}</td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[0.625rem] text-muted-dark border border-line-dark/60 px-1.5 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/portfolio/${project.slug}`}
                        className="flex size-8 items-center justify-center border border-line-dark text-muted-dark hover:border-emerald hover:text-emerald transition-colors"
                        title="Edit Project"
                      >
                        <Edit2 className="size-3.5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(project.slug, project.title)}
                        disabled={deletingSlug === project.slug}
                        className="flex size-8 items-center justify-center border border-line-dark text-muted-dark hover:border-red-400 hover:text-red-400 transition-colors disabled:opacity-40"
                        title="Delete Project"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
