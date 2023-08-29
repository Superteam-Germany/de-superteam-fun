"use client";
import React from "react";
import { Highlight } from "@/components/ui/Highlight";
import UpcomingEvents from "./UpcomingEvents";
import { motion, useScroll, useTransform } from "framer-motion";
import Spacer from "@/components/ui/Spacer";

const WhatIsSuperteam = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="container min-h-80 py-24 grid grid-cols-1 lg:grid-cols-2 gap-x-12 justify-center sm:flex-row sm:justify-between items-center">
        <div className="lg:mb-0 mb-12 flex justify-between h-full flex-col">
          <h2 className="uppercase md:mb-24 text-h2 self-start ">
            WTF is
            <br /> <Highlight> Superteam</Highlight>?
          </h2>
        </div>
        <div className="lg:max-w-[40rem] space-y-4 mx-auto sm:px-0 h-full">
          <p>
            We’re a collective of devs, creatives, and grantees helping to build
            the Solana Ecosystem in Germany. We are organised as a co-operative
            of contributors who are experienced in launching and growing
            technology businesses.
          </p>

          <p>
            We value the sovereignty that comes with founding a company, the
            skin in the game that comes with investing, and the joy that comes
            with getting work done.
          </p>

          <a
            href="https://discord.gg/CVwJhHgFfF"
            target="_blank"
            className="underline underline-offset-4 block">
            <span className="block text-body">Become a member</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhatIsSuperteam;
