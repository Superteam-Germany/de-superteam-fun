import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SOLANA_SUMMIT_LUMA_LINK } from "@/lib/constants";
import { AgendaList } from "@/sections/solana-summit/agenda-list";
import { SummitCta } from "@/sections/solana-summit/summit-cta";
import { SummitReveal } from "@/sections/solana-summit/summit-reveal";
import { SummitNav, SummitShell } from "@/sections/solana-summit/summit-shell";

const agendaPreviewUrl =
  "https://www.superteamde.fun/solana-summit-germany/agenda-preview";
const summitSocialImage =
  "https://www.superteamde.fun/images/summit-germany/summit-x-website-link-view.png?v=2";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.superteamde.fun"),
  title: "Agenda Preview | Solana Summit Germany",
  description:
    "Internal agenda preview for Solana Summit Germany in Berlin on 13 June 2026.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [{ url: "/st-flag-logo.png", type: "image/png" }],
    shortcut: [{ url: "/st-flag-logo.png", type: "image/png" }],
    apple: [{ url: "/st-flag-logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "Solana Summit Germany Agenda Preview",
    description:
      "Internal agenda preview for the Solana ecosystem summit in Berlin.",
    url: agendaPreviewUrl,
    siteName: "Superteam Germany",
    images: [
      {
        url: summitSocialImage,
        width: 1774,
        height: 887,
        alt: "Solana Summit Germany",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Summit Germany Agenda Preview",
    description:
      "Internal agenda preview for the Solana ecosystem summit in Berlin.",
    images: [summitSocialImage],
  },
};

export default function SummitAgendaPreviewPage() {
  return (
    <SummitShell>
      <SummitNav />
      <section className="relative overflow-hidden bg-black py-12 lg:py-20">
        <div className="pointer-events-none absolute -left-[200px] top-0 h-full w-[600px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(153,69,255,0.4)_0%,rgba(137,58,233,0.2)_40%,transparent_70%)] blur-[80px]" />
        </div>
        <div className="summit-container relative z-10">
          <Link
            href="/solana-summit-germany"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/60 no-underline transition-colors duration-150 ease-out hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span aria-hidden="true">‹</span>
            Back to Solana Summit Germany
          </Link>
          <p className="mb-4 text-base font-medium uppercase tracking-[0.08em] text-white/70">
            13 June 2026 / Berlin
          </p>
          <h1 className="max-w-[900px] text-[52px] font-normal leading-none tracking-[-0.03em] text-white sm:text-[72px] lg:text-[96px]">
            Conference{" "}
            <span className="text-[#14f195]">Agenda</span>
          </h1>
          <p className="mt-6 max-w-[650px] text-lg leading-relaxed text-white/70 lg:text-xl">
            A full day of keynotes, panels, firesides, live formats, and
            networking for the Solana ecosystem in Germany.
          </p>
        </div>
      </section>
      <AgendaList />
      <AgendaFinalCta />
    </SummitShell>
  );
}

function AgendaFinalCta() {
  return (
    <SummitReveal className="border-t border-white/10 bg-black px-6 py-20 text-center lg:py-24">
      <div className="mx-auto max-w-[760px]">
        <h2 className="text-[48px] font-light leading-[1.03] tracking-[-0.015em] text-white md:text-[76px]">
          Ready for{" "}
          <br />
          <span className="text-[#14f195]">Berlin?</span>
        </h2>
        <SummitCta
          href={SOLANA_SUMMIT_LUMA_LINK}
          className="mt-10 h-[54px] w-full max-w-[320px]"
        />
        <Image
          src="/images/summit-germany/superteam.svg"
          alt="Powered by Superteam"
          width={303}
          height={24}
          unoptimized
          className="mx-auto mt-14 h-auto w-[130px] opacity-60 md:w-[150px]"
        />
      </div>
    </SummitReveal>
  );
}
