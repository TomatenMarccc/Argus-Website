"use client";

import Reveal from "../Reveal";
import NewsCard from "./NewsCard";
import SocialLinks from "../SocialLinks";
import { useT } from "../LanguageProvider";
import { socialLinks } from "@/lib/brand";
import type { NewsPost } from "@/lib/news/types";

export default function NewsIndex({ posts }: { posts: NewsPost[] }) {
  const t = useT();
  const hasSocials = socialLinks().length > 0;

  return (
    <>
      <section className="bg-paper-100 pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="site-shell">
          <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
            {t.news.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest-950 md:text-6xl">
            {t.news.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-bark-700 md:text-lg">
            {t.news.lead}
          </p>

          {/* "Find out more about us" — sits high on the page, as requested. */}
          <div className="mt-10 rounded-3xl border border-forest-900/10 bg-paper p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold text-forest-950">
              {t.news.followTitle}
            </h2>
            <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-bark-700">
              {t.news.followLead}
            </p>
            {hasSocials ? (
              <SocialLinks className="mt-5" />
            ) : (
              <p className="mt-4 text-sm text-bark-500">{t.news.socialsMissing}</p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="site-shell">
          {posts.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-forest-900/20 p-8 text-center text-bark-700">
              {t.news.empty}
            </p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={(i % 3) * 80}>
                  <NewsCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
