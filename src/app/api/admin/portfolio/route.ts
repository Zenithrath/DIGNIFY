import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, isAdminToken } from "@/lib/auth";
import {
  fetchProjectsFromDb,
  saveProjectStore,
  deleteProjectStore,
  setProjectFeaturedStore,
} from "@/lib/cms-store";
import type { Project } from "@/content/types";

async function verifyAdmin(request: NextRequest) {
  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  return isAdminToken(token);
}

export async function GET(request: NextRequest) {
  if (!(await verifyAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const projects = await fetchProjectsFromDb();
  return NextResponse.json({ projects });
}

export async function POST(request: NextRequest) {
  if (!(await verifyAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json().catch(() => null)) as Project | null;
  if (!body || !body.title || !body.slug) {
    return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
  }

  try {
    const saved = await saveProjectStore(body);
    return NextResponse.json({ ok: true, project: saved });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await verifyAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ error: "Slug query param required" }, { status: 400 });
  }

  try {
    const success = await deleteProjectStore(slug);
    return NextResponse.json({ ok: success });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await verifyAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json().catch(() => null)) as {
    slug?: string;
    featured?: boolean;
  } | null;
  if (!body?.slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  const updated = await setProjectFeaturedStore(body.slug, Boolean(body.featured));
  if (!updated) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, project: updated });
}
