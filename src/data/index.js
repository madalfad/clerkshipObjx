/* ------------------------------------------------------------------ *
 *  CLERKSHIP REGISTRY
 *
 *  This is the only file you touch when adding a rotation:
 *    1. Copy _template.js  ->  src/data/surgery.js
 *    2. Fill in the objectives
 *    3. Import it below and add it to CLERKSHIPS
 *
 *  Order here is the order of the tabs in the app.
 * ------------------------------------------------------------------ */

import internalMedicine from "./internal-medicine.js";

export const CLERKSHIPS = [
  internalMedicine,
  // surgery,
  // pediatrics,
  // obgyn,
  // psychiatry,
  // familyMedicine,
  // neurology,
];

export const getClerkship = (id) =>
  CLERKSHIPS.find((c) => c.id === id) ?? CLERKSHIPS[0];

export default CLERKSHIPS;
