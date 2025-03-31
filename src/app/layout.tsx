import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo, Unbounded } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import FooterGroup from "@/sections/buildstation/footer-group";
import Nav from "@/components/nav";
import Head from "next/head";
import Script from "next/script";

const satoshi = localFont({
  src: "./Satoshi-Variable.woff2",
  display: "swap",
  variable: "--font-primary",
});
const archivo = Archivo({
  display: "swap",
  variable: "--font-secondary",
  subsets: ["latin"],
});

const fontHyperdrive = Unbounded({
  display: "swap",
  variable: "--font-hyperdrive",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Superteam Germany",
  description:
    "Uniting the power of innovation, creativity, and collaboration to shape the Solana Ecosystem in Germany.",
  icons: {
    icon: "/st-flag-logo.png",
  },
  openGraph: {
    title: "Superteam Germany",
    description:
      "Uniting the power of innovation, creativity, and collaboration to shape the Solana Ecosystem in Germany.",
    url: "https://de.superteam.fun",
    siteName: "Superteam Germany",
    images: [
      {
        url: "/st-banner.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superteam Germany",
    description:
      "Uniting the power of innovation, creativity, and collaboration to shape the Solana Ecosystem in Germany.",
    images: ["/st-banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Superteam Germany</title>
        <meta
          name="description"
          content="The heartbeat of Germany's Solana community."
        />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NRF8D57Z');`}
        </Script>
        {/* End Google Tag Manager */}
      </Head>
      <body
        className={`${satoshi.variable} ${archivo.variable} ${fontHyperdrive.variable} `}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRF8D57Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <main>
          <Nav />
          {children}
          <Analytics />
          <FooterGroup />
        </main>
      </body>
    </html>
  );
}
