"use client";
import React from "react";
import { Highlight } from "../../../components/ui/Highlight";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const BerlinDemoDay = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "40%"]);
  return (
    <div className=" w-full relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="bg-[url('/images/line-wave-2.svg')] hidden lg:block w-full absolute h-[200vh] bg-no-repeat bg-left-top -z-50 bg-fixed "></motion.div>

      <section className="container min-h-80 space-y-6 lg:space-y-0 py-24 sm:py-36 grid grid-cols-1 lg:grid-cols-2 gap-x-8 justify-center sm:flex-row sm:justify-between items-center">
        <div className="flex flex-col h-full gap-4">
          <h2 className="uppercase  text-h2 self-start">
            Berlin
            <br /> <Highlight>Demo day</Highlight>
          </h2>
          <a
            href="https://lu.ma/buildstation"
            className="hover:opacity-100"
            target="_blank">
            <Button className="mr-auto md:mt-6" variant="default" size="lg">
              Register here
            </Button>
          </a>
        </div>
        <div className="lg:max-w-[40rem] space-y-6">
          <div className="py-2 px-6 bg-white/5 rounded-lg flex items-center">
            <h3 className="uppercase text-h3">Present your project</h3>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-2 px-6">
              <li>Local, in real life Demo Day on the 15th of October.</li>
              <li>Hyperdrive submissions are eligible to present.</li>
            </ul>
          </div>
          <div className="py-2 px-6 bg-white/5 rounded-lg flex items-center">
            <h3 className="uppercase text-h3">Step-by-step</h3>
          </div>
          <div>
            <ul className="list-decimal space-y-2 list-inside px-6">
              <li>
                Apply for Solana Hyperdrive{" "}
                <a className="" href="">
                  here
                </a>
                . Make sure to mark “Germany” in the Hyperdrive application form
                to be eligible for Berlin Demo Day prizes.{" "}
              </li>
              <li>
                Fill out Berlin Demo Day form (we will make the form public
                closer to the Demo Day date).
              </li>
              <li>
                Showtime! Join us in real life at the Berlin Build Station and
                pitch your hackathon submission on stage!
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BerlinDemoDay;
