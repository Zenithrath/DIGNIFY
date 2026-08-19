export type HeroCopy = {
  heading: {
    line1: string;
    line2: string;
    highlight: string;
  };
  sub: string;
  meta: string;
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
  detailed?: boolean;
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

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCopy = {
  index: string;
  label: string;
  title: string;
  items: FaqItem[];
};

export type IdHomeCopy = {
  hero: HeroCopy;
  services: ServicesCopy;
  selectedWork: SelectedWorkCopy;
  why: WhyCopy;
  process: ProcessCopy;
  faq: FaqCopy;
  finalCta: FinalCtaCopy;
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
    meta: "WEB DEVELOPMENT · UI/UX DESIGN · AI SOLUTIONS · AUTOMATION · API INTEGRATION",
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
    title: "What we build must fit the need, not just look complex.",
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

export const idHomeCopy: IdHomeCopy = {
  hero: {
    heading: {
      line1: "We Don't Do Templates.",
      line2: "We Build What You",
      highlight: "Need.",
    },
    sub: "Halo, kami Dignify, studio digital kecil yang bantu bisnis dan personal brand dengan jasa pembuatan website, desain UI/UX, solusi AI, otomasi, dan integrasi API. Semua dibangun dari kebutuhanmu, transparan, dan hasilnya bisa kamu cek langsung.",
    meta: "JASA PEMBUATAN WEBSITE · JASA UI/UX DESIGN · SOLUSI AI · OTOMASI · INTEGRASI API",
    primaryCta: { label: "Konsultasi Gratis", href: "/contact" },
    secondaryCta: { label: "Lihat Karya Kami", href: "/portfolio" },
  },
  services: {
    label: "LAYANAN",
    title: "Semua yang bisa kami kerjakan untukmu.",
    detailed: true,
    rows: [
      {
        index: "01",
        title: "Web Development",
        description:
          "Website buat bisnis, company profile, portfolio, dan landing page yang siap dipakai.",
        href: "/jasa-pembuatan-website",
      },
      {
        index: "02",
        title: "UI/UX Design",
        description: "Tampilan dan alur yang bikin produk digitalmu gampang dipakai.",
        href: "/services/ui-ux-design",
      },
      {
        index: "03",
        title: "Automation",
        description: "Pekerjaan berulang jalan otomatis, nggak semuanya dikerjain manual.",
        href: "/services/n8n-automation",
      },
      {
        index: "04",
        title: "AI & Integration",
        description: "Tools, API, atau AI disambung ke hal yang memang dibutuhin project.",
        href: "/services/ai-solutions",
      },
    ],
    allServicesLink: { label: "Bandingkan semua layanan", href: "/services" },
  },
  selectedWork: {
    label: "KARYA PILIHAN",
    title: "Beberapa karya yang beneran pernah kami kerjain.",
    viewProject: "Lihat Studi Kasus",
    footerLink: "Lihat Semua Karya",
  },
  why: {
    label: "CARA KAMI BEKERJA",
    title: "Kerja bareng kami itu kayak gini:",
    items: [
      {
        index: "01",
        title: "Dari kebutuhan, bukan tren",
        detail: "Kami pahamin dulu masalahmu, baru milih desain dan teknologinya. Nggak ada yang dipaksain biar keliatan keren.",
      },
      {
        index: "02",
        title: "Sederhana itu indah",
        detail: "Kalau ada cara yang lebih jelas dan ringan, kami pilih itu. Ribet bukan tanda bagus, justru sebaliknya.",
      },
      {
        index: "03",
        title: "Bisa dicek kapan aja",
        detail: "Progres, kode, dan hasilnya transparan. Kamu nggak pernah ditinggal nggak tahu, sampai serah terima.",
      },
    ],
  },
  process: {
    label: "PROSES",
    title: "Prosesnya santai, tapi tetap rapi.",
    steps: [
      { index: "01", name: "Ngobrol", detail: "Ceritain aja mau bikin apa, sesimpel apapun ceritanya." },
      { index: "02", name: "Susun", detail: "Struktur, arah desain, dan kebutuhan project kami rapikan dulu." },
      { index: "03", name: "Bangun", detail: "Desain dan development dikerjain bareng, kamu bisa lihat progresnya." },
      { index: "04", name: "Selesai", detail: "Diuji, dicek bareng, dan diserahkan lengkap dengan dokumentasinya." },
    ],
  },
  faq: {
    index: "05",
    label: "FAQ",
    title: "Pertanyaan yang sering banget ditanyain.",
    items: [
      {
        question: "Berapa harga jasa pembuatan website?",
        answer:
          "Tergantung kebutuhan dan cakupannya. Landing page beda dengan company profile atau website custom. Konsultasi awalnya gratis, jadi kamu bisa ceritain kebutuhanmu dulu dan kami kasih gambaran harga yang jujur. Nggak ada biaya tersembunyi.",
      },
      {
        question: "Berapa lama pembuatan website selesai?",
        answer:
          "Tergantung cakupan project. Landing page bisa lebih cepat, website company profile atau aplikasi butuh waktu lebih lama. Estimasi waktunya kami tentukan bareng kamu di awal, supaya nggak ada janji yang nggak bisa ditepati.",
      },
      {
        question: "Bisa bikin landing page, company profile, atau toko online?",
        answer:
          "Bisa. Jasa pembuatan website kami mencakup landing page, company profile, website portfolio, sampai website custom dengan fitur yang kamu butuhin. Yang penting kami paham dulu tujuannya.",
      },
      {
        question: "Apakah konten website bisa saya kelola sendiri?",
        answer:
          "Iya. Kontennya kami siapkan biar bisa kamu ubah sendiri tanpa nunggu developer. Kalau perlu, dokumentasinya juga kami siapkan lengkap.",
      },
      {
        question: "Gimana cara mulai kerjasama sama Dignify?",
        answer:
          "Gampang. Kirim aja kebutuhanmu lewat halaman kontak atau WhatsApp. Kami balas cepat, dan konsultasi pertamanya gratis. Kalau project-mu ternyata nggak cocok sama kami, kami bilang jujur.",
      },
    ],
  },
  finalCta: {
    heading: "Siap bikin website atau sistem digitalmu?",
    sub: "Ceritakan aja apa yang kamu butuhin. Konsultasi pertama gratis dan nggak ada komitmen. Kalau kami nggak cocok, kami bilang jujur.",
    primaryCta: { label: "Konsultasi Gratis", href: "/contact" },
  },
};
