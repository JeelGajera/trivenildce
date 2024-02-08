import type { Metadata } from "next";

import Header from "@/components/sections/Header";
import { actor, inter } from "@/lib/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Triveni LDEC",
  description: "L.D. College of engineering Triveni club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${actor.variable} bg-gray-900 text-white font-inter w-screen h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
