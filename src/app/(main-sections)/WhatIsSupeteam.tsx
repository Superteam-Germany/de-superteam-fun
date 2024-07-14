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
          Our mission? To empower talents in the Web3 space by providing them with opportunities to learn, earn, and connect with the Solana ecosystem.
          </p>

          <a
            href="https://superteam.fun"
            target="_blank"
            className="underline underline-offset-4 block">
            <span className="block text-body">Learn more about the international Superteam network.</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhatIsSuperteam;
