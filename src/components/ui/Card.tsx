import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { FC } from 'react';
import Image from 'next/image';

const cardVariants = cva(
  'rounded-2xl bg-white/5 h-[460px] flex-col w-full flex justify-between backdrop-blur-xl text-ellipsis shadow-xl overflow-hidden',
  {
    variants: {
      variant: {
        default: 'max-w-[340px]',
        horizontal: 'flex',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  }
);

interface Props extends VariantProps<typeof cardVariants> {
  className?: string;
  content: string;
  title?: string;
  linkContent: string;
  imgSrc?: string;
  logo?: string;
  href: string;
  date?: string;
}

const Card: FC<Props> = ({
  className,
  title,
  content,
  variant,
  linkContent,
  imgSrc,
  logo,
  href,
  date,
}) => {
  return (
    <div className={cn(cardVariants({ variant, className }))}>
      {logo && (
        <div className='h-48 bg-gradient-primary w-full flex justify-between items-center shrink-0 relative'>
          <img
            src={logo}
            alt='Placeholder image'
            className='max-w-fit mx-auto max-h-16 '
            height={1}
            width={150}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
      )}
      {imgSrc && (
        <div className='h-48 w-full shrink-0 relative'>
          <Image
            src={imgSrc}
            alt='Placeholder image'
            className='max-w-full'
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      )}
      <div className='px-6 pb-6 flex grow flex-col justify-between'>
        <div>
          {title && <h4 className='mt-4 w-full mb-2 font-semibold line-clamp-2'>{title}</h4>}
          {content && (
            <p className='line-clamp-6 line-clamp-[3]'>{content}</p>
          )}
          {date && <p className='text-sm text-gray-500 py-4'>{date}</p>}
        </div>
        {linkContent && (
          <a
            target="_blank"
            href={href}
            className={`${
              title && 'text-right'
            } border-b-[1px] no-underline border-white w-max ml-auto font-secondary font-medium hover:opacity-80  group transition-opacity group`}>
            <span>{linkContent}</span>
            <span className='ml-2 group-hover:translate-x-1 inline-block transition-all ease-out'>
              &rarr;
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
