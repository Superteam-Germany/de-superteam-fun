'use client';
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Highlight } from '@/components/ui/Highlight';
import FadeInDiv from '@/components/ui/FadeInDiv';

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
          <p className='text-quote-sm  max-w-[50rem] font-normal sm:mt-0'>
            ​​Join <Highlight>Superteam Germany</Highlight> for a journey into
            the future of Solana at our Build Station in Berlin. This is your
            opportunity to shape the future of blockchain, and to get the
            support you need to build for the{' '}
            <a href='https://www.colosseum.org/' rel='noopener' target='_blank'>
              Upcoming Hackathon
            </a>
            .
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
