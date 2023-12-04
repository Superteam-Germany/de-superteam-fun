import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  link?: string;
  text: string;
  className?: string;
};

const Banner = (props: Props) => {
  return (
    // <a className='' href={props.link || '/'} target='_blank'>
    <div className='bg-gradient-primary'>
      <div
        className={twMerge(
          'w-full text-sm flex text-center py-2 items-center font-semibold justify-center ',
          props.className
        )}>
        {props.text}
      </div>
    </div>
    // </a>
  );
};

export default Banner;
