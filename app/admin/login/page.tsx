import { redirect } from "next/navigation";
import LoginForm from "@/components/admin/LoginForm";
import { isAdminConfigured, isAuthenticated } from "@/lib/admin/auth";
import AdminNotice from "@/components/admin/AdminNotice";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  if (!isAdminConfigured()) {
    return (
      <AdminNotice title="Admin-Bereich ist nicht eingerichtet">
        Setze <code>ADMIN_PASSWORD</code> und <code>ADMIN_SESSION_SECRET</code> in
        der Umgebung, damit der Login aktiv wird. Solange das fehlt, gibt es
        bewusst keinen Ersatz-Zugang.
      </AdminNotice>
    );
  }

  if (isAuthenticated()) redirect("/admin/news");

  return <LoginForm />;
}
