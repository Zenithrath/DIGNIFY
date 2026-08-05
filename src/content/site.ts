import { siteUrl } from "@/lib/utils";

export const site = {
  name: "Dignify",
  wordmark: "DIGNIFY",
  tagline: "Digital Studio",
  description: "Dignify builds websites, interfaces, AI tools, and automations for teams that need clear digital products.",
  url: siteUrl,
  email: "djibril.ranggadeja@gmail.com",
  foundedBy: "Dije and Ignas",
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
