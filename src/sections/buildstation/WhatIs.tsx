import React from 'react';
import { Highlight } from '../../components/Highlight';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { WEB3_HUB_LOCATION_LINK, REGISTER_BUILD_STATION_KICKOFF_LINK, REGISTER_BUILD_STATION_LINK, REGISTER_BUILD_STATION_DEMO_DAY_LINK } from '../../lib/constants';

const BUILD_STATION_EVENTS = [
  {
    heading: '3-Day Hackathon Bootcamp',
    date: 'Aug 27 - Aug 29, 2024',
    locationText: 'Möckernstrasse 120',
    locationLink: WEB3_HUB_LOCATION_LINK,
    buttonText: 'Register',
    disabled: true,
    buttonLink: REGISTER_BUILD_STATION_KICKOFF_LINK
  },
  {
    heading: 'Build Station',
    date: 'Sep 25 - Oct 8, 2024',
    locationText: 'Möckernstrasse 120',
    locationLink: WEB3_HUB_LOCATION_LINK,
    buttonText: 'Register',
    disabled: false,
    buttonLink: REGISTER_BUILD_STATION_LINK
  },
  {
    heading: 'Demo Day',
    date: 'Oct 9, 2024',
    locationText: 'Möckernstrasse 120',
    locationLink: WEB3_HUB_LOCATION_LINK,
    buttonText: 'Register',
    disabled: false,
    buttonLink: REGISTER_BUILD_STATION_DEMO_DAY_LINK
  }
]

const WhatIs = () => {
  return (
    <div className=' w-full'>
      <section className='container min-h-80 pt-24 sm:pt-36 grid grid-cols-1 lg:grid-cols-2 gap-x-12 justify-center sm:flex-row sm:justify-between items-center'>
        <div className='lg:mb-0 mb-12 flex justify-between h-full flex-col'>
          <h2 className='uppercase lg:mb-24 text-h2 self-start'>
            What is the
            <br />{' '}
            <span>
              Build
              <Highlight> Station</Highlight> Berlin?
            </span>
          </h2>
        </div>
        <div className='lg:max-w-[40rem] space-y-4 mx-auto sm:px-0 h-full'>
          <p>
          Build Station is an multi-week IRL space where builders, community members, and Solana enthusiasts come together for co-working, workshops, and support during the Solana Global Hackathon.
          </p>
          <p>
            The Station is open to everyone interested in Solana. You&#39; ll
            find here developers, biz-devs, artists, marketers and many others.
          </p>
          {/* <p>
            <a
              href='https://lu.ma/buildstation'
              className='underline underline-offset-4 mr-2'>
              Learn more about the Build Station
            </a>
            or check out the full
            <a
              href='https://buildstation.softr.app/'
              className='underline underline-offset-4 ml-2'>
              schedule
            </a>
            .
          </p> */}
        </div>
      </section>
      <section className='container pb-24'>
        <h3 className='text-xl py-4 px-6 bg-white/5 rounded-lg text-center w-fit mx-auto mt-24 mb-12 leading-none'>Event Schedule</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {BUILD_STATION_EVENTS.map((event, index) => (
            <div key={index} className=' p-6 rounded-lg'>
              <h4 className='text-2xl font-bold mb-2'>{event.heading}</h4>
              <p className=''>{event.date}</p>
              <p className=''>Location:{' '}
                <a href={event.locationLink}>
                  {event.locationText}
                </a>
              </p>
              {event.disabled ?<div className='mt-8'>
                  <Button disabled={event.disabled}>{event.buttonText}</Button>
                </div> :  <Link href={event.buttonLink} target="_blank">
                <div className='mt-8'>
                  <Button disabled={event.disabled}>{event.buttonText}</Button>
                </div>
              </Link>}
              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatIs;
