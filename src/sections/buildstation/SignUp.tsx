import React, { FC } from "react";
import { Button } from "../../components/Button";
import { Highlight } from "../../components/Highlight";

interface Props {
  variant?: "default" | "berlin";
}

const SignUp: FC<Props> = ({ variant = "default" }) => {
  return (
    <div className="relative px-2 xl:px-0">
      {variant === "berlin" ? (
        <div
          style={{ backgroundPosition: "100% 100%" }}
          className="bg-[url('/images/backgrounds/berlin-1.png')] w-full brightness-125 absolute h-full -z-50 bg-80% sm:bg-50%  bg-no-repeat mix-blend-lighten "></div>
      ) : (
        <div className="bg-[url('/images/backgrounds/line-wave-1.png')]  w-full absolute h-full bg-blend-multiply -z-50 bg-left bg-cover"></div>
      )}

      <section className="py-24 sm:py-36 flex-col bg lg:flex-row items-center justify-evenly container gap-4">
        <div className="lg:w-1/2 md:w-3/4 space-y-12">
          <h2 className=" mb-14 tracking-tight lg:mb-0 shrink-0">
            Sign up <Highlight>now</Highlight>!
          </h2>
          <p>
            Attendance is free but make sure to register here beforehand as the
            venue has limited capacity.
          </p>
          <a
            href="https://lu.ma/buildstation"
            target="_blank"
            className="block hover:opacity-100">
            <Button size="lg">Register Here</Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
