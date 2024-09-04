import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}
export const Highlight: FC<Props> = ({ children }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195]">
      {children}
    </span>
  );
};
