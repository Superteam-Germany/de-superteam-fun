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
    <article
      key={`${title}-${date}`}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
    >
      <img alt="" src={imgSrc} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

      <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
        <time dateTime={date} className="mr-8">
          {date}
        </time>
        <div className="-ml-4 flex items-center gap-x-4">
          <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
            <circle r={1} cx={1} cy={1} />
          </svg>
          {/* <div className="flex gap-x-2.5">
            <img alt="" src={post.author.imageUrl} className="h-6 w-6 flex-none rounded-full bg-white/10" />
            {post.author.name}
          </div> */}
        </div>
      </div>
      <h3 className="mt-3 text-lg/6 font-semibold text-white">
        <a href={href}>
          <span className="absolute inset-0" />
          {title}
        </a>
      </h3>
      <p className='mt-2 max-w-lg text-sm/6'>{content}</p>
    </article>
    // <div className={cn(cardVariants({ variant, className }))}>
    //   {logo && (
    //     <div className='h-48 bg-gradient-primary w-full flex justify-between items-center shrink-0 relative'>
    //       <Image
    //         src={logo}
    //         alt='Placeholder image'
    //         width={150}
    //         height={1}
    //         className='max-w-fit mx-auto max-h-16 '
    //         style={{ objectFit: 'contain', objectPosition: 'center' }}
    //       />
    //     </div>
    //   )}
    //   {imgSrc && (
    //     <div className='h-48 w-full shrink-0 relative'>
    //       <Image
    //         src={imgSrc}
    //         alt='Placeholder image'
    //         className='max-w-full'
    //         fill
    //         style={{ objectFit: 'cover', objectPosition: 'center' }}
    //       />
    //     </div>
    //   )}
    //   <div className='px-6 pb-6 flex grow flex-col justify-between'>
    //     <div>
    //       {title && <h4 className='mt-4 w-full mb-2 font-semibold line-clamp-2'>{title}</h4>}
    //       {content && (
    //         <p className='line-clamp-6 line-clamp-[3]'>{content}</p>
    //       )}
    //       {date && <p className='text-sm text-gray-500 py-4'>{date}</p>}
    //     </div>
    //     {linkContent && (
    //       <a
    //         target="_blank"
    //         href={href}
    //         className={`${
    //           title && 'text-right'
    //         } border-b-[1px] no-underline border-white w-max ml-auto font-secondary font-medium hover:opacity-80  group transition-opacity group`}>
    //         <span>{linkContent}</span>
    //         <span className='ml-2 group-hover:translate-x-1 inline-block transition-all ease-out'>
    //           &rarr;
    //         </span>
    //       </a>
    //     )}
    //   </div>
    // </div>
  );
};

export default Card;
