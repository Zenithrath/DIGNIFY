import { supabase } from "./supabase";
import { projects as initialProjects } from "@/content/projects";
import { services as initialServices } from "@/content/services";
import { site as initialSite } from "@/content/site";
import type { Project, Service } from "@/content/types";

export interface ContactSubmission {
  id: string;
  reference: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
  referenceUrl?: string;
  status: "New" | "In Progress" | "Completed" | "Archived";
  createdAt: string;
}

export interface StudioContactSettings {
  name: string;
  email: string;
  location: string;
  domain: string;
  description: string;
}

// Sets of explicitly deleted item slugs
const deletedProjectSlugs = new Set<string>();
const deletedServiceSlugs = new Set<string>();

// Memory fallback cache
let memoryProjects: Project[] = [...initialProjects];
let memoryServices: Service[] = [...initialServices];
let memorySettings: StudioContactSettings = {
  name: initialSite.name,
  email: initialSite.email,
  location: initialSite.location,
  domain: initialSite.url,
  description: initialSite.description,
};
let memorySubmissions: ContactSubmission[] = [
  {
    id: "sub-1",
    reference: "DGN-SAMPLE-01",
    name: "Alex Vance",
    email: "alex@example.com",
    company: "Vance Media",
    service: "Website Development",
    budget: "$2,500 - $5,000",
    timeline: "1 Month",
    description: "Looking for a fast Next.js editorial website for our agency redesign.",
    status: "New",
    createdAt: new Date().toISOString(),
  },
];

// --- PORTFOLIO STORE ---
export async function fetchProjectsFromDb(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      const dbProjects: Project[] = data.map((row) => {
        const initialMatch = initialProjects.find((p) => p.slug === row.slug);
        return {
          slug: row.slug,
          title: row.title,
          category: row.category,
          status: row.status,
          year: row.year,
          summary: row.summary,
          overview: row.overview || initialMatch?.overview || "",
          challenge: row.challenge || initialMatch?.challenge || "",
          approach: row.approach || initialMatch?.approach || "",
          solution: row.solution || initialMatch?.solution || "",
          process: row.process && row.process.length > 0 ? row.process : (initialMatch?.process || []),
          gallery: row.gallery && row.gallery.length > 0 ? row.gallery : (initialMatch?.gallery || []),
          cover: row.cover_url ? undefined : initialMatch?.cover,
          coverUrl: row.cover_url || initialMatch?.coverUrl || undefined,
          featured: row.featured ?? false,
          tech: row.tech || initialMatch?.tech || [],
          links: row.links || initialMatch?.links,
          reflection: row.reflection || initialMatch?.reflection || "",
          nextSlug: row.next_slug || initialMatch?.nextSlug || "",
        };
      });

      const dbSlugs = new Set(dbProjects.map((p) => p.slug));

      // Combine DB projects with initial projects that haven't been saved in DB or deleted
      const nonDbDefaults = initialProjects.filter(
        (p) => !dbSlugs.has(p.slug) && !deletedProjectSlugs.has(p.slug)
      );

      memoryProjects = [...dbProjects, ...nonDbDefaults];
    }
  } catch {
    // fallback to memory filtering
    memoryProjects = memoryProjects.filter((p) => !deletedProjectSlugs.has(p.slug));
  }
  return memoryProjects;
}

export function getProjectsStore(): Project[] {
  return memoryProjects;
}

export async function saveProjectStore(project: Project): Promise<Project> {
  deletedProjectSlugs.delete(project.slug);

  const index = memoryProjects.findIndex((p) => p.slug === project.slug);
  if (index >= 0) {
    memoryProjects[index] = project;
  } else {
    memoryProjects.unshift(project);
  }

  const { error } = await supabase.from("projects").upsert({
    slug: project.slug,
    title: project.title,
    category: project.category,
    status: project.status,
    year: project.year,
    summary: project.summary,
    overview: project.overview,
    challenge: project.challenge,
    approach: project.approach,
    solution: project.solution,
    process: project.process,
    gallery: project.gallery,
    tech: project.tech,
    links: project.links ?? null,
    reflection: project.reflection,
    next_slug: project.nextSlug,
    cover_url: project.coverUrl ?? null,
    featured: project.featured ?? false,
  });

  if (error) {
    throw new Error(`Supabase save failed: ${error.message}`);
  }

  return project;
}

export async function deleteProjectStore(slug: string): Promise<boolean> {
  deletedProjectSlugs.add(slug);
  memoryProjects = memoryProjects.filter((p) => p.slug !== slug);
  const { error } = await supabase.from("projects").delete().eq("slug", slug);
  if (error) {
    throw new Error(`Supabase delete failed: ${error.message}`);
  }
  return true;
}

export async function setProjectFeaturedStore(slug: string, featured: boolean): Promise<Project | null> {
  const current = await fetchProjectsFromDb();
  const project = current.find((p) => p.slug === slug);
  if (!project) return null;
  const updated = { ...project, featured };
  await saveProjectStore(updated);
  return updated;
}

