import SkipLink from "@/components/SkipLink";
import Nav from "@/components/Nav";
import Hero from "@/components/home/Hero";
import Value from "@/components/home/Value";
import Threats from "@/components/home/Threats";
import Mission from "@/components/home/Mission";
import Team from "@/components/home/Team";
import ArgusTeaser from "@/components/home/ArgusTeaser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { company } from "@/lib/company";
import { getSiteUrl } from "@/lib/site-url";

export default function Home() {
  const siteUrl = getSiteUrl();

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
        slogan: "Dem Wald eine Stimme geben.",
        description:
          "Artemis Civil Systems erfasst lokale Umweltdaten unter dem Kronendach, um Veränderungen im Wald früh sichtbar zu machen.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Stuttgart",
          addressCountry: "DE",
        },
        founder: [
          { "@type": "Person", name: "Simon Pulvermüller" },
          { "@type": "Person", name: "Marc Abdel Rahman" },
          { "@type": "Person", name: "Selina Schüßler" },
        ],
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
        <Value />
        <Threats />
        <Mission />
        <Team />
        <ArgusTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
