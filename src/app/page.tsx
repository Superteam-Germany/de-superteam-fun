import AboutUs from '@/components/AboutUs';
import Hero from './(main-sections)/Hero';
import WhatIsSuperteam from './(main-sections)/WhatIsSupeteam';
import Nav from '@/components/Nav';
import TextBanner from '@/components/TextBanner';
import Spacer from '@/components/ui/Spacer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import UpcomingEvents from '@/app/(main-sections)/UpcomingEvents';
import Partners from './(main-sections)/Partners';
import GetInvolved from '@/app/buildstation/sections/GetInvolved';
import Email from '@/app/(main-sections)/Email';
import Projects from '@/app/(main-sections)/Projects';
import Gallery from '@/app/(main-sections)/Gallery';
import FadeInDiv from '@/components/ui/FadeInDiv';
import Link from 'next/link';
import { Suspense } from 'react';
import Banner from '../components/Banner';
import Alert from '../components/Alert';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Nav />
      <Spacer />
      <FadeInDiv>
        <Hero />
        <Spacer />
      </FadeInDiv>
      <FadeInDiv>
        <AboutUs />
        <TextBanner />
      </FadeInDiv>
      <Spacer />
      <Suspense>
        <WhatIsSuperteam />
      </Suspense>
      <Spacer />
      <UpcomingEvents />
      <Spacer />
      {/* <Partners /> */}
      <GetInvolved />
      {/* <TitleParagraph /> */}

      <Spacer />
      <Projects />
      <Spacer />
      <div className=' overflow-hidden relative'>
        <div
          style={{ backgroundPosition: '10% 90%', backgroundSize: 'cover' }}
          className="bg-[url('/images/backgrounds/line-wave-4-primary.svg')]  bg-bottom bg-no-repeat  -z-50 w-full bg-50% md:bg-contain absolute h-full bg-fixed"></div>
        <Gallery />

        <h2
          className='text-center my-24 uppercase
    '>
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
        <Spacer />
        <section className='mt-24 relative pb-48'>
          <div className='max-w-screen-2xl mx-auto px-4 sm:flex justify-between'>
            <Image
              src='/images/stLogoWithIcon.svg'
              height={35}
              className='mb-2'
              width={200}
              alt='Superteam logo'
            />
            <div className='space-x-6'>
              {/* <Link href="">Terms & Conditions</Link> */}
              <Link href='/policy'>Privacy Policy</Link>
            </div>
          </div>
          <FadeInDiv>
            <div className='relative flex justify-center'>
              <div className='absolute top-28'>
                <Image
                  src='/images/st-logo.svg'
                  height={640}
                  width={640}
                  className='-rotate-45'
                  alt='Superteam logo'
                />
              </div>
            </div>
          </FadeInDiv>
        </section>
      </div>
    </main>
  );
}
