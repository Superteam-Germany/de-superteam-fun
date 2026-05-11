import Link from "next/link";
import { SOLANA_SUMMIT_LUMA_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SummitCtaProps = {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "ghost" | "solid";
};

export function SummitCta({
  children = "Request to Join",
  href = SOLANA_SUMMIT_LUMA_LINK,
  className,
  variant = "primary",
}: SummitCtaProps) {
  if (variant === "ghost") {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(
          "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-[15px] font-semibold uppercase tracking-[0.16em] text-white no-underline transition-colors duration-150 ease-out hover:text-[#14f195] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          className
        )}
      >
        {children}
      </Link>
    );
  }

  if (variant === "solid") {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(
          "inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#8d4cff] via-[#5ad7ff] to-[#14f195] px-7 text-[15px] font-bold uppercase tracking-[0.16em] text-black no-underline transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-2 focus-visible:ring-offset-black active:translate-y-0",
          className
        )}
      >
        <span className="flex w-full items-center justify-center gap-3">
          {children}
          <span aria-hidden="true">↗</span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "summit-outline-cta inline-flex min-h-12 items-center justify-center rounded-full px-7 text-[15px] font-bold uppercase tracking-[0.16em] text-white no-underline transition-colors duration-150 ease-out hover:text-[#14f195] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14f195] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className
      )}
    >
      <span className="flex w-full items-center justify-between gap-3">
        {children}
        <span aria-hidden="true">↗</span>
      </span>
    </Link>
  );
}
