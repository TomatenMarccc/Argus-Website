import crypto from "node:crypto";
import { cookies } from "next/headers";

/**
 * Minimal server-side admin session.
 *
 * The password lives in ADMIN_PASSWORD and is never shipped to the browser;
 * the browser only ever holds an HMAC-signed, httpOnly session cookie. There is
 * deliberately no credential in the source tree — if the environment is not
 * configured, the admin area reports itself as unavailable rather than falling
 * back to anything permissive.
 */
export const SESSION_COOKIE = "acs_admin";
const MAX_AGE_SECONDS = 60 * 60 * 8;

export function isAdminConfigured(): boolean {
  return Boolean(
    process.env.ADMIN_PASSWORD?.trim() && process.env.ADMIN_SESSION_SECRET?.trim()
  );
}

function secret(): string {
  const s = process.env.ADMIN_SESSION_SECRET?.trim();
  if (!s) throw new Error("ADMIN_SESSION_SECRET is not configured");
  return s;
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
}

/** Constant-time comparison so the password cannot be probed by timing. */
export function passwordMatches(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD?.trim();
  if (!expected) return false;
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  if (a.length !== b.length) {
    /* Still burn a comparison so length is not leaked by timing alone. */
    crypto.timingSafeEqual(b, b);
    return false;
  }
  return crypto.timingSafeEqual(a, b);
}

export function createSessionToken(now = Date.now()): string {
  const expires = Math.floor(now / 1000) + MAX_AGE_SECONDS;
  const payload = String(expires);
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  let expected: string;
  try {
    expected = sign(payload);
  } catch {
    return false;
  }

  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;

  const expires = Number(payload);
  return Number.isFinite(expires) && expires * 1000 > Date.now();
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  };
}

/** True when the current request carries a valid admin session. */
export function isAuthenticated(): boolean {
  if (!isAdminConfigured()) return false;
  return verifySessionToken(cookies().get(SESSION_COOKIE)?.value);
}
