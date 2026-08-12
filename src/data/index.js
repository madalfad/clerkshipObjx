/* ------------------------------------------------------------------ *
 *  CLERKSHIP REGISTRY
 *
 *  Every core rotation is registered here. A rotation whose file has an
 *  empty `sections` array is a placeholder: the app renders its tab
 *  disabled until objectives are written. To bring one online, open its
 *  file in this directory and fill in the sections — nothing here or in
 *  the app needs to change.
 *
 *  To add a rotation that is not already listed:
 *    1. Copy _template.js  ->  src/data/<rotation>.js
 *    2. Fill in id, name, short and the sections
 *    3. Import it below and add it to CLERKSHIPS
 *
 *  Order here is the order of the tabs in the app.
 * ------------------------------------------------------------------ */

import internalMedicine from "./internal-medicine.js";
import surgery from "./surgery.js";
import pediatrics from "./pediatrics.js";
import obgyn from "./obgyn.js";
import psychiatry from "./psychiatry.js";
import familyMedicine from "./family-medicine.js";

export const CLERKSHIPS = [
  internalMedicine,
  surgery,
  pediatrics,
  obgyn,
  psychiatry,
  familyMedicine,
];

export const getClerkship = (id) =>
  CLERKSHIPS.find((c) => c.id === id) ?? CLERKSHIPS[0];

export default CLERKSHIPS;
