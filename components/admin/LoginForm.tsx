"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Anmeldung fehlgeschlagen.");
        return;
      }
      router.replace("/admin/news");
      router.refresh();
    } catch {
      setError("Netzwerkfehler. Bitte erneut versuchen.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-6">
      <form
        onSubmit={onSubmit}
        className="w-full rounded-3xl border border-forest-900/10 bg-paper p-8"
      >
        <h1 className="font-display text-2xl font-semibold text-forest-950">
          Admin-Anmeldung
        </h1>
        <p className="mt-2 text-sm text-bark-700">
          Interner Bereich zur Pflege der News-Beiträge.
        </p>

        <label htmlFor="password" className="mt-8 block text-sm font-medium text-forest-900">
          Passwort
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby={error ? "login-error" : undefined}
          aria-invalid={error ? true : undefined}
          className="mt-2 w-full rounded-xl border border-forest-900/20 bg-paper-100 px-4 py-3 text-[0.95rem] text-forest-950 outline-none focus:border-forest-600"
        />

        {error && (
          <p id="login-error" role="alert" className="mt-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={busy || password.length === 0}
          className="mt-6 w-full rounded-full bg-forest-800 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-forest-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? "Wird geprüft …" : "Anmelden"}
        </button>
      </form>
    </main>
  );
}
