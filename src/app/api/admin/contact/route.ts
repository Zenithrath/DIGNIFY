import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, isAdminToken } from "@/lib/auth";
import {
  fetchSubmissionsFromDb,
  updateSubmissionStatusStore,
  deleteContactSubmissionStore,
  fetchStudioSettingsFromDb,
  updateStudioSettingsStore,
  type ContactSubmission,
} from "@/lib/cms-store";

async function verifyAdmin(request: NextRequest) {
  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  return isAdminToken(token);
}

export async function GET(request: NextRequest) {
  if (!(await verifyAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const submissions = await fetchSubmissionsFromDb();
  const settings = await fetchStudioSettingsFromDb();

  return NextResponse.json({
    submissions,
    settings,
  });
}

export async function POST(request: NextRequest) {
  if (!(await verifyAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json().catch(() => null)) as {
    action?: "update_status" | "update_settings";
    id?: string;
    status?: ContactSubmission["status"];
    settings?: Partial<ReturnType<typeof fetchStudioSettingsFromDb> extends Promise<infer T> ? T : never>;
  } | null;

  if (!body || !body.action) {
    return NextResponse.json({ error: "Action is required" }, { status: 400 });
  }

  if (body.action === "update_status" && body.id && body.status) {
    const ok = await updateSubmissionStatusStore(body.id, body.status);
    return NextResponse.json({ ok });
  }

  if (body.action === "update_settings" && body.settings) {
    const updated = await updateStudioSettingsStore(body.settings);
    return NextResponse.json({ ok: true, settings: updated });
  }

  return NextResponse.json({ error: "Invalid action payload" }, { status: 400 });
}

export async function DELETE(request: NextRequest) {
  if (!(await verifyAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "ID query param required" }, { status: 400 });
  }

  const ok = await deleteContactSubmissionStore(id);
  return NextResponse.json({ ok });
}
