import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    name: "Discover",
    detail:
      "We map the problem: goals, users, constraints, and what success actually looks like. Questions before answers.",
  },
  {
    index: "02",
    name: "Define",
    detail:
      "We turn the discovery into a clear scope with priorities, deliverables, and an agreed definition of done.",
  },
  {
    index: "03",
    name: "Design",
    detail:
      "We design the page structure, interface, and reusable pieces that the build will need.",
  },
  {
    index: "04",
    name: "Develop",
    detail:
      "We build in clean typed code with responsive layouts, accessible interactions, and performance checks from the first commit.",
  },
  {
    index: "05",
    name: "Deliver",
    detail:
      "We launch with documentation and a clear next step. We remain available after release when the system needs an update.",
  },
];

export const processStepsId: ProcessStep[] = [
  {
    index: "01",
    name: "Discover",
    detail:
      "Kami petakan masalahnya dulu: tujuan, pengguna, batasan, dan seperti apa sukses itu sebenarnya. Tanya dulu, jawab kemudian.",
  },
  {
    index: "02",
    name: "Define",
    detail:
      "Hasil discovery kami ubah jadi scope yang jelas: prioritas, deliverable, dan kesepakatan soal kapan sebuah pekerjaan dianggap selesai.",
  },
  {
    index: "03",
    name: "Design",
    detail:
      "Kami desain struktur halaman, antarmuka, dan komponen yang bisa dipakai ulang, yang nanti dipakai saat build.",
  },
  {
    index: "04",
    name: "Develop",
    detail:
      "Kami bangun dengan kode yang rapi dan ter-typing, layout responsif, interaksi yang aksesibel, dan cek performa sejak commit pertama.",
  },
  {
    index: "05",
    name: "Deliver",
    detail:
      "Kami launch dengan dokumentasi dan langkah selanjutnya yang jelas. Setelah rilis pun kami tetap ada kalau sistem perlu pembaruan.",
  },
];
