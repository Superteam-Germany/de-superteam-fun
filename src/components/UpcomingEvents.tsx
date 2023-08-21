"use client";
import React from "react";
import Card from "./ui/Card";
import Image from "next/image";
import { Highlight } from "./ui/Highlight";
import { motion } from "framer-motion";

const UpcomingEvents = () => {
  return (
    <div className="relative ">
      <motion.div
        style={{}}
        className="bg-[url('/images/wave-2.png')] w-full absolute h-full -z-50 bg-fixed bg-cover "></motion.div>
      <section className="container  py-24 flex-col-reverse justify-between items-center flex lg:flex-row gap-6">
        <div className="flex flex-col md:flex-row grow justify-evenly gap-6 items-center">
          <Card
            content="Lorem ipsum dolor sit amet consectetur. Turpis interdum purus pellentesque scelerisque arcu rhoncus fringilla ut eu."
            linkContent="Subscribe to this event"
            href="/"
            imgSrc="/images/placeholder.jpg"
          />
          <Card
            content="Lorem ipsum dolor sit amet consectetur. Turpis interdum purus pellentesque scelerisque arcu rhoncus fringilla ut eu."
            linkContent="Subscribe to this event"
            href="/"
            imgSrc="/images/placeholder.jpg"
          />
        </div>
        <div className="relative flex self-start md:self-auto justify-center items-center">
          <Image
            src="/images/solana-logomark-gradient.svg"
            className="hidden lg:block"
            alt="Solana logo"
            width={500}
            height={500}
          />
          <h2 className="uppercase lg:absolute">
            Upcoming <br /> <Highlight>Events</Highlight>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
