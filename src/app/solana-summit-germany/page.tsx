import type { Metadata } from "next";
import Image from "next/image";
import {
  SOLANA_SUMMIT_LUMA_LINK,
  SOLANA_SUMMIT_SPEAKER_FORM_LINK,
  SOLANA_SUMMIT_SPONSOR_FORM_LINK,
} from "@/lib/constants";
import { faqs } from "@/sections/solana-summit/data";
import { SummitReveal } from "@/sections/solana-summit/summit-reveal";
import { SummitScrollReveal } from "@/sections/solana-summit/summit-scroll-reveal";
import { SpeakerGrid } from "@/sections/solana-summit/speaker-grid";
import { SummitCta } from "@/sections/solana-summit/summit-cta";
import { SummitNav, SummitShell } from "@/sections/solana-summit/summit-shell";

const partnerRows = [
  {
    label: "Gold Partners",
    labelClassName: "text-[#facc15]",
    listClassName:
      "grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 md:gap-x-20",
    slotClassName: "h-24 w-full max-w-[360px]",
    partners: [
      {
        name: "Staking Facilities",
        href: "https://stakingfacilities.com/",
        image: "/images/summit-germany/partners/stacking-facilities.png",
        width: 3021,
        height: 849,
        logoClassName: "max-h-16 max-w-[210px] md:max-h-[82px] md:max-w-[300px]",
      },
      {
        name: "VIA",
        href: "https://www.solvewithvia.com/",
        image: "/images/summit-germany/partners/VIA-Logo-White.png",
        width: 562,
        height: 185,
        logoClassName: "max-h-16 max-w-[210px] md:max-h-[82px] md:max-w-[270px]",
      },
      {
        name: "Arcium",
        href: "https://arcium.com/",
        image: "/images/summit-germany/partners/arcium-logo.svg",
        width: 1644,
        height: 275,
        logoClassName: "max-h-16 max-w-[210px] md:max-h-[82px] md:max-w-[270px]",
      },
      {
        name: "Bags",
        href: "https://bags.fm",
        image: "/images/summit-germany/partners/bags-logo-2.svg",
        width: 1224,
        height: 280,
        logoClassName: "max-h-16 max-w-[210px] md:max-h-[82px] md:max-w-[270px]",
      },
    ],
  },
  {
    label: "Community Partners",
    labelClassName: "text-[#9945ff]",
    listClassName:
      "flex max-w-[980px] flex-wrap items-center justify-center gap-x-10 gap-y-8",
    slotClassName: "h-20 w-[200px]",
    partners: [
      {
        name: "Tangem",
        href: "https://tangem.com/en",
        image: "/images/summit-germany/partners/tangem.png",
        width: 1296,
        height: 280,
        logoClassName: "max-h-8 max-w-[165px] md:max-h-9 md:max-w-[185px]",
      },
      {
        name: "CUDIS",
        href: "https://www.cudis.xyz/",
        image: "/images/summit-germany/partners/CUDIS_Wordmark_White.svg",
        width: 1622,
        height: 285,
        logoClassName: "max-h-8 max-w-[160px] md:max-w-[190px]",
      },
      {
        name: "Buddies for Paws",
        href: "https://www.buddiesforpaws.org/",
        image: "/images/summit-germany/partners/BFP-master-orange.svg",
        width: 440,
        height: 350,
        logoClassName: "max-h-[68px] max-w-[125px]",
      },
      {
        name: "Jupiter",
        href: "https://jup.ag/",
        image: "/images/summit-germany/partners/jupiter-white.svg",
        width: 208,
        height: 64,
        logoClassName: "!w-[155px] md:!w-[165px]",
      },
      {
        name: "Solana Spaces",
        href: "https://solanaspaces.com/",
        image: "/images/summit-germany/partners/solana spaces + type white.png",
        width: 3192,
        height: 1063,
        logoClassName: "max-h-11 max-w-[165px] md:max-h-12 md:max-w-[185px]",
      },
      {
        name: "Seeker",
        href: "https://solanamobile.com/seeker",
        image: "/images/summit-germany/partners/seeker.png",
        width: 6668,
        height: 2501,
        logoClassName: "max-h-11 max-w-[160px] md:max-h-12 md:max-w-[180px]",
      },
      {
        name: "Superteam Talent",
        href: "https://talent.superteam.fun/",
        image: "/images/summit-germany/partners/superteam-talent.png",
        width: 357,
        height: 62,
        logoClassName: "max-h-8 max-w-[160px] md:max-w-[180px]",
      },
    ],
  },
];

