"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { NewsPost, NewsStatus } from "@/lib/news/types";

type Props = { posts: NewsPost[]; writable: boolean; backend: string };

type FormState = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: string;
  tags: string;
  coverImage: string;
  publishedAt: string;
  status: NewsStatus;
  titleEn: string;
  excerptEn: string;
  bodyEn: string;
};

const EMPTY: FormState = {
  title: "",
  slug: "",
  excerpt: "",
  body: "",
  category: "",
  tags: "",
  coverImage: "",
  publishedAt: new Date().toISOString().slice(0, 10),
  status: "draft",
  titleEn: "",
  excerptEn: "",
  bodyEn: "",
};

const field =
  "w-full rounded-xl border border-forest-900/20 bg-paper px-4 py-2.5 text-[0.93rem] text-forest-950 outline-none focus:border-forest-600";
const label = "block text-sm font-medium text-forest-900";

export default function NewsAdmin({ posts, writable, backend }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function startEdit(post: NewsPost) {
    setEditingId(post.id);
    setErrors({});
    setMessage(null);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      body: post.body,
      category: post.category ?? "",
      tags: post.tags.join(", "),
      coverImage: post.coverImage ?? "",
      publishedAt: post.publishedAt,
      status: post.status,
      titleEn: post.titleEn ?? "",
      excerptEn: post.excerptEn ?? "",
      bodyEn: post.bodyEn ?? "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() {
    setEditingId(null);
    setForm(EMPTY);
    setErrors({});
  }

  async function onUpload(file: File) {
    setBusy(true);
    setMessage(null);
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await fetch("/api/uploads", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessage(json.error ?? "Upload fehlgeschlagen.");
        return;
      }
      set("coverImage", json.url);
      setMessage("Bild hochgeladen.");
    } finally {
      setBusy(false);
    }
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setErrors({});
    setMessage(null);

    try {
      const res = await fetch(
        editingId ? `/api/news/${editingId}` : "/api/news",
        {
          method: editingId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const json = await res.json().catch(() => ({}));

      if (res.status === 422) {
        setErrors(json.errors ?? {});
        setMessage("Bitte die markierten Felder prüfen.");
        return;
      }
      if (!res.ok) {
        setMessage(json.error ?? "Speichern fehlgeschlagen.");
        return;
      }

      setMessage(editingId ? "Beitrag aktualisiert." : "Beitrag angelegt.");
      reset();
      router.refresh();
    } catch {
      setMessage("Netzwerkfehler. Bitte erneut versuchen.");
    } finally {
      setBusy(false);
    }
  }

  async function onDelete(post: NewsPost) {
    if (!window.confirm(`"${post.title}" wirklich löschen?`)) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/news/${post.id}`, { method: "DELETE" });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setMessage(json.error ?? "Löschen fehlgeschlagen.");
        return;
      }
      if (editingId === post.id) reset();
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  async function onLogout() {
    await fetch("/api/admin/session", { method: "DELETE" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold text-forest-950">
            News verwalten
          </h1>
          <p className="mt-1 text-sm text-bark-700">
            Backend: <code className="rounded bg-paper-200 px-1.5 py-0.5">{backend}</code>
          </p>
        </div>
        <button
          type="button"
          onClick={onLogout}
          className="rounded-full border border-forest-900/20 px-5 py-2 text-sm font-semibold text-forest-900 hover:bg-paper-200"
        >
          Abmelden
        </button>
      </header>

      {!writable && (
        <p
          role="status"
          className="mt-6 rounded-2xl border border-amber-500/40 bg-amber-100 p-4 text-sm text-amber-700"
        >
          Das aktuelle Backend ist <strong>schreibgeschützt</strong>. News werden
          aus <code>content/news/*.json</code> gelesen. Zum Anlegen über dieses
          Formular müssen <code>SUPABASE_URL</code> und{" "}
          <code>SUPABASE_SERVICE_ROLE_KEY</code> gesetzt sein.
        </p>
      )}

      {message && (
        <p role="status" className="mt-6 rounded-2xl bg-forest-100 p-4 text-sm text-forest-900">
          {message}
        </p>
      )}

      <form onSubmit={onSubmit} className="mt-8 space-y-5 rounded-3xl border border-forest-900/10 bg-paper p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-forest-950">
          {editingId ? "Beitrag bearbeiten" : "Neuer Beitrag"}
        </h2>

        <div>
          <label htmlFor="title" className={label}>Titel *</label>
          <input id="title" required value={form.title}
            onChange={(e) => set("title", e.target.value)}
            aria-invalid={errors.title ? true : undefined} className={`mt-1.5 ${field}`} />
          {errors.title && <p role="alert" className="mt-1 text-sm text-red-700">{errors.title}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="slug" className={label}>Slug</label>
            <input id="slug" value={form.slug} placeholder="wird aus dem Titel gebildet"
              onChange={(e) => set("slug", e.target.value)} className={`mt-1.5 ${field}`} />
          </div>
          <div>
            <label htmlFor="publishedAt" className={label}>Veröffentlichungsdatum *</label>
            <input id="publishedAt" type="date" required value={form.publishedAt}
              onChange={(e) => set("publishedAt", e.target.value)}
              aria-invalid={errors.publishedAt ? true : undefined} className={`mt-1.5 ${field}`} />
            {errors.publishedAt && <p role="alert" className="mt-1 text-sm text-red-700">{errors.publishedAt}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="excerpt" className={label}>Teaser *</label>
          <textarea id="excerpt" required rows={2} value={form.excerpt}
            onChange={(e) => set("excerpt", e.target.value)}
            aria-invalid={errors.excerpt ? true : undefined} className={`mt-1.5 ${field}`} />
          {errors.excerpt && <p role="alert" className="mt-1 text-sm text-red-700">{errors.excerpt}</p>}
        </div>

        <div>
          <label htmlFor="body" className={label}>Text *</label>
          <textarea id="body" required rows={10} value={form.body}
            onChange={(e) => set("body", e.target.value)}
            aria-describedby="body-hint"
            aria-invalid={errors.body ? true : undefined} className={`mt-1.5 ${field} font-mono text-[0.85rem]`} />
          <p id="body-hint" className="mt-1 text-xs text-bark-500">
            Leerzeile = neuer Absatz · <code>## </code> = Zwischenüberschrift · <code>- </code> = Aufzählung
          </p>
          {errors.body && <p role="alert" className="mt-1 text-sm text-red-700">{errors.body}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="category" className={label}>Kategorie</label>
            <input id="category" value={form.category}
              onChange={(e) => set("category", e.target.value)} className={`mt-1.5 ${field}`} />
          </div>
          <div>
            <label htmlFor="tags" className={label}>Tags</label>
            <input id="tags" value={form.tags} placeholder="kommagetrennt"
              onChange={(e) => set("tags", e.target.value)} className={`mt-1.5 ${field}`} />
          </div>
        </div>

        <div>
          <label htmlFor="coverImage" className={label}>Beitragsbild (URL oder Pfad)</label>
          <input id="coverImage" value={form.coverImage}
            onChange={(e) => set("coverImage", e.target.value)} className={`mt-1.5 ${field}`} />
          <input type="file" accept="image/jpeg,image/png,image/webp,image/avif"
            aria-label="Beitragsbild hochladen"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) void onUpload(f); }}
            className="mt-2 block w-full text-sm text-bark-700 file:mr-3 file:rounded-full file:border-0 file:bg-forest-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-forest-800" />
        </div>

        <details className="rounded-2xl bg-paper-100 p-4">
          <summary className="cursor-pointer text-sm font-medium text-forest-900">
            Englische Fassung (optional)
          </summary>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="titleEn" className={label}>Title (EN)</label>
              <input id="titleEn" value={form.titleEn}
                onChange={(e) => set("titleEn", e.target.value)} className={`mt-1.5 ${field}`} />
            </div>
            <div>
              <label htmlFor="excerptEn" className={label}>Excerpt (EN)</label>
              <textarea id="excerptEn" rows={2} value={form.excerptEn}
                onChange={(e) => set("excerptEn", e.target.value)} className={`mt-1.5 ${field}`} />
            </div>
            <div>
              <label htmlFor="bodyEn" className={label}>Body (EN)</label>
              <textarea id="bodyEn" rows={8} value={form.bodyEn}
                onChange={(e) => set("bodyEn", e.target.value)} className={`mt-1.5 ${field} font-mono text-[0.85rem]`} />
            </div>
          </div>
        </details>

        <fieldset>
          <legend className={label}>Status</legend>
          <div className="mt-2 flex gap-4">
            {(["draft", "published"] as const).map((value) => (
              <label key={value} className="flex items-center gap-2 text-sm text-bark-700">
                <input type="radio" name="status" value={value}
                  checked={form.status === value}
                  onChange={() => set("status", value)} />
                {value === "draft" ? "Entwurf" : "Veröffentlicht"}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-wrap gap-3 pt-2">
          <button type="submit" disabled={busy || !writable}
            className="rounded-full bg-forest-800 px-6 py-3 text-sm font-semibold text-paper hover:bg-forest-700 disabled:cursor-not-allowed disabled:opacity-50">
            {busy ? "Speichert …" : editingId ? "Änderungen speichern" : "Beitrag anlegen"}
          </button>
          {editingId && (
            <button type="button" onClick={reset}
              className="rounded-full border border-forest-900/20 px-6 py-3 text-sm font-semibold text-forest-900 hover:bg-paper-200">
              Abbrechen
            </button>
          )}
        </div>
      </form>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-forest-950">
          Vorhandene Beiträge ({posts.length})
        </h2>
        <ul className="mt-5 space-y-3">
          {posts.map((post) => (
            <li key={post.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-forest-900/10 bg-paper p-4">
              <div className="min-w-0">
                <p className="truncate font-medium text-forest-900">{post.title}</p>
                <p className="mt-0.5 text-xs text-bark-500">
                  {post.publishedAt} ·{" "}
                  <span className={post.status === "published" ? "text-forest-600" : "text-amber-700"}>
                    {post.status === "published" ? "Veröffentlicht" : "Entwurf"}
                  </span>{" "}
                  · /news/{post.slug}
                </p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => startEdit(post)} disabled={busy}
                  className="rounded-full border border-forest-900/20 px-4 py-1.5 text-sm font-medium text-forest-900 hover:bg-paper-200 disabled:opacity-50">
                  Bearbeiten
                </button>
                <button type="button" onClick={() => onDelete(post)} disabled={busy || !writable}
                  className="rounded-full border border-red-300 px-4 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50">
                  Löschen
                </button>
              </div>
            </li>
          ))}
          {posts.length === 0 && (
            <li className="rounded-2xl border border-dashed border-forest-900/20 p-6 text-sm text-bark-700">
              Noch keine Beiträge vorhanden.
            </li>
          )}
        </ul>
      </section>
    </main>
  );
}
