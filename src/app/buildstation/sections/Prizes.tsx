"use client";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Highlight } from "../../../components/ui/Highlight";
import PrizeList from "../../../misc/prizes.json";

import FadeInDiv from "@/components/ui/FadeInDiv";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

type Props = {};

const Prizes = (props: Props) => {
  return (
    <div className="relative">
      <div
        style={{
          scale: "-1",
          backgroundPosition: "right top",
          backgroundSize: "cover",
        }}
        className="bg-[url('/images/backgrounds/line-wave-4.svg')] bg-bottom  top-0 left-0 bottom-0 -z-50 w-full absolute h-full bg-fixed"></div>
      <section id="prizes" className="relative container py-12 md:pt-24">
        <div className="py-12">
          <h2 className="uppercase text-h2.5">
            {" "}
            <Highlight>Grand Prizes</Highlight>
          </h2>
          <div className="flex items-start">
            <span className="text-h3 leading-none mr-2">by</span>
            <div className="flex relative h-14 mt-[2px] sm:-mt-[2px] sm:h-16 w-56">
              <Image
                src="/images/stLogoWithIcon.svg"
                className=""
                fill
                alt="superteam germany"
              />
            </div>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="md:space-y-8 grid grid-cols-1 md:grid-cols-12 gap space-y-4 py-12 md:px-8 max-w-screen-lg mx-auto">
          <AccordionItem
            className="md:w-[550px] col-span-full col-start-2"
            value="first">
            <AccordionTrigger>
              <div className="flex justify-between  items-center w-full md:px-6 px-2">
                <h4 className="text-h4">🏆 1st Place</h4> <span>$5,000</span>{" "}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              You&#39;re invited to join Superteam Germany!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="md:w-[550px] col-span-full md:self-center col-start-3"
            value="second">
            <AccordionTrigger>
              <div className="flex justify-between  items-center w-full md:px-6 px-2 ">
                <h4 className="text-h4">🥈 2nd Place</h4> <span>$3,000</span>{" "}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              You&#39;re invited to join Superteam Germany!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="md:w-[550px] col-span-full md:self-end col-start-4"
            value="third">
            <AccordionTrigger>
              <div className="flex justify-between  items-center w-full md:px-6 px-2">
                <h4 className="text-h4">🥉 3rd Place</h4> <span>$1,000</span>{" "}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              You&#39;re invited to join Superteam Germany!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="md:w-[550px] col-span-full md:self-end col-start-5"
            value="green">
            <AccordionTrigger
              className="outline-primary outline outline-2"
              chevronColor="">
              <div className="flex justify-between  items-center w-full md:px-6 px-2">
                <h4 className="">🌳 Green Track</h4>{" "}
                <span className="">$1,000</span>{" "}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              You&#39;re invited to join Superteam Germany!
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <FadeInDiv>
          <div className=" pt-12 sm:pt-24">
            <div className="grid md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-h2.5 leading-none">
                  Ecosystem Partner Prizes
                </h3>
                <p>
                  Each Partner awards their prize to the best project building
                  for their specific local track.{" "}
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 sm:py-24">
              {PrizeList.map((prize, i) => (
                <a
                  key={i}
                  href={prize.link}
                  target="_blank"
                  className="no-underline hover:opacity-100">
                  <div className="bg-[#202020] hover:scale-[1.01] select-none cursor-pointer active:scale-100 transition-all hover:shadow-lg flex justify-between flex-col rounded-xl h-64 p-8">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-xl">{prize.title}</h4>
                        {/* <PlusCircleIcon className="h-7 w-7" fill="#00ff04" /> */}
                      </div>
                      <div className="flex flex-col justify-between line-clamp-3">
                        <p className="line-clamp-3">{prize.requirements}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        {/* <span className="text-base block mb-2 text-white">
                  Sponsored by
                </span> */}
                        <Image
                          src={prize.logo}
                          className="max-h-12 max-w-fit"
                          style={{
                            objectFit: "contain",
                            objectPosition: "left",
                          }}
                          height={1}
                          width={130}
                          alt={`${prize.sponsor} logo`}
                        />
                      </div>
                      <span className="self-end text-right">
                        🏆 {prize.prize}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeInDiv>
      </section>
    </div>
  );
};

export default Prizes;
