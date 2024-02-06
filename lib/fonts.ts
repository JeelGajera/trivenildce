/**
 * This file is used to import and create all the necessary fonts provided by next.js google font package
 */

import { Actor } from "next/font/google";

const actor = Actor({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--actor-font",
});

export { actor };
