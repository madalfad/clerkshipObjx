/* ------------------------------------------------------------------ *
 *  TEMPLATE — copy this file to start a new rotation.
 *
 *    cp src/data/_template.js src/data/surgery.js
 *
 *  Then register it in src/data/index.js. Nothing else in the app
 *  needs to change — progress tracking, search, filters, the coverage
 *  map and per-section stats all derive from this data.
 *
 *  Rules:
 *    id      unique, short, lowercase. Progress is saved under this key,
 *            so changing it later orphans saved progress.
 *    short   2–4 characters, shown on the rotation tab.
 *    num     section number as a string ("01", "02", ...). Displayed
 *            verbatim and used as the collapse key.
 *    items   plain strings. Prefix with "★" to mark high-yield.
 *            Objective IDs are hashed from the text, so editing an
 *            item's wording resets that one item's progress.
 * ------------------------------------------------------------------ */

const template = {
  id: "template",
  name: "Rotation Name",
  short: "RN",
  sections: [
    {
      num: "01",
      title: "Cross-cutting clinical skills",
      blurb: "One line on why this section matters.",
      groups: [
        {
          title: "Group heading",
          items: [
            "★ A high-yield objective, written as something you can actually demonstrate",
            "A second objective",
          ],
        },
      ],
    },
  ],
};

export default template;
