import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SkipLink from "@/components/SkipLink";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import NewsArticle from "@/components/news/NewsArticle";
import { getNewsStore } from "@/lib/news";
import { getSiteUrl } from "@/lib/site-url";

export const revalidate = 300;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = await getNewsStore().list();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getNewsStore().getBySlug(params.slug);
  if (!post) return { title: "News" };

  const siteUrl = getSiteUrl();
  const image = post.coverImage
    ? new URL(post.coverImage, siteUrl).toString()
    : new URL("/images/og.jpg", siteUrl).toString();

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/news/${post.slug}`,
      publishedTime: post.publishedAt,
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function NewsPostPage({ params }: Props) {
  const post = await getNewsStore().getBySlug(params.slug);
  if (!post) notFound();

  const siteUrl = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: post.coverImage
      ? [new URL(post.coverImage, siteUrl).toString()]
      : undefined,
    publisher: { "@id": new URL("/#organization", siteUrl).toString() },
    mainEntityOfPage: new URL(`/news/${post.slug}`, siteUrl).toString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SkipLink />
      <Nav />
      <main id="inhalt" className="relative w-full">
        <NewsArticle post={post} />
      </main>
      <Footer />
    </>
  );
}
