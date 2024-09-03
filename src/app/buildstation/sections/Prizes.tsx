'use client';
import { PlusCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { Highlight } from '../../../components/ui/Highlight';
import PrizeList from '../../../misc/prizes.json';

import FadeInDiv from '@/components/ui/FadeInDiv';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';

type Props = {};

const prices = [
  {
    label: '🏆 1st Place',
    amount: '$5,000',
  },
  {
    label: '🥈 2nd Place',
    amount: '$3,000',
  },
  {
    label: '🥉 3rd Place',
    amount: '$1,000',
  },
  {
    label: '🎨 Creator Track',
    amount: '$1,000',
  },
  {
    label: '🌳 Green Track',
    amount: '$1,000',
  },
]

const renderAccordionItem = (price: any, index: number) => {
  return (
    <div className='flex items-center' key={index}>
      <div className={`hidden md:block`} style={{width: `${150 * index }px`}}></div>
      <AccordionItem
        key={index}
        value={price.label}
        className={`w-full md:w-1/3 my-4 sm:ml-0 md:ml-2 `}
        >
        <AccordionTrigger>
          <div className='flex justify-between items-center w-full md:px-6 px-2'>
            <h4 className='text-h4'>{price.label}</h4><span>{price.amount}</span>{' '}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          You&#39;re invited to join Superteam Germany!
        </AccordionContent>
      </AccordionItem>
    </div>
  )
}

const Prizes = (props: Props) => {
  return (
    <div className='relative'>
      {/* <div
        style={{
          scale: '-1',
          backgroundPosition: 'right top',
          backgroundSize: 'cover',
        }}
        className="bg-[url('/images/backgrounds/line-wave-4.svg')] bg-bottom  top-0 left-0 bottom-0 -z-50 w-full absolute h-full bg-fixed"></div> */}
      <section id='prizes' className='relative container py-12 md:pt-24 mb-48'>
        <div className='py-12'>
          <h2 className='uppercase text-h2.5'>
            {' '}
            <Highlight>Grand Prizes</Highlight>
          </h2>
          <div className='flex items-start'>
            <span className='text-h3 leading-none mr-2'>by</span>
            <div className='flex relative h-14 mt-[2px] sm:-mt-[2px] sm:h-16 w-56'>
              <Image
                src='/images/stLogoWithIcon.svg'
                className=''
                fill
                alt='superteam germany'
              />
            </div>
          </div>
        </div>

        <Accordion
          type='single'
          collapsible
          className={`flex flex-col w-full sm:ml-0 md:ml-12`}>
          {prices.map((price, index) => renderAccordionItem(price, index))}
        </Accordion>

        <FadeInDiv>
          <div className=' pt-12 sm:pt-24'>
            <div className='grid md:grid-cols-2'>
              <div className='space-y-4'>
                <h3 className='text-h2.5 leading-none'>
                  Ecosystem Partner Prizes
                </h3>
                <p>
                  Each Partner awards their prize to the best project building
                  for their specific local track.{' '}
                </p>
              </div>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 sm:py-24'>
              {PrizeList.map((prize, i) => (
                <a
                  key={i}
                  href={prize.link}
                  target='_blank'
                  className='no-underline hover:opacity-100'>
                  <div className='bg-[#202020] hover:scale-[1.01] select-none cursor-pointer active:scale-100 transition-all hover:shadow-lg flex flex-col items-center justify-evenly rounded-xl h-64 p-8'>
                    <Image
                      src={prize.logo}
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                      }}
                      height={1}
                      width={400}
                      alt={`${prize.sponsor} logo`}
                    />
                    <div>
                      🏆 {prize.prize}
                    </div>
                  </div>
                </a>
              ))} 
            </div>
          </div>
        </FadeInDiv>
      </section>
    </div>
  );
};

export default Prizes;
