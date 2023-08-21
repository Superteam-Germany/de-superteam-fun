import BsManifesto from "@/components/BSMainfesto";
import Carousel from "@/components/Carousel";
import Email from "@/components/Email";
import FAQ from "@/components/FAQ";
import Instructions from "@/components/Instructions";
import Nav from "@/components/Nav";
import SignUp from "@/components/SignUp";
import TextBanner from "@/components/TextBanner";
import WhatIs from "@/components/WhatIs";
import { Highlight } from "@/components/ui/Highlight";
import Spacer from "@/components/ui/Spacer";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="min-h-screen hyperdrive">
      <Nav />
      <div className="py-5 container text-end ">
        <h1
          className="uppercase text- font-hyperdrive font-medium"
          style={{
            fontSize:
              "clamp(var(--font-size-h1-mobile), 4.8vw, calc(var(--font-size-h1) - 0.55rem))",
          }}>
          Hyperdrive{" "}
        </h1>
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
