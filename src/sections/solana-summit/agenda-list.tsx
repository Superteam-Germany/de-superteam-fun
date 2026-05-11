"use client";

import { Fragment, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import {
  agendaFilterTypes,
  agendaItems,
  type AgendaType,
} from "./data";
import { cn } from "@/lib/utils";

const typeStyles: Record<AgendaType, string> = {
  Keynote: "bg-[rgba(153,69,255,0.2)] text-[#c79cff]",
  "Lightning Talk": "bg-[rgba(90,215,255,0.15)] text-[#8de9ff]",
  "Fireside Chat": "bg-[rgba(249,115,22,0.15)] text-[#fb923c]",
  Panel: "bg-[rgba(20,241,149,0.15)] text-[#14f195]",
  "Startup showcase": "bg-[rgba(244,114,182,0.15)] text-[#f9a8d4]",
  "Trading Cup": "bg-[rgba(250,204,21,0.15)] text-[#fde68a]",
  Break: "bg-white/10 text-white/70",
  TBD: "bg-white/10 text-white/45",
};

type AgendaFilterType = (typeof agendaFilterTypes)[number];

const filterChipStyles: Record<
  AgendaFilterType,
  { idle: string; active: string }
> = {
  Keynote: {
    idle:
      "bg-[rgba(153,69,255,0.15)] text-[#b56cff] hover:bg-[rgba(153,69,255,0.25)]",
    active:
      "bg-[rgba(153,69,255,0.3)] text-[#d8c0ff] ring-1 ring-[#9945ff]/60 shadow-[0_0_18px_rgba(153,69,255,0.18)]",
  },
  "Lightning Talk": {
    idle:
      "bg-[rgba(90,215,255,0.12)] text-[#8de9ff] hover:bg-[rgba(90,215,255,0.2)]",
    active:
      "bg-[rgba(90,215,255,0.24)] text-[#c9f6ff] ring-1 ring-[#5ad7ff]/55 shadow-[0_0_18px_rgba(90,215,255,0.16)]",
  },
  "Fireside Chat": {
    idle:
      "bg-[rgba(249,115,22,0.15)] text-[#fb923c] hover:bg-[rgba(249,115,22,0.25)]",
    active:
      "bg-[rgba(249,115,22,0.28)] text-[#fdba74] ring-1 ring-[#f97316]/55 shadow-[0_0_18px_rgba(249,115,22,0.16)]",
  },
  Panel: {
    idle:
      "bg-[rgba(20,241,149,0.15)] text-[#14f195] hover:bg-[rgba(20,241,149,0.24)]",
    active:
      "bg-[rgba(20,241,149,0.24)] text-[#8fffd2] ring-1 ring-[#14f195]/55 shadow-[0_0_18px_rgba(20,241,149,0.16)]",
  },
  "Startup showcase": {
    idle:
      "bg-[rgba(244,114,182,0.14)] text-[#f9a8d4] hover:bg-[rgba(244,114,182,0.24)]",
    active:
      "bg-[rgba(244,114,182,0.26)] text-[#fbcfe8] ring-1 ring-[#f472b6]/55 shadow-[0_0_18px_rgba(244,114,182,0.14)]",
  },
  "Trading Cup": {
    idle:
      "bg-[rgba(250,204,21,0.14)] text-[#fde68a] hover:bg-[rgba(250,204,21,0.22)]",
    active:
      "bg-[rgba(250,204,21,0.24)] text-[#fef3c7] ring-1 ring-[#facc15]/50 shadow-[0_0_18px_rgba(250,204,21,0.13)]",
  },
};

export function AgendaList() {
  const [query, setQuery] = useState("");
  const [activeTypes, setActiveTypes] = useState<AgendaFilterType[]>([]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const hasActiveTypes = activeTypes.length > 0;

    return agendaItems.filter((item) => {
      const matchesType =
        !hasActiveTypes || activeTypes.includes(item.type as AgendaFilterType);
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [item.time, item.title, item.type, item.location, ...item.speakers]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesType && matchesQuery;
    });
  }, [activeTypes, query]);

  const visibleItems = useMemo(
    () =>
      filteredItems.map((item, index) => ({
        item,
        isFirst: index === 0,
        showSection:
          index === 0 || item.section !== filteredItems[index - 1]?.section,
      })),
    [filteredItems]
  );

  return (
    <section id="agenda" className="bg-black py-12 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[60px]">
        <label
          htmlFor="agenda-search"
          className="relative block rounded-lg border border-white/10 bg-white/[0.02]"
        >
          <span className="sr-only">Search agenda</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
          />
          <input
            id="agenda-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search sessions, speakers, companies..."
            className="w-full border-0 bg-transparent py-3 pl-11 pr-10 text-base text-white outline-none placeholder:text-white/40 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#14f195]/50"
          />
        </label>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm text-white/40">Filter by type:</span>
          {agendaFilterTypes.map((type) => {
            const isActive = activeTypes.includes(type);

            return (
              <button
                key={type}
                type="button"
                aria-pressed={isActive}
                onClick={() =>
                  setActiveTypes((current) =>
                    current.includes(type)
                      ? current.filter((activeType) => activeType !== type)
                      : [...current, type]
                  )
                }
                className={cn(
                  "inline-flex min-h-10 items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                  filterChipStyles[type].idle,
                  isActive && filterChipStyles[type].active
                )}
              >
                {type}
              </button>
            );
          })}
          {activeTypes.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTypes([])}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[rgba(239,68,68,0.15)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#fca5a5] transition-colors duration-150 ease-out hover:bg-[rgba(239,68,68,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca5a5] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <X aria-hidden="true" className="h-3.5 w-3.5" />
              Clear
            </button>
          )}
        </div>

        <div className="mt-8">
          <div className="mb-6 hidden border-b border-white/10 pb-4 text-sm font-medium uppercase tracking-wider text-white/40 md:grid md:grid-cols-[140px_1fr_100px] lg:grid-cols-[180px_1fr_120px]">
            <span>Time</span>
            <span>Session</span>
            <span className="text-right">Location</span>
          </div>

          {visibleItems.length > 0 ? (
            visibleItems.map(({ item, isFirst, showSection }) => (
              <Fragment key={`${item.time}-${item.title}-${item.section}`}>
                {showSection && (
                  <div
                    className={cn(
                      "border-y border-white/10 bg-white/[0.025] px-4 py-3",
                      isFirst ? "mt-0" : "mt-10"
                    )}
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#aaa7b5]">
                      {item.section}
                    </p>
                  </div>
                )}
                <article className="group relative grid grid-cols-1 gap-4 border-b border-white/10 py-6 transition-colors duration-150 ease-out last:border-b-0 hover:bg-white/[0.02] md:grid-cols-[140px_1fr_100px] lg:grid-cols-[180px_1fr_120px]">
                  <div className="flex items-start gap-3 md:flex-col md:gap-2">
                    <p className="font-secondary text-base font-medium text-[#14f195]">
                      {item.time}
                    </p>
                    {item.type !== "TBD" && (
                      <div className="md:hidden">
                        <AgendaBadge type={item.type} />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-start gap-3">
                      <h2 className="text-lg font-medium leading-tight text-white lg:text-xl">
                        {item.title}
                      </h2>
                      {item.type !== "TBD" && (
                        <div className="hidden md:block">
                          <AgendaBadge type={item.type} />
                        </div>
                      )}
                    </div>
                    {item.speakers.length > 0 && (
                      <p className="mt-2 text-sm text-white/70">
                        {item.speakers.join("  /  ")}
                      </p>
                    )}
                  </div>
                  <p className="hidden text-right text-sm text-white/40 md:block">
                    {item.location}
                  </p>
                </article>
              </Fragment>
            ))
          ) : (
            <div className="border-b border-white/10 py-12 text-white/60">
              No sessions match that filter yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function AgendaBadge({ type }: { type: AgendaType }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider",
        typeStyles[type]
      )}
    >
      {type}
    </span>
  );
}
