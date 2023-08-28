import BerlinDemoDay from "@/app/buildstation/sections/BerlinDemoDay";
import BuildStationIntro from "@/app/buildstation/sections/BuildStationIntro";
import FAQ from "@/app/buildstation/sections/FAQ";
import Prizes from "@/app/buildstation/sections/Prizes";
import SignUp from "@/app/buildstation/sections/SignUp";
import WhatIs from "@/app/buildstation/sections/WhatIs";
import HeroCarousel from "@/components/HeroCarousel";
import Nav from "@/components/Nav";
import TextBanner from "@/components/TextBanner";
import { Highlight } from "@/components/ui/Highlight";
import Spacer from "@/components/ui/Spacer";
import Image from "next/image";
import Link from "next/link";
import FooterGroup from "./sections/FooterGroup";

const page = () => {
  return (
    <main className="min-h-screen hyperdrive">
      <Nav />
      <div className="py-5 container text-end flex justify-end">
        <div>
          <h1
            className="uppercase text- font-hyperdrive font-medium"
            style={{
              fontSize:
                "clamp(var(--font-size-h1-mobile), 4.8vw, calc(var(--font-size-h1) - 0.55rem))",
            }}>
            {/* Hyperdrive{" "} */}
          </h1>
          <h1 className="uppercase text-end">
            Build
            <Highlight>Station</Highlight> Berlin_
          </h1>
        </div>
      </div>
      <HeroCarousel />

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

      <BuildStationIntro />
      <TextBanner />

      <Spacer />

      <WhatIs />
      <Spacer />
      <BerlinDemoDay />
      <Spacer />
      <SignUp />
      <Spacer />
      <Prizes />
      <Spacer />
      <SignUp variant="berlin" />
      <Spacer />
      <Spacer />
      <FooterGroup />
    </main>
  );
};

export default page;
