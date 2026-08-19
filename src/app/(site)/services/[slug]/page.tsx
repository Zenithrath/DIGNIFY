import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ServiceDetailPage,
  generateServiceMetadata,
} from "@/components/services/service-detail-page";
import { serviceSlugs, serviceDetailsId } from "@/content/service-details";
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
  if (!(slug in serviceDetailsId)) return {};
  return generateServiceMetadata("id", slug, {
    title: seo.servicesId.title,
    description: seo.servicesId.description,
  });
}

export default async function ServiceDetailIdRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = serviceDetailsId[slug as keyof typeof serviceDetailsId];
  if (!content) notFound();
  return <ServiceDetailPage content={content} locale="id" slug={slug} />;
}
