import { redirect } from "next/navigation";
import NewsAdmin from "@/components/admin/NewsAdmin";
import AdminNotice from "@/components/admin/AdminNotice";
import { isAdminConfigured, isAuthenticated } from "@/lib/admin/auth";
import { getNewsStore } from "@/lib/news";

export const dynamic = "force-dynamic";

export default async function AdminNewsPage() {
  if (!isAdminConfigured()) {
    return (
      <AdminNotice title="Admin-Bereich ist nicht eingerichtet">
        Setze <code>ADMIN_PASSWORD</code> und <code>ADMIN_SESSION_SECRET</code> in
        der Umgebung, damit der Login aktiv wird.
      </AdminNotice>
    );
  }

  if (!isAuthenticated()) redirect("/admin/login");

  const store = getNewsStore();
  const posts = await store.list({ includeDrafts: true });

  return <NewsAdmin posts={posts} writable={store.writable} backend={store.name} />;
}
