"use client";

import Link from "next/link";
import { useLanguage } from "../LanguageProvider";
import { localisePost } from "@/lib/news/localise";
import type { NewsPost } from "@/lib/news/types";

export default function NewsCard({ post }: { post: NewsPost }) {
  const { language, t } = useLanguage();
  const view = localisePost(post, language);

  return (
    <article className="group h-full">
      <Link
        href={`/news/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-forest-900/10 bg-paper transition-colors hover:border-forest-500"
      >
        {post.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div aria-hidden="true" className="h-48 w-full bg-forest-100" />
        )}

        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-bark-500">
            <time dateTime={post.publishedAt}>
              {new Intl.DateTimeFormat(language === "de" ? "de-DE" : "en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }).format(new Date(`${post.publishedAt}T12:00:00Z`))}
            </time>
            {post.category && (
              <>
                <span aria-hidden="true">·</span>
                <span className="rounded-full bg-forest-100 px-2.5 py-0.5 font-semibold text-forest-700">
                  {post.category}
                </span>
              </>
            )}
          </div>

          <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-forest-950">
            {view.title}
          </h3>
          <p className="mt-2.5 flex-1 text-[0.93rem] leading-relaxed text-bark-700">
            {view.excerpt}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800 group-hover:text-forest-600">
            {t.news.readMore}
            <svg
              viewBox="0 0 20 20"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 10h11M11 5l5 5-5 5" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
