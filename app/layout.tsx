import type { Metadata, Viewport } from "next";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Artemis Civil Systems | ARGUS II Umweltmonitoring",
    template: "%s | Artemis Civil Systems",
  },
  description:
    "Artemis Civil Systems entwickelt ARGUS II zur mobilen Erfassung lokaler Umwelt-, Klima- und Infrastrukturdaten in Wald- und Naturflächen.",
  applicationName: "Artemis Civil Systems",
  authors: [{ name: "Artemis Civil Systems", url: "/" }],
  creator: "Artemis Civil Systems",
  publisher: "Artemis Civil Systems",
  keywords: [
    "ARGUS II",
    "Artemis Civil Systems",
    "Umweltdatenerfassung",
    "Waldmonitoring",
    "Umweltmonitoring",
    "Klimamonitoring",
    "Umweltsensorik",
    "UGV",
    "Naturflächen",
    "modulare Fahrzeugplattform",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Artemis Civil Systems | ARGUS II Umweltmonitoring",
    description:
      "Artemis Civil Systems entwickelt ARGUS II für mobiles Umweltmonitoring in Wald- und Naturflächen.",
    type: "website",
    locale: "de_DE",
    siteName: "Artemis Civil Systems",
    images: [
      {
        url: "/images/argus-front.jpeg",
        alt: "ARGUS II – modulare mobile Plattform für Umweltmonitoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artemis Civil Systems | ARGUS II Umweltmonitoring",
    description:
      "Mobile Erfassung lokaler Umwelt-, Klima- und Infrastrukturdaten.",
    images: ["/images/argus-front.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
