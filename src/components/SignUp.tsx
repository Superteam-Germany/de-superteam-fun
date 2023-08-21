import React from "react";
import { Button } from "./ui/button";

const SignUp = () => {
  return (
    <section className="flex py-24 flex-col lg:flex-row items-center justify-evenly container gap-4">
      <h2 className="uppercase mb-14 lg:mb-0 shrink-0">Sign up now</h2>
      <Button className="">Sign up</Button>
    </section>
  );
};

export default SignUp;
