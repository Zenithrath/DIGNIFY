import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { serviceSlugs } from "@/content/service-details";
import { fetchProjectsFromDb } from "@/lib/cms-store";

function entry(idPath: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]) {
  return {
    url: `${site.url}${idPath}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: { id: `${site.url}${idPath}`, "x-default": `${site.url}${idPath}` },
    },
  } satisfies MetadataRoute.Sitemap[number];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const home = entry("/id", 1, "monthly");
  const webDevelopment = entry("/id/jasa-pembuatan-website", 0.9, "monthly");
  const services = entry("/id/services", 0.9, "monthly");
  const portfolio = entry("/id/portfolio", 0.9, "monthly");
  const about = entry("/id/about", 0.7, "monthly");
  const testimonials = entry("/id/testimonials", 0.5, "monthly");
  const contact = entry("/id/contact", 0.8, "monthly");

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) =>
    entry(`/id/services/${slug}`, 0.8, "monthly"),
  );

  const allProjects = await fetchProjectsFromDb().catch(() => projects);
  const projectRoutes: MetadataRoute.Sitemap = allProjects.map((project) =>
    entry(`/id/portfolio/${project.slug}`, 0.6, "yearly"),
  );

  return [home, webDevelopment, services, portfolio, about, testimonials, contact, ...serviceRoutes, ...projectRoutes];
}