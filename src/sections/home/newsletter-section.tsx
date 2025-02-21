'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeInDiv from '@/components/fade-in-div';
import axios from 'axios';
import NewsletterForm from '@/components/newsletter-form';
import { BlurredCard } from '@/components/blurred-card';
import WhatWeDo from './what-we-do';
import { usePathname } from 'next/navigation';

const NewsletterSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['40%', '-0%']);
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);
  const pathname = usePathname();
  const isBlogPage = pathname.includes('/blog');

  return (
    <div className='relative overflow-hidden'>
      {isBlogPage && (
        <motion.div
          style={{ backgroundSize: 'cover', y }}
          className="bg-[url('/images/backgrounds/line-wave-3-primary.svg')] bg-50% bg-no-repeat -z-50 w-full absolute h-[80vh] bg-fixed">
        </motion.div>
      )}
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
              <div className='flex items-center justify-center'>
                <NewsletterForm />
              </div>
            </div>
          </BlurredCard>
        </FadeInDiv>
      </section>
    </div>
  );
};

export default NewsletterSection;
