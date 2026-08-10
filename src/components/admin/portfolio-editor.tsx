"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, X, ImageIcon, Plus, Trash2, Check, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { Project, ProjectCategory, ProjectStatus, ProjectGalleryPlate } from "@/content/types";

interface PortfolioEditorFormProps {
  initialProject?: Project | null;
  heading: string;
}

const CATEGORY_OPTIONS: ProjectCategory[] = ["Website", "UI/UX", "Automation"];
const STATUS_OPTIONS: ProjectStatus[] = ["Client Project", "Internal Project", "Concept Project"];

export function PortfolioEditorForm({ initialProject, heading }: PortfolioEditorFormProps) {
  const router = useRouter();
  const isEditing = Boolean(initialProject);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const [slug, setSlug] = useState(initialProject?.slug ?? "");
  const [title, setTitle] = useState(initialProject?.title ?? "");
  const [category, setCategory] = useState<ProjectCategory>(initialProject?.category ?? "Website");
  const [status, setStatus] = useState<ProjectStatus>(initialProject?.status ?? "Client Project");
  const [year, setYear] = useState(initialProject?.year ?? new Date().getFullYear());
  const [summary, setSummary] = useState(initialProject?.summary ?? "");
  const [overview, setOverview] = useState(initialProject?.overview ?? "");
  const [challenge, setChallenge] = useState(initialProject?.challenge ?? "");
  const [approach, setApproach] = useState(initialProject?.approach ?? "");
  const [solution, setSolution] = useState(initialProject?.solution ?? "");
  const [reflection, setReflection] = useState(initialProject?.reflection ?? "");
  const [nextSlug, setNextSlug] = useState(initialProject?.nextSlug ?? "");
  const [techInput, setTechInput] = useState(initialProject?.tech?.join(", ") ?? "");

  // Primary link state
  const primaryLink = initialProject?.links?.[0]?.href ?? "";
  const [liveUrl, setLiveUrl] = useState(primaryLink);

  // Cover image state
  const [coverUrl, setCoverUrl] = useState<string | null>(initialProject?.coverUrl ?? null);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [coverError, setCoverError] = useState<string | null>(null);
  const [previewCoverLocal, setPreviewCoverLocal] = useState<string | null>(null);

  // Gallery state
  const [gallery, setGallery] = useState<ProjectGalleryPlate[]>(initialProject?.gallery ?? []);
  const [uploadingGalleryIndex, setUploadingGalleryIndex] = useState<number | null>(null);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Handle Cover File Upload
  async function handleCoverSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setCoverError(null);
    setPreviewCoverLocal(URL.createObjectURL(file));
    setUploadingCover(true);

    const fd = new FormData();
    fd.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Upload failed");
      }
      setCoverUrl(data.url);
    } catch (err: unknown) {
      setCoverError(err instanceof Error ? err.message : "Upload failed");
      setPreviewCoverLocal(null);
      setCoverUrl(initialProject?.coverUrl ?? null);
    } finally {
      setUploadingCover(false);
    }
  }

  function handleRemoveCover() {
    setCoverUrl(null);
    setPreviewCoverLocal(null);
    setCoverError(null);
    if (coverInputRef.current) coverInputRef.current.value = "";
  }

  // Handle Gallery Upload / Change
  async function handleGalleryFileSelect(index: number, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingGalleryIndex(index);
    const fd = new FormData();
    fd.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Upload failed");
      }

      setGallery((prev) =>
        prev.map((plate, i) =>
          i === index ? { ...plate, url: data.url, src: undefined } : plate,
        ),
      );
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Gallery image upload failed");
    } finally {
      setUploadingGalleryIndex(null);
    }
  }

  function handleAddGalleryPlate() {
    const nextIndex = gallery.length > 0 ? Math.max(...gallery.map((g) => g.index)) + 1 : 1;
    setGallery((prev) => [
      ...prev,
      {
        index: nextIndex,
        caption: `System plate ${nextIndex}`,
      },
    ]);
  }

  function handleRemoveGalleryPlate(index: number) {
    setGallery((prev) => prev.filter((_, i) => i !== index));
  }

  function handleGalleryCaptionChange(index: number, caption: string) {
    setGallery((prev) =>
      prev.map((plate, i) => (i === index ? { ...plate, caption } : plate)),
    );
  }

  // Handle Form Submit
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setSaving(true);

    const generatedSlug =
      slug.trim() ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const linksList = liveUrl.trim()
      ? [{ label: "Live project", href: liveUrl.trim() }]
      : initialProject?.links;

    const projectData: Project = {
      slug: generatedSlug,
      title: title.trim(),
      category,
      status,
      year: Number(year),
      summary: summary.trim(),
      overview: overview.trim(),
      challenge: challenge.trim(),
      approach: approach.trim(),
      solution: solution.trim(),
      process: initialProject?.process ?? [
        { step: "Brief", detail: "Initial requirement gathering and discovery." },
        { step: "Design", detail: "System architecture and user interface planning." },
        { step: "Build", detail: "Development and integration phase." },
      ],
      gallery,
      cover: initialProject?.cover,
      coverUrl: coverUrl ?? undefined,
      tech: techInput.split(",").map((t) => t.trim()).filter(Boolean),
      links: linksList,
      reflection: reflection.trim(),
      nextSlug: nextSlug.trim() || "dignify-studio-site",
    };

    try {
      const res = await fetch("/api/admin/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error ?? "Failed to save project");
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/admin/portfolio");
        router.refresh();
      }, 800);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error saving project");
    } finally {
      setSaving(false);
    }
  }

  const fieldClass =
    "mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 font-mono text-sm text-paper focus:border-emerald outline-none transition-colors";
  const textareaClass =
    "mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 text-sm text-paper focus:border-emerald outline-none resize-none transition-colors";
  const labelClass = "meta-label text-muted-dark";

  const currentCoverSrc = previewCoverLocal ?? coverUrl;
  const hasStaticCover = Boolean(initialProject?.cover) && !currentCoverSrc;

  return (
    <Container className="py-8 sm:py-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-line-dark pb-6 gap-4">
        <div>
          <Link
            href="/admin/portfolio"
            className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-dark hover:text-emerald transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            Back to Portfolio List
          </Link>
          <div className="mt-3">
            <p className="meta-label text-emerald">/ PORTFOLIO CMS</p>
            <h1 className="display mt-1 text-3xl sm:text-4xl text-paper">{heading}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/portfolio"
            className="border border-line-dark px-5 py-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper hover:border-emerald hover:text-emerald transition-colors"
          >
            Cancel
          </Link>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={saving || success || uploadingCover || uploadingGalleryIndex !== null}
            className="bg-emerald px-6 py-2.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink hover:bg-emerald-deep hover:text-paper disabled:opacity-50 transition-colors inline-flex items-center gap-2"
          >
            {uploadingCover || uploadingGalleryIndex !== null ? (
              <span>Uploading Image...</span>
            ) : saving ? (
              <span>Saving...</span>
            ) : success ? (
              <span>Saved ✓</span>
            ) : (
              <span>{isEditing ? "Save Changes" : "Publish Project"}</span>
            )}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {error ? (
          <div className="border border-red-500/40 bg-red-950/20 p-4 font-mono text-xs text-red-400">
            {error}
          </div>
        ) : null}
        {success ? (
          <div className="border border-emerald/40 bg-emerald/5 p-4 font-mono text-xs text-emerald">
            Project saved successfully. Redirecting...
          </div>
        ) : null}

        {/* 2-Column Main Form Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Project Details & Content (7 Cols) */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <div className="border border-line-dark bg-surface/30 p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-line-dark pb-3">
                <h2 className="display text-xl text-paper">Project Details</h2>
                <span className="meta-label text-muted-dark">REQUIRED FIELDS *</span>
              </div>

              {/* Title */}
              <div>
                <label className={labelClass}>Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Class Billiard / Tlaga Pratama Persada"
                  className={fieldClass}
                />
              </div>

              {/* Description / Summary */}
              <div>
                <label className={labelClass}>Description / Short Summary *</label>
                <textarea
                  rows={4}
                  required
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Short description for portfolio cards and preview..."
                  className={textareaClass}
                />
              </div>

              {/* Tools & Tech */}
              <div>
                <label className={labelClass}>Tools &amp; Technologies *</label>
                <input
                  type="text"
                  required
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="e.g. Next.js, TypeScript, Tailwind CSS, n8n, Figma"
                  className={fieldClass}
                />
              </div>

              {/* Live URL */}
              <div>
                <label className={labelClass}>Live URL (optional)</label>
                <div className="relative flex items-center">
                  <input
                    type="url"
                    value={liveUrl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    placeholder="https://www.example.com"
                    className={fieldClass}
                  />
                  {liveUrl ? (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute right-3 text-muted-dark hover:text-emerald"
                      title="Open URL"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Slug URL Path */}
              <div>
                <label className={labelClass}>Slug (URL Path)</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="auto-generated-from-title-if-empty"
                  className={fieldClass}
                />
              </div>

              {/* Category Selection (Pills) */}
              <div>
                <label className={labelClass}>Category *</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {CATEGORY_OPTIONS.map((cat) => {
                    const active = category === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] border transition-colors ${
                          active
                            ? "border-emerald bg-emerald/10 text-emerald font-semibold"
                            : "border-line-dark text-muted-dark hover:border-emerald/60 hover:text-paper"
                        }`}
                      >
                        {active ? <Check className="size-3.5" /> : null}
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status & Year */}
              <div className="grid grid-cols-12 gap-4 border-t border-line-dark pt-4">
                <div className="col-span-12 sm:col-span-8">
                  <label className={labelClass}>Project Status *</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {STATUS_OPTIONS.map((st) => {
                      const active = status === st;
                      return (
                        <button
                          key={st}
                          type="button"
                          onClick={() => setStatus(st)}
                          className={`inline-flex items-center gap-1 px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.1em] border transition-colors ${
                            active
                              ? "border-emerald bg-emerald/10 text-emerald font-semibold"
                              : "border-line-dark text-muted-dark hover:border-emerald/60 hover:text-paper"
                          }`}
                        >
                          {active ? <Check className="size-3" /> : null}
                          {st}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-4">
                  <label className={labelClass}>Year *</label>
                  <input
                    type="number"
                    required
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    className={fieldClass}
                  />
                </div>
              </div>
            </div>

            {/* Case Study Sections */}
            <div className="border border-line-dark bg-surface/30 p-6 space-y-5">
              <div className="border-b border-line-dark pb-3">
                <h2 className="display text-xl text-paper">Case Study Sections</h2>
                <p className="font-mono text-[0.625rem] text-muted-dark mt-0.5">
                  Detailed sections shown on the project detail page.
                </p>
              </div>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6">
                  <label className={labelClass}>Overview</label>
                  <textarea
                    rows={3}
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                    placeholder="Project overview details"
                    className={textareaClass}
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <label className={labelClass}>Challenge</label>
                  <textarea
                    rows={3}
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    placeholder="The key challenge solved"
                    className={textareaClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6">
                  <label className={labelClass}>Approach</label>
                  <textarea
                    rows={3}
                    value={approach}
                    onChange={(e) => setApproach(e.target.value)}
                    placeholder="Strategic approach taken"
                    className={textareaClass}
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <label className={labelClass}>Solution</label>
                  <textarea
                    rows={3}
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    placeholder="Delivered solution"
                    className={textareaClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6">
                  <label className={labelClass}>Reflection</label>
                  <textarea
                    rows={3}
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    placeholder="Closing thoughts"
                    className={textareaClass}
                  />
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <label className={labelClass}>Next Project Slug</label>
                  <input
                    type="text"
                    value={nextSlug}
                    onChange={(e) => setNextSlug(e.target.value)}
                    placeholder="e.g. dignify-studio-site"
                    className={fieldClass}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Images Upload (5 Cols) */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            {/* THUMBNAIL / HERO IMAGE */}
            <div className="border border-line-dark bg-surface/30 p-6 space-y-4">
              <div className="border-b border-line-dark pb-3">
                <h2 className="display text-xl text-paper">Images</h2>
                <p className="font-mono text-[0.625rem] text-muted-dark mt-0.5">
                  Upload card thumbnails &amp; hero banner.
                </p>
              </div>

              <div>
                <label className={labelClass}>Thumbnail (Grid Card &amp; Hero) *</label>

                {/* Upload Card Dropzone & Preview */}
                <div className="mt-2 relative aspect-[16/8] w-full overflow-hidden border border-line-dark bg-ink group">
                  {currentCoverSrc ? (
                    <>
                      <Image
                        src={currentCoverSrc}
                        alt="Cover preview"
                        fill
                        sizes="(min-width: 1024px) 500px, 100vw"
                        className="object-cover object-top"
                        unoptimized={Boolean(previewCoverLocal)}
                      />
                      {uploadingCover ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-ink/70">
                          <p className="font-mono text-xs text-emerald animate-pulse">Uploading...</p>
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            type="button"
                            onClick={handleRemoveCover}
                            className="bg-red-950/80 border border-red-500/40 text-red-400 px-3 py-1.5 font-mono text-xs flex items-center gap-1.5 hover:bg-red-900"
                          >
                            <X className="size-3.5" />
                            Remove Image
                          </button>
                        </div>
                      )}
                    </>
                  ) : hasStaticCover ? (
                    <div className="flex h-full flex-col items-center justify-center gap-2 text-center p-4">
                      <ImageIcon className="size-8 text-emerald" />
                      <p className="font-mono text-[0.6875rem] text-paper">Built-in Cover Active</p>
                      <p className="font-mono text-[0.625rem] text-muted-dark">
                        Click below to replace with a custom upload.
                      </p>
                    </div>
                  ) : (
                    <label
                      htmlFor="cover-upload"
                      className="flex h-full flex-col items-center justify-center gap-2 text-center p-4 cursor-pointer hover:bg-surface/50 transition-colors"
                    >
                      <Upload className="size-8 text-muted-dark group-hover:text-emerald transition-colors" />
                      <p className="font-mono text-xs text-paper">Click to upload thumbnail</p>
                      <p className="font-mono text-[0.625rem] text-muted-dark">Recommended 16:9 ratio (Max 5MB)</p>
                    </label>
                  )}
                </div>

                {coverError ? <p className="mt-1.5 font-mono text-[0.625rem] text-red-400">{coverError}</p> : null}

                <div className="mt-3 flex items-center justify-between">
                  <input
                    ref={coverInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/avif"
                    onChange={handleCoverSelect}
                    className="hidden"
                    id="cover-upload"
                  />
                  <label
                    htmlFor="cover-upload"
                    className="inline-flex cursor-pointer items-center gap-2 border border-line-dark px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-paper hover:border-emerald hover:text-emerald transition-colors"
                  >
                    <Upload className="size-3.5" />
                    {currentCoverSrc ? "Replace Image" : "Upload File"}
                  </label>
                  <span className="font-mono text-[0.625rem] text-muted-dark">JPG, PNG, WEBP</span>
                </div>
              </div>
            </div>

            {/* GALLERY GRID (SYSTEM PLATES) */}
            <div className="border border-line-dark bg-surface/30 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-line-dark pb-3">
                <div>
                  <h2 className="display text-xl text-paper">Gallery Grid (optional)</h2>
                  <p className="font-mono text-[0.625rem] text-muted-dark mt-0.5">
                    Images shown in section 06 / GALLERY (System plates)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddGalleryPlate}
                  className="inline-flex items-center gap-1 border border-line-dark px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-emerald hover:bg-emerald/10 transition-colors"
                >
                  <Plus className="size-3" />
                  Add
                </button>
              </div>

              {gallery.length === 0 ? (
                <div className="p-6 text-center border border-line-dark/40 border-dashed">
                  <ImageIcon className="size-6 text-muted-dark mx-auto mb-2" />
                  <p className="font-mono text-xs text-muted-dark">No gallery images added.</p>
                  <button
                    type="button"
                    onClick={handleAddGalleryPlate}
                    className="mt-3 inline-flex items-center gap-1.5 border border-line-dark px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-emerald hover:bg-emerald/10 transition-colors"
                  >
                    <Plus className="size-3.5" />
                    Add Gallery Image
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {gallery.map((plate, index) => {
                    const imgSrc = plate.url ?? plate.src;
                    const isUploading = uploadingGalleryIndex === index;
                    const plateInputId = `gallery-upload-${index}`;

                    return (
                      <div
                        key={plate.index || index}
                        className="border border-line-dark bg-ink p-3 space-y-2 relative group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[0.6875rem] text-emerald">Image {index + 1}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveGalleryPlate(index)}
                            className="text-muted-dark hover:text-red-400 transition-colors"
                            title="Delete image"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </div>

                        <div className="relative aspect-[16/8] w-full overflow-hidden border border-line-dark bg-surface/40">
                          {imgSrc ? (
                            <>
                              <Image
                                src={imgSrc}
                                alt={plate.caption || `Gallery ${index + 1}`}
                                fill
                                sizes="(min-width: 768px) 300px, 100vw"
                                className="object-cover object-top"
                              />
                              {isUploading ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-ink/70">
                                  <p className="font-mono text-xs text-emerald animate-pulse">Uploading...</p>
                                </div>
                              ) : null}
                            </>
                          ) : (
                            <label
                              htmlFor={plateInputId}
                              className="flex h-full flex-col items-center justify-center gap-1.5 text-center cursor-pointer hover:bg-surface/60 transition-colors p-2"
                            >
                              <Upload className="size-5 text-muted-dark" />
                              <p className="font-mono text-[0.6875rem] text-paper">Upload image {index + 1}</p>
                            </label>
                          )}
                        </div>

                        <div>
                          <input
                            type="text"
                            value={plate.caption}
                            onChange={(e) => handleGalleryCaptionChange(index, e.target.value)}
                            placeholder="Image caption / label"
                            className="w-full border border-line-dark bg-surface/50 px-3 py-1.5 font-mono text-xs text-paper focus:border-emerald outline-none"
                          />
                        </div>

                        <div>
                          <input
                            type="file"
                            accept="image/jpeg,image/png,image/webp,image/avif"
                            onChange={(e) => handleGalleryFileSelect(index, e)}
                            className="hidden"
                            id={plateInputId}
                          />
                          <label
                            htmlFor={plateInputId}
                            className="inline-flex cursor-pointer items-center justify-center gap-1.5 border border-line-dark w-full py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-paper hover:border-emerald hover:text-emerald transition-colors"
                          >
                            <Upload className="size-3" />
                            {imgSrc ? "Replace Image" : "Upload Image"}
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
}
