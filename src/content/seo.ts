import { site } from "./site";

export const seo = {
  home: {
    title: "Dignify | Web Design & Development",
    description:
      "Dignify builds responsive landing pages, portfolio websites, company profiles and custom web experiences for brands, businesses and personal projects.",
  },
  homeId: {
    title: "Dignify | Jasa Pembuatan Website & Web Development",
    description:
      "Dignify bantu bikin website, landing page, company profile, portfolio, dan web development custom yang responsif buat bisnis dan personal brand.",
  },
  services: {
    title: "Digital Services | Web Design, AI & Automation",
    description:
      "Website development, UI/UX design, AI solutions, n8n automation, and API integration, delivered with clear scope and documented handover.",
  },
  servicesId: {
    title: "Layanan Digital | Web Design, AI & Otomasi",
    description:
      "Jasa web development, desain UI/UX, solusi AI, otomasi n8n, dan integrasi API — dengan scope yang jelas dan serah terima yang terdokumentasi.",
  },
  portfolio: {
    title: "Portfolio | Websites, Interfaces & Automation",
    description:
      "Selected Dignify projects across websites, interfaces, AI tools, and automation — each one marked as client work, internal work, or a concept.",
  },
  portfolioId: {
    title: "Portfolio Dignify | Website, UI/UX & Otomasi",
    description:
      "Karya pilihan Dignify: website, antarmuka, AI, dan otomasi — tiap proyek ditandai sebagai kerja klien, internal, atau konsep.",
  },
  aboutId: {
    title: "Tentang Dignify | Studio Digital Kecil oleh Dije, Ignas & Daniel",
    description:
      "Dignify adalah studio digital kecil yang dibangun Dije, Ignas, dan Daniel. Kami ngerjain website, UI/UX, solusi AI, otomasi, dan integrasi sistem.",
  },
  contactId: {
    title: "Kontak Dignify | Mulai Proyek Website atau Otomasi",
    description:
      "Hubungi Dignify buat jasa pembuatan website, UI/UX, AI, otomasi n8n, atau integrasi API. Konsultasi gratis buat memetakan proyekmu.",
  },
  testimonialsId: {
    title: "Testimoni | Dignify Digital Studio",
    description:
      "Dignify cuma menampilkan testimoni asli dari klien dengan izin. Nggak ada review karangan atau klaim palsu.",
  },
  about: {
    title: "About Dignify | A Digital Studio Built by Dije, Ignas & Daniel",
    description:
      "Dignify is a small digital studio built by Dije, Ignas, and Daniel, working on websites, UI/UX, AI solutions, automation, and system integrations.",
  },
  contact: {
    title: "Contact Dignify | Start a Web or Automation Project",
    description:
      "Contact Dignify for website development, UI/UX, AI, n8n automation, or API integration. A free consultation to scope your project.",
  },
  testimonials: {
    title: "Testimonials | Dignify Digital Studio",
    description:
      "Dignify only publishes real client feedback with permission. No invented reviews, no fabricated claims.",
  },
  webDevelopment: {
    title: "Web Development Services",
    description:
      "Custom web development for landing pages, company profiles, portfolio websites and responsive digital experiences built by Dignify.",
  },
  jasaPembuatanWebsite: {
    title: "Jasa Pembuatan Website & Web Development",
    description:
      "Jasa pembuatan website custom untuk landing page, company profile, portfolio, dan kebutuhan web development yang responsif bersama Dignify.",
  },
  serviceTerms: [
    "website development",
    "web development services",
    "landing page development",
    "portfolio website development",
    "company profile website",
    "front-end development",
    "jasa pembuatan website",
    "jasa web development",
    "jasa coding website",
    "UI UX design",
    "desain UI UX",
    "AI solutions",
    "solusi AI",
    "n8n workflow automation",
    "automasi n8n",
    "API integration",
    "integrasi API",
  ],
  indonesianServices: [
    {
      title: "Jasa Pembuatan Website",
      description:
        "Kami merancang struktur, tampilan, dan implementasi website yang responsif, mudah digunakan, serta mudah dirawat setelah diluncurkan.",
    },
    {
      title: "Jasa Landing Page",
      description:
        "Halaman satu layar untuk peluncuran produk, kampanye, atau promosi, cepat dimuat dan jelas mengarahkan pengunjung ke satu tindakan.",
    },
    {
      title: "Website Company Profile",
      description:
        "Website profil perusahaan yang menyampaikan kepercayaan: layanan, produk, tim, dan cara menghubungi bisnis Anda dalam satu struktur rapi.",
    },
    {
      title: "Website Portfolio",
      description:
        "Situs portfolio pribadi atau studio untuk menampilkan karya, pengalaman, dan keahlian dengan cara yang mudah dicari dan dibaca.",
    },
    {
      title: "Front-End Development",
      description:
        "Implementasi antarmuka dengan kode yang rapi, cepat, dan mudah dirawat, dari desain Figma menjadi website yang benar-benar berfungsi.",
    },
  ],
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: "Dignify Digital Studio",
      url: site.url,
      email: site.email,
      description: seo.home.description,
      founder: [
        { "@type": "Person", name: "Dije" },
        { "@type": "Person", name: "Ignas" },
        { "@type": "Person", name: "Daniel" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "project enquiries",
        email: site.email,
        telephone: site.phone,
        availableLanguage: ["Indonesian", "English"],
      },
      knowsAbout: seo.serviceTerms,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      publisher: { "@id": `${site.url}/#organization` },
      description: seo.home.description,
    },
  ],
} as const;
