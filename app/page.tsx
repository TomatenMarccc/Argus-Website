import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScrollSequence from "@/components/ScrollSequence";
import Modules from "@/components/Modules";
import Applications from "@/components/Applications";
import Specs from "@/components/Specs";
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
      },
      {
        "@type": "WebSite",
        "@id": new URL("/#website", siteUrl).toString(),
        url: siteUrl.toString(),
        name: company.name,
        alternateName: "Artemis Civil Systems – ARGUS II",
        inLanguage: "de-DE",
        publisher: {
          "@id": new URL("/#organization", siteUrl).toString(),
        },
      },
      {
        "@type": "Product",
        "@id": new URL("/#argus-ii", siteUrl).toString(),
        name: "ARGUS II",
        description:
          "Modulare mobile Bodenplattform zur Erfassung lokaler Umwelt-, Klima- und Infrastrukturdaten in Wald- und Naturflächen.",
        image: new URL("/images/argus-front.jpeg", siteUrl).toString(),
        brand: {
          "@type": "Brand",
          name: company.name,
        },
        manufacturer: {
          "@id": new URL("/#organization", siteUrl).toString(),
        },
        category: "Umweltmonitoring und mobile Umweltsensorik",
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
      <main className="relative w-full">
        <Nav />
        <Hero />
        <ScrollSequence />
        <Modules />
        <Applications />
        <Specs />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
