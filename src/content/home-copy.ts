export type HeroCopy = {
  label: string;
  heading: {
    line1: [string, string];
    line2: [string, string];
    highlight: string;
  };
  sub: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type ServiceIndexCopy = {
  label: string;
  title: string;
  deliverablesLabel: string;
  footnote: string;
  serviceLink: { label: string; href: string };
  allServicesLink: { label: string; href: string };
};

export type FeaturedWorkCopy = {
  label: string;
  title: string;
  intro: string;
  readCaseStudy: string;
  footerLink: string;
};

export type FinalCtaCopy = {
  label: string;
  heading: [string, string];
  box: string;
  primaryCta: { label: string; href: string };
};

export const enHomeCopy: {
  hero: HeroCopy;
  serviceIndex: ServiceIndexCopy;
  featuredWork: FeaturedWorkCopy;
  finalCta: FinalCtaCopy;
} = {
  hero: {
    label: "CREATIVE AGENCY",
    heading: {
      line1: ["Digital", "Studio"],
      line2: ["Built", "with"],
      highlight: "Clarity",
    },
    sub: "We design interfaces, build websites, and automate workflows with a working style that is modular, transparent, and deliberately free of hype.",
    primaryCta: { label: "Start a Project", href: "/contact" },
    secondaryCta: { label: "View Portfolio", href: "/portfolio" },
  },
  serviceIndex: {
    label: "SERVICES",
    title: "What we do, and what we deliberately do not.",
    deliverablesLabel: "DELIVERABLES",
    footnote: "FRONT END DEVELOPMENT IS PART OF EVERY BUILD.",
    serviceLink: { label: "Web Development Services", href: "/web-development" },
    allServicesLink: { label: "All Services", href: "/services" },
  },
  featuredWork: {
    label: "FEATURED WORK",
    title: "Selected systems, honestly labeled.",
    intro: "A look at Dignify projects: client work, internal work, and concepts, each labeled with the truth.",
    readCaseStudy: "Read case study",
    footerLink: "View the full index. All work is labeled honestly",
  },
  finalCta: {
    label: "/ 04 / NEXT STEP",
    heading: ["Let's build something", "clear."],
    box: "A focused conversation about your project, its scope, and its constraints. We will tell you clearly whether we are the right fit.",
    primaryCta: { label: "Start a Project", href: "/contact" },
  },
};

export const idHomeCopy: {
  hero: HeroCopy;
  serviceIndex: ServiceIndexCopy;
  featuredWork: FeaturedWorkCopy;
  finalCta: FinalCtaCopy;
} = {
  hero: {
    label: "STUDIO DIGITAL",
    heading: {
      line1: ["Digital", "Studio"],
      line2: ["Built", "with"],
      highlight: "Clarity",
    },
    sub: "Kami menyediakan jasa pembuatan website, mendesain antarmuka, dan mengotomasi alur kerja dengan gaya kerja yang modular, transparan, dan tanpa gimmick.",
    primaryCta: { label: "Mulai Proyek", href: "/id/contact" },
    secondaryCta: { label: "Lihat Portfolio", href: "/id/portfolio" },
  },
  serviceIndex: {
    label: "LAYANAN",
    title: "Apa yang kami kerjakan, dan yang sengaja tidak.",
    deliverablesLabel: "YANG DIDAPAT",
    footnote: "FRONT-END DEVELOPMENT TERMASUK DI SETIAP PEMBUATAN.",
    serviceLink: { label: "Layanan Pembuatan Website", href: "/id/jasa-pembuatan-website" },
    allServicesLink: { label: "Semua Layanan", href: "/id#services" },
  },
  featuredWork: {
    label: "KARYA PILIHAN",
    title: "Sistem pilihan, yang jujur diberi label.",
    intro: "Sekilas proyek Dignify: kerja klien, kerja internal, dan konsep, masing-masing berlabel sesuai kenyataan.",
    readCaseStudy: "Baca studi kasus",
    footerLink: "Lihat indeks lengkap. Semua karya berlabel jujur",
  },
  finalCta: {
    label: "/ 04 / LANGKAH BERIKUTNYA",
    heading: ["Let's build something", "clear."],
    box: "Obrolan singkat dan terarah soal proyekmu: tujuannya, scope-nya, dan kendalanya. Kami akan bilang jelas kalau kami cocok atau tidak.",
    primaryCta: { label: "Mulai Proyek", href: "/id/contact" },
  },
};
