import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <section className="py-24 space-y-8 container">
      <h2 className="uppercase">Partners</h2>
      <div className="flex gap-6 justify-evenly items-center flex-wrap">
        <Image
          src="/images/backpack-logo.svg"
          height={10}
          width={125}
          alt="backpack logo"
        />
        <Image
          src="/images/underdog-logo.svg"
          height={80}
          width={200}
          alt="backpack logo"
        />
        <Image
          src="/images/g2-logo.svg"
          height={80}
          width={140}
          alt="backpack logo"
        />
        <Image
          src="/images/ultimate-logo.svg"
          height={80}
          width={120}
          alt="backpack logo"
        />
        <Image
          src="/images/cv-labs-logo.svg"
          height={120}
          width={80}
          alt="backpack logo"
        />
        <Image
          src="/images/w3fund-logo.svg"
          height={80}
          width={130}
          alt="backpack logo"
        />
      </div>
    </section>
  );
};

export default Partners;
