"use client";
import React from "react";
import { Highlight } from "./ui/Highlight";
import { motion, useScroll, useTransform } from "framer-motion";

const Instructions = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-90%", "40%"]);
  return (
    <div className=" w-full relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="bg-[url('/images/line-wave-2.png')] w-full absolute h-full  bg-no-repeat bg-left-bottom -z-50 md:bg-cover bg-fixed bg-50%"></motion.div>

      <section className="container min-h-80 py-24 grid grid-cols-1 lg:grid-cols-2 gap-x-8 justify-center sm:flex-row sm:justify-between items-center">
        <h2 className="uppercase text-h2 self-start">
          Berlin
          <br /> <Highlight>Demo day</Highlight>
        </h2>
        <div className="max-w-[40rem] space-y-6">
          <h3 className="leading-none mb-4 lg:mb-10 ">
            📥 Present your project
          </h3>
          <div>
            <ul className="list-disc">
              <li>Local irl Demo Day</li>
              <li>
                ​Get hands-on experience by working on your project, meeting new
                people, finding team members, or joining an existing team.
              </li>
              <li>
                ​Receive support and advice from Solana experts, and showcase
                your work at a demo day on the last day of the event.
              </li>
            </ul>
          </div>
          <h3 className="leading-none mb-4 lg:mb-10 ">🏆 Win Prizes</h3>
          <div>
            <ul className="list-disc">
              <li>
                ​Enjoy a comfortable venue equipped with good WiFi,
                workstations, as well as free drinks & snacks and relaxation
                lounges.
              </li>
              ​<li>​Participate in exclusive evening events.</li>
            </ul>
          </div>
          <a href="" className="underline underline-offset-4">
            <span className="block my-6 text-body">Learn more about us</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Instructions;
