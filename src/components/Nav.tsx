"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const menuItems = [
  {
    name: "Build Station",
    link: "/buildstation",
    type: "link",
  },
  {
    name: "Events",
    link: "#events",
    type: "link",
  },
  { name: "Follow Us", link: "/", type: "button" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();

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
              {menuItems.map((item, i) => {
                if (item.type === "link") {
                  return (
                    <li
                      key={i}
                      className={path === item.link ? "opacity-60" : ""}>
                      <Link
                        href={item.link}
                        className="no-underline font-secondary">
                        <span className="block text-lg font-normal">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  );
                }

                if (item.type === "button") {
                  return (
                    <li
                      key={i}
                      className={path === item.link ? "opacity-60" : ""}>
                      <Button
                        variant="outline"
                        className="font-secondary"
                        size="lg">
                        {item.name}
                      </Button>
                    </li>
                  );
                }
              })}
            </motion.ul>
          )}
        </AnimatePresence>

        <ul
          className={`sm:flex bg-background hidden  sm:relative sm:w-auto sm:space-x-10 items-center`}>
          {menuItems.map((item, i) => {
            if (item.type === "link") {
              return (
                <li key={i} className={path === item.link ? "opacity-60" : ""}>
                  <Link
                    href={item.link}
                    className="no-underline font-secondary">
                    <span className="block text-lg font-normal">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            }

            if (item.type === "button") {
              return (
                <li key={i} className={path === item.link ? "opacity-60" : ""}>
                  <Button
                    variant="outline"
                    className="font-secondary"
                    size="lg">
                    {item.name}
                  </Button>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default Nav;
