"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FAQ from "./FAQ";
import Spacer from "@/components/ui/Spacer";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {};

const FooterGroup = (props: Props) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-200%", "0%"]);
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        style={{ backgroundPosition: "50% 90%", backgroundSize: "cover", y }}
        // style={{ y }}
        className="bg-[url('/images/line-wave-4.svg')] bg-bottom bg-no-repeat -z-50 w-full bg-50% md:bg-contain absolute h-full bg-fixed"></motion.div>

      <FAQ />
      <div className="py-48 overflow-hidden">
        <h2
          className="text-center mb-12 uppercase
    ">
          Keep in touch
        </h2>
        <div className="relative container flex justify-center pb-24">
          <div className="flex gap-8 sm:gap-16  bottom-14">
            <Link href="">
              <div className="h-6 w-6 scale-75 sm:scale-100 relative">
                <Image src="/images/x-icon.svg" fill alt="X logo" />
              </div>
            </Link>

            <Link href="">
              <div className="h-6 w-8 relative scale-75 sm:scale-100">
                <Image src="/images/discord-icon.svg" fill alt="Discord logo" />
              </div>
            </Link>
          </div>
        </div>
        <Spacer />
        <section className="mt-24 relative pb-24">
          <div className="max-w-screen-2xl mx-auto px-4 sm:flex justify-between">
            <Image
              src="/images/stLogoWithIcon.svg"
              height={35}
              className="mb-2"
              width={200}
              alt="Superteam logo"
            />
            <div className="space-x-6">
              <Link href="">Terms & Conditions</Link>
              <Link href="">Privacy Policy</Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute top-28">
              <Image
                src="/images/st-logo.svg"
                height={640}
                width={640}
                className="-rotate-45"
                alt="Superteam logo"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FooterGroup;
