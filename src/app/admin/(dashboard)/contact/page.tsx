"use client";

import { useState, useEffect } from "react";
import { Search, Mail, Trash2, ExternalLink, X, Save } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { ContactSubmission, StudioContactSettings } from "@/lib/cms-store";
import { cn } from "@/lib/utils";

export default function AdminContactPage() {
  const [activeTab, setActiveTab] = useState<"enquiries" | "settings">("enquiries");
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [settings, setSettings] = useState<StudioContactSettings>({
    name: "Dignify Studio",
    email: "hello@dignify.studio",
    location: "Indonesia",
    domain: "https://dignify.studio",
    description: "Digital Studio for Web Development, UI/UX, and AI Workflows.",
  });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);

  // Settings form state
  const [settingsForm, setSettingsForm] = useState<StudioContactSettings>(settings);
  const [savingSettings, setSavingSettings] = useState(false);
  const [settingsMsg, setSettingsMsg] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/admin/contact")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data) {
          if (data.submissions) setSubmissions(data.submissions);
          if (data.settings) {
            setSettings(data.settings);
            setSettingsForm(data.settings);
          }
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

  async function handleStatusChange(id: string, status: ContactSubmission["status"]) {
    try {
      const res = await fetch("/api/admin/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update_status", id, status }),
      });
      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((s) => (s.id === id ? { ...s, status } : s))
        );
        if (selectedSubmission?.id === id) {
          setSelectedSubmission((prev) => (prev ? { ...prev, status } : null));
        }
      }
    } catch {
      alert("Failed to update status");
    }
  }

  async function handleDelete(id: string, reference: string) {
    if (!confirm(`Delete enquiry ${reference}?`)) return;

    try {
      const res = await fetch(`/api/admin/contact?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setSubmissions((prev) => prev.filter((s) => s.id !== id));
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(null);
        }
      }
    } catch {
      alert("Failed to delete enquiry");
    }
  }

  async function handleSaveSettings(e: React.FormEvent) {
    e.preventDefault();
    setSavingSettings(true);
    setSettingsMsg(null);

    try {
      const res = await fetch("/api/admin/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update_settings", settings: settingsForm }),
      });

      if (res.ok) {
        const data = await res.json();
        setSettings(data.settings);
        setSettingsMsg("Studio contact details updated successfully.");
      } else {
        setSettingsMsg("Failed to update settings.");
      }
    } catch {
      setSettingsMsg("Error updating settings.");
    } finally {
      setSavingSettings(false);
    }
  }

  const filteredSubmissions = submissions.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.reference.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Container className="py-10 sm:py-14">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-line-dark pb-6 gap-4">
        <div>
          <p className="meta-label text-emerald">/ CONTACT & ENQUIRIES</p>
          <h1 className="display mt-2 text-4xl sm:text-5xl text-paper">Contact Management</h1>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 border border-line-dark p-1 bg-surface/40">
          <button
            onClick={() => setActiveTab("enquiries")}
            className={cn(
              "px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] transition-colors",
              activeTab === "enquiries"
                ? "bg-emerald text-ink font-medium"
                : "text-muted-dark hover:text-paper",
            )}
          >
            Enquiries Inbox ({submissions.length})
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={cn(
              "px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] transition-colors",
              activeTab === "settings"
                ? "bg-emerald text-ink font-medium"
                : "text-muted-dark hover:text-paper",
            )}
          >
            Studio Info
          </button>
        </div>
      </div>

      {activeTab === "enquiries" ? (
        <>
          {/* Controls Bar */}
          <div className="mt-8 grid grid-cols-12 gap-4 border border-line-dark p-4 bg-surface/40">
            <div className="col-span-12 sm:col-span-7 flex items-center border border-line-dark bg-ink px-3 py-2">
              <Search className="size-4 text-muted-dark mr-2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search enquiries by reference, client name, email..."
                className="w-full bg-transparent font-mono text-xs text-paper placeholder:text-muted-dark/50 outline-none"
              />
            </div>

            <div className="col-span-12 sm:col-span-5 flex items-center justify-end gap-1.5 flex-wrap">
              <span className="meta-label text-muted-dark">Status:</span>
              {["All", "New", "In Progress", "Completed", "Archived"].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={cn(
                    "px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.1em] border transition-colors",
                    statusFilter === st
                      ? "border-emerald bg-emerald/10 text-emerald"
                      : "border-line-dark text-muted-dark hover:text-paper",
                  )}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Submissions Table */}
          <div className="mt-6 border border-line-dark overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-line-dark bg-surface/80 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-dark">
                  <th className="px-5 py-3.5">Reference</th>
                  <th className="px-5 py-3.5">Client & Email</th>
                  <th className="px-5 py-3.5">Service Requested</th>
                  <th className="px-5 py-3.5">Budget & Timeline</th>
                  <th className="px-5 py-3.5">Status</th>
                  <th className="px-5 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line-dark font-mono text-xs">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-5 py-8 text-center text-muted-dark">
                      Loading enquiry inbox...
                    </td>
                  </tr>
                ) : filteredSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-5 py-8 text-center text-muted-dark">
                      No enquiries in inbox matching your query.
                    </td>
                  </tr>
                ) : (
                  filteredSubmissions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-surface/50 transition-colors">
                      <td className="px-5 py-4 text-emerald font-semibold">{sub.reference}</td>
                      <td className="px-5 py-4">
                        <div className="font-semibold text-paper">{sub.name}</div>
                        <div className="text-muted-dark text-[0.6875rem] mt-0.5">{sub.email}</div>
                      </td>
                      <td className="px-5 py-4 text-paper">{sub.service}</td>
                      <td className="px-5 py-4">
                        <div className="text-paper">{sub.budget}</div>
                        <div className="text-muted-dark text-[0.625rem] mt-0.5">{sub.timeline}</div>
                      </td>
                      <td className="px-5 py-4">
                        <select
                          value={sub.status}
                          onChange={(e) =>
                            handleStatusChange(sub.id, e.target.value as ContactSubmission["status"])
                          }
                          className={cn(
                            "border border-line-dark bg-ink px-2 py-1 text-[0.6875rem] outline-none font-mono",
                            sub.status === "New" && "text-emerald border-emerald/60",
                            sub.status === "In Progress" && "text-amber-400 border-amber-400/60",
                            sub.status === "Completed" && "text-paper border-line-dark",
                            sub.status === "Archived" && "text-muted-dark border-line-dark",
                          )}
                        >
                          <option value="New">New</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                          <option value="Archived">Archived</option>
                        </select>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedSubmission(sub)}
                            className="px-2.5 py-1 border border-line-dark text-muted-dark hover:border-emerald hover:text-emerald text-[0.6875rem] uppercase font-mono transition-colors"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDelete(sub.id, sub.reference)}
                            className="flex size-7 items-center justify-center border border-line-dark text-muted-dark hover:border-red-400 hover:text-red-400 transition-colors"
                            title="Delete"
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

          {/* Submission Detail Modal */}
          {selectedSubmission ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm">
              <div className="relative w-full max-w-2xl border border-line-dark bg-surface p-6 sm:p-8 text-paper my-8 overflow-y-auto max-h-[90vh]">
                <div className="flex items-center justify-between border-b border-line-dark pb-4">
                  <div>
                    <p className="meta-label text-emerald">/ ENQUIRY {selectedSubmission.reference}</p>
                    <h2 className="display mt-1 text-2xl text-paper">{selectedSubmission.name}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedSubmission(null)}
                    className="flex size-9 items-center justify-center border border-line-dark text-muted-dark hover:border-emerald hover:text-emerald"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                <div className="mt-6 space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-12 gap-4 border-b border-line-dark/60 pb-4">
                    <div className="col-span-6">
                      <p className="meta-label text-muted-dark">CLIENT EMAIL</p>
                      <p className="text-paper mt-1">{selectedSubmission.email}</p>
                    </div>
                    <div className="col-span-6">
                      <p className="meta-label text-muted-dark">COMPANY</p>
                      <p className="text-paper mt-1">{selectedSubmission.company || "N/A"}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 border-b border-line-dark/60 pb-4">
                    <div className="col-span-4">
                      <p className="meta-label text-muted-dark">SERVICE</p>
                      <p className="text-emerald font-semibold mt-1">{selectedSubmission.service}</p>
                    </div>
                    <div className="col-span-4">
                      <p className="meta-label text-muted-dark">BUDGET</p>
                      <p className="text-paper mt-1">{selectedSubmission.budget}</p>
                    </div>
                    <div className="col-span-4">
                      <p className="meta-label text-muted-dark">TIMELINE</p>
                      <p className="text-paper mt-1">{selectedSubmission.timeline}</p>
                    </div>
                  </div>

                  <div>
                    <p className="meta-label text-muted-dark">PROJECT DESCRIPTION</p>
                    <p className="text-paper mt-2 bg-ink p-4 border border-line-dark font-sans leading-relaxed whitespace-pre-wrap text-sm">
                      {selectedSubmission.description}
                    </p>
                  </div>

                  {selectedSubmission.referenceUrl ? (
                    <div>
                      <p className="meta-label text-muted-dark">REFERENCE URL</p>
                      <a
                        href={selectedSubmission.referenceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald hover:underline inline-flex items-center gap-1 mt-1"
                      >
                        <span>{selectedSubmission.referenceUrl}</span>
                        <ExternalLink className="size-3" />
                      </a>
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between border-t border-line-dark pt-5">
                    <p className="text-muted-dark text-[0.625rem]">
                      Submitted on: {new Date(selectedSubmission.createdAt).toLocaleString()}
                    </p>
                    <a
                      href={`mailto:${selectedSubmission.email}?subject=Re: Enquiry ${selectedSubmission.reference} - Dignify Studio`}
                      className="inline-flex items-center gap-2 bg-emerald px-5 py-2.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink hover:bg-emerald-deep hover:text-paper transition-colors"
                    >
                      <Mail className="size-3.5" />
                      <span>Reply via Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        /* Settings Tab */
        <div className="mt-8 max-w-2xl border border-line-dark bg-surface/30 p-6 sm:p-8">
          <div className="border-b border-line-dark pb-4">
            <p className="meta-label text-emerald">/ STUDIO CONTACT DETAILS</p>
            <h2 className="display mt-1 text-2xl text-paper">Studio Identity</h2>
          </div>

          <form onSubmit={handleSaveSettings} className="mt-6 space-y-5">
            {settingsMsg ? (
              <div className="border border-emerald/40 bg-emerald-950/20 p-3 font-mono text-xs text-emerald">
                {settingsMsg}
              </div>
            ) : null}

            <div>
              <label className="meta-label text-muted-dark">Studio Name</label>
              <input
                type="text"
                required
                value={settingsForm.name}
                onChange={(e) => setSettingsForm({ ...settingsForm, name: e.target.value })}
                className="mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 font-mono text-sm text-paper focus:border-emerald outline-none"
              />
            </div>

            <div>
              <label className="meta-label text-muted-dark">Contact Email</label>
              <input
                type="email"
                required
                value={settingsForm.email}
                onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                className="mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 font-mono text-sm text-paper focus:border-emerald outline-none"
              />
            </div>

            <div>
              <label className="meta-label text-muted-dark">Location</label>
              <input
                type="text"
                required
                value={settingsForm.location}
                onChange={(e) => setSettingsForm({ ...settingsForm, location: e.target.value })}
                className="mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 font-mono text-sm text-paper focus:border-emerald outline-none"
              />
            </div>

            <div>
              <label className="meta-label text-muted-dark">Domain URL</label>
              <input
                type="text"
                required
                value={settingsForm.domain}
                onChange={(e) => setSettingsForm({ ...settingsForm, domain: e.target.value })}
                className="mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 font-mono text-sm text-paper focus:border-emerald outline-none"
              />
            </div>

            <div>
              <label className="meta-label text-muted-dark">Studio Description</label>
              <textarea
                rows={3}
                required
                value={settingsForm.description}
                onChange={(e) => setSettingsForm({ ...settingsForm, description: e.target.value })}
                className="mt-1.5 w-full border border-line-dark bg-ink px-4 py-2.5 text-sm text-paper focus:border-emerald outline-none resize-none"
              />
            </div>

            <div className="pt-4 border-t border-line-dark flex justify-end">
              <button
                type="submit"
                disabled={savingSettings}
                className="inline-flex items-center gap-2 bg-emerald px-6 py-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink hover:bg-emerald-deep hover:text-paper disabled:opacity-50 transition-colors"
              >
                <Save className="size-3.5" />
                <span>{savingSettings ? "Saving..." : "Save Contact Info"}</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </Container>
  );
}
