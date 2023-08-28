"use client";
import React from "react";
import { Highlight } from "../../../components/ui/Highlight";
import { motion, useScroll, useTransform } from "framer-motion";

const BerlinDemoDay = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "100%"]);
  const x = useTransform(scrollYProgress, [1, 0], ["-50%", "10%"]);

  return (
    <motion.div className=" w-full relative overflow-hidden">
      <motion.div
        style={{
          backgroundPosition: "-10% 90%",
          backgroundSize: "contain",
          y,
          x,
        }}
        className="bg-[url('/images/line-wave-2.svg')] hidden lg:block w-full opacity-50 absolute h-[100vh] bg-no-repeat bg-left-top -z-50  bg-fixed"></motion.div>

      <section className="container min-h-80 space-y-6 lg:space-y-0 py-24 sm:py-36 grid grid-cols-1 lg:grid-cols-2 gap-x-8 justify-center sm:flex-row sm:justify-between items-center">
        <div className="flex px-2 xl:px-0 flex-col h-full justify-between gap-4">
          <h2 className="uppercase  text-h2 self-start">
            Berlin
            <br /> <Highlight>Demo day</Highlight>
          </h2>

          <div>
            <h2 className="uppercase text-h3 lg:text-h2.5 self-start">
              More than
              <br />
              <Highlight>$30k </Highlight>
              in prizes
            </h2>
          </div>
        </div>
        <div className="lg:max-w-[40rem] space-y-4">
          <div className="py-4 px-6 bg-white/5 rounded-lg flex items-center">
            <h3 className="text-xl leading-none">Present your project</h3>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-2 px-4">
              <li>Local, in real life Demo Day on the 15th of October.</li>
              <li>Hyperdrive submissions are eligible to present.</li>
            </ul>
          </div>
          <div className="px-6 py-4 bg-white/5 rounded-lg flex items-center">
            <h3 className="text-xl leading-none">Step-by-step</h3>
          </div>
          <div>
            <ul className="list-decimal space-y-2 list-inside px-4">
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
    </motion.div>
  );
};

export default BerlinDemoDay;
