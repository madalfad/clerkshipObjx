# Clerkship Objective Tracker

An interactive checklist of core clinical competencies for medical student
clerkships. Tap an objective to cycle it **to do → in progress → done**;
progress saves automatically to the browser.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
```

## Layout

```
index.html              Vite entry point
vite.config.js
src/
  main.jsx              Mounts <App />
  App.jsx               The whole UI — rotation-agnostic
  styles.css            All styling
  lib/
    objectives.js       hashId, buildIndex, tally, STATUS  (pure, testable)
    transfer.js         Export/import file format  (pure, testable)
    storage.js          Async storage adapter (localStorage)
  data/
    index.js            Rotation registry — the file you edit to add one
    internal-medicine.js
    surgery.js          Placeholder — empty sections, tab disabled
    pediatrics.js       Placeholder
    obgyn.js            Placeholder
    psychiatry.js       Placeholder
    family-medicine.js  Placeholder
    _template.js        Copy this to start a rotation not listed above
```

The split is the point: **`src/data/` is content, everything else is machinery.**
`App.jsx` contains no mention of internal medicine, cardiology, or any
specific objective. Progress tracking, search, status filters, the
high-yield filter, the coverage map and per-section stats all derive from
whatever is in the data files.

## Filling in a rotation

The core rotations are already registered. Each one that has no objectives
yet ships as a placeholder — an empty `sections` array — and the app renders
its tab disabled.

To bring one online, open its file and fill in the sections:

```js
// src/data/surgery.js
const surgery = {
  id: "surgery",
  name: "Surgery",
  short: "SURG",
  sections: [ /* ... */ ],   // no longer empty -> tab enables itself
};
```

Nothing else changes. Availability is derived from the data, so there is no
second flag to flip and no way for the tab state to drift from the content.

## Adding a rotation that is not registered

1. `cp src/data/_template.js src/data/dermatology.js`
2. Fill in `id`, `name`, `short`, and the sections/groups/items.
3. Import it in `src/data/index.js` and add it to `CLERKSHIPS`. Order there
   is tab order.

Each rotation's progress is stored separately, under its `id`.

### Data shape

```js
{
  id: "surgery",          // unique, lowercase — progress is keyed to this
  name: "Surgery",        // page title
  short: "SURG",          // tab label, 2–5 characters
  sections: [
    {
      num: "01",                        // string, displayed verbatim
      title: "Cross-cutting skills",
      blurb: "One line on why this matters.",
      groups: [
        {
          title: "Group heading",
          items: [
            "★ A high-yield objective",  // leading ★ = high-yield
            "A regular objective",
          ],
        },
      ],
    },
  ],
}
```

## Moving progress between browsers

Progress lives in the browser's `localStorage`, which is per-browser and
per-device, and clearing site data wipes it. **Export** writes a JSON file
covering every rotation; **Import** reads one back.

```json
{
  "kind": "clerkship-objective-tracker/progress",
  "version": 1,
  "exportedAt": "2026-08-12T19:44:05.546Z",
  "statuses": { "im": { "bld5rc": 2, "cjko75": 1 } },
  "collapsed": { "im": { "01": true } }
}
```

Status values are the `STATUS` enum: `1` in progress, `2` done. To-do items
are absent rather than stored as `0`.

Import rules:

- **Merges by rotation.** A rotation named in the file replaces its saved
  counterpart; a rotation the file says nothing about is left alone, so a
  partial export cannot wipe the rest.
- **Unknown rotations are kept**, so progress can be imported before that
  rotation's objectives are written.
- **Undo** is offered after every import, and restores the exact prior state.
- Files that are not exports are rejected by name, with saved progress
  untouched. Entries with invalid status values are skipped and counted.
- Because objective IDs are hashed from the objective text, an export taken
  before wording changed carries IDs that no longer resolve. Those import
  cleanly but are reported: "3 do not match the current objective text."

## Things worth knowing

- **Objective IDs are hashed from the objective's text**, so rewording an
  item resets that one item's progress. Fixing a typo costs one checkbox.
- **Changing a rotation's `id` orphans all its saved progress**, since
  progress is stored under that key.
- Storage lives behind `src/lib/storage.js`. It writes to `localStorage`
  today; swapping in an API or IndexedDB later means editing that one file,
  not the app.

## Current content

| Rotation | Sections | Groups | Objectives | High-yield |
|---|---|---|---|---|
| Internal Medicine | 7 | 27 | 204 | 39 |
| Surgery | — | — | — | — |
| Pediatrics | — | — | — | — |
| Obstetrics and Gynecology | — | — | — | — |
| Psychiatry | — | — | — | — |
| Family Medicine | — | — | — | — |

Rotations marked — are registered placeholders with disabled tabs.
