'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeInDiv from '@/components/fade-in-div';
import axios from 'axios';
import NewsletterForm from '@/components/newsletter-form';
import { BlurredCard } from '@/components/blurred-card';

const NewsletterSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);

  return (
    <div className='relative overflow-hidden'>
      <motion.div
        style={{ y, x, backgroundSize: 'cover' }}
        className="bg-[url('/images/backgrounds/line-wave-3-primary.svg')] w-full absolute opacity-20 xl:opacity-100 h-[80vh] bg-no-repeat bg-right-bottom -z-50 bg-fixed ">
      </motion.div>
      <section className='container w-full min-h-96 py-24 z-10 justify-center sm:flex-row sm:justify-between items-center'>
        <FadeInDiv>
          <BlurredCard>
            <div className='py-24'>
              <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight sm:text-5xl">
                There is a lot happening, but no worries, we will keep you updated.
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
                Subscribe to our newsletter to get notified about upcoming events and community perks.
              </p>
              <NewsletterForm />
            </div>
          </BlurredCard>
        </FadeInDiv>
      </section>
    </div>
  );
};

export default NewsletterSection;
