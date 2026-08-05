import type { Project } from "./types";

import bem1 from "@/portfolio/bem1.png";
import bem2 from "@/portfolio/bem2.png";
import bem3 from "@/portfolio/bem3.png";
import arkbot1 from "@/portfolio/arkbot1.png";
import arkbot2 from "@/portfolio/arkbot2.png";
import arkbot3 from "@/portfolio/arkbot3.png";
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
      "The studio's own website. An editorial, industrial modern system that shows the standard Dignify brings to client work.",
    overview:
      "This is our first internal project and the clearest example of how we work. The site brings together modular grids, editorial hierarchy, restrained accents, typed content, and accessible markup in one working product.",
    challenge:
      "A studio run by two people needs one site that explains the services, earns trust, and shows the quality of the work. We chose a deliberate system instead of a generic agency template.",
    approach:
      "We set the visual rules first: two monochrome surfaces, two accents, three typefaces, and one grid. The content lives in typed data files, which lets us update the site without rewriting the layout.",
    solution:
      "The result is a site with seven pages: an editorial home, detailed services, a filterable portfolio, case studies, an about page, an honest testimonial state, and a contact form. The visual plates use SVG and geometry, so the site does not depend on a large image library.",
    process: [
      { step: "Identity", detail: "Established the monochrome foundation, accent rules, and typography scale before any layout." },
      { step: "System", detail: "Defined reusable primitives: sections, rules, tags, buttons, and reveal behavior." },
      { step: "Content", detail: "Wrote the typed content layer for services, projects, process, and values before building the pages." },
      { step: "Implementation", detail: "Built the routes on the server and added client components only where filters, forms, or motion need them." },
      { step: "Validation", detail: "Ran lint, type checking, and a production build; audited content integrity and accessibility." },
    ],
    gallery: [
      { index: 1, caption: "Hero composition: oversized display type over a geometric system", src: dignify1 },
      { index: 2, caption: "Service index: numbered editorial rows instead of generic cards", src: dignify2 },
      { index: 3, caption: "Case study layout: boxed sections with technical metadata", src: dignify3 },
    ],
    cover: dignify1,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    reflection:
      "Building our own site made our process clearer. A small team moves faster when the visual rules and content structure are written down. We also kept the claims close to the work we have actually done.",
    nextSlug: "bem-vokasi-ub-2025",
  },
  {
    slug: "bem-vokasi-ub-2025",
    title: "BEM Vokasi UB 2025",
    category: "Website",
    status: "Client Project",
    year: 2025,
    summary:
      "Company profile and information site for BEM Vokasi UB 2025. The site was built in house for the cabinet, with an editing order system for the Kominfo ministry.",
    overview:
      "The official web presence of BEM Vokasi Universitas Brawijaya for the 2025 period. It covers the cabinet profile, organizational information, and programs across five to seven pages. The requirements came directly from the people who maintained the site.",
    challenge:
      "An organization site has two audiences: visitors looking for information and the internal teams who keep that information current. Without a clear content path, the site would go stale the week after launch. The practical problem was making frequent content updates easy for a student cabinet with no dedicated web team.",
    approach:
      "We used TypeScript, React, and Tailwind with shared components so the cabinet could keep each page consistent. The main feature is an order system that gives the Kominfo ministry one clear place to request and track edits.",
    solution:
      "A company profile site with five to seven pages and a working editing order flow. Information is organized by division and program, and the Kominfo ministry can send and track requests in one place.",
    process: [
      { step: "Brief", detail: "Collected requirements from cabinet divisions and the Kominfo ministry." },
      { step: "Architecture", detail: "Planned the page structure for the profile, programs, divisions, contact, and content flow." },
      { step: "Build", detail: "Implemented the React site with shared layout components." },
      { step: "Order system", detail: "Built the editing order flow so content requests are clear and trackable." },
      { step: "Handover", detail: "Documented how the cabinet maintains content after launch." },
    ],
    gallery: [
      { index: 1, caption: "Profile pages: organizational structure and cabinet information", src: bem1 },
      { index: 2, caption: "Editing order flow: the Kominfo content request system", src: bem2 },
      { index: 3, caption: "Program sections: division and program content in a shared layout", src: bem3 },
    ],
    cover: bem1,
    tech: ["TypeScript", "React", "Tailwind CSS"],
    reflection:
      "Working inside the organization showed us what the site needed after launch. The editing order system became the practical way for the cabinet to keep content current.",
    nextSlug: "arkananta-ai-audit-assistant",
  },
  {
    slug: "arkananta-ai-audit-assistant",
    title: "Arkananta AI Audit Assistant",
    category: "Automation",
    status: "Client Project",
    year: 2026,
    summary:
      "An AI assistant built with n8n for audit work at Arkananta Apta Pratista. It answers audit questions, shows the supporting evidence, and retrieves files from Google Drive with RAG.",
    overview:
      "The chatbot answers audit questions and points to the document behind each answer. It can also find and send the file an auditor needs. The knowledge base lives in Google Drive and is searched through a RAG pipeline.",
    challenge:
      "An audit answer is only useful when someone can check its source. The system also needed to accept new files without rebuilding the workflow each time the knowledge base grew.",
    approach:
      "Google Drive is the source of truth. The n8n workflow retrieves relevant documents, gives that context to the model, and returns the source file with the answer. A GPT based model and a fallback model handle the chat, while a file upload path adds new knowledge to the search index.",
    solution:
      "The finished assistant combines a front end, n8n workflows, and the required integrations. It answers with citations, retrieves supporting files, and accepts uploaded documents. A fallback model keeps the chat available when the primary provider is unavailable.",
    process: [
      { step: "Scoping", detail: "Mapped the audit questions, file sources, and evidence requirements." },
      { step: "Knowledge", detail: "Connected Google Drive as the source and designed the RAG retrieval flow." },
      { step: "Workflow", detail: "Built the n8n backend for model routing, document retrieval, and fallback handling." },
      { step: "Front end", detail: "Built the chat interface for answers, evidence, and files." },
      { step: "Update path", detail: "Added a file upload path so the knowledge base can grow without a rebuild." },
    ],
    gallery: [
      { index: 1, caption: "Chat flow: question, retrieved context, and cited answer", src: arkbot1 },
      { index: 2, caption: "Evidence: the source file attached to the answer", src: arkbot2 },
      { index: 3, caption: "Knowledge: Google Drive source and the file upload path", src: arkbot3 },
    ],
    cover: arkbot1,
    tech: ["n8n", "GPT", "DeepSeek", "Google Drive", "RAG"],
    reflection:
      "The most important rule was simple: the assistant must show a source for every answer. That keeps the tool useful for audit work and gives the team something they can verify.",
    nextSlug: "dignify-studio-site",
  },
];

export const filterOptions = ["All", "Website", "UI/UX", "Automation", "Internal", "Concept"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
