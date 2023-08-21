import React from "react";
import { Button } from "./ui/button";

const Email = () => {
  return (
    <section className="flex py-24 flex-col lg:flex-row  justify-between container gap-4">
      <h2 className="uppercase mb-14 lg:mb-0 shrink-0">
        Stay up <br />
        to date
      </h2>
      <div className="p-10 rounded-2xl max-w-3xl bg-black/10 backdrop-blur-xl">
        <form className="flex flex-col gap-8">
          <h3 className="max-w-2/3 leading-tight">
            Be the first to know about the next Superteam events
          </h3>
          <input
            className="outline-2 outline-offset-2 focus:outline-secondary bg-white/5 rounded-lg p-2"
            type="text"
            placeholder="Email"
          />
          <Button className="ml-auto">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default Email;
