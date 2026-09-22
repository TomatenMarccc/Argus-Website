export default function AdminNotice({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-6">
      <div className="w-full rounded-3xl border border-forest-900/10 bg-paper p-8">
        <h1 className="font-display text-2xl font-semibold text-forest-950">
          {title}
        </h1>
        <div className="mt-4 text-[0.95rem] leading-relaxed text-bark-700 [&_code]:rounded [&_code]:bg-paper-200 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.85em]">
          {children}
        </div>
      </div>
    </main>
  );
}
