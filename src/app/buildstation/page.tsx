'use client';
import BerlinDemoDay from '@/sections/buildstation/BerlinDemoDay';
import BuildStationIntro from '@/sections/buildstation/BuildStationIntro';
import FAQ from '@/sections/buildstation/FAQ';
import Prizes from '@/sections/buildstation/Prizes';
import WhatIs from '@/sections/buildstation/WhatIs';
import TextBanner from '@/components/TextBanner';
import { Highlight } from '@/components/Highlight';
import Image from 'next/image';
import Link from 'next/link';
import FadeInDiv from '@/components/FadeInDiv';

const page = () => {
  return (
    <div className='min-h-screen hyperdrive'>
      <FadeInDiv>
        <div className='py-5 container text-end flex justify-end'>
          <div>
            <h1
              className='uppercase text- font-hyperdrive font-medium'
              style={{
                fontSize:
                  'clamp(var(--font-size-h1-mobile), 4.8vw, calc(var(--font-size-h1) - 0.55rem))',
              }}>
              {/* Hyperdrive{" "} */}
            </h1>
            <h1 className='uppercase text-end'>
              Build
              <Highlight>Station</Highlight> Berlin_
            </h1>
          </div>
        </div>
        {/* <HeroCarousel /> */}

        <div className='relative container'>
          <div className='flex gap-8 sm:gap-16 absolute bottom-14'>
            <Link href='https://twitter.com/SuperteamDE' target='_blank'>
              <div className='h-6 w-6 scale-75 sm:scale-100 relative'>
                <Image src='/images/x-icon.svg' fill alt='X logo' />
              </div>
            </Link>

            <Link href='https://discord.gg/CVwJhHgFfF' target='_blank'>
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
      </FadeInDiv>
      <BuildStationIntro />
      <TextBanner />
      <FadeInDiv>
        <WhatIs />
      </FadeInDiv>
      <FadeInDiv>
        <BerlinDemoDay />
      </FadeInDiv>
      <FadeInDiv>
        <Prizes />
      </FadeInDiv>
      <FAQ />
    </div>
  );
};

export default page;
