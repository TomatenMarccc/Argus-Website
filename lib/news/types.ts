export type NewsStatus = "draft" | "published";

export type NewsPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /** Plain text with blank-line paragraphs, `## ` headings and `- ` bullets. */
  body: string;
  category: string | null;
  tags: string[];
  coverImage: string | null;
  images: string[];
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  status: NewsStatus;
  /** Optional English versions; the German text is used when these are blank. */
  titleEn: string | null;
  excerptEn: string | null;
  bodyEn: string | null;
};

export type NewsInput = Omit<NewsPost, "id">;

export type NewsStore = {
  /** False for the read-only file-backed store. */
  readonly writable: boolean;
  readonly name: string;
  list(options?: { includeDrafts?: boolean }): Promise<NewsPost[]>;
  getBySlug(slug: string): Promise<NewsPost | null>;
  create?(input: NewsInput): Promise<NewsPost>;
  update?(id: string, input: Partial<NewsInput>): Promise<NewsPost>;
  remove?(id: string): Promise<void>;
};

/** Newest first, drafts excluded unless asked for. */
export function sortPosts(posts: NewsPost[]): NewsPost[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
