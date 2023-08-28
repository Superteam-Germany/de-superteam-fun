import React from "react";
import CtaCard from "../../../components/ui/CtaCard";
import { Highlight } from "../../../components/ui/Highlight";

const GetInvolved = () => {
  return (
    <section className="py-24">
      <div className="container my-6 gap-6 mb-12 md:flex justify-center sm:flex-row-reverse  sm:justify-between items-start">
        <h2 className="uppercase text-h2 mb-12">
          How can I <br /> get<Highlight>involved</Highlight>?
        </h2>
        <div className="max-w-[40rem]">
          <p className="font-light">
            Different users at different experience levels will either want to
            learn about the ecosystem or browse bounties. The bounties are
            hosted at earn.superteam.fun and the learning resources TBD.
          </p>
          <a href="" className="underline underline-offset-4">
            <span className="block my-6 text-body">Learn more about us</span>
          </a>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 container justify-between">
        <CtaCard
          title="Learn"
          content="Get the ressources to start your journey in the Solana ecosystem."
          link="Learn more"
        />
        <CtaCard
          title="Earn"
          content="Use our platform earn.superteam.fun to get start tasks for us and get rewarded."
          link="Start earning today!"
        />
      </div>
    </section>
  );
};

export default GetInvolved;
