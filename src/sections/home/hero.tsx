'use client';
import { Highlight } from '@/components/highlight';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { scrollToAnchor } from '@/lib/utils';
import { Button } from '@/components/button';

export default function Example() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '-0%']);

  // Define arrays of image data for each group
  const firstGroup = [
    {
      src: '/images/hero/17.jpg',
      alt: '',
      width: 400,
      height: 600,
    },
  ];

  const secondGroup = [
    {
      src: '/images/hero/13.jpg',
      alt: '',
      width: 400,
      height: 600,
    },
    {
      src: '/images/hero/12.jpg',
      alt: '',
      width: 400,
      height: 600,
    },
  ];

  const thirdGroup = [
    {
      src: '/images/hero/10.jpg',
      alt: '',
      width: 400,
      height: 600,
    },
    {
      src: '/images/hero/5.jpg',
      alt: '',
      width: 400,
      height: 600,
    },
  ];

  return (
    <section className="min-w-full">
      <div className="relative isolate">
        {/* Background div */}
        <motion.div
          style={{ backgroundSize: 'cover', y }}
          className="bg-[url('/images/backgrounds/line-wave-4-primary.svg')] -z-20 bg-50% bg-no-repeat w-full absolute h-[300vh]">
        </motion.div>
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h2 className="text-sm lg:text-xl font-semibold uppercase">
                <Highlight>Superteam Germany</Highlight>
              </h2>
              <h1 className="text-start text-4xl lg:text-6xl">
                <span className='text-shadow'>The Heartbeat of Germany&apos;s Solana Community</span>
              </h1>
              <p className="mt-4 sm:max-w-md lg:max-w-none">
                Connect, collaborate, and grow together with a community of founders, developers, and creators shaping the future on Solana.
              </p>
              <Button
                onClick={() => scrollToAnchor('what-we-do')}
                className="font-secondary tracking-wide font-normal text-base mt-10"
              >
                Learn more
              </Button>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              {/* First Group */}
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                {firstGroup.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      alt={image.alt}
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                ))}
              </div>
              {/* Second Group */}
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                {secondGroup.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      alt={image.alt}
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                ))}
              </div>
              {/* Third Group */}
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                {thirdGroup.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      alt={image.alt}
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
