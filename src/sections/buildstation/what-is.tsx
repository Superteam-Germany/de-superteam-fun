import React from 'react';
import { Highlight } from '../../components/highlight';
import { clsx } from 'clsx'
import { Button } from '@/components/button'
import { BlurredCard } from '@/components/blurred-card'

const WhatIs = () => {
  return (
    <section className='container'>
      <BlurredCard className="lg:mt-32 lg:px-16 py-24">
        {/* <Subheading>Meet the team</Subheading> */}
        <h3 className="mt-2">
          Build Station Berlin
        </h3>
        <p className="'text-2xl font-medium text-blue-100 text-">
          We provide resources, mentorship and connect you with like-minded people to 
          support you in your hackathon journey and beyond.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-w-lg">
            <p className="">
              Build Station is an multi-week IRL space where builders, community members, 
              and Solana enthusiasts come together for co-working, workshops, and support 
              during the Solana Global Hackathon.
            </p>
            <p className="mt-6">
              The Station is open to everyone interested in Solana. You&apos;ll find here developers, 
              biz-devs, artists, marketers and many others.
            </p>
            {/* <div className="mt-6">
              <Button className="w-full sm:w-auto" >
                Join us
              </Button>
            </div> */}
          </div>
          <div className="max-lg:order-first max-lg:max-w-lg">
            <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/images/hackathon/group.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
      </BlurredCard>
    </section>
    // <div className=' w-full'>
    //   <section className='container min-h-80 pt-24 sm:pt-36 grid grid-cols-1 lg:grid-cols-2 gap-x-12 justify-center sm:flex-row sm:justify-between items-center'>
    //     <div className='lg:mb-0 mb-12 flex justify-between h-full flex-col'>
    //       <h2 className='uppercase lg:mb-24 text-h2 self-start'>
    //         What is the
    //         <br />{' '}
    //         <span>
    //           Build
    //           <Highlight> Station</Highlight> Berlin?
    //         </span>
    //       </h2>
    //     </div>
    //     <div className='lg:max-w-[40rem] space-y-4 mx-auto sm:px-0 h-full'>
    //       <p>
    //       Build Station is an multi-week IRL space where builders, community members, and Solana enthusiasts come together for co-working, workshops, and support during the Solana Global Hackathon.
    //       </p>
    //       <p>
    //         The Station is open to everyone interested in Solana. You&#39; ll
    //         find here developers, biz-devs, artists, marketers and many others.
    //       </p>
    //     </div>
    //   </section>
    // </div>
  );
};

export default WhatIs;

function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={clsx(className, 'px-6 lg:px-8')}>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
    </div>
  )
}
