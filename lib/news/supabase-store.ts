import { sortPosts, type NewsInput, type NewsPost, type NewsStore } from "./types";

/**
 * Supabase-backed store, talking to PostgREST over plain fetch — no client
 * library, so this adds no dependency. The service-role key is read from the
 * environment and only ever used here, in server-side code.
 *
 * Switched on by setting SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.
 * Schema: see supabase/migrations/0001_news.sql
 */
const TABLE = "news_posts";

export type SupabaseConfig = { url: string; serviceKey: string };

export function readSupabaseConfig(): SupabaseConfig | null {
  const url = process.env.SUPABASE_URL?.trim();
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !serviceKey) return null;
  return { url: url.replace(/\/+$/, ""), serviceKey };
}

type Row = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string | null;
  tags: string[] | null;
  cover_image: string | null;
  images: string[] | null;
  published_at: string;
  status: NewsPost["status"];
  title_en: string | null;
  excerpt_en: string | null;
  body_en: string | null;
};

function toPost(row: Row): NewsPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    body: row.body,
    category: row.category,
    tags: row.tags ?? [],
    coverImage: row.cover_image,
    images: row.images ?? [],
    publishedAt: row.published_at.slice(0, 10),
    status: row.status,
    titleEn: row.title_en,
    excerptEn: row.excerpt_en,
    bodyEn: row.body_en,
  };
}

function toRow(input: Partial<NewsInput>): Record<string, unknown> {
  const row: Record<string, unknown> = {};
  if (input.slug !== undefined) row.slug = input.slug;
  if (input.title !== undefined) row.title = input.title;
  if (input.excerpt !== undefined) row.excerpt = input.excerpt;
  if (input.body !== undefined) row.body = input.body;
  if (input.category !== undefined) row.category = input.category;
  if (input.tags !== undefined) row.tags = input.tags;
  if (input.coverImage !== undefined) row.cover_image = input.coverImage;
  if (input.images !== undefined) row.images = input.images;
  if (input.publishedAt !== undefined) row.published_at = input.publishedAt;
  if (input.status !== undefined) row.status = input.status;
  if (input.titleEn !== undefined) row.title_en = input.titleEn;
  if (input.excerptEn !== undefined) row.excerpt_en = input.excerptEn;
  if (input.bodyEn !== undefined) row.body_en = input.bodyEn;
  return row;
}

async function request(
  cfg: SupabaseConfig,
  pathAndQuery: string,
  init: RequestInit = {}
): Promise<Response> {
  const res = await fetch(`${cfg.url}/rest/v1/${pathAndQuery}`, {
    ...init,
    headers: {
      apikey: cfg.serviceKey,
      Authorization: `Bearer ${cfg.serviceKey}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(
      `Supabase ${init.method ?? "GET"} ${pathAndQuery} failed: ${res.status} ${await res.text()}`
    );
  }
  return res;
}

export function createSupabaseStore(cfg: SupabaseConfig): NewsStore {
  return {
    writable: true,
    name: "supabase",

    async list({ includeDrafts = false } = {}) {
      const filter = includeDrafts ? "" : "&status=eq.published";
      const res = await request(
        cfg,
        `${TABLE}?select=*&order=published_at.desc${filter}`
      );
      return sortPosts(((await res.json()) as Row[]).map(toPost));
    },

    async getBySlug(slug) {
      const res = await request(
        cfg,
        `${TABLE}?select=*&slug=eq.${encodeURIComponent(slug)}&status=eq.published&limit=1`
      );
      const rows = (await res.json()) as Row[];
      return rows.length > 0 ? toPost(rows[0]) : null;
    },

    async create(input: NewsInput) {
      const res = await request(cfg, `${TABLE}?select=*`, {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify(toRow(input)),
      });
      return toPost(((await res.json()) as Row[])[0]);
    },

    async update(id, input) {
      const res = await request(
        cfg,
        `${TABLE}?id=eq.${encodeURIComponent(id)}&select=*`,
        {
          method: "PATCH",
          headers: { Prefer: "return=representation" },
          body: JSON.stringify(toRow(input)),
        }
      );
      return toPost(((await res.json()) as Row[])[0]);
    },

    async remove(id) {
      await request(cfg, `${TABLE}?id=eq.${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
    },
  };
}

/** Uploads a file to Supabase Storage and returns its public URL. */
export async function uploadToStorage(
  cfg: SupabaseConfig,
  bucket: string,
  objectPath: string,
  body: ArrayBuffer,
  contentType: string
): Promise<string> {
  const res = await fetch(
    `${cfg.url}/storage/v1/object/${bucket}/${objectPath}`,
    {
      method: "POST",
      headers: {
        apikey: cfg.serviceKey,
        Authorization: `Bearer ${cfg.serviceKey}`,
        "Content-Type": contentType,
        "x-upsert": "true",
      },
      body,
    }
  );
  if (!res.ok) {
    throw new Error(`Storage upload failed: ${res.status} ${await res.text()}`);
  }
  return `${cfg.url}/storage/v1/object/public/${bucket}/${objectPath}`;
}
