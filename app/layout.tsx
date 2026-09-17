import type { Metadata, Viewport } from "next";
import LanguageProvider from "@/components/LanguageProvider";
import { getSiteUrl } from "@/lib/site-url";
import { company } from "@/lib/company";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Artemis Civil Systems — Dem Wald eine Stimme geben",
    template: `%s | ${company.name}`,
  },
  description:
    "Artemis Civil Systems erfasst lokale Umweltdaten unter dem Kronendach, um Veränderungen im Wald früh sichtbar zu machen.",
  applicationName: company.name,
  authors: [{ name: company.name, url: "/" }],
  creator: company.name,
  publisher: company.name,
  keywords: [
    "Artemis Civil Systems",
    "ARGUS",
    "Waldmonitoring",
    "Umweltdaten",
    "Umweltmonitoring",
    "Waldschutz",
    "Biodiversität",
    "Forstwirtschaft",
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
    title: "Artemis Civil Systems — Dem Wald eine Stimme geben",
    description:
      "Wir sammeln lokale Daten dort, wo der Wald lebt — unter dem Kronendach.",
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
    title: "Artemis Civil Systems — Dem Wald eine Stimme geben",
    description: "Lokale Umweltdaten aus dem Wald, erfasst wo sie entstehen.",
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
