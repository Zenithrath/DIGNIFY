import { site } from "./site";

export const seo = {
  home: {
    title: "Dignify | Web Design & Development",
    description:
      "Dignify builds responsive landing pages, portfolio websites, company profiles and custom web experiences for brands, businesses and personal projects.",
  },
  homeId: {
    title: "Jasa Pembuatan Website & Web Development | Dignify",
    description:
      "Jasa pembuatan website, desain web, jasa UI/UX design, landing page, company profile, dan web development custom yang responsif. Konsultasi gratis buat petakan kebutuhanmu bersama Dignify.",
  },
  services: {
    title: "Digital Services | Web Design, AI & Automation",
    description:
      "Website development, UI/UX design, AI solutions, n8n automation, and API integration, delivered with clear scope and documented handover.",
  },
  servicesId: {
    title: "Jasa Pembuatan Website, UI/UX Design, AI & Otomasi | Dignify",
    description:
      "Layanan Dignify: jasa pembuatan website, desain UI/UX, jasa web design, solusi AI, otomasi n8n, dan integrasi API dengan scope jelas dan serah terima yang terdokumentasi.",
  },
  portfolio: {
    title: "Portfolio | Websites, Interfaces & Automation",
    description:
      "Selected Dignify projects across websites, interfaces, AI tools, and automation. Each one marked as client work, internal work, or a concept.",
  },
  portfolioId: {
    title: "Portfolio | Jasa Pembuatan Website, UI/UX & Otomasi | Dignify",
    description:
      "Karya pilihan Dignify dalam jasa pembuatan website, desain UI/UX, AI, dan otomasi. Tiap proyek ditandai jujur sebagai kerja klien, internal, atau konsep.",
  },
  aboutId: {
    title: "Tentang Dignify | Studio Digital Kecil oleh Dije, Ignas, Daniel & Dzaky",
    description:
      "Dignify adalah studio digital kecil yang dibangun Dije, Ignas, Daniel, dan Dzaky. Kami ngerjain jasa pembuatan website, desain UI/UX, solusi AI, otomasi, dan integrasi sistem.",
  },
  contactId: {
    title: "Kontak Dignify | Mulai Proyek Pembuatan Website atau Otomasi",
    description:
      "Hubungi Dignify buat jasa pembuatan website, jasa UI/UX design, AI, otomasi n8n, atau integrasi API. Konsultasi gratis buat memetakan proyekmu.",
  },
  testimonialsId: {
    title: "Testimoni | Dignify Digital Studio",
    description:
      "Dignify cuma menampilkan testimoni asli dari klien dengan izin. Nggak ada review karangan atau klaim palsu.",
  },
  about: {
    title: "About Dignify | A Digital Studio Built by Dije, Ignas, Daniel & Dzaky",
    description:
      "Dignify is a small digital studio built by Dije, Ignas, Daniel, and Dzaky, working on websites, UI/UX, AI solutions, automation, and system integrations.",
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
    title: "Jasa Pembuatan Website & Web Development | Dignify",
    description:
      "Jasa pembuatan website custom untuk landing page, company profile, portfolio, toko online, dan kebutuhan web development responsif bersama Dignify, dari desain sampai serah terima.",
  },
  serviceTerms: [
    "website development",
    "web development services",
    "landing page development",
    "portfolio website development",
    "company profile website",
    "front-end development",
    "jasa pembuatan website",
    "pembuatan website",
    "jasa bikin website",
    "jasa web design",
    "jasa desain website",
    "jasa web development",
    "jasa coding website",
    "jasa pembuatan landing page",
    "jasa website company profile",
    "UI UX design",
    "jasa UI UX",
    "jasa UI UX design",
    "desain UI UX",
    "desain web",
    "jasa desain UI UX",
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
      title: "Jasa Desain Website",
      description:
        "Desain website yang bikin bisnismu keliatan profesional: tata letak yang jelas, tipografi yang rapi, dan alur pengunjung yang terarah.",
    },
    {
      title: "Jasa UI/UX Design",
      description:
        "Desain antarmuka dan pengalaman pengguna untuk website maupun aplikasi, dari riset kebutuhan sampai prototipe yang bisa dicoba.",
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
        { "@type": "Person", name: "Dzaky" },
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
