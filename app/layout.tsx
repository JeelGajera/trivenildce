import type { Metadata } from "next";
import Script from "next/script";

import Header from "@/components/Header";
import ReflectiveNavigator from "@/components/ReflectiveNavigator";
import Footer from "@/components/Footer";
import AEScript from "@/components/AEScript";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en" className="overflow-x-hidden">
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></Script>

      <body
        className={`${inter.variable} ${actor.variable} bg-gray-900 text-white font-inter w-screen h-full`}
      >
        <AEScript />
        <Header />
        <ReflectiveNavigator />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
