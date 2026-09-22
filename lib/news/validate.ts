import { slugify, type NewsInput, type NewsStatus } from "./types";

export type ValidationResult =
  | { ok: true; value: NewsInput }
  | { ok: false; errors: Record<string, string> };

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function optional(value: unknown): string | null {
  const s = str(value);
  return s.length > 0 ? s : null;
}

/**
 * Validates and normalises an admin submission. Never trusts the client:
 * every field is re-derived here rather than taken as-is.
 */
export function validateNewsInput(raw: unknown): ValidationResult {
  const errors: Record<string, string> = {};
  const data = (raw ?? {}) as Record<string, unknown>;

  const title = str(data.title);
  if (title.length < 3) errors.title = "Titel muss mindestens 3 Zeichen haben.";
  if (title.length > 200) errors.title = "Titel darf höchstens 200 Zeichen haben.";

  const excerpt = str(data.excerpt);
  if (excerpt.length < 10) errors.excerpt = "Teaser muss mindestens 10 Zeichen haben.";
  if (excerpt.length > 400) errors.excerpt = "Teaser darf höchstens 400 Zeichen haben.";

  const body = str(data.body);
  if (body.length < 20) errors.body = "Text muss mindestens 20 Zeichen haben.";

  const publishedAt = str(data.publishedAt);
  if (!ISO_DATE.test(publishedAt)) {
    errors.publishedAt = "Datum muss im Format JJJJ-MM-TT vorliegen.";
  } else if (Number.isNaN(Date.parse(publishedAt))) {
    errors.publishedAt = "Datum ist kein gültiger Kalendertag.";
  }

  const statusRaw = str(data.status);
  const status: NewsStatus = statusRaw === "published" ? "published" : "draft";
  if (statusRaw && statusRaw !== "draft" && statusRaw !== "published") {
    errors.status = "Status muss draft oder published sein.";
  }

  const slug = slugify(str(data.slug) || title);
  if (slug.length < 3) errors.slug = "Slug konnte nicht gebildet werden.";

  const tags = Array.isArray(data.tags)
    ? data.tags.map((t) => str(t)).filter(Boolean).slice(0, 10)
    : str(data.tags)
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
        .slice(0, 10);

  const images = Array.isArray(data.images)
    ? data.images.map((i) => str(i)).filter(Boolean).slice(0, 20)
    : [];

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    value: {
      slug,
      title,
      excerpt,
      body,
      category: optional(data.category),
      tags,
      coverImage: optional(data.coverImage),
      images,
      publishedAt,
      status,
      titleEn: optional(data.titleEn),
      excerptEn: optional(data.excerptEn),
      bodyEn: optional(data.bodyEn),
    },
  };
}
