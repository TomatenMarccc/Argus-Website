import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  /* Never index the admin area, and never advertise it in the navigation. */
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-paper-100">{children}</div>;
}
