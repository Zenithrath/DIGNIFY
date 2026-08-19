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
  {
    name: "Dzaky",
    role: "Business Analyst and QA",
    roleId: "Business Analyst & QA",
    focus: ["Business Analysis", "Quality Assurance", "Testing"],
    initials: "DZ",
    founder: false,
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
  heroTitle: ["Halo, Kami Dignify.", "Studio Digital Kecil yang Jeli."],
  intro:
    "Dignify adalah studio digital kecil yang dibangun Dije, Ignas, Daniel, dan Dzaky. Kami ngerjain jasa pembuatan website, desain UI/UX, solusi AI, otomasi n8n, dan integrasi API dengan perhatian yang sama buat tiap project, sekecil apapun.",
  stats: [
    { value: "04", label: "Orang di studio" },
    { value: "05", label: "Layanan digital" },
    { value: "ID", label: "Area kerja" },
    { value: "24 JAM", label: "Target balas pesan" },
  ],
  principles: {
    title: "Dekat, Jujur, dan Bisa Dicek.",
    items: [
      {
        title: "Dekat dengan kamu",
        detail: "Ngobrol langsung sama yang ngerjain, bukan sama admin yang lewat-lewat.",
      },
      {
        title: "Balas cepat",
        detail: "Kami berusaha balas pesanmu dalam 24 jam.",
      },
      {
        title: "Mulai dari kebutuhan",
        detail: "Prioritasnya masalahmu, bukan tren atau nafsu pakai teknologi terbaru.",
      },
    ],
  },
  story: {
    title: "Berawal dari Masalah yang Sama.",
    paragraphs: [
      "Dignify berangkat dari tiga orang yang terus nemuin masalah yang sama di pekerjaan digital: yang penting sering ditaruh paling belakang. Antarmuka yang mengabaikan struktur, kode yang mengabaikan desain, proses yang mengabaikan orang yang memakainya. Kami mendirikan Dignify buat kerja dengan lebih hati-hati. Hasilnya jelas dan tetap bisa dirawat setelah kami serahkan.",
    ],
  },
  team: {
    title: "Siapa di Balik Dignify?",
    lines: {
      Dije: "Pegang front end, otomasi, dan media sosial.",
      Ignas: "Pegang SEO dan perencanaan.",
      Daniel: "Pegang back end dan database.",
      Dzaky: "Pegang analisis kebutuhan dan QA, testing, dokumentasi, dan jaga kualitas hasil.",
    },
  },
  cta: {
    title: "Masih bingung mau mulai dari mana?",
    sub: "Ceritakan aja kebutuhanmu. Kami bantu petakan masalah yang paling prioritas dulu, sebelum bicara paket. Konsultasi pertama gratis, tanpa komitmen.",
    primary: "Konsultasi Gratis",
    secondary: "Lihat Portfolio",
  },
} as const;
