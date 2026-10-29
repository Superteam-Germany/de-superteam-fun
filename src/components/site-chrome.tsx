"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/nav";
import FooterGroup from "@/sections/buildstation/footer-group";
import { CampaignAnnouncement } from "@/components/campaign-announcement";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSummitRoute =
    pathname?.startsWith("/solana-summit-germany") ||
    pathname?.startsWith("/solana-summit");

  if (isSummitRoute) {
    return (
      <>
        <CampaignAnnouncement />
        {children}
      </>
    );
  }

  return (
    <>
      <CampaignAnnouncement />
      <main>
        <Nav />
        {children}
        <FooterGroup />
      </main>
    </>
  );
}
