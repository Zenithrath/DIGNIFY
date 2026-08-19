import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "website-development",
    index: "01",
    title: "Website Development",
    tagline: "Websites engineered like products.",
    description:
      "We plan the site structure, design the interface, and build the result in clean typed code. The finished site is fast, accessible, and easy to maintain.",
    descriptionId:
      "Kami rencanakan struktur situsnya, rancang antarmukanya, dan bangun hasilnya dalam kode yang rapi dan terketik. Hasilnya cepat dibuka, gampang diakses, dan mudah dirawat.",
    deliverables: [
      "The site structure, planned before anything is built",
      "Works well on phones and computers",
      "A site that loads fast and is easy to use for everyone",
      "Content you can edit yourself without a developer",
    ],
    deliverablesId: [
      "Struktur situs yang jelas, direncanakan dulu sebelum dibangun",
      "Jalan mulus di HP dan komputer",
      "Cepat dibuka dan gampang dipakai siapa saja",
      "Konten yang bisa kamu edit sendiri, tanpa perlu developer",
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
    descriptionId:
      "Kami bikin struktur halaman yang jelas, alur yang berguna, dan sistem visual yang tetap konsisten pas produknya makin besar. Tujuannya desain yang enak dipakai, bukan yang cuma niat memukau.",
    deliverables: [
      "A clear map of how people move through your product",
      "A consistent look that stays tidy as the product grows",
      "Screens designed to be easy to use, not just nice to look at",
      "Clickable prototypes to test ideas before anything is built",
    ],
    deliverablesId: [
      "Peta alur yang jelas, gimana orang memakai produkmu",
      "Tampilan konsisten yang tetap rapi pas produknya nambah",
      "Layar yang enak dipakai, bukan cuma bagus dilihat",
      "Prototipe yang bisa diklik buat nyoba ide sebelum dibangun",
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
    descriptionId:
      "Kami pakai AI buat tugas yang spesifik seperti pencarian dokumen, chat, bantuan konten, dan analisis. Alurnya tetap kelihatan, bisa dicek, dan tetap di bawah kendalimu.",
    deliverables: [
      "We check first whether AI is actually the right tool for your problem",
      "A simple interface where the AI works for your team",
      "Files and data processed automatically",
      "Checks and limits so answers stay accurate",
    ],
    deliverablesId: [
      "Kami cek dulu, beneran butuh AI atau tidak masalahnya",
      "Tampilan sederhana biar AI-nya gampang dipakai timmu",
      "File dan data diolah otomatis",
      "Pengecekan dan batasan biar jawabannya tetap akurat",
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
    descriptionId:
      "Kami sambungkan tools-mu pakai n8n biar kerjaan rutin jalan tanpa harus terus-terusan copy-paste dan ngecek. Tiap alur punya penanganan error, log yang berguna, dan dokumentasi yang bisa diikuti timmu.",
    deliverables: [
      "The workflow designed on paper before it is built",
      "Your existing tools connected to each other",
      "A clear alert when something goes wrong",
      "Plain-language docs your team can follow",
    ],
    deliverablesId: [
      "Alurnya dirancang di atas kertas dulu, baru dibangun",
      "Tools yang udah kamu pakai disambung satu sama lain",
      "Notifikasi yang jelas kalau ada yang gagal",
      "Dokumentasi bahasa sederhana yang bisa diikuti timmu",
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
    descriptionId:
      "Kami sambungkan produkmu ke layanan REST, webhook, platform eksternal, dan data internal. Integrasinya termasuk pemetaan data yang jelas, percobaan ulang kalau memang membantu, dan pesan kegagalan yang berguna.",
    deliverables: [
      "A clear plan of how your systems will connect",
      "Your tools connected and kept in sync automatically",
      "Data moved between systems without manual copying",
      "It is clear when something breaks, and it recovers gracefully",
    ],
    deliverablesId: [
      "Rencana yang jelas gimana sistemmu bakal disambung",
      "Tools-mu tersambung dan tetap sinkron otomatis",
      "Data pindah antar sistem tanpa copy-paste manual",
      "Kalau ada yang rusak, langsung ketahuan dan bisa pulih sendiri",
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

export const engagementId = [
  {
    index: "A",
    title: "Pemetaan Awal",
    detail:
      "Kami bicarakan masalahnya, batasan-batasannya, dan hasil yang diharapkan sebelum desain atau kode dimulai.",
  },
  {
    index: "B",
    title: "Pembangunan",
    detail:
      "Desain dan development jalan dalam satu alur kerja. Kamu melihat progres yang nyata dan bisa dicek dalam milestone berkala.",
  },
  {
    index: "C",
    title: "Serah Terima",
    detail:
      "Kode terdokumentasi, konten yang mudah diedit, dan penjelasan jelas cara mengembangkan sistem setelah diluncurkan.",
  },
] as const;
