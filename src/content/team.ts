export const team = [
  {
    name: "Dije",
    role: "Front End, Automation and Social Media",
    roleId: "Front End, Otomasi & Media Sosial",
    focus: [
      "Front End Development",
      "UI/UX Design",
      "Automation",
      "Social Media",
    ],
    initials: "DJ",
    founder: true,
    portfolioUrl: "https://djibril-rangga.vercel.app/",
    githubUrl: "https://github.com/Zenithrath",
  },
  {
    name: "Ignas",
    role: "SEO and Planning",
    roleId: "SEO & Perencanaan",
    focus: [
      "SEO Planning",
      "Technical SEO",
      "Content Strategy",
    ],
    initials: "IG",
    founder: true,
    portfolioUrl: null,
    githubUrl: null,
  },
  {
    name: "Daniel",
    role: "Back End and Database",
    roleId: "Back End & Database",
    focus: [
      "Back End Architecture",
      "Database Design",
      "API and Database Integration",
    ],
    initials: "DN",
    founder: true,
    portfolioUrl: null,
    githubUrl: null,
  },
] as const;

export const about = {
  mission:
    "To build digital systems that respect the people who use them and the people who maintain them. We keep the work structured, clear, and free from decoration that serves no purpose.",
  origin:
    "Dignify began with three people who kept seeing the same problems in digital work: interfaces that ignored structure, code that ignored the design, and processes that ignored the people using them. We started Dignify to work with more care.",
  nameMeaning:
    "To dignify something is to give it worth and clarity. We apply that idea to every product we touch, from the interface and the code behind it to the people who use it.",
} as const;

export const aboutId = {
  heroTitle: ["Kami Bukan Vendor.", "Kami Partner yang Ikut Mengerjakan."],
  intro:
    "Dignify adalah studio digital kecil yang dibangun Dije, Ignas, dan Daniel. Kami ngerjain website, UI/UX, solusi AI, otomasi n8n, dan integrasi API — dengan standar yang sama buat tiap project.",
  stats: [
    { value: "03", label: "Orang di studio" },
    { value: "05", label: "Layanan digital" },
    { value: "ID", label: "Area kerja" },
    { value: "24 JAM", label: "Target balas pesan" },
  ],
  principles: {
    title: "Dekat, Praktis, dan Bisa Dicek.",
    items: [
      {
        title: "Area Fokus",
        detail: "Website, UI/UX, solusi AI, otomasi n8n, dan integrasi API buat bisnis di Indonesia.",
      },
      {
        title: "Respons",
        detail: "Berusaha balas pesan dalam 24 jam.",
      },
      {
        title: "Cara Kerja",
        detail: "Mulai dari kebutuhan yang paling prioritas, bukan dari tren.",
      },
    ],
  },
  story: {
    title: "Berawal dari Masalah yang Sama.",
    paragraphs: [
      "Dignify berangkat dari tiga orang yang terus lihat masalah yang sama di pekerjaan digital: antarmuka yang mengabaikan struktur, kode yang mengabaikan desain, dan proses yang mengabaikan orang yang memakainya.",
      "Masalahnya selalu sama: yang penting ditaruh paling belakang. Kerja digital sering cuma dikejar biar kelar, nggak dikejar biar jelas. Kami mendirikan Dignify buat kerja dengan lebih hati-hati.",
    ],
    quote: "Bukan karena orangnya nggak bisa. Tapi karena yang penting sering ditaruh paling belakang.",
    quoteAttrib: "Pola yang kami lihat terus di pekerjaan digital",
  },
  statement:
    "Kami nggak cuma nyelesain proyek. Kami ikut jaga hasilnya tetap jelas dan terawat.",
  workModes: {
    title: "Satu Standar, Tiga Cara Kami Bekerja.",
    items: [
      {
        index: "A",
        title: "Kerjaan, bukan sekadar klien",
        detail:
          "Kami nggak hilang setelah proyek selesai. Dokumentasi dan struktur bikin hasilnya tetap bisa dirawat.",
      },
      {
        index: "B",
        title: "Hasil yang bisa dicek",
        detail:
          "Kode, scope, dan progress bisa kamu periksa kapan aja. Nggak ada janji kosong.",
      },
      {
        index: "C",
        title: "Fokus ke kebutuhanmu",
        detail:
          "Solusi dipilih dari masalah yang nyata, bukan paket copy-paste yang sama buat semua orang.",
      },
    ],
  },
  team: {
    title: "Siapa di Balik Dignify?",
    lines: {
      Dije: "Pegang front end, otomasi, dan media sosial.",
      Ignas: "Pegang SEO dan perencanaan.",
      Daniel: "Pegang back end dan database.",
    },
  },
  cta: {
    title: "Masih bingung mau mulai dari mana?",
    sub: "Ceritakan kebutuhanmu. Kami bantu petakan masalah yang paling prioritas sebelum bicara paket. Konsultasi pertama gratis, tanpa komitmen.",
    primary: "Konsultasi Gratis",
    secondary: "Lihat Portfolio",
  },
} as const;
