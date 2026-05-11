"use client";

import { Analytics } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";
import Nav from "@/components/nav";
import FooterGroup from "@/sections/buildstation/footer-group";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSummitRoute = pathname?.startsWith("/solana-summit");

  if (isSummitRoute) {
    return (
      <>
        {children}
        <Analytics />
      </>
    );
  }

  return (
    <main>
      <Nav />
      {children}
      <Analytics />
      <FooterGroup />
    </main>
  );
}
