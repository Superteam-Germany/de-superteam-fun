"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FadeInDiv = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      className={props.className}
      whileInView={{ opacity: 1, y: 0, offset: 0.2 }}
      transition={{ duration: 2, delay: 0.2 }}
      viewport={{ once: true }}>
      {props.children}
    </motion.div>
  );
};

export default FadeInDiv;
