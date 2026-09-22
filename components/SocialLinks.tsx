import type { SocialLink, SocialPlatform } from "@/lib/brand";
import { socialLinks } from "@/lib/brand";

const PATHS: Record<SocialPlatform, string> = {
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9Z",
  instagram:
    "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.05a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Zm0 11.13a4.38 4.38 0 1 1 0-8.76 4.38 4.38 0 0 1 0 8.76Zm6.99-11.4a1.58 1.58 0 1 1-3.15 0 1.58 1.58 0 0 1 3.15 0Z",
  youtube:
    "M22.54 6.42a2.79 2.79 0 0 0-1.96-1.98C18.88 4 12 4 12 4s-6.88 0-8.58.44a2.79 2.79 0 0 0-1.96 1.98A29.2 29.2 0 0 0 1 12a29.2 29.2 0 0 0 .46 5.58 2.79 2.79 0 0 0 1.96 1.98C5.12 20 12 20 12 20s6.88 0 8.58-.44a2.79 2.79 0 0 0 1.96-1.98A29.2 29.2 0 0 0 23 12a29.2 29.2 0 0 0-.46-5.58ZM9.75 15.25v-6.5L15.5 12l-5.75 3.25Z",
  github:
    "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
};

export default function SocialLinks({
  links,
  className = "",
  size = "md",
  tone = "light",
}: {
  links?: SocialLink[];
  className?: string;
  size?: "sm" | "md";
  tone?: "light" | "dark";
}) {
  const visible = socialLinks(links);
  if (visible.length === 0) return null;

  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const skin =
    tone === "dark"
      ? "border-paper/25 text-paper hover:border-paper/60 hover:bg-paper/10"
      : "border-forest-900/15 text-forest-800 hover:border-forest-600 hover:bg-forest-100";

  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {visible.map((link) => (
        <li key={link.platform + link.url}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`flex ${box} items-center justify-center rounded-full border transition-colors ${skin}`}
          >
            <svg viewBox="0 0 24 24" className={icon} fill="currentColor" aria-hidden="true">
              <path d={PATHS[link.platform]} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
