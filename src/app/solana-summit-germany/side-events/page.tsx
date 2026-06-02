import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sideEvents, type SideEvent } from "@/sections/solana-summit/data";
import { SummitCta } from "@/sections/solana-summit/summit-cta";
import { SummitReveal } from "@/sections/solana-summit/summit-reveal";
import { SummitNav, SummitShell } from "@/sections/solana-summit/summit-shell";

const sideEventsUrl =
  "https://de.superteam.fun/solana-summit-germany/side-events";
const summitSocialImage =
  "https://de.superteam.fun/images/summit-germany/summit-social-card-v1.jpg";
const sideEventGroups = sideEvents.reduce<
  Array<{ date: string; events: SideEvent[] }>
>((groups, event) => {
  const currentGroup = groups[groups.length - 1];

  if (currentGroup?.date === event.date) {
    currentGroup.events.push(event);
  } else {
    groups.push({ date: event.date, events: [event] });
  }

  return groups;
}, []);

export const metadata: Metadata = {
  metadataBase: new URL("https://de.superteam.fun"),
  title: "Side Events | Solana Summit Germany",
  description:
    "Community and partner-hosted events happening around Solana Summit Germany in Berlin.",
  icons: {
    icon: [{ url: "/st-flag-logo.png", type: "image/png" }],
    shortcut: [{ url: "/st-flag-logo.png", type: "image/png" }],
    apple: [{ url: "/st-flag-logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "Solana Summit Germany Side Events",
    description:
      "Community and partner-hosted events happening around Solana Summit Germany in Berlin.",
    url: sideEventsUrl,
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
    title: "Solana Summit Germany Side Events",
    description:
      "Community and partner-hosted events happening around Solana Summit Germany in Berlin.",
    images: [
      {
        url: summitSocialImage,
        alt: "Solana Summit Germany",
      },
    ],
    creator: "@SuperteamDE",
  },
};

export default function SummitSideEventsPage() {
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
            Summit Week / Berlin
          </p>
          <h1 className="max-w-[900px] text-[52px] font-normal leading-none tracking-[-0.03em] text-white sm:text-[72px] lg:text-[96px]">
            Side <span className="text-[#14f195]">Events</span>
          </h1>
          <p className="mt-6 max-w-[650px] text-lg leading-relaxed text-white/70 lg:text-xl">
            Community and partner-hosted events happening around Solana Summit
            Germany.
          </p>
        </div>
      </section>

      <section className="bg-black py-12 lg:py-20">
        <div className="summit-container">
          <div className="summit-content-frame">
            <div className="mx-auto max-w-[1040px]">
              <div className="space-y-10">
                {sideEventGroups.map((group) => (
                  <section
                    key={group.date}
                    className="grid gap-4 md:grid-cols-[190px_1fr] md:gap-8"
                  >
                    <p className="font-secondary text-base font-semibold uppercase tracking-[0.18em] text-[#14f195] md:pt-6">
                      {group.date}
                    </p>
                    <div className="border-y border-white/10">
                      {group.events.map((event) => (
                        <a
                          key={event.event}
                          href={event.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${event.event} on Lu.ma`}
                          className="group flex min-h-[88px] flex-col justify-center gap-4 border-b border-white/10 py-5 no-underline transition duration-150 ease-out last:border-b-0 hover:bg-white/[0.025] hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:flex-row sm:items-center sm:justify-between sm:px-4"
                        >
                          <h2 className="text-[26px] font-normal leading-[1.05] tracking-[-0.03em] text-white sm:text-[30px]">
                            {event.event}
                          </h2>
                          <span className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70 transition-colors duration-150 ease-out group-hover:border-[#14f195]/55 group-hover:text-[#14f195]">
                            RSVP
                            <span aria-hidden="true">↗</span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-[1040px] text-center text-sm leading-6 text-white/45">
              Want to host a side event?{" "}
              <a
                href="https://t.me/zcasee"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#14f195]/75 no-underline transition-colors duration-150 ease-out hover:text-[#14f195] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                Contact @zcasee
              </a>
            </p>
          </div>
        </div>
      </section>

      <SummitReveal className="border-t border-white/10 bg-black px-6 py-20 text-center lg:py-24">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-[48px] font-light leading-[1.03] tracking-[-0.015em] text-white md:text-[76px]">
            Ready for{" "}
            <br />
            <span className="text-[#14f195]">Berlin?</span>
          </h2>
          <SummitCta className="mt-10 h-[54px] w-full max-w-[320px]" />
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
    </SummitShell>
  );
}
