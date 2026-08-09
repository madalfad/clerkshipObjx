/* ------------------------------------------------------------------ *
 *  Objective helpers — turning raw rotation data into indexed items.
 *  Pure functions, no React, no DOM. Safe to unit-test.
 * ------------------------------------------------------------------ */

export const STATUS = { TODO: 0, ACTIVE: 1, DONE: 2 };

/** djb2 — stable across sessions so saved progress survives reloads. */
export function hashId(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

/**
 * Expand a clerkship's raw data into indexed sections plus a flat list.
 * Strips the leading "★" and turns it into an `star: true` flag.
 */
export function buildIndex(clerkship) {
  const sections = clerkship.sections.map((s) => ({
    ...s,
    groups: s.groups.map((g) => ({
      ...g,
      items: g.items.map((raw) => {
        const star = raw.startsWith("★");
        const text = star ? raw.slice(1).trim() : raw;
        return { id: hashId(clerkship.id + "|" + text), text, star };
      }),
    })),
  }));
  const all = sections.flatMap((s) => s.groups.flatMap((g) => g.items));
  return { sections, all };
}

/** Count done / active / todo across a list of indexed items. */
export function tally(items, statuses) {
  let done = 0;
  let active = 0;
  for (const it of items) {
    const v = statuses[it.id];
    if (v === STATUS.DONE) done++;
    else if (v === STATUS.ACTIVE) active++;
  }
  return { done, active, todo: items.length - done - active, total: items.length };
}
