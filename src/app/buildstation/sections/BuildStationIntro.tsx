'use client';
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Highlight } from '@/components/ui/Highlight';
import FadeInDiv from '@/components/ui/FadeInDiv';
import { UPCOMING_HACKATHON_LINK } from './../../../lib/constances';

const BuildStationIntro = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '80%']);
  const x = useTransform(scrollYProgress, [0, 1], ['4%', '80%']);
  return (
    <div className='relative overflow-hidden'>
      <motion.div
        style={{ y, x, backgroundSize: 'cover' }}
        className="bg-[url('/images/backgrounds/line-wave-1.svg')] w-full absolute opacity-20 xl:opacity-100 h-screen bg-no-repeat bg-right-bottom -z-50 bg-fixed "></motion.div>
      <section className='container min-h-96 py-24 flex flex-col gap-6 z-10 justify-center sm:flex-row sm:justify-between items-center'>
        <FadeInDiv>
          <h2 className='uppercase max-w-[50rem] text-h3 self-start mb-8'>Support and resources to <Highlight>win the hackathon</Highlight></h2>
          <p className='text-quote-sm  max-w-[50rem] font-normal sm:mt-0'>
          Join our build station and learn what it takes to successfully participate in a Solana hackathon. We provide resources, mentorship and connect you with like-minded people to support you in your hackathon journey and beyond.
            
            {/* This is your
            opportunity to shape the future of blockchain, and to get the
            support you need to build for the{' '}
            <a href={UPCOMING_HACKATHON_LINK} rel='noopener' target='_blank'>
              Upcoming Hackathon
            </a>
            . */}
          </p>
        </FadeInDiv>

        <FadeInDiv>
          <Image
            src='/images/solana-logomark.svg'
            className='hidden lg:block z-20'
            alt='Solana logo'
            width={400}
            height={400}
          />
        </FadeInDiv>
      </section>
    </div>
  );
};

export default BuildStationIntro;
