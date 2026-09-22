"use client";

import Link from "next/link";
import Reveal from "../Reveal";
import NewsCard from "../news/NewsCard";
import { useT } from "../LanguageProvider";
import type { NewsPost } from "@/lib/news/types";

export default function LatestNews({ posts }: { posts: NewsPost[] }) {
  const t = useT();
  if (posts.length === 0) return null;

  return (
    <section id="news" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="site-shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
                {t.news.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
                {t.news.latestTitle}
              </h2>
            </div>
            <Link
              href="/news"
              className="rounded-full border border-forest-900/20 px-5 py-2.5 text-sm font-semibold text-forest-900 transition-colors hover:border-forest-600 hover:bg-forest-100"
            >
              {t.news.latestCta}
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={(i % 3) * 80}>
              <NewsCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
