import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin/auth";
import { getNewsStore, validateNewsInput } from "@/lib/news";

export const dynamic = "force-dynamic";

type Params = { params: { id: string } };

function guard() {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Nicht angemeldet." }, { status: 401 });
  }
  const store = getNewsStore();
  if (!store.writable) {
    return NextResponse.json(
      { error: "Kein beschreibbares News-Backend konfiguriert." },
      { status: 503 }
    );
  }
  return null;
}

export async function PATCH(request: Request, { params }: Params) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Nicht angemeldet." }, { status: 401 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültiges JSON." }, { status: 400 });
  }

  const result = validateNewsInput(raw);
  if (!result.ok) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  const blocked = guard();
  if (blocked) return blocked;

  const store = getNewsStore();
  if (!store.update) {
    return NextResponse.json({ error: "Nicht unterstützt." }, { status: 503 });
  }

  try {
    const post = await store.update(params.id, result.value);
    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Speichern fehlgeschlagen." },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  const blocked = guard();
  if (blocked) return blocked;

  const store = getNewsStore();
  if (!store.remove) {
    return NextResponse.json({ error: "Nicht unterstützt." }, { status: 503 });
  }

  try {
    await store.remove(params.id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Löschen fehlgeschlagen." },
      { status: 500 }
    );
  }
}
