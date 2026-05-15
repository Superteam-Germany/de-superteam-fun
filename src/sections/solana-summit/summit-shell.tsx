"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SummitCta } from "./summit-cta";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Speakers", href: "/solana-summit-germany#speakers" },
  { label: "Agenda", href: "/solana-summit-germany/agenda" },
  { label: "Partners", href: "/solana-summit-germany#partners" },
  { label: "FAQ", href: "/solana-summit-germany#faq" },
];

export function SummitShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="summit-theme min-h-screen bg-[#050505] text-white">
      <main>{children}</main>
    </div>
  );
}

export function SummitNav({
  active,
  className,
}: {
  active?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn("relative z-20", className)}>
      <nav className="summit-container flex items-center justify-between py-5">
        <Link
          href="/solana-summit-germany"
          className="-ml-5 flex items-center gap-3 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-2 focus-visible:ring-offset-black lg:-ml-7"
        >
          <Image
            src="/images/summit-germany/Logo Variant 1 svg-nobg.svg"
            alt="Solana Summit Germany"
            width={500}
            height={500}
            className="h-[82px] w-[184px] object-cover object-center sm:h-[91px] sm:w-[204px] lg:h-[104px] lg:w-[232px]"
            priority
            unoptimized
          />
        </Link>

        <div className="hidden items-center gap-[38px] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-bold uppercase tracking-[0.05em] no-underline transition-colors duration-150 ease-out hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                active === item.label ? "text-[#14f195]" : "text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <SummitCta className="min-h-[52px] px-7 text-[15px]" />
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close summit menu" : "Open summit menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center text-white transition-colors duration-150 ease-out hover:text-[#14f195] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:hidden"
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="summit-container pb-5 md:hidden">
          <div className="rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] no-underline transition-colors duration-150 ease-out hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195]",
                    active === item.label ? "text-[#14f195]" : "text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <SummitCta className="mt-4 min-h-[52px] w-full px-5 text-[13px]" />
          </div>
        </div>
      )}
    </header>
  );
}
