import type { Metadata } from "next";
import SkipLink from "@/components/SkipLink";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArgusContent from "@/components/argus/ArgusContent";

export const metadata: Metadata = {
  title: "ARGUS — unser mobiles Messsystem",
  description:
    "ARGUS ist das Bodenfahrzeug von Artemis Civil Systems. Es fährt auf freigegebenen Waldwegen und erfasst georeferenzierte Umwelt- und Bilddaten unter dem Kronendach.",
  alternates: { canonical: "/argus" },
  openGraph: {
    title: "ARGUS — unser mobiles Messsystem",
    description:
      "Aufbau, Sensorik und Entwicklungsstand des ARGUS-Systems von Artemis Civil Systems.",
    type: "article",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "ARGUS auf einem Waldboden zwischen Laub und Zweigen",
      },
    ],
  },
};

export default function ArgusPage() {
  return (
    <>
      <SkipLink />
      <Nav />
      <main id="inhalt" className="relative w-full">
        <ArgusContent />
      </main>
      <Footer />
    </>
  );
}
