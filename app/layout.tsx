import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARGUS Civil Systems — Autonomous UGVs for Environmental Intelligence",
  description:
    "ARGUS Civil Systems builds rugged, autonomous unmanned ground vehicles (UGVs) for continuous observation and measurement of environmental data — anywhere the data is.",
  keywords: [
    "UGV",
    "unmanned ground vehicle",
    "environmental monitoring",
    "autonomous robotics",
    "ARGUS Civil Systems",
    "environmental data",
  ],
  openGraph: {
    title: "ARGUS Civil Systems",
    description:
      "Rugged autonomous UGVs for environmental observation and measurement.",
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
    <html lang="en">
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
