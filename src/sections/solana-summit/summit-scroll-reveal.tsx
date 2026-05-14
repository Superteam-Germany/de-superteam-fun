"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type SummitScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

export function SummitScrollReveal({
  children,
  className,
}: SummitScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    setIsReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className ?? ""} summit-scroll-reveal ${
        isReady ? "is-ready" : ""
      } ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {children}
    </div>
  );
}
