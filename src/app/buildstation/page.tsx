import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Image from "next/image";
import Nav from "@/components/Nav";
import Link from "next/link";
import React from "react";
import Spacer from "@/components/ui/Spacer";
import AboutUs from "@/components/AboutUs";
import TextBanner from "@/components/TextBanner";
import { Highlight } from "@/components/ui/Highlight";
import BsManifesto from "@/components/BSMainfesto";
import Partners from "@/components/Partners";
import TitleParagraph from "@/components/TitleParagraph";
import WhatIs from "@/components/WhatIs";
import Instructions from "@/components/Instructions";
import Email from "@/components/Email";
import SignUp from "@/components/SignUp";
import FAQ from "@/components/FAQ";

const page = () => {
  return (
    <main className="min-h-screen hyperdrive">
      <Nav />
      <div className="py-5 container flex justify-between">
        <h1 className="uppercase text-end">Hyperdrive </h1>
        <h1 className="uppercase text-end">
          Build
          <Highlight>Station</Highlight>_
        </h1>
      </div>
      <Carousel />

      <div className="relative container">
        <div className="flex gap-8 sm:gap-16 absolute bottom-14">
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

      <BsManifesto />
      <TextBanner />

      <Spacer />
      {/* <Partners /> */}

      <WhatIs />
      <Spacer />
      <SignUp />
      {/* <h2>
        What is <span className="text-secondary">Build Station?</span>
      </h2> */}
      <Spacer />
      <Instructions />
      <Spacer />

      <FAQ />
      <Email />
    </main>
  );
};

export default page;
