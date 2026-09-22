import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin/auth";
import { readSupabaseConfig, uploadToStorage } from "@/lib/news";
import { slugify } from "@/lib/news/types";

export const dynamic = "force-dynamic";

const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
};

export async function POST(request: Request) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Nicht angemeldet." }, { status: 401 });
  }

  const cfg = readSupabaseConfig();
  if (!cfg) {
    return NextResponse.json(
      {
        error:
          "Kein Storage konfiguriert. Bilder können hinterlegt werden, indem sie unter public/images/ eingecheckt und der Pfad eingetragen wird.",
      },
      { status: 503 }
    );
  }

  let file: File | null = null;
  try {
    const form = await request.formData();
    const candidate = form.get("file");
    file = candidate instanceof File ? candidate : null;
  } catch {
    return NextResponse.json({ error: "Ungültiger Upload." }, { status: 400 });
  }

  if (!file) {
    return NextResponse.json({ error: "Keine Datei erhalten." }, { status: 400 });
  }

  const extension = ALLOWED[file.type];
  if (!extension) {
    return NextResponse.json(
      { error: "Nur JPEG, PNG, WebP oder AVIF sind erlaubt." },
      { status: 415 }
    );
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Datei ist grösser als 8 MB." },
      { status: 413 }
    );
  }

  const base = slugify(file.name.replace(/\.[^.]+$/, "")) || "bild";
  const objectPath = `${new Date().getFullYear()}/${Date.now()}-${base}.${extension}`;

  try {
    const url = await uploadToStorage(
      cfg,
      process.env.SUPABASE_STORAGE_BUCKET?.trim() || "news",
      objectPath,
      await file.arrayBuffer(),
      file.type
    );
    return NextResponse.json({ url }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload fehlgeschlagen." },
      { status: 500 }
    );
  }
}
