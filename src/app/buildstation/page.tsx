import BsManifesto from "@/components/BSMainfesto";
import FAQ from "@/components/FAQ";
import HeroCarousel from "@/components/HeroCarousel";
import Instructions from "@/components/Instructions";
import Nav from "@/components/Nav";
import Prizes from "@/components/Prizes";
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
      <div className="py-5 container text-end flex justify-end">
        <div>
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

      <BsManifesto />
      <TextBanner />

      <Spacer />

      <WhatIs />
      <Spacer />
      <Prizes />
      <Spacer />
      <SignUp />
      <Spacer />
      <Instructions />
      <Spacer />

      <div className="relative w-full">
        <div
          style={{ backgroundPosition: "50% 90%", backgroundSize: "cover" }}
          className="bg-[url('/images/line-wave-4.svg')] bg-bottom bg-no-repeat -z-50 w-full bg-contain absolute h-full bg-fixed"></div>

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
                  <Image
                    src="/images/discord-icon.svg"
                    fill
                    alt="Discord logo"
                  />
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
    </main>
  );
};

export default page;
