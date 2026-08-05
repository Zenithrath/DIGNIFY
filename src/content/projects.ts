import type { Project } from "./types";

import bem1 from "@/portfolio/bem1.png";
import bem2 from "@/portfolio/bem2.png";
import bem3 from "@/portfolio/bem3.png";
import dignify1 from "@/portfolio/dignify1.png";
import dignify2 from "@/portfolio/dignify2.png";
import dignify3 from "@/portfolio/dignify3.png";

export const projects: Project[] = [
  {
    slug: "dignify-studio-site",
    title: "Dignify Studio Site",
    category: "Website",
    status: "Internal Project",
    year: 2026,
    summary:
      "The studio's own website — an editorial, industrial-modern system built to prove the standard Dignify sells.",
    overview:
      "This site is our first internal project: the full Dignify identity expressed as a working web product. Every principle we sell — modular grids, editorial hierarchy, restrained accents, typed content, accessible markup — is demonstrated here rather than described.",
    challenge:
      "A two-person studio needs one site that does three jobs: positions the studio credibly, documents the services honestly, and demonstrates the design standard through its own construction. The temptation was a generic agency template; the requirement was a system that felt intentionally designed.",
    approach:
      "We defined a strict token layer first — two monochrome surfaces, two accents, three typefaces, one grid. With that locked, every section became a composition problem rather than a styling problem. Content lives in typed data files so the site is editable without touching layout code.",
    solution:
      "A seven-page App Router site: editorial home, detailed services, filterable portfolio, per-project case studies, compact about, an honest testimonial empty state, and a structured contact form. Visuals are entirely constructed — SVG plates and geometric composition — so the site ships with zero image weight.",
    process: [
      { step: "Identity", detail: "Established the monochrome foundation, accent rules, and typography scale before any layout." },
      { step: "System", detail: "Defined reusable primitives: sections, rules, tags, buttons, and reveal behavior." },
      { step: "Content", detail: "Wrote the typed content layer — services, projects, process, values — before pages." },
      { step: "Implementation", detail: "Built all routes server-first, adding client components only for filters, forms, and motion." },
      { step: "Validation", detail: "Ran lint, type checking, and a production build; audited content integrity and accessibility." },
    ],
    gallery: [
      { index: 1, caption: "Hero composition — oversized display type over a constructed geometric system", src: dignify1 },
      { index: 2, caption: "Service index — numbered editorial rows instead of generic cards", src: dignify2 },
      { index: 3, caption: "Case study layout — boxed editorial sections with mono metadata", src: dignify3 },
    ],
    cover: dignify1,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    reflection:
      "Building our own site confirmed a suspicion: the discipline of a token layer is what keeps a two-person studio fast. The hardest part was not the design — it was resisting the urge to overclaim. The site states what we do, not what we wish we had done.",
    nextSlug: "bem-vokasi-ub-2025",
  },
  {
    slug: "bem-vokasi-ub-2025",
    title: "BEM Vokasi UB 2025",
    category: "Website",
    status: "Client Project",
    year: 2025,
    summary:
      "Company profile and information site for BEM Vokasi UB 2025 — built in-house as the cabinet's programmer, with an editing-order system for the Kominfo ministry.",
    overview:
      "The official web presence of BEM Vokasi Universitas Brawijaya for the 2025 period: profile pages, organizational information, and program-related content across five to seven pages. The site was built while working inside the organization as the cabinet programmer, so every requirement came from the people who would actually run the site.",
    challenge:
      "An organization site has two audiences: visitors looking for information and the internal teams who keep that information current. Without a clear content path, the site would go stale the week after launch. The practical problem was making frequent content updates easy for a student cabinet with no dedicated web team.",
    approach:
      "We built on a component-first React stack — TypeScript, React, and Tailwind — so pages share the same structure and the cabinet can keep the site consistent page after page. The headline feature is an order system for the Kominfo ministry: a structured way to request and manage edits to the site.",
    solution:
      "A five-to-seven page company profile site with a working editing-order flow. Information is organized by division and program, the layout is responsive, and the Kominfo ministry gets a single, tracked channel for requesting changes instead of scattered messages.",
    process: [
      { step: "Brief", detail: "Collected requirements from cabinet divisions and the Kominfo ministry." },
      { step: "Architecture", detail: "Planned the page structure — profile, programs, divisions, contact — and the content flow." },
      { step: "Build", detail: "Implemented the component-first React site with shared layout primitives." },
      { step: "Order system", detail: "Built the editing-order flow so content requests are structured and trackable." },
      { step: "Handover", detail: "Documented how the cabinet maintains content after launch." },
    ],
    gallery: [
      { index: 1, caption: "Profile pages — organizational structure and cabinet information", src: bem1 },
      { index: 2, caption: "Editing-order flow — the Kominfo content request system", src: bem2 },
      { index: 3, caption: "Program sections — division and program content in a shared layout", src: bem3 },
    ],
    cover: bem1,
    tech: ["TypeScript", "React", "Tailwind CSS"],
    reflection:
      "Building inside the organization taught a practical lesson: a site succeeds when its maintainers can actually maintain it. The editing-order system was not a feature list item — it was the feature that kept the site alive after the handover.",
    nextSlug: "arkananta-ai-audit-assistant",
  },
  {
    slug: "arkananta-ai-audit-assistant",
    title: "Arkananta AI Audit Assistant",
    category: "Automation",
    status: "Client Project",
    year: 2026,
    summary:
      "An n8n-powered AI assistant for audit work at Arkananta Apta Pratista — answers audit questions, backs statements with evidence, and retrieves files from Google Drive via RAG.",
    overview:
      "A chatbot built on an n8n backend that supports audit work: it answers audit-related questions, provides supporting evidence for its statements, and helps locate the files an auditor needs — including sending the files themselves. The knowledge base lives in Google Drive and is queried with a RAG pipeline, so the assistant can always cite a source.",
    challenge:
      "Audit conversations are only useful when every answer can be traced to a document. A chatbot that produces plausible-sounding answers without evidence is worse than no chatbot at all. The system also had to keep up with a knowledge base that grows — new files must become answerable without rebuilding the flow.",
    approach:
      "We connected Google Drive as the source of truth and built a RAG pipeline in n8n: retrieval from the drive, grounding the model's answer in the retrieved context, and returning the source file alongside the reply. The assistant runs on a GPT-based model with a fallback model for resilience, and a file-upload feature lets the team add new knowledge that is immediately searchable.",
    solution:
      "A full-stack assistant — front end, n8n backend, and integrations — that answers questions with citations, retrieves and sends supporting files, and accepts uploaded documents as new knowledge. The fallback model chain keeps the assistant available even when the primary provider is down.",
    process: [
      { step: "Scoping", detail: "Mapped the audit questions, file sources, and evidence requirements." },
      { step: "Knowledge", detail: "Connected Google Drive as the source and designed the RAG retrieval flow." },
      { step: "Workflow", detail: "Built the n8n backend — model routing, retrieval, and the fallback chain." },
      { step: "Front end", detail: "Built the chat interface that presents answers, evidence, and files." },
      { step: "Update path", detail: "Added the file-upload feature so knowledge grows without a rebuild." },
    ],
    gallery: [
      { index: 1, caption: "Chat flow — question, retrieved context, and cited answer" },
      { index: 2, caption: "Evidence — the source file attached alongside the statement" },
      { index: 3, caption: "Knowledge — Google Drive source and the file-upload update path" },
    ],
    tech: ["n8n", "GPT", "DeepSeek", "Google Drive", "RAG"],
    reflection:
      "The critical design decision was refusing to answer without a source. Retrieval is only useful when the answer points back to the document — that single rule is what separates an assistant from a hallucination generator.",
    nextSlug: "dignify-studio-site",
  },
];

export const filterOptions = ["All", "Website", "UI/UX", "Automation", "Internal", "Concept"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
