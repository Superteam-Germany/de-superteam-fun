"use client";
import React from "react";
import AccordionWrapper from "./Accordion";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { Highlight } from "./ui/Highlight";
import { motion } from "framer-motion";

type Props = {};

const Prizes = (props: Props) => {
  return (
    <section id="prizes" className="relative container py-12 md:pt-24">
      <div className="py-12">
        <h2 className="uppercase text-h2.5">
          {" "}
          <Highlight>Grand Prizes</Highlight>
        </h2>
        <div className="flex items-start">
          <span className="text-h3 leading-none mr-2">by</span>
          <div className="flex relative h-14 mt-[2px] sm:-mt-[2px] sm:h-16 w-56">
            {/* <Image
              src="/images/superteamGermany-logo.svg"
              className=""
              fill
              alt="superteam germany"
            /> */}
            <Image
              src="/images/stLogoWithIcon.svg"
              className=""
              fill
              alt="superteam germany"
            />
          </div>
        </div>
        {/* <h2 className="uppercase text-h2.5">
          Superteam <Highlight>Germany_</Highlight>
        </h2> */}
      </div>

      <Accordion
        type="single"
        collapsible
        className="md:space-y-8 space-y-4 py-12 flex flex-col md:px-8 max-w-screen-lg mx-auto">
        <AccordionItem className="md:w-4/5" value="first">
          <AccordionTrigger>
            <div className="flex justify-between items-center w-full md:px-6 px-2">
              <h4 className="text-h4">🏆 1st Place</h4> <span>$2,000</span>{" "}
            </div>
          </AccordionTrigger>
          <AccordionContent>On is really heavy the </AccordionContent>
        </AccordionItem>
        <AccordionItem className="md:w-4/5 md:self-center" value="second">
          <AccordionTrigger>
            <div className="flex justify-between items-center w-full md:px-6 px-2 ">
              <h4 className="text-h4">🥈 2nd Place</h4> <span>$1,500</span>{" "}
            </div>
          </AccordionTrigger>
          <AccordionContent>On is really heavy the </AccordionContent>
        </AccordionItem>
        <AccordionItem className="md:w-4/5 md:self-end" value="third">
          <AccordionTrigger>
            <div className="flex justify-between items-center w-full md:px-6 px-2">
              <h4 className="text-h4">🥉 3rd Place</h4> <span>$1,000</span>{" "}
            </div>
          </AccordionTrigger>
          <AccordionContent>On is really heavy the </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className=" pt-12 sm:pt-24">
        <div className="grid md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-h2.5 leading-none">
              Ecosystem Partners Prizes
            </h3>
            <p>
              Each Partner awards their prize to the best project building for
              their specific local track.{" "}
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 sm:py-24">
          {[0, 0, 0, 0, 0, 0].map((_, i) => (
            <div
              key={i}
              className="bg-white/5 hover:scale-[1.01] select-none cursor-pointer active:scale-100 transition-all hover:shadow-lg flex justify-between flex-col rounded-xl h-64 p-8">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-xl">UX / UI</h4>
                  <PlusCircleIcon className="h-7 w-7" fill="#75E23D" />
                </div>
                <div className="flex flex-col justify-between">
                  <p>A short description about the track</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  {/* <span className="text-base block mb-2 text-white">
                  Sponsored by
                </span> */}
                  <Image
                    src="/images/backpack-logo.svg"
                    height={24}
                    width={120}
                    alt="backpack logo"
                    className=""
                  />
                </div>
                <span className="self-end">🏆 $800</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
