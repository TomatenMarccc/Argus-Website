import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { getNewsStore } from "@/lib/news";
import { teamSlugs } from "@/lib/team";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const url = (path: string) => new URL(path, siteUrl).toString();

  let posts: { slug: string; publishedAt: string }[] = [];
  try {
    posts = await getNewsStore().list();
  } catch {
    /* A news backend outage must not break the sitemap. */
  }

  return [
    { url: url("/"), changeFrequency: "monthly", priority: 1 },
    { url: url("/news"), changeFrequency: "weekly", priority: 0.8 },
    { url: url("/argus"), changeFrequency: "monthly", priority: 0.7 },
    ...teamSlugs.map((slug) => ({
      url: url(`/team/${slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...posts.map((post) => ({
      url: url(`/news/${post.slug}`),
      lastModified: new Date(`${post.publishedAt}T12:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { url: url("/impressum"), changeFrequency: "yearly", priority: 0.2 },
  ];
}
