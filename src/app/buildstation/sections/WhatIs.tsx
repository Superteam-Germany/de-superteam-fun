import React from "react";
import { Highlight } from "../../../components/ui/Highlight";

const WhatIs = () => {
  return (
    <div className=" w-full">
      <section className="container min-h-80 py-24 sm:py-36 grid grid-cols-1 lg:grid-cols-2 gap-x-12 justify-center sm:flex-row sm:justify-between items-center">
        <div className="lg:mb-0 mb-12 flex justify-between h-full flex-col">
          <h2 className="uppercase lg:mb-24 text-h2 self-start ">
            What is the
            <br />{" "}
            <span>
              Build
              <Highlight> Station</Highlight> Berlin?
            </span>
          </h2>

          <div className="">
            <p className="font-normal">Sep 25 - Oct 16 2023</p>
            <p className="font-normal">Monday to Friday, 10 - 19h</p>
            <p className="font-normal">
              <b>Address</b>:{" "}
              <a href="https://goo.gl/maps/bsnPMX1QNZ1Bxa7w8">
                Möckernstrasse 120
              </a>
            </p>
          </div>
        </div>
        <div className="lg:max-w-[40rem] space-y-4 mx-auto sm:px-0 h-full">
          <p>
            Build Station is a three week long co-working space where all Solana
            builders, community members and enthusiasts get together. The event
            is designed to help teams and projects build for the Solana
            Hyperdrive hackathon.
          </p>

          <p>
            The Station is open to everyone interested in Solana. You&#39; ll
            find here developers, biz-devs, artists, marketers and many others.
          </p>

          <a
            href="https://lu.ma/buildstation"
            className="underline underline-offset-4 block">
            <span className="block text-body">
              Learn more about the Build Station
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhatIs;
