import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artemis Civil Systems — ARGUS II",
  description:
    "Mobile Umweltdatenerfassung für Wald- und Naturflächen mit ARGUS II, einem modularen unbemannten Bodenfahrzeug von Artemis Civil Systems.",
  keywords: [
    "ARGUS II",
    "Artemis Civil Systems",
    "Umweltdatenerfassung",
    "Waldmonitoring",
    "Naturflächen",
    "unbemanntes Bodenfahrzeug",
  ],
  openGraph: {
    title: "Artemis Civil Systems — ARGUS II",
    description:
      "Mobile Umweltdatenerfassung für Wald- und Naturflächen.",
    type: "website",
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
