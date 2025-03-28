'use client'
import React from 'react'
import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import Link from 'next/link'
import { EventRecord } from '@/types/events'
import { LUMA_GROUP_LINK } from '@/lib/constants'
import { Highlight } from '@/components/highlight'
import { Container } from '@/components/container'

const getEvents = async (): Promise<EventRecord[]> => {
  const result = await fetch('/api/get-luma-events', {
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

function EventsCard({
  name,
  title,
  img,
  children,
  bounds,
  scrollX,
  ...props
}: {
  img: string
  name: string
  title: string
  children: React.ReactNode
  bounds: RectReadOnly
  scrollX: MotionValue<number>
} & HTMLMotionProps<'div'>) {
  let ref = useRef<HTMLDivElement | null>(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-[9/16] w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[3/4] sm:w-96"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-contain object-top"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-25%"
      />
      <figure className="h-2/3 relative p-6 lg:p-10">
        <blockquote>
          <p className="relative text-xl/7 mt-6 lg:mt-12">
            <span aria-hidden="true" className="absolute -translate-x-full">
            &quot;
            </span>
            {children}
            <span aria-hidden="true" className="absolute">
            &quot;
            </span>
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-gr">{name}</p>
          <p className="text-sm/6 font-medium">
            <Highlight>
              {title}
            </Highlight>
          </p>
        </figcaption>
      </figure>
    </motion.div>
  )
}

export function Events() {
  const [events, setEvents] = React.useState<EventRecord[]>([]);
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })

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

  function scrollTo(index: number) {
    let gap = 32
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  return (
    <section id="events" className="overflow-hidden py-24 lg:py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
            <h2 className="mt-16 lg:mt-2 ml-6 lg:ml-0 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
              Upcoming Events
            </h2>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-[var(--scroll-padding)]',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(theme(spacing.6),calc((100vw-theme(maxWidth.2xl))/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-theme(maxWidth.7xl))/2))]',
        ])}
      >
        {events.slice(0, 5).map((event: EventRecord, index: number) => (
          <Link href={event.link} target="_blank" key={event.id} passHref>
              <EventsCard
                name={formatDateTime(event.startTime)}
                title={event.name}
                img={event.image}
                bounds={bounds}
                scrollX={scrollX}
                onClick={() => scrollTo(index)}
              >
                {event.description.slice(0, 85)}...
              </EventsCard>
          </Link>
        ))}
        <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-between">
          <div className="hidden sm:flex sm:gap-2">
            {events.map(({ name }, eventIndex) => (
              <Headless.Button
                key={eventIndex}
                onClick={() => scrollTo(eventIndex)}
                data-active={activeIndex === eventIndex ? true : undefined}
                aria-label={`Scroll to event from ${name}`}
                className={clsx(
                  'w-4 h-4 rounded-full border border-transparent bg-gray-300 transition',
                  'data-[active]:bg-gray-600 data-[hover]:bg-gray-400',
                  'forced-colors:data-[active]:bg-[Highlight] forced-colors:data-[focus]:outline-offset-4',
                )}
              />
            ))}
          </div>
          <Link href={LUMA_GROUP_LINK} target="_blank">
            Discover More Events
          </Link>
        </div>
      </Container>
      
    </section>
  )
}
