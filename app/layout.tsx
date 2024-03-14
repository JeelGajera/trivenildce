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
import { fromJSON } from "postcss";
import GTAG from "@/components/GTAG";

export const metadata: Metadata = {
  title: "Triveni 2K24 - Embark On The Journey of Inno-Culture ✨",
  description:
    "Experience the essence of Triveni Annual Fest 2024, where education meets innovation. Join us in celebrating excellence in technical education and research, shaping responsible citizens and competent professionals for a sustainable future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="overflow-x-hidden">
      <Script id="jquery" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" crossOrigin="anonymous" strategy="beforeInteractive"></Script>
      <Script
          id='gtag'
          strategy='lazyOnload'
          src={"https://www.googletagmanager.com/gtag/js?id=G-PTL05QXFP2"}
        ></Script>
        <Script
          strategy='lazyOnload'
          id='gtag-init'>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PTL05QXFP2');
        `}
        </Script>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="google-adsense-account" content="ca-pub-8164117122618034" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="preload" fetchPriority="high" href="https://res.cloudinary.com/earthian/video/upload/v1710059894/Triveni2K24/LDCE_Campus_sukcok.mp4" as="video" />
        <link rel="preload" fetchPriority="high" href="https://res.cloudinary.com/earthian/video/upload/v1710064371/Triveni2K24/guitar_gif_doqkik.mp4" as="video" />
      </Head>

      <body
        className={`${inter.variable} ${actor.variable} overflow-hidden bg-black text-white font-inter w-screen h-full`}
      >
        <GTAG />
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
