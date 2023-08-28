import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import TitleParagraph from "@/components/TitleParagraph";
import Nav from "@/components/Nav";
import TextBanner from "@/components/TextBanner";
import Spacer from "@/components/ui/Spacer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Card from "@/components/ui/Card";
import UpcomingEvents from "@/components/UpcomingEvents";
import Partners from "@/components/Partners";
import GetInvolved from "@/app/buildstation/sections/GetInvolved";
import Email from "@/components/Email";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import FadeInDiv from "@/components/ui/FadeInDiv";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Spacer />
      <Hero />
      <Spacer />
      <AboutUs />
      <TextBanner />
      {/* <TitleParagraph /> */}
      <Spacer />
      <UpcomingEvents />
      {/* <Spacer /> */}
      {/* <Partners /> */}
      <Spacer />
      <GetInvolved />
      <Spacer />
      <Email />
      <Spacer />
      {/* <TitleParagraph /> */}
      <Projects />
      <Spacer />
      <Gallery />
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
              {/* <Link href="">Terms & Conditions</Link> */}
              <Link href="/policy">Privacy Policy</Link>
            </div>
          </div>
          <FadeInDiv>
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
          </FadeInDiv>
        </section>
      </div>
    </main>
  );
}
