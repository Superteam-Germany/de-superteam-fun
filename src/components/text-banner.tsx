import React from "react";

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
    <div className="sm:my-8 md:my-16">
      <div className=" -ml-2 bg-background flex overflow-hidden items-center uppercase">
        {textItems.map((item, index) => (
          <React.Fragment key={index}>
            <h2 className="whitespace-nowrap inline-block text-banner">
              {item}
            </h2>
            <div className="h-2 w-2 shrink-0 mx-2 rounded-full bg-white"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TextBanner;
