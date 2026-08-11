import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: { en: site.url, id: `${site.url}/id`, "x-default": site.url },
      },
    },
    {
      url: `${site.url}/id`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
      alternates: {
        languages: { en: site.url, id: `${site.url}/id`, "x-default": site.url },
      },
    },
    {
      url: `${site.url}/web-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${site.url}/web-development`,
          id: `${site.url}/id/jasa-pembuatan-website`,
          "x-default": `${site.url}/web-development`,
        },
      },
    },
    {
      url: `${site.url}/id/jasa-pembuatan-website`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${site.url}/web-development`,
          id: `${site.url}/id/jasa-pembuatan-website`,
          "x-default": `${site.url}/web-development`,
        },
      },
    },
    {
      url: `${site.url}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: { en: `${site.url}/services`, id: `${site.url}/id`, "x-default": `${site.url}/services` },
      },
    },
    {
      url: `${site.url}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: { en: `${site.url}/portfolio`, id: `${site.url}/id`, "x-default": `${site.url}/portfolio` },
      },
    },
    {
      url: `${site.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: { en: `${site.url}/about`, id: `${site.url}/id`, "x-default": `${site.url}/about` },
      },
    },
    {
      url: `${site.url}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: { en: `${site.url}/testimonials`, id: `${site.url}/id`, "x-default": `${site.url}/testimonials` },
      },
    },
    {
      url: `${site.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: { en: `${site.url}/contact`, id: `${site.url}/id`, "x-default": `${site.url}/contact` },
      },
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${site.url}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
