import { site } from "./site";

export const seo = {
  home: {
    title: "Dignify | Website Development, UI/UX, AI & Automation",
    description:
      "Dignify is a digital studio for website development, UI/UX, AI, n8n automation, and API integration. Browse Dignify projects across websites, interfaces, AI tools, and automation. Jasa pembuatan website, desain UI/UX, solusi AI, automasi n8n, dan integrasi API.",
  },
  services: {
    title: "Digital Services | Jasa Website, UI/UX & AI",
    description:
      "Website development, UI/UX design, AI solutions, n8n automation, and API integration. Dignify menyediakan jasa pembuatan website, desain UI/UX, solusi AI, automasi n8n, dan integrasi API.",
  },
  portfolio: {
    title: "Portfolio Website, UI/UX & Automation",
    description:
      "Dignify projects: selected work across websites, interfaces, AI tools, and automation. Portfolio proyek website, UI/UX, solusi AI, dan automasi yang dilabeli sebagai client, internal, atau concept project.",
  },
  about: {
    title: "About Dignify | Studio Digital",
    description:
      "Dignify is a small digital studio founded by Dije and Ignas. Dignify adalah studio digital untuk website, UI/UX, solusi AI, automasi, dan integrasi sistem.",
  },
  contact: {
    title: "Contact Dignify | Konsultasi Website & Automation",
    description:
      "Contact Dignify for website development, UI/UX, AI, n8n automation, or API integration. Konsultasi jasa website, desain UI/UX, solusi AI, automasi n8n, dan integrasi API.",
  },
  testimonials: {
    title: "Testimonials | Dignify Digital Studio",
    description:
      "Dignify only publishes real client feedback with permission. Dignify hanya mempublikasikan testimoni dan ulasan klien asli yang telah mendapat izin.",
  },
  serviceTerms: [
    "website development",
    "jasa pembuatan website",
    "UI UX design",
    "desain UI UX",
    "AI solutions",
    "solusi AI",
    "n8n workflow automation",
    "automasi n8n",
    "API integration",
    "integrasi API",
  ],
  bilingualServiceLine:
    "For Indonesian teams: jasa pembuatan website, desain UI/UX, solusi AI, automasi n8n, dan integrasi API.",
  indonesianServices: [
    {
      title: "Jasa Pembuatan Website",
      description:
        "Kami merancang struktur, tampilan, dan implementasi website yang responsif, mudah digunakan, serta mudah dirawat setelah diluncurkan.",
    },
    {
      title: "Desain UI/UX",
      description:
        "Kami menyusun alur pengguna, wireframe, dan sistem antarmuka yang konsisten agar produk digital lebih jelas saat digunakan.",
    },
    {
      title: "Solusi AI",
      description:
        "Kami membangun solusi AI untuk pencarian dokumen, percakapan, dukungan konten, dan analisis dengan alur kerja yang dapat ditinjau.",
    },
    {
      title: "Automasi n8n",
      description:
        "Kami menghubungkan tools dan proses berulang melalui workflow n8n, termasuk penanganan error, notifikasi, dan dokumentasi.",
    },
    {
      title: "Integrasi API",
      description:
        "Kami menghubungkan aplikasi, webhook, layanan eksternal, dan data internal dengan pemetaan data serta pesan kegagalan yang jelas.",
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
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "project enquiries",
        email: site.email,
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
