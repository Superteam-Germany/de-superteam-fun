'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <div className='relative overflow-hidden'>
      {/* <motion.div
        style={{ backgroundPosition: '100% 90%', backgroundSize: 'contain', y }}
        className="bg-[url('/images/backgrounds/line-wave-1-primary.svg')] bg-no-repeat -z-50 w-full absolute h-full bg-fixed"></motion.div> */}
      <section className='container min-h-96 py-24 flex flex-col gap-6 justify-center sm:flex-row sm:justify-between items-center'>
        <p className='text-quote max-w-[40rem] font-light sm:mt-0'>
          Uniting <b>the power of innovation, creativity</b>, and{' '}
          <b>collaboration</b> to shaping the <b>Solana Ecosystem</b> in
          Germany.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
