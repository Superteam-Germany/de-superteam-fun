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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Spacer />
      <Hero />
      <Spacer />
      <AboutUs />
      <TextBanner />
      <TitleParagraph />
      <Spacer />
      <UpcomingEvents />
      <Spacer />
      <Partners />
      <Spacer />
      <GetInvolved />
      <Email />
      <Spacer />
      <TitleParagraph />
      <Projects />
      <Spacer />

      <Gallery />
    </main>
  );
}
