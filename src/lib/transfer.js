/* ------------------------------------------------------------------ *
 *  Progress export / import — the on-disk file format.
 *
 *  Pure functions, no React, no DOM. The saved blob and the exported
 *  file share the same shape ({ statuses, collapsed } keyed by rotation
 *  id), so a file round-trips without translation.
 * ------------------------------------------------------------------ */

import { STATUS } from "./objectives.js";

export const FILE_KIND = "clerkship-objective-tracker/progress";
export const FILE_VERSION = 1;

const isPlainObject = (v) => typeof v === "object" && v !== null && !Array.isArray(v);
const isStatus = (v) => v === STATUS.TODO || v === STATUS.ACTIVE || v === STATUS.DONE;

/** Wrap a saved blob in the export envelope. */
export function toExport(saved, now = new Date()) {
  return {
    kind: FILE_KIND,
    version: FILE_VERSION,
    exportedAt: now.toISOString(),
    statuses: saved?.statuses ?? {},
    collapsed: saved?.collapsed ?? {},
  };
}

export function exportFilename(now = new Date()) {
  return `clerkship-progress-${now.toISOString().slice(0, 10)}.json`;
}

/**
 * Parse and validate an exported file.
 * Returns { ok: true, data } or { ok: false, error } — never throws.
 *
 * Unrecognized rotation ids are kept: progress can be imported before
 * that rotation's objectives are written.
 */
export function parseImport(text) {
  let raw;
  try {
    raw = JSON.parse(text);
  } catch {
    return { ok: false, error: "That file is not valid JSON." };
  }
  if (!isPlainObject(raw)) return { ok: false, error: "That file is not a progress export." };
  if (raw.kind !== FILE_KIND) {
    return { ok: false, error: "That file is not a clerkship progress export." };
  }
  if (typeof raw.version !== "number" || raw.version > FILE_VERSION) {
    return { ok: false, error: "That file was written by a newer version of the tracker." };
  }
  if (raw.statuses !== undefined && !isPlainObject(raw.statuses)) {
    return { ok: false, error: "That file is malformed: statuses is not an object." };
  }
  if (raw.collapsed !== undefined && !isPlainObject(raw.collapsed)) {
    return { ok: false, error: "That file is malformed: collapsed is not an object." };
  }

  const statuses = {};
  let dropped = 0;
  for (const [rotation, map] of Object.entries(raw.statuses ?? {})) {
    if (!isPlainObject(map)) {
      dropped++;
      continue;
    }
    const clean = {};
    for (const [itemId, value] of Object.entries(map)) {
      if (isStatus(value)) clean[itemId] = value;
      else dropped++;
    }
    statuses[rotation] = clean;
  }

  const collapsed = {};
  for (const [rotation, map] of Object.entries(raw.collapsed ?? {})) {
    if (!isPlainObject(map)) continue;
    const clean = {};
    for (const [num, value] of Object.entries(map)) clean[num] = !!value;
    collapsed[rotation] = clean;
  }

  return { ok: true, data: { statuses, collapsed, exportedAt: raw.exportedAt ?? null, dropped } };
}

/**
 * Overlay imported progress on the saved blob, one rotation at a time.
 * A rotation present in the file replaces its counterpart; a rotation
 * absent from the file is left untouched, so importing a partial export
 * cannot wipe a rotation it says nothing about.
 */
export function mergeProgress(saved, incoming, now = new Date()) {
  const merged = {
    statuses: { ...(saved?.statuses ?? {}) },
    collapsed: { ...(saved?.collapsed ?? {}) },
    updatedAt: now.toISOString(),
  };
  for (const [rotation, map] of Object.entries(incoming.statuses ?? {})) {
    merged.statuses[rotation] = map;
  }
  for (const [rotation, map] of Object.entries(incoming.collapsed ?? {})) {
    merged.collapsed[rotation] = map;
  }
  return merged;
}

/** Rotations touched and objectives recorded, for the result message. */
export function summarize(incoming) {
  const rotations = Object.keys(incoming.statuses ?? {});
  const items = rotations.reduce(
    (n, r) => n + Object.keys(incoming.statuses[r]).length,
    0
  );
  return { rotations: rotations.length, items };
}

/**
 * How many imported ids for a rotation still match its objectives.
 * Objective ids are hashed from the objective text, so an export taken
 * before the wording changed will carry ids that no longer resolve.
 */
export function countStale(incoming, rotationId, indexedItems) {
  const map = incoming.statuses?.[rotationId];
  if (!map) return 0;
  const live = new Set(indexedItems.map((it) => it.id));
  return Object.keys(map).filter((id) => !live.has(id)).length;
}
