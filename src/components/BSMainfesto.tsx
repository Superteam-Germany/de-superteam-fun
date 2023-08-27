"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const BsManifesto = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "80%"]);
  return (
    <div className="relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="bg-[url('/images/line-wave-3.png')] w-full absolute h-full bg-no-repeat bg-right-bottom -z-50 bg-fixed bg-cover"></motion.div>
      <section className="container min-h-96 py-24 flex flex-col gap-6 z-10 justify-center sm:flex-row sm:justify-between items-center">
        <p className="text-quote-sm  max-w-[50rem] font-light sm:mt-0">
          ​​Join Superteam Germany for an exciting journey into the future of
          Solana at our Build Station in Berlin. This is your opportunity to be
          a part of shaping the future of Solana, and get support you need to
          build for the Hyperdrive Hackathon.
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

export default BsManifesto;
