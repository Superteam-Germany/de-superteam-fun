"use client";

import { useDeferredValue, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

const speakerCards = [
  {
    name: "Patricia",
    surname: "Albrecht",
    company: "Superteam Germany",
    role: "Lead",
    image: "/images/summit-germany/patricia-albrecht.jpeg",
    xUrl: "https://x.com/pattiruss_",
  },
  {
    name: "Mert",
    surname: "Mumtaz",
    company: "Helius",
    role: "Co-Founder & CEO",
    image: "/images/summit-germany/mert.jpg",
    xUrl: "https://x.com/mert",
  },
  {
    name: "Xiao-Xiao",
    surname: "Zhu",
    company: "Jupiter",
    role: "President",
    image: "/images/summit-germany/xiao-xiao.jpeg",
    xUrl: "https://x.com/xxjzhu",
  },
  {
    name: "Aditya",
    surname: "Shetty",
    company: "Superteam",
    role: "Lead",
    image: "/images/summit-germany/aditya.jpg",
    xUrl: "https://x.com/adityashetts",
  },
  {
    name: "Yannik",
    surname: "Schrade",
    company: "Arcium",
    role: "Co-Founder & CEO",
    image: "/images/summit-germany/partners/yannik.jpg",
    xUrl: "https://x.com/yrschrade",
  },
  {
    name: "Vidor",
    surname: "Gencel",
    company: "Solflare",
    role: "Co-Founder",
    image: "/images/summit-germany/partners/vidor.png",
    xUrl: "https://x.com/vidor_solflare",
  },
  {
    name: "Jessica",
    surname: "",
    company: "SOL Strategies",
    role: "Growth",
    image: "/images/summit-germany/partners/jessica.jpg",
    xUrl: "https://x.com/yesjess",
  },
  {
    name: "Eno",
    surname: "",
    company: "Sol Brothers",
    role: "Co-Founder",
    image: "/images/summit-germany/partners/eno.jpeg",
    xUrl: "https://x.com/YouKnowEno",
  },
  {
    name: "Patrick",
    surname: "Hansen",
    company: "Circle",
    role: "Senior Director, EU Strategy & Policy",
    image: "/images/summit-germany/patrickghansen.jpeg",
    xUrl: "https://x.com/paddi_hansen",
  },
  {
    name: "Jan-Oliver",
    surname: "Sell",
    company: "Qivalis",
    role: "CEO",
    image: "/images/summit-germany/Jan-Oliver-Sell.jpeg",
    xUrl: "https://x.com/JanOSell",
  },
  {
    name: "Peter",
    surname: "Grosskopf",
    company: "AllUnity",
    role: "CTO/COO",
    image: "/images/summit-germany/petergrosskopf.jpeg",
    xUrl: "https://x.com/peterlih",
  },
  {
    name: "Carlo",
    surname: "Abdel-Nour",
    company: "Superteam Germany",
    role: "Community Lead",
    image: "/images/summit-germany/carlo-abdel-nour.jpeg",
    xUrl: "https://x.com/zCase_",
  },
  {
    name: "Radoslav",
    surname: "Albrecht",
    company: "Bitbond",
    role: "Founder & CEO",
    image: "/images/summit-germany/radko-albrecht.jpg",
    xUrl: "https://x.com/RadkoAlbrecht",
  },
  {
    name: "Merdan",
    surname: "Aslan",
    company: "Superteam Germany",
    role: "Developer Relations",
    image: "/images/summit-germany/merdan-aslan-speaker.jpg",
    xUrl: "https://x.com/merdussss",
  },
  {
    name: "Ulrike",
    surname: "Lierow Schad",
    company: "CVVC / Bundesblock",
    role: "MD Berlin - CV Labs | Politics - Bundesblock",
    image: "/images/summit-germany/ulrikel.jpeg",
  },
  {
    name: "Waddah",
    surname: "Drobi",
    company: "Solana Foundation",
    role: "Data",
    image: "/images/summit-germany/waddah-drobi.jpeg",
    xUrl: "https://x.com/0xWaldrobi",
  },
  {
    name: "Nick",
    surname: "Almond",
    company: "Jito",
    role: "Head of Governance",
    image: "/images/summit-germany/drnicka.jpeg",
    xUrl: "https://x.com/DrNickA",
  },
  {
    name: "Tibor",
    surname: "Tribus",
    company: "FTMO",
    role: "Head of Crypto",
    image: "/images/summit-germany/tibortribus.jpg",
    xUrl: "https://x.com/TiborTribus",
  },
  {
    name: "Sabs",
    surname: "Sachdeva",
    company: "Harmonic / Temporal",
    role: "Engineering",
    image: "/images/summit-germany/Sabs-Sachdeva.jpg",
    xUrl: "https://x.com/s4bs94",
  },
  {
    name: "Alexandra K.",
    surname: "Mikityuk",
    company: "Staex",
    role: "Co-Founder & CEO/CTO",
    image: "/images/summit-germany/Prof. Dr. Alexandra K. Mikityuk.jpg",
    xUrl: "https://x.com/alexandrastaex",
  },
  {
    name: "Andreas",
    surname: "Sack",
    company: "Deka",
    role: "Lead Digital Assets Infrastructure",
    image: "/images/summit-germany/andreas-sack.jpeg",
  },
  {
    name: "Vitor",
    surname: "Py",
    company: "SOL Strategies",
    role: "Director of Engineering",
    image: "/images/summit-germany/vitor-py.png",
    xUrl: "https://x.com/vitorpy",
  },
  {
    name: "Tilo Carl",
    surname: "Palfner",
    company: "Light Protocol",
    role: "Director Operations & Developer Relations",
    image: "/images/summit-germany/tilo-light.jpg",
    xUrl: "https://x.com/tilo_cpn",
  },
  {
    name: "Voshy",
    surname: "Ivosevic",
    company: "Greed Academy / Lucid Drakes",
    role: "Co-Founder & CEO",
    image: "/images/summit-germany/Voshy-Ivosevic.jpg",
    xUrl: "https://x.com/voshy",
  },
  {
    name: "Tristan",
    surname: "Hundley",
    company: "Decen Space",
    role: "Founder",
    image: "/images/summit-germany/tristan-space.jpeg",
    xUrl: "https://x.com/spacetristan",
  },
  {
    name: "Phillip",
    surname: "",
    company: "Crafts",
    role: "Co-Founder",
    image: "/images/summit-germany/phillip-crafts.jpeg",
    xUrl: "https://x.com/pfo_sac",
  },
  {
    name: "Max von",
    surname: "Wallenberg",
    company: "MoonPay · Iron",
    role: "Stablecoins · Founder & CEO",
    image: "/images/summit-germany/maxwallenberg.jpg",
    xUrl: "https://x.com/maxwallenberg",
  },
  {
    name: "Chris",
    surname: "Grundy",
    company: "OKX",
    role: "Head of Product Marketing",
    image: "/images/summit-germany/Chris-Grundy.jpeg",
    xUrl: "https://x.com/grundy_10",
  },
  {
    name: "Thomas",
    surname: "Gehrmann",
    company: "Mato",
    role: "Co-Founder",
    image: "/images/summit-germany/thomas-gehrmann.jpeg",
    xUrl: "https://x.com/thgehr",
  },
  {
    name: "Goldie",
    surname: "G",
    company: "dopamyn.fun",
    role: "Co-Founder",
    image: "/images/summit-germany/goldie.jpg",
    xUrl: "https://x.com/innitgoldie",
  },
  {
    name: "Newton",
    surname: "Davis",
    company: "Janus",
    role: "Co-Founder",
    image: "/images/summit-germany/newton-davis.jpeg",
    xUrl: "https://x.com/launchnoodles",
  },
  {
    name: "João",
    surname: "Martins",
    company: "Housd",
    role: "Co-Founder",
    image: "/images/summit-germany/joao-martins.jpg",
    xUrl: "https://x.com/stmartinmaxing",
  },
  {
    name: "Noah",
    surname: "Haufer",
    company: "SolRouter",
    role: "Co-Founder",
    image: "/images/summit-germany/Noah-haufer.jpeg",
    xUrl: "https://x.com/GhostHash1",
  },
  {
    name: "Sangharsh",
    surname: "Bhustalimath",
    company: "Stablecorp",
    role: "Co-Founder",
    image: "/images/summit-germany/sangharsh-bhustalimath.jpeg",
    xUrl: "https://x.com/10KRotator",
  },
  {
    name: "Alexander",
    surname: "Kujavsky",
    company: "MultiHopper",
    role: "Co-Founder",
    image: "/images/summit-germany/alex-multihopper.jpg",
    xUrl: "https://x.com/kujcrypto",
  },
  {
    name: "Mango",
    surname: "Max",
    company: "Bigwallet · Manifest",
    role: "Co-Founder",
    image: "/images/summit-germany/mango-max.jpg",
    xUrl: "https://x.com/m_schneider",
  },
  {
    name: "Daniela",
    surname: "Boback",
    company: "Via",
    role: "Strategic Advisor",
    image: "/images/summit-germany/Daniela-Boback.png",
  },
  {
    name: "Erik",
    surname: "Plauman",
    company: "Bench",
    role: "Co-Founder",
    image: "/images/summit-germany/eric-bench.jpeg",
    xUrl: "https://x.com/herz0g",
  },
  {
    name: "Tomas",
    surname: "Eminger",
    company: "Staking Facilities",
    role: "CTO",
    image: "/images/summit-germany/tom-eminger.jpeg",
    xUrl: "https://x.com/EmiT87",
  },
  {
    name: "Erik",
    surname: "Frank",
    company: "LBBW",
    role: "Project Lead Digitization & Innovation",
    image: "/images/summit-germany/erik-frank.jpeg",
  },
  {
    name: "Speaker",
    surname: "TBA",
    company: "More speakers",
    role: "To be announced",
  },
];

export function SpeakerGrid() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const filteredSpeakers = speakerCards.filter((speaker) =>
    [speaker.name, speaker.surname, speaker.company, speaker.role]
      .join(" ")
      .toLowerCase()
      .includes(deferredQuery)
  );

  return (
    <div>
      <div className="flex flex-col gap-7 border-b border-white/10 pb-10 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="summit-section-heading">Speakers</h2>
        <label
          htmlFor="speaker-search"
          className="relative block w-full max-w-[520px] rounded-xl border border-white/70 bg-white/[0.025]"
        >
          <span className="sr-only">Search speakers</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45"
          />
          <input
            id="speaker-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search speakers, companies, or titles..."
            className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-base text-white outline-none placeholder:text-white/45 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#14f195]/60"
          />
        </label>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7">
        {filteredSpeakers.map((speaker, index) => (
          <article key={`${speaker.company}-${index}`} className="group">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-[#1a1a1a]">
              {speaker.image ? (
                <Image
                  src={speaker.image}
                  alt={`${speaker.name}${speaker.surname ? ` ${speaker.surname}` : ""}`}
                  fill
                  sizes="(min-width: 1280px) 160px, (min-width: 1024px) 14vw, (min-width: 640px) 28vw, 42vw"
                  className="scale-[1.015] object-cover grayscale transition duration-200 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              ) : (
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f0f0f_0%,#3b3b3b_34%,#c9c9c9_52%,#2d2d2d_72%,#050505_100%)] grayscale transition duration-200 ease-out group-hover:grayscale-0" />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(153,69,255,0),rgba(20,241,149,0))] transition duration-200 ease-out group-hover:bg-[linear-gradient(145deg,rgba(153,69,255,0.48),rgba(20,241,149,0.28))]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 transition-opacity duration-200 ease-out group-hover:opacity-25" />
            </div>
            <h3 className="mt-4 text-xl font-normal uppercase leading-[0.95] tracking-[-0.035em] text-[#9657ff] transition-colors duration-150 ease-out group-hover:text-[#14f195]">
              {speaker.name}
              {speaker.surname ? (
                <>
                  <br />
                  {speaker.surname}
                </>
              ) : null}
            </h3>
            <div className="mt-3 flex min-h-[44px] items-start justify-between gap-2">
              <p className="text-base font-normal leading-snug text-white">
                {speaker.company}
              </p>
              <SpeakerXIcon
                href={speaker.xUrl}
                label={`${speaker.name}${speaker.surname ? ` ${speaker.surname}` : ""} on X`}
              />
            </div>
            <p className="text-sm font-normal leading-snug text-[#aaa7b5]">
              {speaker.role}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function SpeakerXIcon({ href, label }: { href?: string; label: string }) {
  if (!href) {
    return null;
  }

  const icon = (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M13.71 10.62 20.41 3h-1.59l-5.82 6.62L8.35 3H3l7.03 10.01L3 21h1.59l6.15-6.99L15.65 21H21l-7.29-10.38Zm-2.18 2.47-.71-.99-5.67-7.93h2.44l4.57 6.39.71.99 5.95 8.32h-2.44l-4.85-6.78Z" />
    </svg>
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="-mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center text-white/55 no-underline transition-colors duration-150 ease-out hover:text-[#14f195] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-2 focus-visible:ring-offset-black group-hover:text-[#14f195]"
    >
      {icon}
    </a>
  );
}
