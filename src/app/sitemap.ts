import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/id`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${site.url}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/portfolio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${site.url}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${site.url}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
