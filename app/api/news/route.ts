import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin/auth";
import { getNewsStore, validateNewsInput } from "@/lib/news";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ error: "Nicht angemeldet." }, { status: 401 });
}

function readOnly() {
  return NextResponse.json(
    {
      error:
        "Kein beschreibbares News-Backend konfiguriert. Bitte SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY setzen.",
    },
    { status: 503 }
  );
}

/** All posts including drafts — admin only. */
export async function GET() {
  if (!isAuthenticated()) return unauthorized();
  const posts = await getNewsStore().list({ includeDrafts: true });
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  if (!isAuthenticated()) return unauthorized();

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültiges JSON." }, { status: 400 });
  }

  /* Validate first, so field-level errors surface even before a writable
     backend is configured. */
  const result = validateNewsInput(raw);
  if (!result.ok) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  const store = getNewsStore();
  if (!store.writable || !store.create) return readOnly();

  try {
    const post = await store.create(result.value);
    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Speichern fehlgeschlagen." },
      { status: 500 }
    );
  }
}
