import React from "react";
import { Highlight } from "./ui/Highlight";

const WhatIs = () => {
  return (
    <div className=" w-full">
      <section className="container min-h-80 py-24 grid grid-cols-1 lg:grid-cols-2 gap-x-8 justify-center sm:flex-row sm:justify-between items-center">
        <h2 className="uppercase text-h2 self-start mb-16 ">
          What is the
          <br />{" "}
          <span>
            <Highlight>BuildStation</Highlight>?
          </span>
        </h2>
        <div className="max-w-[40rem] mx-auto px-2 sm:px-0">
          <h3 className="leading-none mb-4 lg:mb-10 ">
            ​Heres what you can expect during the event:
          </h3>
          <div>
            <ul className="list-disc">
              <li>
                Learn from educational content on Solana, DeFi, NFTs, and more
                through workshops, panels, and keynotes from partners.
              </li>
              <li>
                ​Get hands-on experience by working on your project, meeting new
                people, finding team members, or joining an existing team.
              </li>
              <li>
                ​Receive support and advice from Solana experts, and showcase
                your work at a demo day on the last day of the event.
              </li>
              <li>
                ​Network and connect with other builders and enthusiasts in the
                ecosystem.
              </li>
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

export default WhatIs;
