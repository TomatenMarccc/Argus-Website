import { staticStore } from "./static-store";
import { createSupabaseStore, readSupabaseConfig } from "./supabase-store";
import type { NewsStore } from "./types";

export * from "./types";
export { validateNewsInput } from "./validate";
export { readSupabaseConfig, uploadToStorage } from "./supabase-store";

/**
 * Picks the backing store: Supabase when credentials are configured, otherwise
 * the read-only files in content/news. The site renders either way.
 */
export function getNewsStore(): NewsStore {
  const cfg = readSupabaseConfig();
  return cfg ? createSupabaseStore(cfg) : staticStore;
}

export function isNewsBackendWritable(): boolean {
  return getNewsStore().writable;
}
