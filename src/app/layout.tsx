import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo, Unbounded } from "next/font/google";
import Spacer from "@/components/ui/Spacer";
import Nav from "@/components/Nav";

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
        {children}
      </body>
    </html>
  );
}
