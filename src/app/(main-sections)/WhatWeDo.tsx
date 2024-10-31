"use client";

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { Highlight } from '@/components/ui/Highlight';

export default function WhatWeDo() {

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '-0%']);
    return (
        <section className="min-w-full overflow-hidden mt-24 pb-24">
            <div className="relative isolate ">
                {/* Background div */}
                <motion.div
                    style={{ backgroundSize: 'cover', y }}
                    className="bg-[url('/images/backgrounds/line-wave-2-primary.svg')] bg-50% bg-no-repeat -z-50 w-full absolute h-[180vh] bg-fixed"
                ></motion.div>
            </div>
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl over  lg:px-8">
                {/* <h2 className="text-base/7 z-50 font-semibold"><Highlight>Deploy faster</Highlight></h2> */}
                <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
                What We Do
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                <div className="relative lg:col-span-3">
                    <div className="absolute inset-px rounded-lg bg-gradient-to-br from-secondary/70  backdrop-blur-md via-secondary/50 to-background/30 to-100% max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                    <img
                        alt=""
                        src="/images/what-we-do/fun.jpg"
                        className="h-80 object-cover object-left"
                    />
                    <div className="p-10 pt-4">
                        {/* <h3 className="text-sm/4 font-semibold">Hang out and have fun</h3> */}
                        <h3 className="mt-2 text-lg font-medium tracking-tight">Hang out and have fun</h3>
                        <p className="mt-2 max-w-lg text-sm/6">
                        Come to our events, make new friends, and learn about Solana. From Co-Working Fridays to Summer- and Halloween-parties, there is always something happening. Here we have fun exploring the Solana ecosystem.
                        </p>
                    </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                </div>
                <div className="relative lg:col-span-3">
                    <div className="absolute inset-px rounded-lg bg-gradient-to-br from-secondary/70  backdrop-blur-md via-secondary/50 to-background/30 to-100% lg:rounded-tr-[2rem]" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                    <img
                        alt=""
                        src="/images/what-we-do/connect1.jpg"
                        className="h-80 object-cover object-left lg:object-right"
                    />
                    <div className="p-10 pt-4">
                        <h3 className="mt-2 text-lg font-medium tracking-tight">Support Career Pathways</h3>
                        <p className="mt-2 max-w-lg text-sm/6">
                        We have a huge network of professionals and partners within the Solana ecosystem. We can help you to find partnerships for you project, which projects are hiring and which devs are looking for opportunities.
                        </p>
                    </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
                </div>
                <div className="relative lg:col-span-2">
                    <div className="absolute inset-px rounded-lg bg-gradient-to-br from-secondary/70  backdrop-blur-md via-secondary/50 to-background/30 to-100% lg:rounded-bl-[2rem]" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                    <img
                        alt=""
                        src="/images/what-we-do/talk.jpg"
                        className="h-80 object-cover object-left"
                    />
                    <div className="p-10 pt-4">
                        <h3 className="mt-2 text-lg font-medium tracking-tight">Providing Resources to Learn</h3>
                        <p className="mt-2 max-w-lg text-sm/6">
                        Join our bi-weekly developer guilds, creator guilds and IRL events where you can share insights, troubleshoot, and work together on projects with real-world applications.
                        </p>
                    </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
                </div>
                <div className="relative lg:col-span-2">
                    <div className="absolute inset-px rounded-lg bg-gradient-to-br from-secondary/70  backdrop-blur-md via-secondary/50 to-background/30 to-100%" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                    <img
                        alt=""
                        src="/images/what-we-do/officehour.jpg"
                        className="h-80 object-cover object-center"
                    />
                    <div className="p-10 pt-4">
                        <h3 className="mt-2 text-lg font-medium tracking-tight">Hackathon Support</h3>
                        <p className="mt-2 max-w-lg text-sm/6">
                        Supporting projects in hackathons and providing resources, mentorship, and workshops for participants.
                        </p>
                    </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
                </div>
                <div className="relative lg:col-span-2">
                    <div className="absolute inset-px rounded-lg bg-gradient-to-br from-secondary/70  backdrop-blur-md via-secondary/50 to-background/30 to-100% max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                    <img
                        alt=""
                        src="/images/what-we-do/4.jpg"
                        className="h-80 object-cover object-center"
                    />
                    <div className="p-10 pt-4">
                        <h3 className="mt-2 text-lg font-medium tracking-tight">Supporting Projects</h3>
                        <p className="mt-2 max-w-lg text-sm/6">
                        We've bounties and grants for builders, content creators, and projects that bring value to the Solana ecosystem.
                        </p>
                    </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                </div>
                </div>
            </div>
        </section>
    )
  }
  