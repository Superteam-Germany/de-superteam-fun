import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import { Highlight } from "./ui/Highlight";

const Hero = () => {
  return (
    <section className="min-w-full ">
      <div className="py-5 container">
        <h1 className="uppercase text-end">
          Superteam <Highlight>Germany</Highlight>_
        </h1>
      </div>
      {/* <div className=" w-full"> */}
      <Suspense>
        <Carousel />
      </Suspense>
      {/* </div> */}
      <div className="relative container">
        <div className="flex gap-6 sm:gap-10 absolute bottom-14">
          <Link href="">
            <div className="h-6 w-6 scale-75 sm:scale-100 relative">
              <Image src="/images/x-icon.svg" fill alt="X logo" />
            </div>
          </Link>

          <Link href="">
            <div className="h-6 w-8 relative scale-75 sm:scale-100">
              <Image src="/images/discord-icon.svg" fill alt="Discord logo" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
