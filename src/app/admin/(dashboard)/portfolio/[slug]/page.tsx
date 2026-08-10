"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Container } from "@/components/ui/container";
import { PortfolioEditorForm } from "@/components/admin/portfolio-editor";
import type { Project } from "@/content/types";

export default function EditProjectPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    fetch("/api/admin/portfolio")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.projects) {
          const found = (data.projects as Project[]).find((p) => p.slug === slug);
          if (found) {
            setProject(found);
          } else {
            setNotFound(true);
          }
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <Container className="py-10 sm:py-14">
        <p className="font-mono text-xs text-muted-dark">Loading project data...</p>
      </Container>
    );
  }

  if (notFound || !project) {
    return (
      <Container className="py-10 sm:py-14">
        <p className="font-mono text-xs text-red-400">Project not found.</p>
      </Container>
    );
  }

  return (
    <PortfolioEditorForm
      initialProject={project}
      heading={`Edit: ${project.title}`}
    />
  );
}