const summitUrl = "https://www.superteamde.fun/solana-summit-germany";
const summitSocialImage =
  "https://www.superteamde.fun/images/summit-germany/summit-og-card.png";

export const metadata: Metadata = {
  title: "Solana Summit Germany | Superteam Germany",
  description:
    "Join Solana Summit Germany in Berlin on 13 June 2026 for talks, networking, live formats, and the German Solana ecosystem.",
  icons: {
    icon: [{ url: "/st-flag-logo.png", type: "image/png" }],
    shortcut: [{ url: "/st-flag-logo.png", type: "image/png" }],
    apple: [{ url: "/st-flag-logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "Solana Summit Germany",
    description:
      "A full-day Solana ecosystem summit in Berlin hosted by Superteam Germany.",
    url: summitUrl,
    siteName: "Superteam Germany",
    images: [
      {
        url: summitSocialImage,
        width: 1584,
        height: 792,
        alt: "Solana Summit Germany",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Summit Germany",
    description:
      "A full-day Solana ecosystem summit in Berlin hosted by Superteam Germany.",
    images: [summitSocialImage],
  },
};

export default function SolanaSummitPage() {
  return (
    <SummitShell>
      <Hero />
      <EventDetails />
      <AgendaIntro />
      <Speakers />
      <Partners />
      <FAQ />
      <GettingThere />
      <FinalCta />
    </SummitShell>
  );
}

function SummitSidePatterns({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`summit-side-patterns ${className}`}>
      <span className="summit-side-pattern summit-side-pattern-left" />
      <span className="summit-side-pattern summit-side-pattern-right" />
    </div>
  );
}

function SummitHeroSilhouette({ priority = false }: { priority?: boolean }) {
  return (
    <div aria-hidden="true" className="summit-hero-silhouette">
      <Image
        src="/images/summit-germany/sil2.png"
        alt=""
        fill
        sizes="100vw"
        className="object-contain"
        priority={priority}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="summit-hero-stage relative min-h-screen overflow-hidden bg-black">
      <SummitNav className="absolute inset-x-0 top-0" />
      <SummitSidePatterns className="summit-hero-side-patterns" />
      <SummitHeroSilhouette priority />
      <div className="summit-hero-copy summit-container relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
        <p className="text-[22px] font-normal leading-none text-[#14f195] drop-shadow-[0_6px_24px_rgba(0,0,0,0.85)] md:text-[30px]">
          13 June 2026 / Berlin
        </p>
        <h1 className="mt-5 max-w-[980px] text-[46px] font-light leading-[1.02] tracking-[-0.02em] text-[#c2bfca] drop-shadow-[0_10px_34px_rgba(0,0,0,0.9)] md:text-[72px] lg:text-[84px]">
          Solana Summit Germany
        </h1>
        <SummitCta
          href={SOLANA_SUMMIT_LUMA_LINK}
          variant="solid"
          className="mt-8 h-[54px] w-[300px] px-7 text-[13px] sm:w-[390px] sm:text-[15px]"
        />
      </div>
    </section>
  );
}

function EventDetails() {
  const detailRows = [
    { label: "Date", value: "13 June 2026" },
    {
      label: "Venue",
      value: "Spreespeicher, Berlin",
      note: "Stralauer Allee 2, 10245 Berlin",
    },
    { label: "Time", value: "10:00-22:00" },
  ];

  return (
    <SummitReveal id="event-details" className="summit-section">
      <div className="summit-container">
        <div className="summit-content-frame">
          <h2 className="summit-section-heading">Event details</h2>
          <div className="summit-divider" />
          <div className="grid gap-10 lg:grid-cols-[520px_1fr] lg:gap-14">
            <div>
              {detailRows.map((fact) => (
                <div
                  key={fact.label}
                  className="grid items-start gap-4 border-b border-white/10 py-7 sm:grid-cols-[210px_1fr]"
                >
                  <p className="summit-gradient-text text-[24px] font-normal leading-none tracking-[0.01em]">
                    {fact.label}
                  </p>
                  <div>
                    <p className="max-w-[320px] text-[24px] font-normal leading-none tracking-[-0.01em] text-[#aaa7b5]">
                      {fact.value}
                    </p>
                    {fact.note && (
                      <p className="mt-4 max-w-[320px] text-base leading-6 text-[#14f195]">
                        {fact.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <iframe
              title="Spreespeicher Berlin on Google Maps"
              src="https://www.google.com/maps?q=Spreespeicher%20Berlin%20Stralauer%20Allee%202%2010245%20Berlin&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 lg:mt-8 lg:h-[400px]"
            />
          </div>
        </div>
      </div>
    </SummitReveal>
  );
}

function AgendaIntro() {
  return (
    <SummitReveal id="agenda" className="relative overflow-hidden bg-black py-24 lg:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0_12%,transparent_12%_50%,rgba(255,255,255,0.04)_50%_62%,transparent_62%)] bg-[length:96px_42px]" />
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#9945ff]/20 blur-[90px]" />
        <div className="absolute -right-20 top-24 h-80 w-80 rounded-full bg-[#14f195]/16 blur-[90px]" />
      </div>
      <div className="summit-container relative text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#14f195]">
          Full Day Conference
        </p>
        <h2 className="mx-auto mt-5 max-w-[860px] text-[52px] font-light leading-[0.98] tracking-[-0.02em] text-[#aaa7b5] md:text-[72px]">
          Explore the <span className="text-[#14f195]">Agenda</span>
        </h2>
        <p className="mx-auto mt-7 max-w-[680px] text-base leading-7 text-white/58">
          Keynotes, panels, firesides, live formats, and networking for the
          Solana ecosystem in Germany.
        </p>
        <div className="mx-auto mt-10 grid max-w-[360px] grid-cols-3 gap-8">
          {[
            ["30+", "Sessions"],
            ["40+", "Speakers"],
            ["1", "Full day"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-[42px] font-normal leading-none tracking-[-0.05em] text-[#14f195]">
                {value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/45">
                {label}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-[460px] text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
          Full agenda will be announced one week before the summit.
        </p>
      </div>
    </SummitReveal>
  );
}

function Speakers() {
  return (
    <SummitReveal id="speakers" className="bg-black py-20 lg:py-28">
      <div className="summit-container">
        <div className="summit-content-frame">
          <SpeakerGrid />
          <SummitCta
            href={SOLANA_SUMMIT_SPEAKER_FORM_LINK}
            className="mt-16 min-h-[42px] px-8 text-[13px]"
          >
            Apply to Speak
          </SummitCta>
        </div>
      </div>
    </SummitReveal>
  );
}

function Partners() {
  return (
    <SummitReveal id="partners" className="summit-pattern-section py-20 lg:py-28">
      <div className="summit-container">
        <div className="summit-content-frame">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="summit-section-heading">Partners</h2>
            <SummitCta
              href={SOLANA_SUMMIT_SPONSOR_FORM_LINK}
              className="min-h-[52px] w-fit px-7 text-[13px]"
            >
              Become a Partner
            </SummitCta>
          </div>

          <div className="mx-auto mt-12 max-w-[1120px] space-y-20 text-center">
            {partnerRows.map((row) => (
              <div key={row.label}>
                <p className={`${row.labelClassName} text-sm font-semibold uppercase tracking-[0.32em]`}>
                  {row.label}
                </p>
                <div className={`mx-auto mt-10 ${row.listClassName}`}>
                  {row.partners.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${partner.name}`}
                      className={`flex items-center justify-center opacity-80 grayscale transition duration-150 ease-out hover:opacity-100 hover:grayscale-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-4 focus-visible:ring-offset-black ${row.slotClassName}`}
                    >
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={partner.width}
                        height={partner.height}
                        unoptimized={partner.image.endsWith(".svg")}
                        className={`h-auto w-auto object-contain ${partner.logoClassName}`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SummitReveal>
  );
}

function FAQ() {
  return (
    <SummitReveal id="faq" className="bg-black py-20 lg:py-28">
      <div className="summit-container">
        <div className="summit-content-frame">
          <h2 className="summit-section-heading">FAQ</h2>
          <div className="summit-divider" />
          <div className="mx-auto max-w-[740px]">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group border-b border-white/10 py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-[28px] font-normal leading-[1.08] tracking-[-0.03em] text-[#aaa7b5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] group-open:text-[#14f195]">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#aaa7b5] text-base text-black transition-colors duration-150 ease-out group-open:bg-[#9945ff] group-open:text-black"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 origin-center transition-transform duration-150 ease-out group-open:rotate-90"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-6 max-w-[620px] text-base leading-7 text-white/45">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </SummitReveal>
  );
}

function GettingThere() {
  return (
    <SummitReveal className="bg-black py-20 lg:py-28">
      <div className="summit-container">
        <div className="summit-content-frame">
          <h2 className="summit-section-heading">Getting there</h2>
          <div className="summit-divider" />
          <div className="mx-auto max-w-[760px] border-t border-white/0">
            <div className="grid gap-4 py-6 md:grid-cols-[260px_1fr]">
              <p className="summit-gradient-text text-[26px] font-normal leading-none tracking-[0.02em]">
                Nearest airport
              </p>
              <p className="text-[28px] font-normal leading-[1.12] tracking-[-0.03em] text-white">
                Berlin Brandenburg Airport (BER)
              </p>
            </div>
            <div className="grid gap-4 py-6 md:grid-cols-[260px_1fr]">
              <p className="summit-gradient-text text-[26px] font-normal leading-none tracking-[0.02em]">
                Accommodations
              </p>
              <div>
                <p className="text-[28px] font-normal leading-[1.12] tracking-[-0.03em] text-white">
                  Recommended nearby hotels:
                </p>
                <div className="mt-4 flex flex-col items-start gap-3 text-[20px] leading-snug text-[#aaa7b5] md:text-[22px]">
                  <a
                    href="https://www.nhow-hotels.com/en/nhow-berlin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-150 ease-out hover:text-[#14f195] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  >
                    Hotel nhow Berlin
                  </a>
                  <a
                    href="https://www.michelbergerhotel.com/en/rooms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-150 ease-out hover:text-[#14f195] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  >
                    Michelberger Hotel
                  </a>
                  <a
                    href="https://www.ihg.com/hotelindigo/hotels/gb/en/berlin/beres/hoteldetail?cm_mmc=GoogleMaps-_-IN-_-DE-_-BERES"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-150 ease-out hover:text-[#14f195] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  >
                    Indigo Hotel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SummitReveal>
  );
}

function FinalCta() {
  return (
    <SummitReveal className="summit-final-stage relative overflow-hidden bg-black px-6 py-28 text-center lg:py-36">
      <SummitSidePatterns className="summit-final-side-patterns" />
      <SummitScrollReveal className="relative z-10 mx-auto max-w-[960px]">
        <h2 className="text-[56px] font-light leading-[1.03] tracking-[-0.015em] text-[#aaa7b5] md:text-[88px]">
          Don&apos;t miss
          <br />
          <span className="summit-gradient-text">SOLANA SUMMIT GERMANY</span>
        </h2>
        <SummitCta
          href={SOLANA_SUMMIT_LUMA_LINK}
          variant="solid"
          className="mt-12 h-[58px] w-full max-w-[390px]"
        />
        <Image
          src="/images/summit-germany/superteam.svg"
          alt="Powered by Superteam"
          width={303}
          height={24}
          unoptimized
          className="mx-auto mt-10 h-auto w-[142px] opacity-70 md:mt-12 md:w-[170px]"
        />
      </SummitScrollReveal>
    </SummitReveal>
  );
}
