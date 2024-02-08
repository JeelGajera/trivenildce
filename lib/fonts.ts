/**
 * This file is used to import and create all the necessary fonts provided by next.js google font package
 */

import { Actor, Inter } from "next/font/google";

const actor = Actor({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-actor",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export { actor, inter };
