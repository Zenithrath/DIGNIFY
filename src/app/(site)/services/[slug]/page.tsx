import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ServiceDetailPage,
  generateServiceMetadata,
} from "@/components/services/service-detail-page";
import { serviceSlugs, serviceDetailsEn } from "@/content/service-details";
import { seo } from "@/content/seo";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!(slug in serviceDetailsEn)) return {};
  return generateServiceMetadata("en", slug, {
    title: seo.services.title,
    description: seo.services.description,
  });
}

export default async function ServiceDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = serviceDetailsEn[slug as keyof typeof serviceDetailsEn];
  if (!content) notFound();
  return <ServiceDetailPage content={content} locale="en" slug={slug} />;
}
