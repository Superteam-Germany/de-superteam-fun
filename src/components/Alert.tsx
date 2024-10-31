import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  text: string;
  cta: React.ReactNode;
}

const Alert = (props: Props) => {
  return (
    <div className='container'>
      <div
        className={twMerge(
          ' md:flex justify-between gap-4 items-center shadow-[0_0px_60px_-15px_hsl(var(--primary))] outline outline-2 outline-primary py-8 px-12 bg-background sm:col-span-2 rounded-2xl',
          props.className
        )}>
        <p className='font-semibold mb-6 md:mb-0 md:max-w-[60%]'>
          {props.text}
        </p>
        {props.cta}
      </div>
    </div>
  );
};

export default Alert;