// --- SERVICES STORE ---
export async function fetchServicesFromDb(): Promise<Service[]> {
  try {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("created_at", { ascending: true });

    if (!error && data) {
      const dbServices: Service[] = data.map((row) => ({
        slug: row.slug,
        index: row.index_code,
        title: row.title,
        tagline: row.tagline,
        description: row.description,
        deliverables: row.deliverables || [],
        tags: row.tags || [],
      }));

      const dbSlugs = new Set(dbServices.map((s) => s.slug));

      const nonDbDefaults = initialServices.filter(
        (s) => !dbSlugs.has(s.slug) && !deletedServiceSlugs.has(s.slug)
      );

      memoryServices = [...dbServices, ...nonDbDefaults];
    }
  } catch {
    memoryServices = memoryServices.filter((s) => !deletedServiceSlugs.has(s.slug));
  }
  return memoryServices;
}

export function getServicesStore(): Service[] {
  return memoryServices;
}

export async function saveServiceStore(service: Service): Promise<Service> {
  deletedServiceSlugs.delete(service.slug);

  const index = memoryServices.findIndex((s) => s.slug === service.slug);
  if (index >= 0) {
    memoryServices[index] = service;
  } else {
    memoryServices.push(service);
  }

  try {
    await supabase.from("services").upsert({
      slug: service.slug,
      index_code: service.index,
      title: service.title,
      tagline: service.tagline,
      description: service.description,
      deliverables: service.deliverables,
      tags: service.tags,
    });
  } catch {
    // continue
  }

  return service;
}

export async function deleteServiceStore(slug: string): Promise<boolean> {
  deletedServiceSlugs.add(slug);
  memoryServices = memoryServices.filter((s) => s.slug !== slug);
  try {
    await supabase.from("services").delete().eq("slug", slug);
  } catch {
    // continue
  }
  return true;
}

// --- CONTACT SUBMISSIONS STORE ---
export async function fetchSubmissionsFromDb(): Promise<ContactSubmission[]> {
  try {
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      memorySubmissions = data.map((row) => ({
        id: row.id,
        reference: row.reference,
        name: row.name,
        email: row.email,
        company: row.company || undefined,
        service: row.service,
        budget: row.budget,
        timeline: row.timeline,
        description: row.description,
        referenceUrl: row.reference_url || undefined,
        status: row.status as ContactSubmission["status"],
        createdAt: row.created_at,
      }));
    }
  } catch {
    // fallback
  }
  return memorySubmissions;
}

export function getContactSubmissionsStore(): ContactSubmission[] {
  return memorySubmissions;
}

export async function addContactSubmissionStore(
  submission: Omit<ContactSubmission, "id" | "createdAt" | "status">
): Promise<ContactSubmission> {
  const newSubmission: ContactSubmission = {
    ...submission,
    id: `sub-${Date.now()}`,
    status: "New",
    createdAt: new Date().toISOString(),
  };
  memorySubmissions.unshift(newSubmission);

  try {
    await supabase.from("contact_submissions").insert({
      id: newSubmission.id,
      reference: newSubmission.reference,
      name: newSubmission.name,
      email: newSubmission.email,
      company: newSubmission.company,
      service: newSubmission.service,
      budget: newSubmission.budget,
      timeline: newSubmission.timeline,
      description: newSubmission.description,
      reference_url: newSubmission.referenceUrl,
      status: newSubmission.status,
      created_at: newSubmission.createdAt,
    });
  } catch {
    // continue
  }

  return newSubmission;
}

export async function updateSubmissionStatusStore(
  id: string,
  status: ContactSubmission["status"]
): Promise<boolean> {
  const sub = memorySubmissions.find((s) => s.id === id);
  if (sub) {
    sub.status = status;
  }

  try {
    await supabase.from("contact_submissions").update({ status }).eq("id", id);
  } catch {
    // continue
  }
  return true;
}

export async function deleteContactSubmissionStore(id: string): Promise<boolean> {
  memorySubmissions = memorySubmissions.filter((s) => s.id !== id);
  try {
    await supabase.from("contact_submissions").delete().eq("id", id);
  } catch {
    // continue
  }
  return true;
}

// --- STUDIO CONTACT SETTINGS STORE ---
export async function fetchStudioSettingsFromDb(): Promise<StudioContactSettings> {
  try {
    const { data, error } = await supabase.from("studio_settings").select("*").eq("id", 1).single();
    if (!error && data) {
      memorySettings = {
        name: data.name,
        email: data.email,
        location: data.location,
        domain: data.domain,
        description: data.description,
      };
    }
  } catch {
    // fallback
  }
  return memorySettings;
}

export function getStudioSettingsStore(): StudioContactSettings {
  return memorySettings;
}

export async function updateStudioSettingsStore(
  settings: Partial<StudioContactSettings>
): Promise<StudioContactSettings> {
  memorySettings = { ...memorySettings, ...settings };
  try {
    await supabase.from("studio_settings").upsert({
      id: 1,
      name: memorySettings.name,
      email: memorySettings.email,
      location: memorySettings.location,
      domain: memorySettings.domain,
      description: memorySettings.description,
      updated_at: new Date().toISOString(),
    });
  } catch {
    // continue
  }
  return memorySettings;
}
