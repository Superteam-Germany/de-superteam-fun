import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo, Unbounded } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import FooterGroup from "@/app/buildstation/sections/FooterGroup";
import Banner from "@/components/Banner";

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
      <body
        className={`${satoshi.variable} ${archivo.variable} ${fontHyperdrive.variable} `}>
        <main>
          {children}
          <Analytics />
          <FooterGroup />
        </main>
        <Banner text="It's Hackathon Season! Submit your project and let us help you succeed!" link="https://tally.so/r/mD5Q7X" />
      </body>
    </html>
  );
}
