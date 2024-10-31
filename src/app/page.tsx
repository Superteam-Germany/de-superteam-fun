import Hero from './(main-sections)/Hero';
import WhatIsSuperteam from './(main-sections)/WhatIsSupeteam';
import TextBanner from '@/components/TextBanner';
import Spacer from '@/components/ui/Spacer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import UpcomingEvents from '@/app/(main-sections)/UpcomingEvents';
import GetInvolved from '@/app/buildstation/sections/GetInvolved';
import Gallery from '@/app/(main-sections)/Gallery';
import FadeInDiv from '@/components/ui/FadeInDiv';
import Link from 'next/link';
import { Suspense } from 'react';
import Alert from '../components/Alert';
import WhatWeDo from './(main-sections)/WhatWeDo';
import Email from './(main-sections)/Email';
import Newsletter from './(main-sections)/Newsletter';
import { Events } from './(main-sections)/Events';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Spacer />
      <FadeInDiv>
        <Hero />
      </FadeInDiv>
      {/* <FadeInDiv>
        <TextBanner />
      </FadeInDiv> */}
      <Suspense>
        <WhatIsSuperteam />
      </Suspense>
      <WhatWeDo/>
      {/* <Spacer /> */}
      {/* <UpcomingEvents /> */}
      <Events />
      <Newsletter />
      {/* <Spacer /> */}
      {/* <Partners /> */}
      {/* <GetInvolved /> */}
      {/* <TitleParagraph /> */}

      {/* <Spacer /> */}
      
      {/* <Projects /> */}
      {/* <Spacer /> */}
      {/* <Email />
      <div className=' relative'>
        <h2
          className='text-center my-24 uppercase text-shadow'>
          Keep in touch
        </h2>
        <div className='relative container flex justify-center pb-24'>
          <div className='flex gap-8 sm:gap-16  bottom-14'>
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
        <Alert
          text='Stay up to date by following our monthly reports'
          className='max-w-screen-lg mx-auto mb-24'
          cta={
            <a href='https://superteamgermany.substack.com/' target='_blank'>
              <Button className='shrink-0'>Read the Latest Report</Button>
            </a>
          }
        />
      </div> */}
    </div>
  );
}
