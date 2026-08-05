import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "website-development",
    index: "01",
    title: "Website Development",
    tagline: "Websites engineered like products.",
    description:
      "We plan the site structure, design the interface, and build the result in clean typed code. The finished site is fast, accessible, and easy to maintain.",
    deliverables: [
      "Information architecture and sitemap",
      "Responsive implementation for mobile and desktop",
      "Performance and accessibility budgets",
      "CMS ready content structures",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    slug: "ui-ux-design",
    index: "02",
    title: "UI/UX Design",
    tagline: "Interfaces designed as systems.",
    description:
      "We create clear page structures, useful user flows, and visual systems that stay consistent as the product grows. The goal is a design people can use before it tries to impress them.",
    deliverables: [
      "User flows and wireframes",
      "Design systems and token libraries",
      "Detailed interface design",
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
      "We use AI for specific tasks such as document search, chat, content support, and analysis. The workflow stays visible, reviewable, and under your control.",
    deliverables: [
      "Use case scoping and feasibility review",
      "Interfaces using LLM APIs",
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
      "We connect your tools with n8n so routine work happens without constant copying and checking. Each workflow includes error handling, useful logs, and documentation your team can follow.",
    deliverables: [
      "Workflow architecture and node design",
      "External tool connections",
      "Error handling and notification paths",
      "Documentation for non technical owners",
    ],
    tags: ["n8n", "Webhooks", "Scheduling"],
  },
  {
    slug: "api-integration",
    index: "05",
    title: "API Integration",
    tagline: "Systems that talk to each other.",
    description:
      "We connect your product to REST services, webhooks, external platforms, and internal data. The integration includes clear data mapping, retries where they help, and useful failure messages.",
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
      "We talk through the problem, constraints, and expected result before design or code begins.",
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
