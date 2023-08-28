"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Highlight } from "@/components/ui/Highlight";

const BuildStationIntro = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  return (
    <div className="relative overflow-hidden">
      <motion.div
        style={{ y, x }}
        className="bg-[url('/images/line-wave-1.svg')] w-full absolute opacity-20 xl:opacity-100 h-full bg-no-repeat bg-right-bottom -z-50 bg-fixed bg-cover"></motion.div>
      <section className="container min-h-96 py-24 flex flex-col gap-6 z-10 justify-center sm:flex-row sm:justify-between items-center">
        <p className="text-quote-sm  max-w-[50rem] font-normal sm:mt-0">
          ​​Join <Highlight>Superteam Germany</Highlight> for a journey into the
          future of Solana at our Build Station in Berlin. This is your
          opportunity to be a part of shaping the future of Solana, and to get
          the support you need to build for the{" "}
          <a
            href="https://solana.com/hyperdrive"
            rel="noopener"
            target="_blank">
            Hyperdrive Hackathon
          </a>
          .
        </p>

        <Image
          src="/images/solana-logomark.svg"
          className="hidden lg:block z-20"
          alt="Solana logo"
          width={400}
          height={400}
        />
      </section>
    </div>
  );
};

export default BuildStationIntro;
