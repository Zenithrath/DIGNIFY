import type { StaticImageData } from "next/image";

export type ProjectCategory = "Website" | "UI/UX" | "Automation";

export type ProjectStatus = "Client Project" | "Internal Project" | "Concept Project";

export type FilterKey = "All" | ProjectCategory | "Internal" | "Concept";

export interface ProjectCaseSection {
  heading: string;
  body: string;
}

export interface ProjectGalleryPlate {
  index: number;
  caption: string;
  src?: StaticImageData;
  url?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: number;
  summary: string;
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  process: Array<{ step: string; detail: string }>;
  gallery: ProjectGalleryPlate[];
  cover?: StaticImageData;
  coverUrl?: string;
  tech: string[];
  links?: Array<{ label: string; href: string }>;
  reflection: string;
  nextSlug: string;
}

export interface Service {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tags: string[];
}

export interface ProcessStep {
  index: string;
  name: string;
  detail: string;
}

export interface ValueItem {
  index: string;
  title: string;
  detail: string;
}
