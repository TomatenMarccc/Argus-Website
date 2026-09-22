import fs from "node:fs/promises";
import path from "node:path";
import { sortPosts, type NewsPost, type NewsStore } from "./types";

const DIR = path.join(process.cwd(), "content", "news");

async function readAll(): Promise<NewsPost[]> {
  let files: string[];
  try {
    files = await fs.readdir(DIR);
  } catch {
    return [];
  }

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".json"))
      .map(async (f) => {
        try {
          const raw = await fs.readFile(path.join(DIR, f), "utf8");
          return JSON.parse(raw) as NewsPost;
        } catch {
          /* A malformed file must not take the whole news page down. */
          return null;
        }
      })
  );

  return posts.filter((p): p is NewsPost => p !== null);
}

/**
 * Read-only store backed by JSON files committed to the repository.
 * This is what runs when no database is configured, so the site always has
 * working news even before the admin backend is switched on.
 */
export const staticStore: NewsStore = {
  writable: false,
  name: "static",

  async list({ includeDrafts = false } = {}) {
    const all = await readAll();
    return sortPosts(
      includeDrafts ? all : all.filter((p) => p.status === "published")
    );
  },

  async getBySlug(slug) {
    const all = await readAll();
    return all.find((p) => p.slug === slug && p.status === "published") ?? null;
  },
};
