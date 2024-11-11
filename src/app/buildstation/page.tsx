'use client';
import BerlinDemoDay from '@/sections/buildstation/berlin-demo-day';
import BuildStationIntro from '@/sections/buildstation/build-station-intro';
import FAQ from '@/sections/buildstation/faq';
import WhatIs from '@/sections/buildstation/what-is';
import TextBanner from '@/components/text-banner';
import FadeInDiv from '@/components/fade-in-div';
import Hero from '@/sections/buildstation/hero';
import { HowItWorks } from '@/sections/buildstation/how-it-works';

const page = () => {
  return (
    <div className='min-h-screen hyperdrive'>
      <FadeInDiv>
        <Hero />
      </FadeInDiv>
      <FadeInDiv>
        <WhatIs />
      </FadeInDiv>
      <FadeInDiv>
        <HowItWorks />
      </FadeInDiv>
      {/* <FadeInDiv>
        <BerlinDemoDay />
      </FadeInDiv>
      <FadeInDiv>
        <Prizes />
      </FadeInDiv> */}
      <FAQ />
    </div>
  );
};

export default page;
