/* ------------------------------------------------------------------ *
 *  Storage adapter.
 *
 *  Async by design so the backing store can be swapped later (a real
 *  API, IndexedDB, Supabase) without touching the app. Uses
 *  window.storage when it exists — that's the Claude artifact
 *  environment the first version ran in — and localStorage otherwise.
 * ------------------------------------------------------------------ */

const hasHostStorage =
  typeof window !== "undefined" &&
  window.storage &&
  typeof window.storage.get === "function";

export async function get(key) {
  if (hasHostStorage) return window.storage.get(key);
  try {
    const value = window.localStorage.getItem(key);
    return value == null ? null : { value };
  } catch {
    return null;
  }
}

export async function set(key, value) {
  if (hasHostStorage) return window.storage.set(key, value);
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

export default { get, set };
