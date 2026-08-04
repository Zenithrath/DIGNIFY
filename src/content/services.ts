import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "website-development",
    index: "01",
    title: "Website Development",
    tagline: "Websites engineered like products.",
    description:
      "Fast, accessible, and maintainable websites built with modern front-end engineering. We plan the information architecture, design the system, and implement it as clean, typed, and performance-conscious code.",
    deliverables: [
      "Information architecture and sitemap",
      "Responsive, mobile-first implementation",
      "Performance and accessibility budgets",
      "CMS-ready, editable content structures",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    slug: "ui-ux-design",
    index: "02",
    title: "UI/UX Design",
    tagline: "Interfaces designed as systems.",
    description:
      "Structured interface design for web products: clear hierarchies, modular layouts, and consistent tokens. We design with constraints, so the result is usable before it is beautiful.",
    deliverables: [
      "User flows and wireframes",
      "Design systems and token libraries",
      "High-fidelity interface design",
      "Prototypes for testing decisions",
    ],
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    slug: "ai-solutions",
    index: "03",
    title: "AI Solutions",
    tagline: "Practical AI, scoped to real work.",
    description:
      "We integrate AI where it genuinely helps — content assistance, document handling, chat interfaces, and automated analysis — and keep the rest of the system transparent and controlled.",
    deliverables: [
      "Use-case scoping and feasibility review",
      "LLM-backed interfaces",
      "Document and data processing flows",
      "Evaluation and safeguards",
    ],
    tags: ["LLM APIs", "RAG", "Prompt Systems"],
  },
  {
    slug: "n8n-automation",
    index: "04",
    title: "n8n Workflow Automation",
    tagline: "Workflows that run themselves.",
    description:
      "We design and build n8n workflows that connect your tools, move data, and remove repetitive manual work — with error handling, logging, and documentation that a small team can actually maintain.",
    deliverables: [
      "Workflow architecture and node design",
      "Third-party tool connections",
      "Error handling and notification paths",
      "Documentation for non-technical owners",
    ],
    tags: ["n8n", "Webhooks", "Scheduling"],
  },
  {
    slug: "api-integration",
    index: "05",
    title: "API Integration",
    tagline: "Systems that talk to each other.",
    description:
      "We connect your product to the services it depends on — REST, webhooks, third-party platforms, and internal data — with typed contracts, sensible retries, and observable failure modes.",
    deliverables: [
      "Integration architecture",
      "Typed API clients and webhook handlers",
      "Data mapping and transformation",
      "Monitoring and fallback behavior",
    ],
    tags: ["REST", "GraphQL", "Webhooks"],
  },
];

export const engagement = [
  {
    index: "A",
    title: "Scoping",
    detail:
      "A structured conversation about the problem, the constraints, and the definition of done — before any design or code.",
  },
  {
    index: "B",
    title: "Building",
    detail:
      "Design and development run in one workflow. You see working, reviewable progress in regular milestones.",
  },
  {
    index: "C",
    title: "Handover",
    detail:
      "Documented code, editable content, and a clear explanation of how to extend the system after launch.",
  },
] as const;
