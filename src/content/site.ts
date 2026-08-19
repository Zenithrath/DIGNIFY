import { siteUrl } from "@/lib/utils";
import { testimonialsState } from "./testimonials";

export const site = {
  name: "Dignify",
  wordmark: "DIGNIFY",
  tagline: "Digital Studio",
  description:
    "Dignify builds responsive landing pages, portfolio websites, company profiles and custom digital experiences for brands, businesses and personal projects.",
  descriptionId:
    "Dignify bantu bisnis dan personal brand bikin website, landing page, company profile, portfolio, dan web development custom yang responsif dan siap dipakai.",
  url: siteUrl,
  email: "studiodignify@gmail.com",
  phone: "+62 877-8392-3671",
  whatsappUrl: "https://wa.me/6287783923671",
  foundedBy: "Dije, Ignas, Daniel and Dzaky",
  location: "Available worldwide · Remote",
  locationId: "Melayani kebutuhan website untuk client di Indonesia",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const navLinksId = [
  { href: "/", label: "Beranda" },
  { href: "/services", label: "Layanan" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
] as const;

export const testimonialLink = { href: "/testimonials", label: "Testimonials" } as const;
export const testimonialLinkId = { href: "/testimonials", label: "Testimoni" } as const;

export function primaryNav(locale: "en" | "id") {
  const base = locale === "id" ? navLinksId : navLinks;
  if (!testimonialsState.published) return [...base];
  return [...base, locale === "id" ? testimonialLinkId : testimonialLink];
}
