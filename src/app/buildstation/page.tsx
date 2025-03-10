'use client';
import FAQ from '@/sections/buildstation/faq';
import WhatIs from '@/sections/buildstation/what-is';
import FadeInDiv from '@/components/fade-in-div';
import Hero from '@/sections/buildstation/hero';
import { HowItWorks } from '@/sections/buildstation/how-it-works';
import KeyDates from '@/sections/buildstation/key-dates';

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
      <FadeInDiv>
        <KeyDates />
      </FadeInDiv>
      <FAQ />
    </div>
  );
};

export default page;
