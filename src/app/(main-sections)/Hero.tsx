import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroCarousel from './HeroCarousel';
import { Highlight } from '@/components/ui/Highlight';

const Hero = () => {
  return (
    <section className='min-w-full '>
      <div className='py-5 container'>
        <h1 className='uppercase text-end'>
          Superteam <Highlight>Germany</Highlight>_
        </h1>
        <p className='text-end py-5'>
          Superteam is a global community of Web3 builders who are passionate about Solana.
        </p>
      </div>
      <Suspense fallback={<div></div>}>
        <HeroCarousel />
      </Suspense>
      <div className='relative container'>
        <div className='flex gap-6 sm:gap-10 absolute bottom-14'>
          <Link target='_blank' href='https://twitter.com/SuperteamDE'>
            <div className='h-6 w-6 scale-75 sm:scale-100 relative'>
              <Image src='/images/x-icon.svg' fill alt='X logo' />
            </div>
          </Link>

          <Link target='_blank' href='https://discord.gg/CVwJhHgFfF'>
            <div className='h-6 w-8 relative scale-75 sm:scale-100'>
              <Image src='/images/discord-icon.svg' fill alt='Discord logo' />
            </div>
          </Link>

          <Link href='https://t.me/solana_germany' target='_blank'>
            <div className='h-6 w-6 relative'>
              <Image
                src='/images/telegram.png'
                objectFit='fill'
                fill
                alt='Telegram logo'
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;


