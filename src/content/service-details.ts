export type ServiceDetailItem = {
  title: string;
  description: string;
  deliverables: string[];
};

export type ServiceDetailFaq = {
  question: string;
  answer: string;
};

export type ServiceDetailContent = {
  slug: string;
  stack: string[];
  meta: {
    title: string;
    description: string;
  };
  hero: {
    label: string;
    title: [string, string];
    intro: string;
    meta: string;
  };
  scope: {
    label: string;
    title: string;
    items: ServiceDetailItem[];
  };
  process: {
    label: string;
    title: string;
    steps: { index: string; title: string; detail: string }[];
  };
  related: string;
  faqs: ServiceDetailFaq[];
};

export const serviceSlugs = ["ui-ux-design", "ai-solutions", "n8n-automation", "api-integration"] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export const serviceDetailsEn: Record<ServiceSlug, ServiceDetailContent> = {
  "ui-ux-design": {
    slug: "ui-ux-design",
    stack: ["Figma", "Design Systems", "Prototyping"],
    meta: {
      title: "UI/UX Design Services",
      description:
        "Interface design, user flows, wireframes, design systems, and responsive UI by Dignify — designed around real users and real workflows.",
    },
    hero: {
      label: "UI/UX DESIGN",
      title: ["UI/UX Design", "Built Around Real Users"],
      intro:
        "We design interfaces and user flows that are clear, consistent, and easy to use — from early wireframes to the final screen designs.",
      meta: "WIREFRAMES · USER FLOWS · DESIGN SYSTEMS · PROTOTYPES · RESPONSIVE UI",
    },
    scope: {
      label: "WHAT WE WORK ON",
      title: "Interface design, scoped to the actual problem.",
      items: [
        {
          title: "Interface Design",
          description:
            "Screen designs for websites and apps: clear layouts, consistent typography, and visuals that match the brand.",
          deliverables: [
            "Clear page and screen layouts",
            "Consistent typography and spacing",
            "Visual direction matched to the brand",
          ],
        },
        {
          title: "User Flows & Wireframes",
          description:
            "We map how people actually move through the product before a single pixel is polished.",
          deliverables: [
            "User flow diagrams",
            "Low and high fidelity wireframes",
            "Content hierarchy per screen",
          ],
        },
        {
          title: "Design Systems",
          description:
            "Reusable colors, type, and components so the design stays consistent as the product grows.",
          deliverables: [
            "Color and typography tokens",
            "Reusable component library",
            "Usage documentation",
          ],
        },
        {
          title: "Prototyping",
          description:
            "Clickable prototypes to test decisions early, before expensive code gets written.",
          deliverables: [
            "Clickable interactive prototypes",
            "Usability testing support",
            "Iteration based on feedback",
          ],
        },
        {
          title: "Responsive Design",
          description:
            "Layouts designed for desktop, tablet, and mobile at the same time, not scaled down later.",
          deliverables: [
            "Mobile-first breakpoints",
            "Adaptive component behavior",
            "Cross-device review",
          ],
        },
      ],
    },
    process: {
      label: "HOW IT RUNS",
      title: "From flows to final screens.",
      steps: [
        { index: "A", title: "Understand", detail: "We learn the goal and who will use the product." },
        { index: "B", title: "Structure", detail: "Flows and wireframes define what goes where." },
        { index: "C", title: "Design", detail: "Visual design turns structure into a clear interface." },
        { index: "D", title: "Handover", detail: "Final screens and assets are documented for development." },
      ],
    },
    related: "UI/UX",
    faqs: [
      {
        question: "Do you design for both websites and apps?",
        answer:
          "Yes. The same principles apply to websites, dashboards, and app interfaces — clarity first, decoration later.",
      },
      {
        question: "Can you work from an existing brand?",
        answer:
          "Yes. We extend your existing identity into a clear interface design without inventing a new brand.",
      },
      {
        question: "What do you deliver?",
        answer:
          "Wireframes, screen designs, a small design system, and documentation the development team can follow.",
      },
    ],
  },
  "ai-solutions": {
    slug: "ai-solutions",
    stack: ["LLM APIs", "RAG", "Prompt Systems"],
    meta: {
      title: "AI Solutions & AI Chat Development",
      description:
        "Practical AI features from Dignify: AI chat with your documents, document search, content support, data processing, and LLM API integration.",
    },
    hero: {
      label: "AI SOLUTIONS",
      title: ["AI Solutions", "Practical AI, Scoped to Real Work"],
      intro:
        "We build AI features that do specific useful things — answer questions from your documents, summarize content, or process data — with the workflow visible and under your control.",
      meta: "AI CHAT · DOCUMENT SEARCH · CONTENT SUPPORT · DATA PROCESSING · LLM INTEGRATION",
    },
    scope: {
      label: "WHAT WE WORK ON",
      title: "AI features chosen for the work, not for the hype.",
      items: [
        {
          title: "AI Chat Interfaces",
          description:
            "Chat tools that answer questions using your own information, not generic guesses.",
          deliverables: [
            "Custom chat interface",
            "Answers grounded in your documents",
            "Clear source references",
          ],
        },
        {
          title: "Document Search (RAG)",
          description:
            "Search and question tools that find the right information inside your files and documents.",
          deliverables: [
            "Document indexing and retrieval",
            "Answers with cited sources",
            "Support for PDFs, docs, and pages",
          ],
        },
        {
          title: "Content & Data Processing",
          description:
            "AI that summarizes, classifies, or extracts data from content you already have.",
          deliverables: [
            "Summaries and key points",
            "Classification and tagging",
            "Structured data extraction",
          ],
        },
        {
          title: "LLM API Integration",
          description:
            "AI built into your existing product or workflow, connected through APIs.",
          deliverables: [
            "Model API integration",
            "Prompt and context design",
            "Usage monitoring",
          ],
        },
        {
          title: "Evaluation & Safeguards",
          description:
            "Checks and limits so the AI stays accurate and stays within the workflow's boundaries.",
          deliverables: [
            "Answer evaluation setup",
            "Fallback handling",
            "Safety and scope limits",
          ],
        },
      ],
    },
    process: {
      label: "HOW IT RUNS",
      title: "From idea to a working AI feature.",
      steps: [
        { index: "A", title: "Scope", detail: "We define the specific task the AI should do." },
        { index: "B", title: "Prototype", detail: "A small working version proves the approach." },
        { index: "C", title: "Build", detail: "The workflow is built with quality checks." },
        { index: "D", title: "Review", detail: "Results are tested and refined with you." },
      ],
    },
    related: "Automation",
    faqs: [
      {
        question: "Is AI reliable enough for real work?",
        answer:
          "AI is useful when it has clear boundaries. We design each feature with source checks and fallbacks so mistakes are caught early.",
      },
      {
        question: "Does it need a technical team to run?",
        answer:
          "No. The interface and workflows are designed for the people who actually use them.",
      },
      {
        question: "Can it work with my existing tools?",
        answer:
          "Yes. Most AI features connect to the documents, data, and tools you already use.",
      },
    ],
  },
  "n8n-automation": {
    slug: "n8n-automation",
    stack: ["n8n", "Webhooks", "Scheduling"],
    meta: {
      title: "n8n Workflow Automation Services",
      description:
        "Workflow automation with n8n from Dignify: tool integrations, notifications, reports, error handling, and documentation your team can follow.",
    },
    hero: {
      label: "AUTOMATION",
      title: ["n8n Automation", "Workflows That Run Themselves"],
      intro:
        "We connect your tools with n8n so routine work happens automatically — with error handling, logs, and documentation your team can actually follow.",
      meta: "WORKFLOW DESIGN · TOOL INTEGRATION · NOTIFICATIONS · ERROR HANDLING · DOCUMENTATION",
    },
    scope: {
      label: "WHAT WE WORK ON",
      title: "Repetitive work, designed once and automated after.",
      items: [
        {
          title: "Workflow Automation",
          description:
            "Repetitive processes designed once, then run automatically.",
          deliverables: [
            "Workflow architecture and design",
            "Scheduled and trigger-based runs",
            "Retry and failure handling",
          ],
        },
        {
          title: "Tool Integration",
          description:
            "Your tools connected: Google Drive, Sheets, Gmail, WhatsApp, forms, CRMs, and more.",
          deliverables: [
            "External tool connections",
            "Secure credential handling",
            "Two-way data sync where needed",
          ],
        },
        {
          title: "Notifications & Reports",
          description:
            "Automatic updates and summaries sent where you already work.",
          deliverables: [
            "Email and chat notifications",
            "Scheduled reports and summaries",
            "Status updates per task",
          ],
        },
        {
          title: "Data Handling & Transformation",
          description:
            "Data moved, cleaned, and formatted between systems without manual copying.",
          deliverables: [
            "Data mapping and validation",
            "Format conversion",
            "Deduplication and cleanup",
          ],
        },
        {
          title: "Documentation & Handover",
          description:
            "Clear documentation so the workflow is understandable without a technical team.",
          deliverables: [
            "Plain-language workflow docs",
            "Owner handover session",
            "Post-launch support",
          ],
        },
      ],
    },
    process: {
      label: "HOW IT RUNS",
      title: "Automation that stays understandable.",
      steps: [
        { index: "A", title: "Scope", detail: "We map the repetitive work that wastes time." },
        { index: "B", title: "Design", detail: "The workflow is planned on paper before anything runs." },
        { index: "C", title: "Build", detail: "Connections and logic are built and tested." },
        { index: "D", title: "Document", detail: "You receive the workflow with clear documentation." },
      ],
    },
    related: "Automation",
    faqs: [
      {
        question: "Does automation mean losing control?",
        answer:
          "No. Every workflow includes logs, error handling, and notifications, so you always know what is happening.",
      },
      {
        question: "What can be automated?",
        answer:
          "Mostly repetitive digital work: data entry, file organization, notifications, and moving information between tools.",
      },
      {
        question: "Do I need to understand n8n?",
        answer:
          "No. We document everything in plain language and explain how the workflow runs.",
      },
    ],
  },
  "api-integration": {
    slug: "api-integration",
    stack: ["REST", "GraphQL", "Webhooks"],
    meta: {
      title: "API Integration Services",
      description:
        "API integration by Dignify: REST and GraphQL connections, webhooks, data mapping, typed clients, and monitoring with graceful fallbacks.",
    },
    hero: {
      label: "API INTEGRATION",
      title: ["API Integration", "Systems That Talk to Each Other"],
      intro:
        "We connect your product to external services, webhooks, and internal data — with clear data mapping, retries where they help, and useful error messages.",
      meta: "REST & GRAPHQL · WEBHOOKS · DATA MAPPING · TYPED CLIENTS · MONITORING",
    },
    scope: {
      label: "WHAT WE WORK ON",
      title: "Connections built on clear contracts.",
      items: [
        {
          title: "REST & GraphQL Integration",
          description:
            "Your product connected to third-party services through their APIs.",
          deliverables: [
            "API architecture design",
            "Authentication handling",
            "Rate limit and quota management",
          ],
        },
        {
          title: "Webhooks & Events",
          description:
            "Real-time updates when things happen in other systems.",
          deliverables: [
            "Webhook endpoint setup",
            "Event payload handling",
            "Delivery retries and idempotency",
          ],
        },
        {
          title: "Data Mapping & Transformation",
          description:
            "Data from one system shaped to fit another.",
          deliverables: [
            "Field mapping and validation",
            "Format conversion",
            "Fallback defaults for missing data",
          ],
        },
        {
          title: "Typed API Clients",
          description:
            "Clean, typed clients and handlers that are easy to extend.",
          deliverables: [
            "Typed client code",
            "Consistent error handling",
            "Documented endpoints",
          ],
        },
        {
          title: "Monitoring & Fallbacks",
          description:
            "Visibility into what is working and graceful behavior when something fails.",
          deliverables: [
            "Logging and status checks",
            "Graceful fallback behavior",
            "Alerting on failures",
          ],
        },
      ],
    },
    process: {
      label: "HOW IT RUNS",
      title: "Integrations that stay reliable after launch.",
      steps: [
        { index: "A", title: "Scope", detail: "We map the systems and the data that needs to move." },
        { index: "B", title: "Design", detail: "The integration is planned with clear contracts." },
        { index: "C", title: "Build", detail: "Clients, handlers, and mapping are implemented." },
        { index: "D", title: "Monitor", detail: "Logging and fallbacks keep the integration reliable." },
      ],
    },
    related: "Automation",
    faqs: [
      {
        question: "Can you connect almost any service?",
        answer:
          "Most platforms with a public API can be integrated. If a service has no API, we find the practical alternative.",
      },
      {
        question: "What happens when an API fails?",
        answer:
          "We design retries and fallbacks, and you get a clear error message instead of a silent failure.",
      },
      {
        question: "Is the integration secure?",
        answer:
          "Yes. Credentials are stored safely, and access follows the minimum needed for the integration to work.",
      },
    ],
  },
};

