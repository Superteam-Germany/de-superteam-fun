"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto py-5 flex justify-between xl:px-0 relative">
        <Image
          src="/images/stLogoWithIcon.svg"
          height={50}
          width={160}
          alt="Superteam logo"
        />

        <button onClick={() => setIsOpen(!isOpen)}>
          <Bars3Icon className="h-6 w-6 text-foreground sm:hidden" />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20, display: "none" }}
              animate={{ y: 0, opacity: 1, display: "block" }}
              exit={{ opacity: 0, y: -20, display: "none" }}
              className={`text-center space-y-4 h-min justify-center left-0 z-30 bg-background/95 shadow-lg absolute py-8  top-[100%] px-6 w-full`}>
              <li className="">
                <Link href="">
                  <span className="block text-lg font-normal">Events</span>
                </Link>
              </li>
              <li>
                <Button variant="outline" className="font-normal" size="lg">
                  Follow Us
                </Button>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>

        <ul
          className={`sm:flex bg-background hidden  sm:relative sm:w-auto sm:space-x-10 items-center`}>
          <li className="">
            <Link href="">
              <span className="block text-lg font-normal">Events</span>
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
