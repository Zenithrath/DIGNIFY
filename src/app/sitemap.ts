import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { serviceSlugs } from "@/content/service-details";

function pair(enPath: string, idPath: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]) {
  return [
    {
      url: `${site.url}${enPath}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: { en: `${site.url}${enPath}`, id: `${site.url}${idPath}`, "x-default": `${site.url}${enPath}` },
      },
    },
    {
      url: `${site.url}${idPath}`,
      lastModified: new Date(),
      changeFrequency,
      priority: priority - 0.05,
      alternates: {
        languages: { en: `${site.url}${enPath}`, id: `${site.url}${idPath}`, "x-default": `${site.url}${enPath}` },
      },
    },
  ] satisfies MetadataRoute.Sitemap;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const home = pair("/", "/id", 1, "monthly");
  const webDevelopment = pair("/web-development", "/id/jasa-pembuatan-website", 0.9, "monthly");
  const services = pair("/services", "/id/services", 0.9, "monthly");
  const portfolio = pair("/portfolio", "/id/portfolio", 0.9, "monthly");
  const about = pair("/about", "/id/about", 0.7, "monthly");
  const testimonials = pair("/testimonials", "/id/testimonials", 0.5, "monthly");
  const contact = pair("/contact", "/id/contact", 0.8, "monthly");

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.flatMap((slug) =>
    pair(`/services/${slug}`, `/id/services/${slug}`, 0.8, "monthly"),
  );

  const projectRoutes: MetadataRoute.Sitemap = projects.flatMap((project) => [
    {
      url: `${site.url}/portfolio/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${site.url}/portfolio/${project.slug}`,
          id: `${site.url}/id/portfolio/${project.slug}`,
          "x-default": `${site.url}/portfolio/${project.slug}`,
        },
      },
    },
    {
      url: `${site.url}/id/portfolio/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: {
          en: `${site.url}/portfolio/${project.slug}`,
          id: `${site.url}/id/portfolio/${project.slug}`,
          "x-default": `${site.url}/portfolio/${project.slug}`,
        },
      },
    },
  ]);

  return [...home, ...webDevelopment, ...services, ...portfolio, ...about, ...testimonials, ...contact, ...serviceRoutes, ...projectRoutes];
}