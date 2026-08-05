import type { Project } from "./types";

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
      { index: 1, caption: "Hero composition — oversized display type over a constructed geometric system" },
      { index: 2, caption: "Service index — numbered editorial rows instead of generic cards" },
      { index: 3, caption: "Case study layout — boxed editorial sections with mono metadata" },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    reflection:
      "Building our own site confirmed a suspicion: the discipline of a token layer is what keeps a two-person studio fast. The hardest part was not the design — it was resisting the urge to overclaim. The site states what we do, not what we wish we had done.",
    nextSlug: "operator-dashboard-ui",
  },
  {
    slug: "operator-dashboard-ui",
    title: "Operator Dashboard",
    category: "UI/UX",
    status: "Concept Project",
    year: 2026,
    summary:
      "A concept interface for monitoring automated workflows — dense information, structured hierarchy, no decorative noise.",
    overview:
      "A design exploration for a monitoring dashboard that oversees a portfolio of automated workflows. The concept asks: what does an interface look like when it is built for an operator who needs status at a glance and detail on demand?",
    challenge:
      "Dashboards drown in widgets. The design problem was restraint: how to show dozens of workflow states, failures, and metrics without turning the screen into a control room of colored tiles.",
    approach:
      "We treated the dashboard as an editorial artifact. A fixed grid of modular panels, a strict monochrome palette, and emerald reserved for clear action. Status is never communicated by color alone — every state carries a label.",
    solution:
      "A three-tier interface: an overview strip with aggregate states, a workflow grid with per-run status lines, and a detail panel for logs and retries. Typography does the hierarchy work, borders do the segmentation, and color stays almost silent.",
    process: [
      { step: "Audit", detail: "Mapped the real states an automation operator must distinguish." },
      { step: "Structure", detail: "Designed the information hierarchy — overview, grid, detail." },
      { step: "System", detail: "Built a token-scale of status treatments with text-based redundancy." },
      { step: "Composition", detail: "Composed modular panels on a strict 12-column grid." },
    ],
    gallery: [
      { index: 1, caption: "Overview tier — aggregate workflow states on a single strip" },
      { index: 2, caption: "Workflow grid — per-run status lines with mono metadata" },
      { index: 3, caption: "Detail panel — logs, retries, and run history in boxed zones" },
    ],
    tech: ["Figma", "Design Tokens", "Information Design"],
    reflection:
      "The lesson: dashboards fail by excess, not scarcity. Cutting the palette to two semantic accents made every state readable in a split second — color became a language instead of decoration.",
    nextSlug: "nodeflow-automation",
  },
  {
    slug: "nodeflow-automation",
    title: "Nodeflow",
    category: "Automation",
    status: "Concept Project",
    year: 2026,
    summary:
      "A concept for a visual n8n workflow library — reusable automation modules documented like a technical manual.",
    overview:
      "Nodeflow is a concept project: a pattern library and documentation system for n8n workflows. The idea is that automations should be engineered like software — named, versioned, documented, and reusable — rather than assembled once and forgotten.",
    challenge:
      "n8n workflows are powerful and invisible. Once a workflow runs, its logic lives only inside the editor. The concept had to make automation legible: what each workflow does, what it touches, and what happens when it fails.",
    approach:
      "We designed a documentation-first workflow system: every module gets a spec sheet — inputs, outputs, error paths, and owners. The concept demonstrates a set of common automation modules: lead intake, status reporting, and content distribution.",
    solution:
      "A structured library where each workflow module is presented with architecture diagrams, node sequences, error-handling notes, and maintenance guidance — turning an invisible process into an auditable asset.",
    process: [
      { step: "Catalogue", detail: "Identified the repetitive processes that automation genuinely serves." },
      { step: "Model", detail: "Designed workflow architecture with explicit error paths." },
      { step: "Document", detail: "Specified each module: triggers, steps, outputs, failure modes." },
      { step: "Systematize", detail: "Defined a library structure that scales as modules grow." },
    ],
    gallery: [
      { index: 1, caption: "Module spec — inputs, outputs, and error paths on one sheet" },
      { index: 2, caption: "Node sequence — the automation flow drawn as a system diagram" },
      { index: 3, caption: "Library index — every automation module catalogued" },
    ],
    tech: ["n8n", "Webhooks", "Documentation Systems"],
    reflection:
      "Automation fails quietly. The strongest design decision was treating documentation as part of the system, not an afterthought — because a workflow nobody understands is a liability.",
    nextSlug: "lead-intake-api",
  },
  {
    slug: "lead-intake-api",
    title: "Lead Intake API",
    category: "Automation",
    status: "Internal Project",
    year: 2026,
    summary:
      "An internal integration that routes contact form submissions into a structured pipeline — built as the studio's own reference for API integration work.",
    overview:
      "The studio's own contact form feeds into an internal integration: submissions are validated, normalized, and routed to the studio's inbox in a consistent, inspectable format. The project is intentionally small — it exists as a working reference for how Dignify integrates systems.",
    challenge:
      "Forms deliver unstructured chaos: emoji, whitespace, missing fields, broken links. The integration had to normalize submissions into a clean record while preserving the original input, and fail loudly when something unexpected arrives.",
    approach:
      "We defined a typed payload contract, validated on both the client and the server, and mapped the normalized record into a structured inbox message. The endpoint is deliberately honest: it accepts the submission and returns a clear reference — no silent drops.",
    solution:
      "A POST endpoint with schema validation, normalization rules for each field, and a structured response with a reference identifier. The integration is documented as a reusable pattern for client projects that need form-to-tool routing.",
    process: [
      { step: "Contract", detail: "Defined the payload schema and the normalized record shape." },
      { step: "Validation", detail: "Implemented field-level validation with clear error responses." },
      { step: "Routing", detail: "Mapped the record into the studio's inbox format with a reference ID." },
      { step: "Document", detail: "Wrote the pattern up as internal reference material." },
    ],
    gallery: [
      { index: 1, caption: "Contract — the typed payload and its normalized record" },
      { index: 2, caption: "Validation — field-level rules with explicit error responses" },
      { index: 3, caption: "Routing — the normalized record mapped into the inbox" },
    ],
    tech: ["TypeScript", "REST", "JSON Schema"],
    reflection:
      "Small integrations are where discipline shows. The reference ID alone — a stable identifier for every submission — turned support conversations from 'did you get it?' into 'here is exactly what arrived.'",
    nextSlug: "dignify-design-system",
  },
  {
    slug: "dignify-design-system",
    title: "Dignify Design System",
    category: "UI/UX",
    status: "Internal Project",
    year: 2026,
    summary:
      "The internal token and component system that powers every Dignify build — one palette, two accents, three typefaces.",
    overview:
      "This is the system underneath this website and every project Dignify ships: a token layer that locks the identity — two monochrome surfaces, one emerald accent, and a three-typeface hierarchy — so every build starts from a coherent foundation instead of a blank page.",
    challenge:
      "A two-person studio cannot afford to re-decide spacing, color, and type scale on every project. But a system that is too rigid produces identical sites. The system had to be strict about principles and flexible about composition.",
    approach:
      "We separated tokens from components: the token layer encodes the rules (palette, type scale, border system, motion curves), while components remain compositional primitives — sections, rules, labels, and reveals that can be arranged in endless layouts.",
    solution:
      "A typed token set implemented as CSS custom properties and Tailwind theme values, with component primitives documented for reuse. The system ships as the foundation of the studio site and as the starting point for client work.",
    process: [
      { step: "Palette", detail: "Defined the monochrome surfaces, border tones, and two accent colors." },
      { step: "Type", detail: "Set the three-typeface hierarchy: display, body, and metadata." },
      { step: "Motion", detail: "Chose a single easing curve and reveal vocabulary with reduced-motion handling." },
      { step: "Tokens", detail: "Implemented everything as typed, centralized values." },
    ],
    gallery: [
      { index: 1, caption: "Palette — monochrome foundation with two strategic accents" },
      { index: 2, caption: "Type scale — display, body, and metadata hierarchies" },
      { index: 3, caption: "Primitives — the compositional components the system ships" },
    ],
    tech: ["CSS Custom Properties", "Tailwind CSS", "TypeScript"],
    reflection:
      "The 85–90% monochrome rule is the identity's engine. Limiting the interface to one emerald accent makes every color decision purposeful.",
    nextSlug: "archive-index-site",
  },
  {
    slug: "archive-index-site",
    title: "Archive Index",
    category: "Website",
    status: "Concept Project",
    year: 2026,
    summary:
      "A concept for an editorial archive index — dense, typographic, and built entirely around the grid.",
    overview:
      "A design exploration for a publication-style archive: a site whose entire purpose is the ordered presentation of a large body of indexed entries. The concept tests how far a pure editorial grid can carry content with almost no imagery.",
    challenge:
      "Archives are boring or chaotic — rarely both interesting and navigable. The concept had to make thousands of entries findable while keeping every screen a designed composition, without leaning on thumbnails.",
    approach:
      "We let typography and rules do the work. Entries are rows on a strict baseline grid with mono metadata — dates, categories, coordinates — and the hierarchy is communicated through size and position, never decoration.",
    solution:
      "A three-level system: an index of sections, dense entry rows with filterable categories, and a detail view presented as a typographic spread. The composition holds at every breakpoint because it is grid-defined rather than card-defined.",
    process: [
      { step: "Model", detail: "Defined the entry schema — fields, categories, and metadata." },
      { step: "Grid", detail: "Designed the row-and-rule system that carries the density." },
      { step: "Navigation", detail: "Built the three-level index structure: sections, rows, spreads." },
      { step: "Responsive", detail: "Verified the grid holds from handheld to wide desktop." },
    ],
    gallery: [
      { index: 1, caption: "Index rows — dense entries carried by rules and metadata" },
      { index: 2, caption: "Section levels — the three-level navigation structure" },
      { index: 3, caption: "Detail spread — the entry presented as a typographic layout" },
    ],
    tech: ["Design Systems", "Typography", "Information Architecture"],
    reflection:
      "The concept proved that imagery is an option, not a requirement. A disciplined grid plus real typography carries density that image-heavy layouts would need megabytes to match.",
    nextSlug: "dignify-studio-site",
  },
];

export const filterOptions = ["All", "Website", "UI/UX", "Automation", "Internal", "Concept"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
