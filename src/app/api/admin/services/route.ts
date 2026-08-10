import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, isAdminToken } from "@/lib/auth";
import {
  fetchServicesFromDb,
  saveServiceStore,
  deleteServiceStore,
} from "@/lib/cms-store";
import type { Service } from "@/content/types";

async function verifyAdmin(request: NextRequest) {
  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  return isAdminToken(token);
}

export async function GET(request: NextRequest) {
  if (!(await verifyAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const services = await fetchServicesFromDb();
  return NextResponse.json({ services });
}

export async function POST(request: NextRequest) {
  if (!(await verifyAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json().catch(() => null)) as Service | null;
  if (!body || !body.title || !body.slug) {
    return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
  }

  const saved = await saveServiceStore(body);
  return NextResponse.json({ ok: true, service: saved });
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

  const success = await deleteServiceStore(slug);
  return NextResponse.json({ ok: success });
}
