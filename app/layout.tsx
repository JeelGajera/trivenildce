import type { Metadata } from "next";

import Header from "@/components/Header";
import ReflectiveNavigator from "@/components/ReflectiveNavigator";

import { actor, inter } from "@/lib/fonts";

import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import AEScript from "@/components/AEScript";

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
        className={`${inter.variable} ${actor.variable} bg-gray-900 text-white font-inter w-screen h-full`}
      >
        <AEScript />
        <Header />
        <ReflectiveNavigator />
        {children}
        <Footer />
      </body>
    </html>
  );
}
