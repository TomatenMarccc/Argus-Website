/**
 * Tiny renderer for the stored post body: blank lines become paragraphs,
 * `## ` becomes a subheading and `- ` becomes a list. Deliberately not a full
 * markdown parser — it avoids a dependency and cannot emit raw HTML, so stored
 * content can never inject markup into the page.
 */
export default function NewsBody({ body }: { body: string }) {
  const blocks = body.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="pt-3 font-display text-2xl font-semibold text-forest-950"
            >
              {block.slice(3).trim()}
            </h2>
          );
        }

        const lines = block.split("\n").map((l) => l.trim());
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} className="space-y-2">
              {lines.map((line, j) => (
                <li key={j} className="flex items-start gap-3 text-bark-700">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-forest-500"
                  />
                  <span>{line.slice(2).trim()}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="leading-relaxed text-bark-700">
            {block}
          </p>
        );
      })}
    </div>
  );
}
