"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Highlight } from "@/components/highlight";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "-0%"]);

  return (
    <section className="min-w-full relative">
      <div className="relative isolate">
        {/* Background div - now with fixed height */}
        <motion.div
          style={{ backgroundSize: "cover", y }}
          className="bg-[url('/images/backgrounds/line-wave-4-primary.svg')] -z-20 bg-50% bg-no-repeat w-full absolute h-[200vh]"
        ></motion.div>

        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-sm lg:text-xl font-semibold uppercase">
              <Highlight>INSIGHTS</Highlight>
            </h2>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6">
              <span className="text-shadow">Solana Research Reports</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Dive deep into comprehensive analysis and insights about the
              blockchain ecosystem, with a special focus on Solana's development
              in Germany.
            </p>
          </div>
        </div>

        {/* Reports Section */}
        <div className="mx-auto max-w-7xl px-6 pb-32">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
            Read our reports
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {/* Report Card 1 */}
            <div className="w-full">
              <div className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-4 lg:p-6 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:bg-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <h3 className="text-3xl font-bold text-white">
                      2025 Stablecoin Report
                    </h3>

                    {/* Mobile Image */}
                    <div className="block lg:hidden w-full">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src="/images/reports/HPG_Solana_StableCoin_Report.png"
                          alt="HPG Solana Stablecoin Report"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>

                    <p className="text-white/70 text-base">
                      Superteam Germany released its highly anticipated "2025
                      Stablecoin Report," offering critical insights into the
                      transformative impact of stablecoins, DeFi, Web3, and AI
                      on corporate finance in Europe. <br />
                      <br />
                      The report highlights how stablecoins are reshaping
                      payments, fostering financial inclusion, and positioning
                      Solana as a dominant force in the industry.
                    </p>

                    <Link
                      href="/reports/HPG_Solana_StableCoin_Report.pdf"
                      target="_blank"
                      download
                    >
                      <Button
                        variant="outline"
                        className="uppercase tracking-wider font-medium w-full lg:w-auto"
                      >
                        Download Report
                      </Button>
                    </Link>
                  </div>

                  {/* Desktop Image */}
                  <div className="hidden lg:block lg:col-span-7">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src="/images/reports/HPG_Solana_StableCoin_Report.png"
                        alt="HPG Solana Stablecoin Report"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
