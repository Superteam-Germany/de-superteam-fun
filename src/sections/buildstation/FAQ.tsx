'use client';
import React from 'react';
import AccordionWrapper from '@/components/accordion';
import FadeInDiv from '@/components/fade-in-div';
import { motion, useScroll, useTransform } from 'framer-motion';

const FAQ = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '40%']);

  return (
    <div className='relative overflow-hidden'>
      <motion.div
        style={{ y, backgroundSize: 'cover' }}
        className="bg-[url('/images/backgrounds/line-wave-3-primary.svg')] w-full absolute opacity-20 xl:opacity-100 h-screen bg-no-repeat bg-right-bottom -z-50 bg-fixed"></motion.div>
      <section className='container pt-24 space-y-24 mb-48'>
        <FadeInDiv>
          <h2 className='text-center'>FAQ</h2>
        </FadeInDiv>
        <AccordionWrapper
          items={[
            {
              title: <span >Who can participate?</span>,
              content: (
                <p className='faq-answer'>
                  The Station is open to everyone interested in Solana. May you
                  be a developer, biz-dev, artist, marketer or jpeg flippooor.
                  Whether you&apos;re just starting out, or a seasoned pro,
                  there&apos;s a place for you here.
                </p>
              ),
            },
            // {
            //   title: (
            //     <span>
            //       Do I need to register to participate in Build Station?
            //     </span>
            //   ),
            //   content: (
            //     <p>
            //       Yes - please register{' '}
            //       <a href='https://www.colosseum.org/' target='_blank'>
            //         here
            //       </a>
            //       .
            //     </p>
            //   ),
            // },
            {
              title: <span >Where is the Build Station taking place?</span>,
              content: (
                <p className='faq-answer'>
                  In the heart of Berlin at the W3 Hub.{' '}
                  <a
                    href='https://goo.gl/maps/KETGWHMpBVUsdvvb8'
                    target='_blank'>
                    Möckernstrasse 120
                  </a>
                  .
                </p>
              ),
            },
            {
              title: <span >Are only German teams allowed to participate?</span>,
              content: <p className='faq-answer'>No, we welcome everyone.</p>,
            },
            // {
            //   title: (
            //     <span>How will the winners of Build Station be selected?</span>
            //   ),
            //   content: (
            //     <p>
            //       See <Link href='#prizes'>prizes section</Link> above.
            //     </p>
            //   ),
            // },
            {
              title: <span >Can I bring my dog?</span>,
              content: <p className='faq-answer'>Yes, but only if we can pet it.</p>,
            },
            {
              title: <span >Is it possible to get mentorship virtually?</span>,
              content: (
                <p className='faq-answer'>
                  Build Station channels are open to all on our Discord, and you
                  can always reach out to us for more specific help.
                </p>
              ),
            },
            {
              title: <span >How much does it cost to participate?</span>,
              content: <p className='faq-answer'>Attendance is free.</p>,
            },
            {
              title: <span >What is the Build Station’s Code of Conduct?</span>,
              content: <p className='faq-answer'>Be nice.</p>,
            },
            {
              title: <span >Did we miss something?</span>,
              content: (
                <p className='faq-answer'>
                  DM{' '}
                  <a href='https://t.me/zCasee' target='_blank'>
                    @zCasee
                  </a>{' '}
                  on Telegram.
                </p>
              ),
            },
          ]}
        />
      </section>
    </div>
  );
};

export default FAQ;
