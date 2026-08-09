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
    storage.js          Async storage adapter (localStorage)
  data/
    index.js            Rotation registry — the file you edit to add one
    internal-medicine.js
    _template.js        Copy this to start a new rotation
```

The split is the point: **`src/data/` is content, everything else is machinery.**
`App.jsx` contains no mention of internal medicine, cardiology, or any
specific objective. Progress tracking, search, status filters, the
high-yield filter, the coverage map and per-section stats all derive from
whatever is in the data files.

## Adding a rotation

1. `cp src/data/_template.js src/data/surgery.js`
2. Fill in `id`, `name`, `short`, and the sections/groups/items.
3. Register it in `src/data/index.js`:

   ```js
   import surgery from "./surgery.js";

   export const CLERKSHIPS = [internalMedicine, surgery];
   ```

That's it. A rotation tab appears once there is more than one, and each
rotation's progress is stored separately.

### Data shape

```js
{
  id: "surgery",          // unique, lowercase — progress is keyed to this
  name: "Surgery",        // page title
  short: "SURG",          // tab label, 2–4 characters
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
