import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      /* The admin area is internal and must never be indexed. */
      disallow: ["/admin", "/admin/", "/api/"],
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
