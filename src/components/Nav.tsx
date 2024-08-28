"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Spacer from "./ui/Spacer";
import { REGISTER_BUILD_STATION_LINK } from "@/lib/constances";


const menuItems = [
  {
    name: "Events",
    link: "/#events",
    type: "link",
  },
  {
    name: 'Global Hackathon',
    link: '/buildstation',
    type: 'link',
  },
  { name: 'Join Now', link: REGISTER_BUILD_STATION_LINK, type: 'button' },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();

  return (
    <>
      <div className="container items-center mx-auto py-5 flex justify-between xl:px-0 relative">
        <Link href="/" className="hover:opacity-100">
          <Image
            src={
              path === "/buildstation"
                ? "/images/stLogoWithIcon.svg"
                : "/images/st-logo.svg"
            }
            height={35}
            width={path === "/buildstation" ? 160 : 35}
            alt="Superteam logo"
          />
        </Link>

        <button onClick={() => setIsOpen(!isOpen)}>
          <Bars3Icon className="h-6 w-6 text-foreground sm:hidden text-white" />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20, display: "none" }}
              animate={{ y: 0, opacity: 1, display: "block" }}
              exit={{ opacity: 0, y: -20, display: "none" }}
              className={`text-center space-y-4 h-min justify-center left-0 z-30 bg-background/95 shadow-lg absolute py-8  top-[100%] px-6 w-full`}
            >
              {menuItems.map((item, i) => {
                if (item.type === "link") {
                  return (
                    <li
                      key={i}
                      className={
                        path === item.link ? "underline underline-offset-4" : ""
                      }
                    >
                      <Link
                        href={item.link}
                        className={`${
                          path === item.link ? "hover:opacity-100" : ""
                        } no-underline font-secondary font-normal text-base`}
                      >
                        <span className="block">{item.name}</span>
                      </Link>
                    </li>
                  );
                }

                if (item.type === "button") {
                  // if (path === '/buildstation') return;
                  return (
                    <li
                      key={i}
                      className={
                        path === item.link ? "underline underline-offset-4" : ""
                      }
                    >
                      <Button
                        variant="outline"
                        className="font-secondary font-normal text-base"
                        size="lg"
                      >
                        {item.name}
                      </Button>
                    </li>
                  );
                }
              })}
              
              <li>
                <div className="py-8">
                  <Spacer />
                </div>
                <Link href="https://twitter.com/SuperteamDE" target="_blank">
                  <Button className="font-secondary tracking-wide font-normal text-base">
                    Follow us on X
                  </Button>
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>

        <ul
          className={`sm:flex bg-background hidden  sm:relative sm:w-auto sm:space-x-10 items-center`}
        >
          {menuItems.map((item, i) => {
            if (item.type === "link") {
              return (
                <li
                  key={i}
                  className={
                    path === item.link ? "underline underline-offset-4 " : ""
                  }
                >
                  <Link
                    href={item.link}
                    className={`${
                      path === item.link ? "hover:opacity-100" : ""
                    } no-underline font-secondary tracking-wide font-normal text-base`}
                  >
                    <span className="block">{item.name}</span>
                  </Link>
                </li>
              );
            }

            if (item.type === "button") {
              // if (path === '/buildstation') return;
              return (
                <li
                  key={i}
                  className={
                    path === item.link ? "underline underline-offset-4 " : ""
                  }
                >
                  <Link href={item.link} target="_blank" className="">
                    <Button
                      variant="outline"
                      className="font-secondary tracking-wide font-normal text-base"
                      size="lg"
                    >
                      {item.name}
                    </Button>
                  </Link>
                </li>
              );
            }
          })}
          <li>
            <Link href="https://twitter.com/SuperteamDE" target="_blank">
              <Button className="font-secondary tracking-wide font-normal text-base">
                Follow us on X
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
