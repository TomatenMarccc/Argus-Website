import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  createSessionToken,
  isAdminConfigured,
  passwordMatches,
  sessionCookieOptions,
} from "@/lib/admin/auth";

export const dynamic = "force-dynamic";

/** Sign in. The password never leaves the server beyond this comparison. */
export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Admin-Bereich ist nicht konfiguriert." },
      { status: 503 }
    );
  }

  let password = "";
  try {
    const body = await request.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (!passwordMatches(password)) {
    /* Deliberately vague — no hint about which part was wrong. */
    return NextResponse.json(
      { error: "Anmeldung fehlgeschlagen." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, createSessionToken(), sessionCookieOptions());
  return response;
}

/** Sign out. */
export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, "", { ...sessionCookieOptions(), maxAge: 0 });
  return response;
}
