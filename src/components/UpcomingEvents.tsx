"use client";
import React from "react";
import Card from "./ui/Card";
import Image from "next/image";
import { Highlight } from "./ui/Highlight";
import { motion } from "framer-motion";
import next from "next/types";
import { EventRecord } from "@/app/types/events";

const getEvents = async (): Promise<{ events: EventRecord[] }> => {
  const events = await fetch("api/events", {
    next: {
      revalidate: 12 * 60 * 60,
    },
  });

  return await events.json();
};

const UpcomingEvents = () => {
  const [events, setEvents] = React.useState<EventRecord[]>([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const { events } = await getEvents();

      setEvents(
        events.sort(
          (a: EventRecord, b: EventRecord) =>
            new Date(a.fields.date).getTime() -
            new Date(b.fields.date).getTime()
        )
      );
    };
    fetchEvents();
  }, []);

  return (
    <div className="relative" id="events">
      {/* <motion.div
        style={{}}
        className="bg-[url('/images/wave-2.png')] w-full absolute h-full -z-50 bg-fixed bg-cover "></motion.div> */}
      <section className="container  py-24 flex-col-reverse justify-between items-center flex lg:flex-row gap-6">
        <div className="grid sm:grid-cols-2 grow justify-evenly gap-8 items-center">
          {events.map((event: EventRecord) => {
            return (
              <Card
                key={event.id}
                title={event.fields.event_name}
                content={event.fields.description}
                linkContent="Subscribe to this event"
                href={event.fields.url}
                imgSrc={event.fields.image}
              />
            );
          })}
        </div>
        <div className="relative flex self-start sm:self-auto justify-center items-center">
          <Image
            src="/images/solana-logomark-gradient.svg"
            className="hidden lg:block"
            alt="Solana logo"
            width={500}
            height={500}
          />
          <h2 className="uppercase mb-12 lg:absolute">
            Upcoming <br /> <Highlight>Events</Highlight>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
