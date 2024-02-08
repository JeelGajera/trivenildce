/**
 * This file is used to import and create all the necessary fonts provided by next.js google font package
 */

<<<<<<< HEAD
import { Actor } from "next/font/google";
=======
import { Actor, Inter } from "next/font/google";
>>>>>>> 7f6a0e7a8cdf8c22030eef0eebbf4e5b0eb0c765

const actor = Actor({
  weight: ["400"],
  subsets: ["latin"],
<<<<<<< HEAD
  variable: "--actor-font",
});

export { actor };
=======
  variable: "--font-actor",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export { actor, inter };
>>>>>>> 7f6a0e7a8cdf8c22030eef0eebbf4e5b0eb0c765
