import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}
export const Highlight: FC<Props> = ({ children }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-15% to-secondary">
      {children}
    </span>
  );
};
