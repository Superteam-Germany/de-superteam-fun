import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { FC } from "react";
import Image from "next/image";

const cardVariants = cva(
  "rounded-2xl bg-white/5 h-max backdrop-blur-xl shadow-xl overflow-hidden",
  {
    variants: {
      variant: {
        default: "max-w-xs",
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
        <Image
          src={imgSrc}
          height={400}
          alt="Placeholder image"
          width={400}
          className={cn("aspect-[3/2]")}
        />
      )}
      <div className="p-6">
        {title && <h4 className="mb-4 font-semibold">{title}</h4>}
        <div className=" space-y-4 ">
          {content && <p>{content}</p>}
          {linkContent && (
            <a
              href={href}
              className={`${
                title && "text-right"
              } underline block underline-offset-8 font-medium hover:opacity-80 transition-opacity`}>
              {linkContent}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
