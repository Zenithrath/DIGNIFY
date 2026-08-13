export type HeroCopy = {
  heading: {
    line1: string;
    line2: string;
    highlight: string;
  };
  sub: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type ServiceRow = {
  index: string;
  title: string;
  description: string;
  href: string;
};

export type ServicesCopy = {
  label: string;
  title: string;
  rows: ServiceRow[];
  allServicesLink: { label: string; href: string };
};

export type SelectedWorkCopy = {
  label: string;
  title: string;
  viewProject: string;
  footerLink: string;
};

export type WhyItem = {
  index: string;
  title: string;
  detail: string;
};

export type WhyCopy = {
  label: string;
  title: string;
  items: WhyItem[];
};

export type ProcessStepCopy = {
  index: string;
  name: string;
  detail: string;
};

export type ProcessCopy = {
  label: string;
  title: string;
  steps: ProcessStepCopy[];
};

export type FinalCtaCopy = {
  heading: string;
  sub: string;
  primaryCta: { label: string; href: string };
};

export const enHomeCopy: {
  hero: HeroCopy;
  services: ServicesCopy;
  selectedWork: SelectedWorkCopy;
  why: WhyCopy;
  process: ProcessCopy;
  finalCta: FinalCtaCopy;
} = {
  hero: {
    heading: {
      line1: "Websites and digital experiences",
      line2: "built around your",
      highlight: "needs.",
    },
    sub: "Dignify helps businesses, brands, and projects build websites, interfaces, and digital systems that are clearer and ready to use.",
    primaryCta: { label: "View Our Work", href: "/portfolio" },
    secondaryCta: { label: "Start a Project", href: "/contact" },
  },
  services: {
    label: "SERVICES",
    title: "What we can help with.",
    rows: [
      {
        index: "01",
        title: "Web Development",
        description:
          "Websites for businesses, company profiles, portfolios, landing pages, and other digital needs.",
        href: "/web-development",
      },
      {
        index: "02",
        title: "UI/UX Design",
        description: "Interfaces and flows designed so digital products are easier to use.",
        href: "/services/ui-ux-design",
      },
      {
        index: "03",
        title: "Automation",
        description: "Repetitive work runs more smoothly, so it doesn't all have to be done by hand.",
        href: "/services/n8n-automation",
      },
      {
        index: "04",
        title: "AI & Integration",
        description: "Tools, APIs, or AI connected to what your project actually needs.",
        href: "/services/ai-solutions",
      },
    ],
    allServicesLink: { label: "All Services", href: "/services" },
  },
  selectedWork: {
    label: "SELECTED WORK",
    title: "A few things we've built.",
    viewProject: "View Project",
    footerLink: "View all projects",
  },
  why: {
    label: "HOW WE WORK",
    title: "What we build must fit the need — not just look complex.",
    items: [
      {
        index: "01",
        title: "Start from the need",
        detail: "We understand the goal first, before choosing design or technology.",
      },
      {
        index: "02",
        title: "Stay simple",
        detail: "If something can be clearer and lighter, it doesn't need extra complexity.",
      },
      {
        index: "03",
        title: "Built to be used",
        detail: "Responsiveness, performance, usability, and project structure are always considered.",
      },
    ],
  },
  process: {
    label: "PROCESS",
    title: "The process doesn't need to be complicated.",
    steps: [
      { index: "01", name: "Talk", detail: "Tell us what you want to build." },
      { index: "02", name: "Plan", detail: "We define the structure, visual direction, and project needs." },
      { index: "03", name: "Build", detail: "Design and development get under way." },
      { index: "04", name: "Done", detail: "After testing and review, your project is ready to use." },
    ],
  },
  finalCta: {
    heading: "Have something you want to build?",
    sub: "Tell us what you need. We'll see how Dignify can help.",
    primaryCta: { label: "Start a Project", href: "/contact" },
  },
};

export const idHomeCopy: {
  hero: HeroCopy;
  services: ServicesCopy;
  selectedWork: SelectedWorkCopy;
  why: WhyCopy;
  process: ProcessCopy;
  finalCta: FinalCtaCopy;
} = {
  hero: {
    heading: {
      line1: "Website dan pengalaman digital",
      line2: "dibangun sesuai",
      highlight: "kebutuhanmu.",
    },
    sub: "Dignify membantu bisnis, brand, dan project membangun website, interface, dan sistem digital yang lebih jelas dan siap digunakan.",
    primaryCta: { label: "Lihat Karya", href: "/id/portfolio" },
    secondaryCta: { label: "Mulai Project", href: "/id/contact" },
  },
  services: {
    label: "LAYANAN",
    title: "Yang bisa kami bantu.",
    rows: [
      {
        index: "01",
        title: "Web Development",
        description:
          "Website untuk bisnis, company profile, portfolio, landing page, dan kebutuhan digital lainnya.",
        href: "/id/jasa-pembuatan-website",
      },
      {
        index: "02",
        title: "UI/UX Design",
        description: "Tampilan dan alur yang dirancang supaya produk digital lebih mudah digunakan.",
        href: "/id/services/ui-ux-design",
      },
      {
        index: "03",
        title: "Automation",
        description: "Membantu pekerjaan berulang berjalan lebih praktis dan tidak semuanya dilakukan manual.",
        href: "/id/services/n8n-automation",
      },
      {
        index: "04",
        title: "AI & Integration",
        description: "Menghubungkan tools, API, atau AI ke kebutuhan yang memang berguna untuk project.",
        href: "/id/services/ai-solutions",
      },
    ],
    allServicesLink: { label: "Semua Layanan", href: "/id/services" },
  },
  selectedWork: {
    label: "PROJECT PILIHAN",
    title: "Beberapa hal yang sudah kami bangun.",
    viewProject: "Lihat Project",
    footerLink: "Lihat semua project",
  },
  why: {
    label: "CARA KAMI BEKERJA",
    title: "Yang dibangun harus sesuai kebutuhan, bukan sekadar kelihatan rumit.",
    items: [
      {
        index: "01",
        title: "Mulai dari kebutuhan",
        detail: "Kami pahami dulu apa yang ingin dicapai sebelum menentukan design atau teknologi.",
      },
      {
        index: "02",
        title: "Tetap sederhana",
        detail: "Kalau sesuatu bisa dibuat lebih jelas dan ringan, tidak perlu ditambah kompleksitas.",
      },
      {
        index: "03",
        title: "Dibangun untuk digunakan",
        detail: "Responsiveness, performance, usability, dan struktur project tetap diperhatikan.",
      },
    ],
  },
  process: {
    label: "PROSES",
    title: "Prosesnya nggak perlu dibuat rumit.",
    steps: [
      { index: "01", name: "Ngobrol", detail: "Ceritakan apa yang ingin kamu buat." },
      { index: "02", name: "Susun", detail: "Kami menentukan struktur, arah visual, dan kebutuhan project." },
      { index: "03", name: "Bangun", detail: "Design dan development mulai dikerjakan." },
      { index: "04", name: "Selesai", detail: "Setelah testing dan review, project siap digunakan." },
    ],
  },
  finalCta: {
    heading: "Punya sesuatu yang ingin dibangun?",
    sub: "Ceritakan kebutuhanmu. Kita lihat bagaimana Dignify bisa bantu.",
    primaryCta: { label: "Mulai Project", href: "/id/contact" },
  },
};
