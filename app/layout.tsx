import type { Metadata, Viewport } from "next";
import LanguageProvider from "@/components/LanguageProvider";
import { getSiteUrl } from "@/lib/site-url";
import { company } from "@/lib/company";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Artemis Civil Systems — Wildlife & Environmental Monitoring",
    template: `%s | ${company.name}`,
  },
  description:
    "Artemis Civil Systems entwickelt Systeme zur Erfassung und Auswertung von Wildtier- und Umweltdaten — damit Veränderungen in Lebensräumen früh sichtbar werden.",
  applicationName: company.name,
  authors: [{ name: company.name, url: "/" }],
  creator: company.name,
  publisher: company.name,
  keywords: [
    "Artemis Civil Systems",
    "Wildlife Monitoring",
    "Wildtiermonitoring",
    "Environmental Monitoring",
    "Umweltdaten",
    "Biodiversität",
    "Lebensraum-Monitoring",
    "Datenerfassung",
    "ARGUS",
    "Stuttgart",
  ],
  alternates: { canonical: "/" },
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
    title: "Artemis Civil Systems — Wildlife & Environmental Monitoring",
    description:
      "Wir erfassen und erschließen Wildtier- und Umweltdaten — dort, wo der Lebensraum ist.",
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_GB"],
    siteName: company.name,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "ARGUS auf einem Waldboden zwischen Laub und Zweigen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artemis Civil Systems — Wildlife & Environmental Monitoring",
    description: "Wildtier- und Umweltdaten, erfasst wo sie entstehen.",
    images: ["/images/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FCFBF7",
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
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
