'use client';
import React from 'react';
import CtaCard from '../../components/CtaCard';
import { Highlight } from '../../components/Highlight';
import { useScroll, useTransform } from 'framer-motion';
import FadeInDiv from '@/components/FadeInDiv';

const GetInvolved = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '40%']);
  return (
    <div className='relative'>
      <section className='pt-36 pb-12'>
        <FadeInDiv>
          <div className='container w-full mb-12  flex flex-col justify-center items-center text-center sm:justify-between'>
            <h2 className='uppercase text-h2 mb-8 '>
              <span className='text-shadow'> get {' '}</span><Highlight>involved</Highlight>
            </h2>
            {/* <div className='max-w-[40rem] space-y-4'>
              <p className='font-light'>
                In a pre-crypto world, we had to fit into broiler categories —
                founder, investor, or employee. Crypto allows us to be
                free-range and be all 3 at the same time. Our mission is to
                bring the benefits of the ownership economy to the creative
                class (rent your time for tokens, not dollars) while creating
                flexible and remote work opportunities for all members.
              </p>
              <p>
                So what are you waiting for? Start learning, earning and
                building with us!
              </p>
              <a
                href='https://discord.gg/CVwJhHgFfF'
                target='_blank'
                className='underline underline-offset-4'>
                <span className='block my-6 text-body'>
                  Learn more about us
                </span>
              </a>
            </div> */}
          </div>
        </FadeInDiv>
        <div className='grid lg:grid-cols-3 gap-6 container  justify-center lg:justify-between'>
          <CtaCard
            title='Learn'
            content='A manual for joining the Solana ecosystem. By builders for builders. Use these Solana Foundation and community courses to begin your journey into Solana development.'
            href='https://solana.com/developers'
            linkContent='Check out the resources'
          />
          <CtaCard
            title='Earn'
            content='Start Earning Crypto by Contributing to Solana. Explore bounties, grants, and jobs with high growth startups in the Solana ecosystem.'
            href='https://earn.superteam.fun'
            linkContent='Start earning today!'
          />
          <CtaCard
            title='Grants'
            content='Learn more about Superteam Germany grants where anyone with an idea or proof of work is welcome to apply.'
            href='https://earn.superteam.fun/listings/grants/solana-foundation-germany-grants/'
            linkContent='Check out the grants'
          />
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
