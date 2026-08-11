import { siteUrl } from "@/lib/utils";

export const site = {
  name: "Dignify",
  wordmark: "DIGNIFY",
  tagline: "Digital Studio",
  description:
    "Dignify builds responsive landing pages, portfolio websites, company profiles and custom digital experiences for brands, businesses and personal projects.",
  descriptionId:
    "Dignify menyediakan jasa pembuatan website, landing page, company profile, portfolio, dan web development custom untuk bisnis dan personal brand.",
  url: siteUrl,
  email: "studiodignify@gmail.com",
  foundedBy: "Dije, Ignas and Daniel",
  location: "Available worldwide · Remote",
  locationId: "Melayani kebutuhan website untuk client di Indonesia",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;

export const navLinksId = [
  { href: "/id", label: "Beranda" },
  { href: "/id/services", label: "Layanan" },
  { href: "/id/portfolio", label: "Portfolio" },
  { href: "/id/about", label: "Tentang" },
  { href: "/id/testimonials", label: "Testimoni" },
  { href: "/id/contact", label: "Kontak" },
] as const;
