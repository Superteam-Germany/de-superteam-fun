import React from 'react'
import { BlurredCard } from '@/components/blurred-card'
import { Highlight } from '@/components/highlight'
import { clsx } from 'clsx'
import { Button } from '@/components/button'
import NewsletterForm from '@/components/newsletter-form';
import { NewsletterGroup } from '@/types/enum';
import { useScroll, useTransform, motion } from 'framer-motion'


const timelineEvents = [
  {
    id: 1,
    title: 'Bootcamp',
    date: 'First week of April',
    icon: 'diamond-blue'
  },
  {
    id: 2,
    title: 'Build Station',
    date: 'May 5-16',
    icon: 'diamond-gray'
  },
  {
    id: 3,
    title: 'Demo Day',
    date: 'May 16',
    icon: 'diamond-gray'
  }
]

const WhatIs = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-90%', '-0%']);
  
  return (
      <section id="key-dates" className="min-w-full mt-24 lg:mt-0 overflow-hidden">      
        <div className="relative isolate">
          <motion.div
            style={{ backgroundSize: 'cover', y }}
            className="bg-[url('/images/backgrounds/line-wave-2-primary.svg')] bg-50% bg-no-repeat -z-50 w-full absolute h-[180vh] bg-fixed"
          ></motion.div>
        </div>
        <div className="container w-full pb-24 z-10 justify-center sm:flex-row sm:justify-between items-center">
        <BlurredCard className="lg:mt-32 lg:px-16 py-24">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Key Dates
              </h2>
              {/* <p className="mt-4 text-lg/8 text-gray-300">Lorem ipsum dolor sit amet consect adipisicing possimus.</p> */}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
              {timelineEvents.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm/6 font-semibold text-gray-300">{stat.date}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.title}</dd>
                </div>
              ))}
            </dl>
          </div>
        </BlurredCard>
      </div>
    </section>
  );
};

export default WhatIs;



