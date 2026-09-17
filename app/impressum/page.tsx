import type { Metadata } from "next";
import SkipLink from "@/components/SkipLink";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ImpressumContent from "@/components/ImpressumContent";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Kontaktangaben von Artemis Civil Systems.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <SkipLink />
      <Nav />
      <main id="inhalt" className="relative w-full">
        <ImpressumContent />
      </main>
      <Footer />
    </>
  );
}
