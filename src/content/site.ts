import { siteUrl } from "@/lib/utils";

export const site = {
  name: "Dignify",
  wordmark: "DIGNIFY",
  tagline: "Digital Studio",
  description: "Dignify designs, develops, and automates modern digital experiences for businesses that need structure, usability, and impact.",
  url: siteUrl,
  email: "dignify@gmail.com",
  foundedBy: "Dije & Ignas",
  location: "Available worldwide · Remote",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;
