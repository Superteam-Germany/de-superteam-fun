import React from 'react';
import { Highlight } from '../../components/highlight';
import { clsx } from 'clsx'
import { Button } from '@/components/button'
import { BlurredCard } from '@/components/blurred-card'
import NewsletterForm from '@/components/newsletter-form';
import { NewsletterGroup } from '@/types/enum';

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
            <div className="mt-6">
            <NewsletterForm group={NewsletterGroup.BUILDSTATION} title='RSVP for Buildstation' />
            </div>
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
  );
};

export default WhatIs;

