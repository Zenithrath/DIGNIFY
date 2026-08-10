"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { Service } from "@/content/types";

interface ServiceEditorProps {
  initialService?: Service | null;
  onClose: () => void;
  onSave: (service: Service) => void;
}

export function ServiceEditor({ initialService, onClose, onSave }: ServiceEditorProps) {
  const isEditing = Boolean(initialService);

  const [index, setIndex] = useState(initialService?.index || "01");
  const [slug, setSlug] = useState(initialService?.slug || "");
  const [title, setTitle] = useState(initialService?.title || "");
  const [tagline, setTagline] = useState(initialService?.tagline || "");
  const [description, setDescription] = useState(initialService?.description || "");
  const [deliverablesInput, setDeliverablesInput] = useState(
    initialService?.deliverables?.join("\n") || ""
  );
  const [tagsInput, setTagsInput] = useState(initialService?.tags?.join(", ") || "");

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const generatedSlug =
      slug.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    const serviceData: Service = {
      index: index.trim(),
      slug: generatedSlug,
      title: title.trim(),
      tagline: tagline.trim(),
      description: description.trim(),
      deliverables: deliverablesInput
        .split("\n")
        .map((d) => d.trim())
        .filter(Boolean),
      tags: tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    try {
      const res = await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serviceData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to save service");
      }

      onSave(serviceData);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error saving service");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl border border-line-dark bg-surface p-6 sm:p-8 my-8 text-paper">
        <div className="flex items-center justify-between border-b border-line-dark pb-4">
          <div>
            <p className="meta-label text-emerald">/ SERVICE EDITOR</p>
            <h2 className="display mt-1 text-2xl">{isEditing ? `Edit: ${initialService?.title}` : "New Service"}</h2>
          </div>
          <button
            onClick={onClose}
            className="flex size-9 items-center justify-center border border-line-dark text-muted-dark hover:border-emerald hover:text-emerald"
          >
            <X className="size-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {error ? (
            <div className="border border-red-500/40 bg-red-950/20 p-3 font-mono text-xs text-red-400">
              {error}
            </div>
          ) : null}

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-3">
              <label className="meta-label text-muted-dark">Index Code</label>
              <input
                type="text"
                required
                value={index}
                onChange={(e) => setIndex(e.target.value)}
                placeholder="01"
                className="mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 font-mono text-sm text-paper focus:border-emerald outline-none"
              />
            </div>
            <div className="col-span-12 sm:col-span-9">
              <label className="meta-label text-muted-dark">Service Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Website Development"
                className="mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 font-mono text-sm text-paper focus:border-emerald outline-none"
              />
            </div>
          </div>

          <div>
            <label className="meta-label text-muted-dark">Tagline</label>
            <input
              type="text"
              required
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="e.g. Websites engineered like products."
              className="mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 text-sm text-paper focus:border-emerald outline-none"
            />
          </div>

          <div>
            <label className="meta-label text-muted-dark">Slug (URL Path)</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="e.g. website-development"
              className="mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 font-mono text-sm text-paper focus:border-emerald outline-none"
            />
          </div>

          <div>
            <label className="meta-label text-muted-dark">Full Description</label>
            <textarea
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detailed description of what this service offers."
              className="mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 text-sm text-paper focus:border-emerald outline-none resize-none"
            />
          </div>

          <div>
            <label className="meta-label text-muted-dark">Deliverables (one per line)</label>
            <textarea
              rows={4}
              value={deliverablesInput}
              onChange={(e) => setDeliverablesInput(e.target.value)}
              placeholder={"Information architecture and sitemap\nResponsive implementation for mobile and desktop\nCMS ready content structures"}
              className="mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 font-mono text-xs text-paper focus:border-emerald outline-none resize-none"
            />
          </div>

          <div>
            <label className="meta-label text-muted-dark">Tags (comma separated)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="e.g. Next.js, React, TypeScript, Tailwind"
              className="mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 font-mono text-sm text-paper focus:border-emerald outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-line-dark pt-5">
            <button
              type="button"
              onClick={onClose}
              className="border border-line-dark px-5 py-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper hover:border-emerald hover:text-emerald"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="bg-emerald px-6 py-2.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink hover:bg-emerald-deep hover:text-paper disabled:opacity-50"
            >
              {saving ? "Saving..." : isEditing ? "Update Service" : "Create Service"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
