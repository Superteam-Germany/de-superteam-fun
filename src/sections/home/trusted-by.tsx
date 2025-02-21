"use client";

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { SUPERTEAM_EARN_LINK } from '@/lib/constants';
import { scrollToAnchor } from '@/lib/utils';
import { BlurredCard } from '@/components/blurred-card';

export default function TrustedBy() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-60%', '-0%']);

  const startups = [
    {
      name: "Neodyme",
      src: "/images/startups/neodyme.svg",
      width: 200,
      height: 50,
    },
    {
      name: "Arcium",
      src: "/images/startups/arcium.svg",
      width: 200,
      height: 50,
    },
    {
      name: "Iron",
      src: "/images/startups/iron.svg",
      width: 200,
      height: 50,
    },
    {
      name: "Staking Facilities",
      src: "/images/startups/staking-facilities.svg",
      width: 200,
      height: 50,
    },
  ];

  return (
    <section id="what-we-do" className="min-w-full overflow-hidden">
      <div className="relative isolate">
        <motion.div
          style={{ backgroundSize: 'cover', y }}
          className="bg-[url('/images/backgrounds/line-wave-2-primary.svg')] bg-50% bg-no-repeat -z-50 w-full absolute h-[180vh] bg-fixed"
        ></motion.div>
      </div>
      {/* <div className="bg-gray-900 py-24 sm:py-32"> */}
      <div className='container w-full min-h-96 py-24 z-10 justify-center sm:flex-row sm:justify-between items-center'>
      <BlurredCard>
      <div className="mx-auto max-w-7xl p-6 lg:p-8">
        <div className="grid grid-cols-1 items-center gap-x-24 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
              Trusted by Solana&apos;s Top Projects
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
            Startup founders are crucial to our success. Superteam Germany in particular stands out as a powerhouse of innovation. We have helped top teams get into accelerator programs, fundraise, and hire talented developers. Superteam is your secret sauce to success.
            </p>
            {/* <div className="mt-8 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Create account
              </a>
              <a href="#" className="text-sm font-semibold text-white">
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {startups.map((startup) => (
              <img
                key={startup.name}
                alt={startup.name}
                src={startup.src}
                width={startup.width}
                height={startup.height}
                className="max-h-16 w-full object-contain object-left"
              />
            ))}
          </div>
        </div>
      {/* </div> */}
    </div>
    
    </BlurredCard>
    </div>
      
    </section>
  );
}
  