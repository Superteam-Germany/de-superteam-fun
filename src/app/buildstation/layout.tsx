import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berlin Build Station | Superteam Germany",
  description:
    "Join Superteam Germany for a journey into the future of Solana at our Build Station in Berlin.This is your opportunity to shape the future of blockchain, and to get the support you need to build for the Hyperdrive Hackathon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