export const serviceDetailsId: Record<ServiceSlug, ServiceDetailContent> = {
  "ui-ux-design": {
    slug: "ui-ux-design",
    stack: ["Figma", "Design Systems", "Prototyping"],
    meta: {
      title: "Jasa UI/UX Design",
      description:
        "Jasa desain UI/UX dari Dignify: desain antarmuka, user flow, wireframe, design system, dan UI responsif biar produk digitalmu gampang dipakai.",
    },
    hero: {
      label: "UI/UX DESIGN",
      title: ["UI/UX Design", "Biar Produkmu Gampang Dipakai"],
      intro:
        "Kami desain tampilan dan alur yang jelas, konsisten, dan nyaman dipakai — dari wireframe pertama sampai layar final.",
      meta: "WIREFRAME · USER FLOW · DESIGN SYSTEM · PROTOTIPE · UI RESPONSIF",
    },
    scope: {
      label: "YANG BISA DIKERJAKAN",
      title: "Desain antarmuka, dipilih sesuai masalah yang beneran ada.",
      items: [
        {
          title: "Desain Antarmuka",
          description:
            "Desain layar buat website dan aplikasi: layout yang jelas, tipografi konsisten, visual yang sesuai brand.",
          deliverables: [
            "Layout halaman dan layar yang jelas",
            "Tipografi dan jarak yang konsisten",
            "Visual yang nyambung sama brand",
          ],
        },
        {
          title: "User Flow & Wireframe",
          description:
            "Kami petakan dulu gimana orang bergerak di dalam produk, sebelum visual dirapikan.",
          deliverables: [
            "Diagram alur pengguna",
            "Wireframe low dan high fidelity",
            "Hierarki konten tiap layar",
          ],
        },
        {
          title: "Design System",
          description:
            "Warna, huruf, dan komponen yang bisa dipakai ulang, biar desain tetap konsisten pas produknya nambah fitur.",
          deliverables: [
            "Token warna dan tipografi",
            "Pustaka komponen reusable",
            "Dokumentasi pemakaian",
          ],
        },
        {
          title: "Prototyping",
          description:
            "Prototipe yang bisa diklik buat nguji keputusan lebih awal, sebelum kode ditulis.",
          deliverables: [
            "Prototipe interaktif",
            "Dukungan uji coba pengguna",
            "Iterasi dari masukan",
          ],
        },
        {
          title: "Desain Responsif",
          description:
            "Layout didesain buat desktop, tablet, dan mobile sekaligus — bukan dikecilin belakangan.",
          deliverables: [
            "Breakpoint mobile-first",
            "Komponen yang adaptif",
            "Review lintas perangkat",
          ],
        },
      ],
    },
    process: {
      label: "CARA KERJANYA",
      title: "Dari alur sampai layar final.",
      steps: [
        { index: "A", title: "Pahami", detail: "Kami pelajari dulu tujuannya dan siapa yang bakal pakai." },
        { index: "B", title: "Susun", detail: "Alur dan wireframe nentuin isi di tiap layar." },
        { index: "C", title: "Desain", detail: "Visual ngeubah struktur jadi antarmuka yang jelas." },
        { index: "D", title: "Serah Terima", detail: "Layar final dan aset didokumentasikan buat development." },
      ],
    },
    related: "UI/UX",
    faqs: [
      {
        question: "Bisa untuk website dan aplikasi?",
        answer:
          "Bisa. Prinsipnya sama: kejelasan dulu, hiasan kemudian.",
      },
      {
        question: "Bisa ikutin brand yang udah ada?",
        answer:
          "Bisa. Identitas yang udah ada kami kembangkan jadi desain antarmuka yang jelas, tanpa bikin brand baru.",
      },
      {
        question: "Apa aja yang kami serahkan?",
        answer:
          "Wireframe, desain layar, design system sederhana, dan dokumentasi yang bisa diikuti tim development.",
      },
    ],
  },
  "ai-solutions": {
    slug: "ai-solutions",
    stack: ["LLM APIs", "RAG", "Prompt Systems"],
    meta: {
      title: "Jasa Solusi AI & Chat AI",
      description:
        "Fitur AI praktis dari Dignify: chat AI yang jawab dari dokumenmu, pencarian dokumen, dukungan konten, olah data, dan integrasi API LLM.",
    },
    hero: {
      label: "SOLUSI AI",
      title: ["Solusi AI", "AI yang Nyambung dengan Kerjaanmu"],
      intro:
        "Kami bangun fitur AI yang ngelakuin hal spesifik dan berguna — jawab dari dokumenmu, ringkas konten, atau olah data — dengan alur yang jelas dan tetap di bawah kendalimu.",
      meta: "AI CHAT · PENCARIAN DOKUMEN · DUKUNGAN KONTEN · OLAH DATA · INTEGRASI LLM",
    },
    scope: {
      label: "YANG BISA DIKERJAKAN",
      title: "Fitur AI dipilih buat kerjanya, bukan buat gaya-gayaan.",
      items: [
        {
          title: "Chat dengan AI",
          description:
            "Chat yang jawab pakai informasi milikmu sendiri, bukan nebak-nebak.",
          deliverables: [
            "Interface chat khusus",
            "Jawaban dari dokumenmu",
            "Sumber jawaban selalu dicantumin",
          ],
        },
        {
          title: "Pencarian Dokumen (RAG)",
          description:
            "Alat cari dan tanya yang nemuin informasi yang tepat di dalam file dan dokumenmu.",
          deliverables: [
            "Indeks dan pencarian dokumen",
            "Jawaban lengkap dengan sumber",
            "Mendukung PDF, dokumen, dan halaman",
          ],
        },
        {
          title: "Olah Konten & Data",
          description:
            "AI yang meringkas, ngelompokin, atau ngambil data dari konten yang udah kamu punya.",
          deliverables: [
            "Ringkasan dan poin penting",
            "Klasifikasi dan pelabelan",
            "Ekstraksi data terstruktur",
          ],
        },
        {
          title: "Integrasi API AI",
          description:
            "AI dipasang ke produk atau alur kerja yang udah ada lewat API.",
          deliverables: [
            "Integrasi API model AI",
            "Desain prompt dan konteks",
            "Pemantauan pemakaian",
          ],
        },
        {
          title: "Evaluasi & Pengaman",
          description:
            "Pengecekan dan batasan biar jawaban AI tetap akurat dan nggak keluar dari pekerjaannya.",
          deliverables: [
            "Evaluasi jawaban otomatis",
            "Penanganan saat gagal",
            "Batasan keamanan dan scope",
          ],
        },
      ],
    },
    process: {
      label: "CARA KERJANYA",
      title: "Dari ide sampai fitur AI yang beneran jalan.",
      steps: [
        { index: "A", title: "Petakan", detail: "Kami tentukan tugas spesifik yang harus dikerjain AI." },
        { index: "B", title: "Prototipe", detail: "Versi kecil yang jalan dulu buat buktiin caranya." },
        { index: "C", title: "Bangun", detail: "Alurnya dibangun lengkap dengan pengecekan kualitas." },
        { index: "D", title: "Review", detail: "Hasilnya diuji dan disempurnakan bareng kamu." },
      ],
    },
    related: "Automation",
    faqs: [
      {
        question: "AI-nya bisa diandalkan buat kerjaan nyata?",
        answer:
          "Bisa, selama ada batasannya. Tiap fitur kami rancang dengan pengecekan sumber dan cadangan, biar salahnya ketahuan dari awal.",
      },
      {
        question: "Perlu tim teknis buat jalaninnya?",
        answer:
          "Nggak. Antarmuka dan alurnya didesain buat orang yang beneran makainya.",
      },
      {
        question: "Bisa nyambung ke tools yang udah dipakai?",
        answer:
          "Bisa. Kebanyakan fitur AI kami sambungkan ke dokumen, data, dan tools yang udah kamu pakai.",
      },
    ],
  },
  "n8n-automation": {
    slug: "n8n-automation",
    stack: ["n8n", "Webhooks", "Scheduling"],
    meta: {
      title: "Jasa Otomasi n8n & Workflow Automation",
      description:
        "Jasa otomasi alur kerja dengan n8n dari Dignify: integrasi tools, notifikasi, laporan, penanganan error, dan dokumentasi yang bisa diikuti timmu.",
    },
    hero: {
      label: "OTOMASI",
      title: ["Otomasi n8n", "Kerjaan Rutin yang Jalan Sendiri"],
      intro:
        "Kami sambungkan tools-mu dengan n8n biar pekerjaan rutin jalan otomatis — lengkap dengan penanganan error, log, dan dokumentasi yang bisa diikuti timmu.",
      meta: "DESAIN WORKFLOW · INTEGRASI TOOLS · NOTIFIKASI · PENANGANAN ERROR · DOKUMENTASI",
    },
    scope: {
      label: "YANG BISA DIKERJAKAN",
      title: "Pekerjaan berulang, dirancang sekali, otomatis seterusnya.",
      items: [
        {
          title: "Otomasi Alur Kerja",
          description:
            "Proses berulang dirancang sekali, habis itu jalan sendiri.",
          deliverables: [
            "Arsitektur dan desain workflow",
            "Jalan otomatis sesuai jadwal atau pemicu",
            "Penanganan retry dan kegagalan",
          ],
        },
        {
          title: "Integrasi Tools",
          description:
            "Tools-mu disambung: Google Drive, Sheets, Gmail, WhatsApp, form, CRM, dan lainnya.",
          deliverables: [
            "Koneksi ke tools eksternal",
            "Kredensial ditangani aman",
            "Sinkronisasi dua arah kalau perlu",
          ],
        },
        {
          title: "Notifikasi & Laporan",
          description:
            "Update dan ringkasan otomatis dikirim ke tempat yang udah kamu pakai.",
          deliverables: [
            "Notifikasi email dan chat",
            "Laporan dan ringkasan terjadwal",
            "Status update tiap pekerjaan",
          ],
        },
        {
          title: "Olah & Transformasi Data",
          description:
            "Data dipindah, dibersihkan, dan diformat antar sistem, tanpa copy-paste manual.",
          deliverables: [
            "Pemetaan dan validasi data",
            "Konversi format",
            "Pembersihan dan deduplikasi",
          ],
        },
        {
          title: "Dokumentasi & Serah Terima",
          description:
            "Dokumentasi yang jelas biar workflow-nya bisa dipahami tanpa tim teknis.",
          deliverables: [
            "Dokumen workflow bahasa sederhana",
            "Sesi serah terima pemilik",
            "Dukungan setelah rilis",
          ],
        },
      ],
    },
    process: {
      label: "CARA KERJANYA",
      title: "Otomasi yang tetap gampang dipahami.",
      steps: [
        { index: "A", title: "Petakan", detail: "Kami cari kerjaan berulang yang paling buang waktu." },
        { index: "B", title: "Desain", detail: "Alur kerja direncanakan di atas kertas dulu." },
        { index: "C", title: "Bangun", detail: "Koneksi dan logikanya dibangun lalu diuji." },
        { index: "D", title: "Dokumentasikan", detail: "Workflow diserahkan lengkap dengan dokumentasi yang jelas." },
      ],
    },
    related: "Automation",
    faqs: [
      {
        question: "Kalau diotomasi, apa nggak kehilangan kendali?",
        answer:
          "Nggak. Setiap workflow ada log, penanganan error, dan notifikasi — kamu selalu tahu apa yang terjadi.",
      },
      {
        question: "Apa aja yang bisa diotomasi?",
        answer:
          "Sebagian besar kerjaan digital yang berulang: input data, ngatur file, notifikasi, dan mindahin informasi antar tools.",
      },
      {
        question: "Harus paham n8n nggak?",
        answer:
          "Nggak harus. Semuanya kami dokumentasikan dengan bahasa sederhana dan kami jelasin cara kerjanya.",
      },
    ],
  },
  "api-integration": {
    slug: "api-integration",
    stack: ["REST", "GraphQL", "Webhooks"],
    meta: {
      title: "Jasa Integrasi API",
      description:
        "Jasa integrasi API dari Dignify: koneksi REST dan GraphQL, webhook, pemetaan data, typed client, dan monitoring dengan fallback yang aman.",
    },
    hero: {
      label: "INTEGRASI API",
      title: ["Integrasi API", "Sistem yang Saling Nyambung"],
      intro:
        "Kami sambungkan produkmu ke layanan eksternal, webhook, dan data internal — dengan pemetaan data yang jelas, retry yang membantu, dan pesan error yang berguna.",
      meta: "REST & GRAPHQL · WEBHOOK · PEMETAAN DATA · TYPED CLIENT · MONITORING",
    },
    scope: {
      label: "YANG BISA DIKERJAKAN",
      title: "Koneksi dibangun di atas aturan yang jelas.",
      items: [
        {
          title: "Integrasi REST & GraphQL",
          description:
            "Produkmu disambung ke layanan pihak ketiga lewat API-nya.",
          deliverables: [
            "Arsitektur integrasi API",
            "Penanganan autentikasi",
            "Kelola rate limit dan kuota",
          ],
        },
        {
          title: "Webhook & Event",
          description:
            "Update waktu nyata pas terjadi sesuatu di sistem lain.",
          deliverables: [
            "Endpoint webhook disiapkan",
            "Penanganan payload event",
            "Retry pengiriman dan idempotensi",
          ],
        },
        {
          title: "Pemetaan & Transformasi Data",
          description:
            "Data dari satu sistem dibentuk biar cocok sama sistem lain.",
          deliverables: [
            "Pemetaan dan validasi field",
            "Konversi format",
            "Nilai default buat data kosong",
          ],
        },
        {
          title: "API Client yang Rapi",
          description:
            "Client dan handler yang ter-typing dan gampang dikembangin.",
          deliverables: [
            "Kode client ter-typing",
            "Penanganan error konsisten",
            "Endpoint terdokumentasi",
          ],
        },
        {
          title: "Monitoring & Fallback",
          description:
            "Kamu bisa liat apa yang jalan, dan sistem tetap aman pas ada yang gagal.",
          deliverables: [
            "Logging dan pengecekan status",
            "Perilaku fallback yang aman",
            "Peringatan pas gagal",
          ],
        },
      ],
    },
    process: {
      label: "CARA KERJANYA",
      title: "Integrasi yang tetap andal setelah rilis.",
      steps: [
        { index: "A", title: "Petakan", detail: "Kami petakan sistem dan data yang perlu dipindahin." },
        { index: "B", title: "Desain", detail: "Integrasi direncanakan dengan kontrak yang jelas." },
        { index: "C", title: "Bangun", detail: "Client, handler, dan pemetaan diimplementasikan." },
        { index: "D", title: "Pantau", detail: "Logging dan fallback jaga integrasi tetap andal." },
      ],
    },
    related: "Automation",
    faqs: [
      {
        question: "Bisa nyambung ke layanan apa aja?",
        answer:
          "Sebagian besar platform yang punya API publik bisa diintegrasikan. Kalau nggak ada API-nya, kami cari alternatif yang praktis.",
      },
      {
        question: "Gimana kalau API-nya gagal?",
        answer:
          "Kami rancang retry dan fallback. Kamu dapat pesan error yang jelas, bukan kegagalan senyap.",
      },
      {
        question: "Amannya gimana?",
        answer:
          "Kredensial disimpan aman, dan akses dibatasi seminimal mungkin buat kebutuhan integrasinya.",
      },
    ],
  },
};