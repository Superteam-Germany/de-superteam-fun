import React, { FC } from "react";

interface Props {
  title: string;
  content: string;
  link: string;
}

const CtaCard: FC<Props> = ({ title, content, link }) => {
  return (
    <div className="max-w-2xl bg-gradient-to-r from-primary to-secondary p-10 rounded-2xl">
      <h2 className="uppercase mb-4">{title}</h2>
      <p className=" mb-10 font-secondary font-semibold">{content}</p>
      <a className="underline underline-offset-4 block" href="">
        {link}
      </a>
    </div>
  );
};

export default CtaCard;
