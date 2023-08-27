import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { FC } from "react";
import Image from "next/image";

const cardVariants = cva(
  "rounded-2xl bg-white/5 h-[450px] flex-col flex justify-between backdrop-blur-xl text-ellipsis shadow-xl overflow-hidden",
  {
    variants: {
      variant: {
        default: "w-[340px]",
        horizontal: "flex",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

interface Props extends VariantProps<typeof cardVariants> {
  className?: string;
  content: string;
  title?: string;
  linkContent: string;
  imgSrc?: string;
  href: string;
}

const Card: FC<Props> = ({
  className,
  title,
  content,
  variant,
  linkContent,
  imgSrc,
  href,
}) => {
  return (
    <div className={cn(cardVariants({ variant, className }))}>
      {imgSrc && (
        <div className="h-48 w-full shrink-0 relative">
          <Image
            src={imgSrc}
            alt="Placeholder image"
            fill
            style={{ objectFit: "cover", objectPosition: "left bottom" }}
          />
        </div>
      )}
      <div className="px-6 pb-6 flex grow flex-col justify-between">
        <div>
          {title && <h4 className="mt-4 mb-2 font-semibold">{title}</h4>}
          {content && (
            <p className=" line-clamp-6 sm:line-clamp-[4]">{content}</p>
          )}
        </div>
        {linkContent && (
          <a
            href={href}
            className={`${
              title && "text-right"
            } border-b-[1px] border-white w-max ml-auto font-secondary font-medium hover:opacity-80  group transition-opacity group`}>
            <span>{linkContent}</span>
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-all ease-out">
              &rarr;
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
