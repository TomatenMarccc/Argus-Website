import type { Metadata } from "next";
import SkipLink from "@/components/SkipLink";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import NewsIndex from "@/components/news/NewsIndex";
import { getNewsStore } from "@/lib/news";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "News",
  description:
    "Entwicklungen, Meilensteine und Einblicke aus der Arbeit von Artemis Civil Systems.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "News | Artemis Civil Systems",
    description:
      "Entwicklungen, Meilensteine und Einblicke aus unserer Arbeit an Wildtier- und Umweltdaten.",
    type: "website",
    url: "/news",
  },
};

export default async function NewsPage() {
  const posts = await getNewsStore().list();

  return (
    <>
      <SkipLink />
      <Nav />
      <main id="inhalt" className="relative w-full">
        <NewsIndex posts={posts} />
      </main>
      <Footer />
    </>
  );
}
