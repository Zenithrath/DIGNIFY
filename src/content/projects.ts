import type { Project } from "./types";

import bem1 from "@/portfolio/bem1.png";
import bem2 from "@/portfolio/bem2.png";
import bem3 from "@/portfolio/bem3.png";
import arkbot1 from "@/portfolio/arkbot1.png";
import arkbot2 from "@/portfolio/arkbot2.png";
import arkbot3 from "@/portfolio/arkbot3.png";
import dije1 from "@/portfolio/dije1.png";
import dije2 from "@/portfolio/dije2.png";
import dije3 from "@/portfolio/dije3.png";
import dignify1 from "@/portfolio/dignify1.png";
import dignify2 from "@/portfolio/dignify2.png";
import dignify3 from "@/portfolio/dignify3.png";
import tpp1 from "@/portfolio/tpp1.png";
import tpp2 from "@/portfolio/tpp2.png";
import tpp3 from "@/portfolio/tpp3.png";

export const projects: Project[] = [
  {
    slug: "tlaga-pratama-persada",
    title: "Tlaga Pratama Persada",
    category: "Website",
    status: "Concept Project",
    year: 2026,
    summary:
      "Konsep redesign tidak resmi untuk Tlaga Pratama Persada, pemasok industri di Balikpapan. Situs satu halaman untuk produk abrasive, solusi packing, dan konsumabel industri.",
    overview:
      "Konsep redesign kehadiran web Tlaga Pratama Persada, supplier umum di Balikpapan yang melayani pertambangan, konstruksi, galangan kapal, dan manufaktur. Konsepnya mencakup profil perusahaan, lini produk, mitra merek, layanan, dan kontak dalam satu halaman.",
    challenge:
      "Supplier industri harus bisa dipercaya dengan cepat. Konsepnya harus merapikan rentang produk yang luas (abrasive, solusi packing, dan konsumabel lainnya) ke dalam satu halaman tanpa berubah jadi katalog yang berantakan.",
    approach:
      "Kami bangun halamannya di sekitar satu struktur: hero yang kuat, bagian about yang ringkas, sorotan produk yang dikelompokkan berdasarkan kode lini produk, mitra merek, layanan, dan jalur kontak. Setiap produk punya tautan inquiry langsung ke WhatsApp.",
    solution:
      "Situs satu halaman yang menampilkan perusahaan dan produknya dengan jelas. Lini produk pakai kode ABR, PKG, dan CON, dan setiap bagian mengarahkan pengunjung ke langkah berikutnya yang nyata, sebagian besar lewat WhatsApp.",
    process: [
      { step: "Brief", detail: "Mempelajari rentang produk, sektor, dan saluran kontak perusahaan." },
      { step: "Structure", detail: "Merencanakan satu halaman dengan anchor yang jelas untuk profil, produk, merek, layanan, dan kontak." },
      { step: "Design", detail: "Menetapkan nuansa industri dengan foto produk dan kode bagian." },
      { step: "Build", detail: "Mengimplementasikan halamannya dengan Next.js dan TypeScript." },
      { step: "Disclaimer", detail: "Menandai konsep ini sebagai tidak resmi supaya tidak pernah disangka kehadiran resmi perusahaan." },
    ],
    gallery: [
      { index: 1, caption: "Hero: posisi industri dan fokus produk", src: tpp1 },
      { index: 2, caption: "Sorotan produk: lini abrasive dan packing dengan jalur inquiry", src: tpp2 },
      { index: 3, caption: "Layanan dan kontak: opsi dukungan dan jalur utama WhatsApp", src: tpp3 },
    ],
    cover: tpp1,
    tech: ["Next.js", "TypeScript"],
    links: [
      { label: "Demo langsung", href: "https://telaga-pratama-persada.vercel.app/" },
      { label: "Kode sumber", href: "https://github.com/Zenithrath/TelagaPratamaPersada" },
    ],
    reflection:
      "Konsep ini membuktikan profil perusahaan industri tidak harus membosankan. Kode yang rapi, struktur yang jelas, dan satu jalur kontak yang kuat sudah cukup membawa hasilnya.",
    nextSlug: "bem-vokasi-ub-2025",
  },
  {
    slug: "bem-vokasi-ub-2025",
    title: "BEM Vokasi UB 2025",
    category: "Website",
    status: "Client Project",
    year: 2025,
    summary:
      "Situs company profile dan informasi untuk BEM Vokasi UB 2025. Dibangun di dalam kampus untuk kabinet, lengkap dengan sistem permintaan edit untuk kementerian Kominfo.",
    overview:
      "Kehadiran web resmi BEM Vokasi Universitas Brawijaya periode 2025. Mencakup profil kabinet, informasi organisasi, dan program dalam lima sampai tujuh halaman. Kebutuhannya datang langsung dari orang-orang yang memelihara situsnya.",
    challenge:
      "Situs organisasi punya dua penonton: pengunjung yang mencari informasi dan tim internal yang menjaga informasinya tetap baru. Tanpa jalur konten yang jelas, situsnya bakal usang seminggu setelah diluncurkan. Masalah praktisnya adalah bikin pembaruan konten yang sering jadi mudah buat kabinet mahasiswa yang tidak punya tim web khusus.",
    approach:
      "Kami pakai TypeScript, React, dan Tailwind dengan komponen bersama supaya kabinet bisa menjaga konsistensi tiap halaman. Fitur utamanya adalah sistem permintaan yang memberi kementerian Kominfo satu tempat yang jelas buat meminta dan melacak edit.",
    solution:
      "Situs company profile dengan lima sampai tujuh halaman dan alur permintaan edit yang berfungsi. Informasi diorganisir per divisi dan program, dan kementerian Kominfo bisa mengirim serta melacak permintaan di satu tempat.",
    process: [
      { step: "Brief", detail: "Mengumpulkan kebutuhan dari divisi kabinet dan kementerian Kominfo." },
      { step: "Architecture", detail: "Merencanakan struktur halaman untuk profil, program, divisi, kontak, dan alur konten." },
      { step: "Build", detail: "Mengimplementasikan situs React dengan komponen layout bersama." },
      { step: "Order system", detail: "Membangun alur permintaan edit supaya permintaan konten jelas dan bisa dilacak." },
      { step: "Handover", detail: "Mendokumentasikan cara kabinet memelihara konten setelah diluncurkan." },
    ],
    gallery: [
      { index: 1, caption: "Halaman profil: struktur organisasi dan informasi kabinet", src: bem1 },
      { index: 2, caption: "Alur permintaan edit: sistem permintaan konten Kominfo", src: bem2 },
      { index: 3, caption: "Bagian program: konten divisi dan program dalam satu layout bersama", src: bem3 },
    ],
    cover: bem1,
    tech: ["TypeScript", "React", "Tailwind CSS"],
    reflection:
      "Bekerja di dalam organisasinya menunjukkan kebutuhan situsnya setelah diluncurkan. Sistem permintaan edit jadi cara praktis kabinet menjaga kontennya tetap baru.",
    nextSlug: "djibril-rangga-deja",
  },
  {
    slug: "djibril-rangga-deja",
    title: "Djibril Rangga Deja",
    category: "Website",
    status: "Internal Project",
    year: 2026,
    summary:
      "Situs portfolio pribadi Djibril Rangga Deja, salah satu dari dua pendiri studio Dignify. Satu halaman untuk profil, karya pilihan, keahlian, sertifikat, dan pengalaman.",
    overview:
      "Situs pribadi Djibril, yang memegang sisi AI dan otomasi di studio. Menampilkan profil, karya pilihan, keahlian, sertifikat, pengalaman kerja, dan saluran kontak dalam satu halaman gulir.",
    challenge:
      "Situs pribadi untuk seorang AI engineer harus membuktikan kerjanya tanpa membuat halamannya menggelembung. Situsnya juga harus memberi pengunjung jalur yang jelas ke CV dan saluran kontaknya.",
    approach:
      "Kami menyusun halamannya dalam bagian bernomor: profil, karya pilihan, keahlian, sertifikat, pengalaman, dan kontak. Tiap karya punya filter kategori, dan kontak selalu satu klik dari mana pun.",
    solution:
      "Portfolio satu halaman yang mencakup hal-hal penting. Karya pilihannya termasuk situs studio Dignify, situs BEM Vokasi, konsep Tlaga Pratama Persada, sistem IoT Sentinel, asisten audit Arkbot, dan bot helpdesk Arka.",
    process: [
      { step: "Profile", detail: "Menetapkan posisi: AI engineer yang fokus ke workflow n8n dan otomasi." },
      { step: "Structure", detail: "Merencanakan bagian bernomor dari profil sampai kontak." },
      { step: "Work index", detail: "Mendaftar proyek yang beneran ada, lengkap dengan filter dan detail." },
      { step: "Credentials", detail: "Menambahkan sertifikat dan pengalaman kerja yang dilabeli jelas." },
      { step: "Contact", detail: "Membangun jalur kontak dengan unduhan CV, email, dan WhatsApp." },
    ],
    gallery: [
      { index: 1, caption: "Hero: posisi dan profil di atas indeks karya", src: dije1 },
      { index: 2, caption: "Karya pilihan: daftar proyek dengan filter", src: dije2 },
      { index: 3, caption: "Keahlian dan sertifikat: tools, sertifikat, dan pengalaman", src: dije3 },
    ],
    cover: dije1,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Demo langsung", href: "https://djibril-rangga.vercel.app/" },
      { label: "Kode sumber", href: "https://github.com/Zenithrath/portofolio" },
    ],
    reflection:
      "Situs pribadi pendirinya mengikuti aturan yang sama dengan semua proyek di portfolio ini: setiap karya ditampilkan sesuai kenyataannya.",
    nextSlug: "dignify-studio-site",
  },
  {
    slug: "dignify-studio-site",
    title: "Dignify Studio Site",
    category: "Website",
    status: "Internal Project",
    year: 2026,
    summary:
      "Situs web studio sendiri. Sistem editorial bergaya industrial modern yang menunjukkan standar yang Dignify bawa ke pekerjaan klien.",
    overview:
      "Ini proyek internal pertama kami dan contoh paling jelas cara kami bekerja. Situs ini menggabungkan grid modular, hierarki editorial, aksen yang dibatasi, konten terketik, dan markup yang bisa diakses dalam satu produk yang berfungsi.",
    challenge:
      "Studio yang dijalankan tiga orang butuh satu situs yang menjelaskan layanan, membangun kepercayaan, dan menunjukkan kualitas kerjanya. Kami memilih sistem yang disengaja, bukan template agensi generik.",
    approach:
      "Kami menetapkan aturan visualnya dulu: dua permukaan monokrom, dua aksen, tiga tipografi, dan satu grid. Kontennya hidup di file data terketik, jadi kami bisa memperbarui situsnya tanpa menulis ulang layout.",
    solution:
      "Hasilnya situs dengan tujuh halaman: beranda editorial, layanan yang detail, portfolio yang bisa difilter, studi kasus, halaman tentang, halaman testimoni yang hanya melaporkan apa yang ada, dan formulir kontak. Lembaran visualnya memakai SVG dan geometri, jadi situsnya tidak bergantung pada pustaka gambar yang besar.",
    process: [
      { step: "Identity", detail: "Menetapkan fondasi monokrom, aturan aksen, dan skala tipografi sebelum layout apa pun." },
      { step: "System", detail: "Mendefinisikan primitif yang bisa dipakai ulang: bagian, garis, tag, tombol, dan perilaku reveal." },
      { step: "Content", detail: "Menulis lapisan konten terketik untuk layanan, proyek, proses, dan nilai sebelum membangun halamannya." },
      { step: "Implementation", detail: "Membangun rute di server dan menambahkan komponen client hanya di tempat filter, formulir, atau motion membutuhkannya." },
      { step: "Validation", detail: "Menjalankan lint, type check, dan build produksi; mengaudit integritas konten dan aksesibilitas." },
    ],
    gallery: [
      { index: 1, caption: "Komposisi hero: tipografi display besar di atas sistem geometris", src: dignify1 },
      { index: 2, caption: "Indeks layanan: baris editorial bernomor, bukan kartu generik", src: dignify2 },
      { index: 3, caption: "Layout studi kasus: bagian berkotak dengan metadata teknis", src: dignify3 },
    ],
    cover: dignify1,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    reflection:
      "Membangun situs sendiri memperjelas proses kami. Tim kecil bergerak lebih cepat saat aturan visual dan struktur kontennya dituliskan. Kami juga menjaga klaimnya tetap dekat dengan pekerjaan yang benar-benar kami lakukan.",
    nextSlug: "arkananta-ai-audit-assistant",
  },
  {
    slug: "arkananta-ai-audit-assistant",
    title: "Arkananta AI Audit Assistant",
    category: "Automation",
    status: "Client Project",
    year: 2026,
    summary:
      "Asisten AI yang dibangun dengan n8n untuk pekerjaan audit di Arkananta Apta Pratista. Menjawab pertanyaan audit, menunjukkan bukti pendukung, dan mengambil file dari Google Drive dengan RAG.",
    overview:
      "Chatbot ini menjawab pertanyaan audit dan menunjuk dokumen di balik tiap jawaban. Ia juga bisa menemukan dan mengirim file yang dibutuhkan auditor. Basis pengetahuannya hidup di Google Drive dan dicari lewat pipeline RAG.",
    challenge:
      "Jawaban audit hanya berguna kalau sumbernya bisa dicek. Sistemnya juga harus bisa menerima file baru tanpa membangun ulang workflow setiap kali basis pengetahuan bertambah.",
    approach:
      "Google Drive dijadikan sumber kebenaran. Workflow n8n mengambil dokumen yang relevan, memberikan konteks itu ke model, dan mengembalikan file sumber bersama jawabannya. Model berbasis GPT dan model cadangan menangani chat, sementara jalur unggah file menambah pengetahuan baru ke indeks pencarian.",
    solution:
      "Asisten yang selesai menggabungkan front end, workflow n8n, dan integrasi yang dibutuhkan. Ia menjawab dengan kutipan sumber, mengambil file pendukung, dan menerima dokumen yang diunggah. Model cadangan menjaga chat tetap tersedia saat penyedia utama sedang tidak bisa diakses.",
    process: [
      { step: "Scoping", detail: "Memetakan pertanyaan audit, sumber file, dan kebutuhan bukti." },
      { step: "Knowledge", detail: "Menyambungkan Google Drive sebagai sumber dan merancang alur pengambilan RAG." },
      { step: "Workflow", detail: "Membangun backend n8n untuk perutean model, pengambilan dokumen, dan penanganan cadangan." },
      { step: "Front end", detail: "Membangun antarmuka chat untuk jawaban, bukti, dan file." },
      { step: "Update path", detail: "Menambahkan jalur unggah file supaya basis pengetahuan bisa tumbuh tanpa pembangunan ulang." },
    ],
    gallery: [
      { index: 1, caption: "Alur chat: pertanyaan, konteks yang diambil, dan jawaban bersumber", src: arkbot1 },
      { index: 2, caption: "Bukti: file sumber yang dilampirkan ke jawaban", src: arkbot2 },
      { index: 3, caption: "Pengetahuan: sumber Google Drive dan jalur unggah file", src: arkbot3 },
    ],
    cover: arkbot1,
    tech: ["n8n", "GPT", "DeepSeek", "Google Drive", "RAG"],
    reflection:
      "Aturan yang paling penting sederhana: asistennya harus menunjukkan sumber untuk setiap jawaban. Itu menjaga tools-nya tetap berguna untuk pekerjaan audit dan memberi tim sesuatu yang bisa mereka verifikasi.",
    nextSlug: "tlaga-pratama-persada",
  },
];

export const statusLabels = {
  "Client Project": { en: "Client Project", id: "Proyek Klien" },
  "Internal Project": { en: "Internal Project", id: "Proyek Internal" },
  "Concept Project": { en: "Concept Project", id: "Proyek Konsep" },
} as const;

export type ProjectStatusKey = keyof typeof statusLabels;

export function statusLabel(status: string, locale: "en" | "id"): string {
  const labels = statusLabels[status as ProjectStatusKey];
  return labels ? labels[locale] : status;
}

export const filterOptions = ["All", "Website", "UI/UX", "Automation", "Internal", "Concept"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}