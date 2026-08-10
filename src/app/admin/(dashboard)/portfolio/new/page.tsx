import type { Metadata } from "next";
import { PortfolioEditorForm } from "@/components/admin/portfolio-editor";

export const metadata: Metadata = {
  title: "New Project | Admin",
  robots: { index: false, follow: false },
};

export default function NewProjectPage() {
  return <PortfolioEditorForm heading="New Project" />;
}
