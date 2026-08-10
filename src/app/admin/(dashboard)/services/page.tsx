"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Search } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ServiceEditor } from "@/components/admin/service-editor";
import type { Service } from "@/content/types";

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [editorOpen, setEditorOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/admin/services")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data?.services) {
          setServices(data.services);
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
    if (!confirm(`Are you sure you want to delete service "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/services?slug=${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setServices((prev) => prev.filter((s) => s.slug !== slug));
      }
    } catch {
      alert("Failed to delete service");
    }
  }

  function handleSave(service: Service) {
    setServices((prev) => {
      const index = prev.findIndex((s) => s.slug === service.slug);
      if (index >= 0) {
        const updated = [...prev];
        updated[index] = service;
        return updated;
      }
      return [...prev, service];
    });
    setEditorOpen(false);
    setEditingService(null);
  }

  const filteredServices = services.filter((s) => {
    return (
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.tagline.toLowerCase().includes(search.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <Container className="py-10 sm:py-14">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-line-dark pb-6 gap-4">
        <div>
          <p className="meta-label text-emerald">/ SERVICES CMS</p>
          <h1 className="display mt-2 text-4xl sm:text-5xl text-paper">Service Management</h1>
        </div>
        <button
          onClick={() => {
            setEditingService(null);
            setEditorOpen(true);
          }}
          className="inline-flex items-center justify-center gap-2 bg-emerald px-5 py-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink hover:bg-emerald-deep hover:text-paper transition-colors"
        >
          <Plus className="size-3.5" />
          <span>New Service</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="mt-8 border border-line-dark p-4 bg-surface/40">
        <div className="flex items-center border border-line-dark bg-ink px-3 py-2">
          <Search className="size-4 text-muted-dark mr-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search services by title, tagline, or tags..."
            className="w-full bg-transparent font-mono text-xs text-paper placeholder:text-muted-dark/50 outline-none"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-6 grid grid-cols-12 gap-6">
        {loading ? (
          <div className="col-span-12 py-12 text-center font-mono text-xs text-muted-dark border border-line-dark">
            Loading service packages...
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="col-span-12 py-12 text-center font-mono text-xs text-muted-dark border border-line-dark">
            No services found matching your query.
          </div>
        ) : (
          filteredServices.map((service) => (
            <div
              key={service.slug}
              className="col-span-12 lg:col-span-6 border border-line-dark bg-surface/30 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-line-dark pb-3">
                  <div className="flex items-center gap-3">
                    <span className="meta-label text-emerald font-mono">{service.index}</span>
                    <h3 className="font-semibold text-paper text-lg">{service.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setEditingService(service);
                        setEditorOpen(true);
                      }}
                      className="flex size-8 items-center justify-center border border-line-dark text-muted-dark hover:border-emerald hover:text-emerald transition-colors"
                      title="Edit Service"
                    >
                      <Edit2 className="size-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(service.slug, service.title)}
                      className="flex size-8 items-center justify-center border border-line-dark text-muted-dark hover:border-red-400 hover:text-red-400 transition-colors"
                      title="Delete Service"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </div>

                <p className="meta-label text-paper italic mt-4">&quot;{service.tagline}&quot;</p>
                <p className="text-sm text-muted-dark mt-2 leading-relaxed">{service.description}</p>

                {/* Deliverables */}
                <div className="mt-5 border-t border-line-dark/60 pt-4">
                  <p className="meta-label text-muted-dark mb-2">/ DELIVERABLES</p>
                  <ul className="space-y-1.5 font-mono text-xs text-paper">
                    {service.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald mt-0.5">•</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-4 border-t border-line-dark/60 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-line-dark bg-ink px-2 py-0.5 font-mono text-[0.625rem] text-muted-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {editorOpen ? (
        <ServiceEditor
          initialService={editingService}
          onClose={() => {
            setEditorOpen(false);
            setEditingService(null);
          }}
          onSave={handleSave}
        />
      ) : null}
    </Container>
  );
}
