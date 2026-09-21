import type { Metadata } from "next";
import { SummitAgendaPageContent } from "@/sections/solana-summit/agenda-page";
import {
  SITE_SOCIAL_IMAGE,
  SITE_SOCIAL_IMAGE_ALT,
  SITE_SOCIAL_IMAGE_HEIGHT,
  SITE_SOCIAL_IMAGE_WIDTH,
} from "@/lib/social-metadata";

const agendaUrl = "https://de.superteam.fun/solana-summit-germany/agenda";

export const metadata: Metadata = {
  metadataBase: new URL("https://de.superteam.fun"),
  title: "Solana Summit Germany Agenda",
  description:
    "Conference agenda for Solana Summit Germany in Berlin on 13 June 2026.",
  alternates: { canonical: "/solana-summit-germany/agenda" },
  icons: {
    icon: [{ url: "/superteamgermany-favicon.png", type: "image/png" }],
    shortcut: [{ url: "/superteamgermany-favicon.png", type: "image/png" }],
    apple: [{ url: "/superteamgermany-favicon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Solana Summit Germany Agenda",
    description:
      "Conference agenda for the Solana ecosystem summit in Berlin.",
    url: agendaUrl,
    siteName: "Superteam Germany",
    images: [
      {
        url: SITE_SOCIAL_IMAGE,
        secureUrl: SITE_SOCIAL_IMAGE,
        width: SITE_SOCIAL_IMAGE_WIDTH,
        height: SITE_SOCIAL_IMAGE_HEIGHT,
        alt: SITE_SOCIAL_IMAGE_ALT,
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Summit Germany Agenda",
    description:
      "Conference agenda for the Solana ecosystem summit in Berlin.",
    images: [
      {
        url: SITE_SOCIAL_IMAGE,
        alt: SITE_SOCIAL_IMAGE_ALT,
      },
    ],
  },
};

export default function SummitAgendaPage() {
  return <SummitAgendaPageContent />;
}
