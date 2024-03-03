import type { Metadata } from "next";
import Script from "next/script";

import Header from "@/components/Header";
import ReflectiveNavigator from "@/components/ReflectiveNavigator";
import Footer from "@/components/Footer";
import AEScript from "@/components/AEScript";
import { Toaster } from "@/components/ui/toaster";

import { actor, inter } from "@/lib/fonts";

import "@/styles/globals.css";
import Head from "next/head";
import SponserPopup from "@/components/SponserPopup";

export const metadata: Metadata = {
  title: "Triveni 2K24 - Embark On The Journey of Inno-Culture ✨",
  description:
    "Experience the essence of Triveni Annual Fest 2023, where education meets innovation. Join us in celebrating excellence in technical education and research, shaping responsible citizens and competent professionals for a sustainable future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></Script>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <body
        className={`${inter.variable} ${actor.variable} overflow-hidden bg-black text-white font-inter w-screen h-full`}
      >
        <AEScript />
        <Header />
        <ReflectiveNavigator />
        <Toaster />
        {children}

        <p className="tracking-wide animate-glitch horizontal_tabline">
          Triveni-2K24, Triveni-2K24, Triveni-2K24, Triveni-2K24, Triveni-2K24,
          Triveni-2K24, Triveni-2K24, Triveni-2K24, Triveni-2K24,
        </p>
        <Footer />
        <SponserPopup />
      </body>
    </html>
  );
}
