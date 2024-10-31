import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const Highlight: FC<Props> = ({ children }) => {
  return (
    <span className="relative inline-block">
      <span
        className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195]"
        style={{ textShadow: '1px 1px 2px black, 0 0 1em black, 0 0 0.2em black' }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195]">
        {children}
      </span>
    </span>
  );
};
