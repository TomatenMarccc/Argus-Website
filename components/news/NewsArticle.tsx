"use client";

import Link from "next/link";
import NewsBody from "./NewsBody";
import SocialLinks from "../SocialLinks";
import { useLanguage } from "../LanguageProvider";
import { localisePost } from "@/lib/news/localise";
import { socialLinks } from "@/lib/brand";
import type { NewsPost } from "@/lib/news/types";

export default function NewsArticle({ post }: { post: NewsPost }) {
  const { language, t } = useLanguage();
  const view = localisePost(post, language);
  const hasSocials = socialLinks().length > 0;

  const formatted = new Intl.DateTimeFormat(
    language === "de" ? "de-DE" : "en-GB",
    { day: "2-digit", month: "long", year: "numeric" }
  ).format(new Date(`${post.publishedAt}T12:00:00Z`));

  return (
    <article className="bg-paper pb-24 pt-32 md:pt-40">
      <div className="site-shell">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-forest-600 transition-colors hover:text-forest-800"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 10H5M9 5l-5 5 5 5" />
            </svg>
            {t.news.backToNews}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-bark-500">
            <time dateTime={post.publishedAt}>
              {t.news.published} {formatted}
            </time>
            {post.category && (
              <>
                <span aria-hidden="true">·</span>
                <span className="rounded-full bg-forest-100 px-2.5 py-0.5 text-xs font-semibold text-forest-700">
                  {post.category}
                </span>
              </>
            )}
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
            {view.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-bark-700">{view.excerpt}</p>
        </div>

        {post.coverImage && (
          <figure className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt=""
              loading="eager"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </figure>
        )}

        <div className="mx-auto mt-12 max-w-3xl">
          <NewsBody body={view.body} />

          {post.images.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {post.images.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl object-cover"
                />
              ))}
            </div>
          )}

          {post.tags.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-paper-100 px-3 py-1 text-xs font-medium text-bark-700"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}

          {hasSocials && (
            <div className="mt-12 border-t border-forest-900/10 pt-8">
              <h2 className="font-display text-lg font-semibold text-forest-950">
                {t.news.followTitle}
              </h2>
              <SocialLinks className="mt-4" size="sm" />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
