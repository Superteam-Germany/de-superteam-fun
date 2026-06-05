import type { Metadata } from "next";
import { SummitAgendaPageContent } from "@/sections/solana-summit/agenda-page";

const agendaUrl = "https://de.superteam.fun/solana-summit-germany/agenda";
const summitSocialImage =
  "https://de.superteam.fun/images/summit-germany/summit-social-card-v1.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://de.superteam.fun"),
  title: "Agenda | Solana Summit Germany",
  description:
    "Conference agenda for Solana Summit Germany in Berlin on 13 June 2026.",
  icons: {
    icon: [{ url: "/st-flag-logo.png", type: "image/png" }],
    shortcut: [{ url: "/st-flag-logo.png", type: "image/png" }],
    apple: [{ url: "/st-flag-logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "Solana Summit Germany Agenda",
    description:
      "Conference agenda for the Solana ecosystem summit in Berlin.",
    url: agendaUrl,
    siteName: "Superteam Germany",
    images: [
      {
        url: summitSocialImage,
        secureUrl: summitSocialImage,
        width: 1200,
        height: 600,
        alt: "Solana Summit Germany",
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
        url: summitSocialImage,
        alt: "Solana Summit Germany",
      },
    ],
  },
};

export default function SummitAgendaPage() {
  return <SummitAgendaPageContent />;
}
