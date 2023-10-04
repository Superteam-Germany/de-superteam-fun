'use client';
import React from 'react';
import Card from '../../components/ui/Card';
import Image from 'next/image';
import { Highlight } from '../../components/ui/Highlight';
import { motion, useScroll, useTransform } from 'framer-motion';
import next from 'next/types';
import { EventRecord } from '@/app/types/events';
import FadeInDiv from '../../components/ui/FadeInDiv';

const getEvents = async (): Promise<{ events: EventRecord[] }> => {
  const events = await fetch('api/events', {
    next: {
      revalidate: 12 * 60 * 60,
    },
  });

  return await events.json();
};

const UpcomingEvents = () => {
  const [events, setEvents] = React.useState<EventRecord[]>([]);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '0%']);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const { events } = await getEvents();

      setEvents(
        events
          .sort(
            (a: EventRecord, b: EventRecord) =>
              new Date(a.fields.date).getTime() -
              new Date(b.fields.date).getTime()
          )
          .filter(e => e.fields.display)
      );
    };
    fetchEvents();
  }, []);

  return (
    <div className='relative overflow-hidden' id='events'>
      <motion.div
        style={{ backgroundSize: 'cover', y }}
        className="bg-[url('/images/backgrounds/line-wave-2-primary.svg')] bg-50% bg-no-repeat -z-50 w-full absolute h-[200vh] bg-fixed"></motion.div>
      <section className='container  py-24 flex-col-reverse justify-between items-center flex lg:flex-row gap-6'>
        <div className='grid sm:grid-cols-2 grow justify-evenly gap-8 items-center'>
          {events.map((event: EventRecord) => {
            return (
              <Card
                key={event.id}
                title={event.fields.event_name}
                content={event.fields.description}
                linkContent='Subscribe to this event'
                href={event.fields.url}
                imgSrc={event.fields.image}
              />
            );
          })}
        </div>
        <FadeInDiv>
          <div className='relative flex self-start sm:self-auto justify-center items-center'>
            <Image
              src='/images/solana-logomark-gradient.svg'
              className='hidden lg:block'
              alt='Solana logo'
              width={500}
              height={500}
            />
            <h2 className='uppercase mb-12 lg:absolute'>
              Upcoming <br /> <Highlight>Events</Highlight>
            </h2>
          </div>
        </FadeInDiv>
      </section>
    </div>
  );
};

export default UpcomingEvents;
