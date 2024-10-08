'use client';
import React from 'react';
import Card from '../../components/ui/Card';
import Image from 'next/image';
import { Highlight } from '../../components/ui/Highlight';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EventRecord } from '@/app/types/events';
import FadeInDiv from '../../components/ui/FadeInDiv';
import { twMerge } from 'tailwind-merge';

const getEvents = async (): Promise< EventRecord[]> => {
  const result = await fetch('api/events', {
    next: {
      revalidate: 12 * 60 * 60,
    },
  });

  const events = (await result.json()).events as EventRecord[];
  return events;
};

const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    // timeZoneName: 'short',
  });
};

const UpcomingEvents = () => {
  const [events, setEvents] = React.useState<EventRecord[]>([]);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '0%']);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const events  = await getEvents();

      setEvents(
        events
          .sort(
            (a: EventRecord, b: EventRecord) =>
              new Date(a.startTime).getTime() -
              new Date(b.startTime).getTime()
          )
          .filter(e => e)
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
        <div
          className={twMerge(
            'grid sm:grid-cols-2 grow justify-evenly gap-8 items-center',
            events.length === 1 ? 'sm:grid-cols-1 justify-center ' : ''
          )}>
          {events.map((event: EventRecord) => {
            return (
              <Card
                key={event.id}
                className='mx-auto'
                title={event.name}
                content={event.description}
                linkContent='RSVP'
                href={event.link}
                imgSrc={event.image}
                date={formatDateTime(event.startTime)}
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
              Upcoming <br /> Events
            </h2>
          </div>
        </FadeInDiv>
      </section>
    </div>
  );
};

export default UpcomingEvents;
