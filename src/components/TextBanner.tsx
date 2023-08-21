import React from "react";
import Spacer from "./ui/Spacer";

const TextBanner = () => {
  const textItems = [
    "Solana Community",
    "Developers",
    "Art",
    "Events",
    "Developers",
    "Events",
    "Developers",
  ];
  return (
    <>
      <Spacer />
      <div className=" -ml-2 bg-background flex overflow-hidden items-center uppercase">
        {textItems.map((item, index) => (
          <>
            <h2 className="whitespace-nowrap inline-block text-banner">
              {item}
            </h2>
            <div className="h-2 w-2 shrink-0 mx-2 rounded-full bg-white"></div>
          </>
        ))}
      </div>
      <Spacer />
    </>
  );
};

export default TextBanner;
