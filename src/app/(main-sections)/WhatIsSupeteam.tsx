"use client";
import React from "react";
import { Highlight } from "@/components/ui/Highlight";

const WhatIsSuperteam = () => {
  return (
      <section className="container min-h-80 py-0 justify-center sm:flex-row sm:justify-between items-center">
        
        <div className='bg-gradient-to-br h-full flex flex-col overflow-hidden justify-between from-secondary/70  backdrop-blur-md via-secondary/50 to-background/30 to-100% p-2 lg:p-10 rounded-2xl'>
          <div className="overflow-hidden py-16">
            <div className="mx-auto max-w-7xl lg:flex px-0 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 z-10 lg:w-full lg:max-w-lg lg:pb-8">
                  <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">More than a Community</h2>
                  <p className="mt-6 leading-8">
                    At Superteam Germany, we are a family of like minded people learning, building and thriving together.
                  </p>
                  <p className="mt-6 leading-7">
                  Whether you’re new to crypto or a seasoned pro, Superteam Germany welcomes you to collaborate, learn, and build meaningful projects together.
                  </p>
                  {/* <div className="mt-10 flex">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Join our team <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div> */}
                </div>
                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                  <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                    <img
                      alt=""
                      src="/images/about/coding.jpg"
                      className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                      <img
                        alt=""
                        src="/images/about/keyboard.jpg"
                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                      <img
                        alt=""
                        src="/images/about/paul.jpg"
                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="lg:mb-0 mb-12 flex justify-between h-full flex-col">
            <h2 className="uppercase md:mb-24 z-10 text-h2 self-center ">
              <span className='text-shadow'>WTF is Superteam?</span>
            </h2>
          </div>
          <div className="lg:max-w-[40rem] z-10 space-y-4 mx-auto sm:px-0 h-full">
            <p>
              Our mission? To empower talents in the Web3 space by providing them with opportunities to learn, earn, and connect with the Solana ecosystem.
            </p>
            <a
              href="https://superteam.fun"
              target="_blank"
              className="underline underline-offset-4 block">
              <span className="block text-body">Learn more about the international Superteam network.</span>
            </a>
        </div> */}
      </div>

      
    </section>
  );
};

export default WhatIsSuperteam;
