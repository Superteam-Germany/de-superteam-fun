import React from "react";
import { Button } from "./ui/button";
import { Highlight } from "./ui/Highlight";

const SignUp = () => {
  return (
    <div className="relative">
      <div className="bg-[url('/images/berlin-1.png')] w-full brightness-125 absolute h-full -z-50 bg-50%  bg-no-repeat bg-right-bottom mix-blend-lighten "></div>
      <div className="bg-[url('/images/line-wave-1.png')] w-full absolute h-full bg-blend-multiply -z-50 bg-left bg-cover "></div>
      <section className="py-24 flex-col bg lg:flex-row items-center justify-evenly container gap-4">
        <div className="lg:w-1/2 md:w-3/4 space-y-12">
          <h2 className=" mb-14 tracking-tight lg:mb-0 shrink-0">
            Sign up <Highlight>now</Highlight>!
          </h2>
          <p>
            ​​Attendance is free but make sure to register here beforehand as
            the venue has limited capacity.
          </p>
          <Button className="">Subscribe Now</Button>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
