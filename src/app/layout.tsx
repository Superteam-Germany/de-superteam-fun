import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo, Unbounded } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import FooterGroup from "@/sections/buildstation/footer-group";
import Nav from "@/components/nav";
import Head from "next/head";

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
        <meta name="description" content="The heartbeat of Germany's Solana community." />
      </Head>
      <body
        className={`${satoshi.variable} ${archivo.variable} ${fontHyperdrive.variable} `}>
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
