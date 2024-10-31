"use client";

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { SUPERTEAM_EARN_LINK } from '@/lib/constants';
import { scrollToAnchor } from '@/lib/utils';

export default function WhatWeDo() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '-0%']);

  const cards = [
    {
      imgSrc: "/images/what-we-do/fun.jpg",
      title: "Hang out and have fun",
      description: "Come to our events, make new friends, and learn about Solana. From Co-Working Fridays to Summer- and Halloween-parties, there is always something happening. Here we have fun exploring the Solana ecosystem.",
      link: "#events",
      colSpan: "lg:col-span-3",
      roundedClass: "max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]",
      cta: "Check out our events"
    },
    {
      imgSrc: "/images/what-we-do/connect1.jpg",
      title: "Support Career Pathways",
      description: "We have a huge network of professionals and partners within the Solana ecosystem. We can help you to find partnerships for your project, which projects are hiring and which devs are looking for opportunities.",
      link: "#",
      colSpan: "lg:col-span-3",
      roundedClass: "lg:rounded-tr-[2rem]",
      cta: "Learn More"
    },
    {
      imgSrc: "/images/what-we-do/talk.jpg",
      title: "Providing Resources to Learn",
      description: "Join our bi-weekly developer guilds, creator guilds and IRL events where you can share insights, troubleshoot, and work together.",
      link: "#events",
      colSpan: "lg:col-span-2",
      roundedClass: "lg:rounded-bl-[2rem]",
      cta: "Join our events"
    },
    {
      imgSrc: "/images/what-we-do/officehour.jpg",
      title: "Hackathon Support",
      description: "Supporting projects in hackathons and providing resources, mentorship, and workshops for participants.",
      link: "/buildstation",
      colSpan: "lg:col-span-2",
      roundedClass: "lg:rounded-bl-[2rem]",
      cta: "Learn More"
    },
    {
      imgSrc: "/images/what-we-do/4.jpg",
      title: "Superteam Earn",
      description: "We've bounties and grants for builders, content creators, and projects that bring value to the Solana ecosystem.",
      link: SUPERTEAM_EARN_LINK,
      colSpan: "lg:col-span-2",
      roundedClass: "max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]",
      cta: "Learn More"
    }
  ];

  return (
    <section id="what-we-do" className="min-w-full overflow-hidden mt-24 pb-24">
      <div className="relative isolate">
        {/* Background div */}
        <motion.div
          style={{ backgroundSize: 'cover', y }}
          className="bg-[url('/images/backgrounds/line-wave-2-primary.svg')] bg-50% bg-no-repeat -z-50 w-full absolute h-[180vh] bg-fixed"
        ></motion.div>
      </div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
          What We Do
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {cards.map((card, index) => (
            <div key={index} className={`relative ${card.colSpan}`}>
              <div className={`absolute inset-px rounded-lg bg-gradient-to-br from-secondary/70 backdrop-blur-md via-secondary/50 to-background/30 to-100% ${card.roundedClass}`} />
              <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ${card.roundedClass}`}>
                <img
                  alt=""
                  src={card.imgSrc}
                  className="h-80 object-cover object-left"
                />
                <div className="flex flex-col justify-between p-10 pt-4">
                  <div>
                    <h3 className="mt-2 text-lg font-medium tracking-tight">{card.title}</h3>
                    <p className="mt-2 max-w-lg text-sm/6">{card.description}</p>
                  </div>
                  <Link href={card.link}
                    onClick={(e) => {
                        e.preventDefault();
                        card.link.startsWith('#') 
                        ? scrollToAnchor(card.link)
                        : window.open(card.link);
                    }} className="mt-8">
                    {card.cta}
                  </Link>
                </div>
              </div>
              <div className={`pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 ${card.roundedClass}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  