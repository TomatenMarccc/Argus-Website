import type { Language } from "../i18n";
import type { NewsPost } from "./types";

/** Falls back to the German text whenever an English field is blank. */
export function localisePost(post: NewsPost, language: Language) {
  const useEn = language === "en";
  return {
    title: (useEn && post.titleEn) || post.title,
    excerpt: (useEn && post.excerptEn) || post.excerpt,
    body: (useEn && post.bodyEn) || post.body,
  };
}
