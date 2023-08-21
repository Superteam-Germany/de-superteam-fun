import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="container mx-auto py-5 flex justify-between px-4 xl:px-0">
        <Image
          src="/images/st-logo.svg"
          height={40}
          width={40}
          alt="Superteam logo"
        />
        <ul className="flex space-x-10 items-center">
          <li>
            <Link href="">
              <span className="text-lg font-normal">Events</span>
            </Link>
          </li>
          <li>
            <Button variant="outline" className="font-normal" size="lg">
              Follow Us
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
