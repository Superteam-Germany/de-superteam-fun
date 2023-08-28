import React from "react";
import { Highlight } from "../../../components/ui/Highlight";

const WhatIs = () => {
  return (
    <div className=" w-full">
      <section className="container min-h-80 py-24 sm:py-36 grid grid-cols-1 lg:grid-cols-2 gap-x-12 justify-center sm:flex-row sm:justify-between items-center">
        <div className="lg:mb-0 mb-12 flex justify-between h-full flex-col">
          <h2 className="uppercase text-h2 self-start ">
            What is the
            <br />{" "}
            <span>
              Build
              <Highlight> Station</Highlight> Berlin?
            </span>
          </h2>

          <div className="">
            <p className="font-normal">Sep 25 - Oct 13 2023</p>
            <p className="font-normal">Monday to Friday, 10 - 19h</p>
            <p className="font-normal">
              <b>Address</b>:{" "}
              <a href="https://goo.gl/maps/bsnPMX1QNZ1Bxa7w8">
                Möckernstrasse 120
              </a>
            </p>
          </div>
        </div>
        <div className="lg:max-w-[40rem] space-y-4 mx-auto sm:px-0">
          <p>
            Build Station is a three week long co-working space where all Solana
            builders, community members and enthusiasts get together. The event
            is designed to help teams and projects build for the Solana
            Hyperdrive hackathon.
          </p>
          <p>
            As part of the Build Station, we are offering DevRel support,
            ecosystem & technical workshops, and a lot of Fun activities.
            Hyperdrive is an opportunity to shape the future of Solana, just
            like the many previous Build Station projects are impacting the
            ecosystem today.
          </p>
          <p>
            The Station is open to everyone interested in Solana. You&#39; ll
            find here developers, biz-devs, artists, marketers and many others.
          </p>
          {/* <h3 className="leading-none mb-4 lg:mb-10 ">
            Heres what you can expect during the event:
          </h3>
          <div>
            <ul className="list-disc list-inside space-y-4">
              <li>
                Learn from educational content on Solana, DeFi, NFTs, and more
                through workshops, panels, and keynotes from partners.
              </li>
              <li>
                Get hands-on experience by working on your project, meeting new
                people, finding team members, or joining an existing team.
              </li>
              <li>
                Receive support and advice from Solana experts, and showcase
                your work at a demo day on the last day of the event.
              </li>
              <li>
                Network and connect with other builders and enthusiasts in the
                ecosystem.
              </li>
              <li>
                Enjoy a comfortable venue equipped with good WiFi, workstations,
                as well as free drinks & snacks and relaxation lounges.
              </li>
              <li>Participate in exclusive evening events.</li>
            </ul> */}
          {/* </div> */}
          <a href="" className="underline underline-offset-4 block">
            <span className="block text-body">Learn more about us</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhatIs;
