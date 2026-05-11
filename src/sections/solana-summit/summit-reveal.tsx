import type { ReactNode } from "react";

type SummitRevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SummitReveal({ children, className, id }: SummitRevealProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
