"use client";
import { BlurredCard } from "@/components/blurred-card";
import { Button } from "@/components/button";
import { SOCIAL_X_LINK } from "@/lib/constants";
import React from "react";

const WhatIsSuperteam = () => {
  return (
    <section className="container min-h-80 py-0 justify-center sm:flex-row sm:justify-between items-center">
      <BlurredCard>
        <div className="overflow-hidden py-12 lg:py-16 px-4">
          <div className="mx-auto max-w-7xl lg:flex px-0 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 z-10 lg:w-full lg:max-w-lg pb-0 lg:pb-8">
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  Join Us for Our Upcoming Events
                </h2>
                <p className="mt-6 leading-8">
                  Superteam Germany is here to support your journey in the
                  Solana ecosystem. Our events are the perfect place to learn,
                  network, and find opportunities.
                </p>
                <p className="mt-6 leading-7">
                  Whether you&apos;re new to crypto or a seasoned pro, we
                  welcome you to collaborate, learn, and build meaningful
                  projects together.
                </p>
                <p className="mt-6 leading-8">
                  Don&apos;t hack alone - join us for the next global hackathon!
                </p>
                <a
                  href="https://lu.ma/SuperteamGermany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 inline-block"
                >
                  <Button>Explore Events</Button>
                </a>
              </div>
              <div className="flex hidden lg:block flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto  lg:ml-auto lg:w-auto lg:flex-none lg:self-end rounded-2xl overflow-hidden">
                  <img
                    alt=""
                    src="/images/about/1.jpeg"
                    className="aspect-[7/5] w-[37rem] max-w-none object-cover "
                  />
                </div>
                <div className="contents hidden lg:block lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none rounded-2xl overflow-hidden">
                    <img
                      alt=""
                      src="/images/about/2.jpeg"
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none rounded-2xl overflow-hidden">
                    <img
                      alt=""
                      src="/images/about/3.jpeg"
                      className="aspect-[4/3] w-[24rem] max-w-none object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurredCard>
    </section>
  );
};

export default WhatIsSuperteam;
