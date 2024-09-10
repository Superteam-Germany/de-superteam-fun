'use client'
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  link?: string;
  text: string;
  className?: string;
};

const Banner = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="flex w-full fixed bottom-0 justify-center items-center  z-50  mb-10 ">
      <div className="w-4/5 bg-gradient-primary rounded-lg shadow-l p-4">
        <div className="flex pl-4 justify-between items-center">
          <a href={props.link || '/'} target='_blank' className="text-white">
            {props.text}
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white font-bold px-2 py-1 rounded hover:bg-white hover:text-black transition">
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
