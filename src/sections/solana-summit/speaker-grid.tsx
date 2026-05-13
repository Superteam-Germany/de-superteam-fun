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
    role: "Cofounder & CEO",
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
    name: "Speaker",
    surname: "TBA",
    company: "TBA",
    role: "TBA",
  },
  {
    name: "Speaker",
    surname: "TBA",
    company: "TBA",
    role: "TBA",
  },
  {
    name: "Speaker",
    surname: "TBA",
    company: "TBA",
    role: "TBA",
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
                  alt={`${speaker.name} ${speaker.surname}`}
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
              <br />
              {speaker.surname}
            </h3>
            <div className="mt-3 flex min-h-[44px] items-start justify-between gap-2">
              <p className="text-base font-normal leading-snug text-white">
                {speaker.company}
              </p>
              <SpeakerXIcon
                href={speaker.xUrl}
                label={`${speaker.name} ${speaker.surname} on X`}
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
