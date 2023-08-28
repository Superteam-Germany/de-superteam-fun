"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  return (
    <div className="relative overflow-hidden">
      <motion.div
        style={{ y, scaleX: -1 }}
        className="bg-[url('/images/wave.png')] w-full absolute h-full -z-50 bg-fixed bg-cover "></motion.div>
      <section className="container min-h-96 py-24 flex flex-col gap-6 justify-center sm:flex-row sm:justify-between items-center">
        <p className="text-quote max-w-[40rem] font-light sm:mt-0">
          Uniting <b>the power of innovation, creativity</b>, and{" "}
          <b>collaboration</b> to shaping the <b>Solana Ecosystem</b> in
          Germany.
        </p>

        <h2 className="[writing-mode:vertical-rl]  uppercase inline-block ml-auto">
          United
        </h2>
      </section>
    </div>
  );
};

export default AboutUs;
