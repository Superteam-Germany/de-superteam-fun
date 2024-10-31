import React, { FC } from 'react';

interface Props {
  title: string;
  content: string;
  href: string;
  linkContent: string;
}

const CtaCard: FC<Props> = ({ title, content, href, linkContent }) => {
  return (
    <div className='max-w-2xl bg-gradient-to-br h-full flex flex-col overflow-hidden justify-between from-secondary/70  backdrop-blur-md via-secondary/50 to-background/30 to-100% p-10 rounded-2xl'>
      <h2 className='uppercase mb-4'>{title}</h2>
      <p className=' mb-10 font-secondary font-normal'>{content}</p>

      <a
        href={href}
        target='_blank'
        className={`${title} border-b-[1px] no-underline border-white w-max ml-auto font-secondary font-medium hover:opacity-80  group transition-opacity group`}>
        <span>{linkContent}</span>
        <span className='ml-2 group-hover:translate-x-1 inline-block transition-all ease-out'>
          &rarr;
        </span>
      </a>
    </div>
  );
};

export default CtaCard;
