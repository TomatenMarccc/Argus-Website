import SkipLink from "@/components/SkipLink";
import Nav from "@/components/Nav";
import Hero from "@/components/home/Hero";
import What from "@/components/home/What";
import Value from "@/components/home/Value";
import Threats from "@/components/home/Threats";
import Collection from "@/components/home/Collection";
import Insights from "@/components/home/Insights";
import Technology from "@/components/home/Technology";
import RoadmapSection from "@/components/home/RoadmapSection";
import Team from "@/components/home/Team";
import LatestNews from "@/components/home/LatestNews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { company } from "@/lib/company";
import { getSiteUrl } from "@/lib/site-url";
import { getNewsStore } from "@/lib/news";
import { team } from "@/lib/team";

export const revalidate = 300;

export default async function Home() {
  const siteUrl = getSiteUrl();
  const latest = (await getNewsStore().list()).slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": new URL("/#organization", siteUrl).toString(),
        name: company.name,
        legalName: company.name,
        url: siteUrl.toString(),
        email: company.email,
        logo: new URL("/images/brand/logo-mark-512.webp", siteUrl).toString(),
        slogan: "Dem Wald eine Stimme geben.",
        description:
          "Artemis Civil Systems entwickelt Systeme zur Erfassung und Auswertung von Wildtier- und Umweltdaten.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Stuttgart",
          addressCountry: "DE",
        },
        founder: team.map((m) => ({
          "@type": "Person",
          name: m.name,
          url: new URL(`/team/${m.slug}`, siteUrl).toString(),
        })),
      },
      {
        "@type": "WebSite",
        "@id": new URL("/#website", siteUrl).toString(),
        url: siteUrl.toString(),
        name: company.name,
        inLanguage: ["de-DE", "en-GB"],
        publisher: { "@id": new URL("/#organization", siteUrl).toString() },
      },
    ],
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
        <Hero />
        <What />
        <Value />
        <Threats />
        <Collection />
        <Insights />
        <Technology />
        <RoadmapSection />
        <Team />
        <LatestNews posts={latest} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
