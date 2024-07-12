"use client";
import React, { FC, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  // images: string[];
}

const images = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-2.jpg",
];

const HeroCarousel: FC<Props> = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      duration: 50,
    },
    [Autoplay({ delay: 5000 })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden">
      <div className="" ref={emblaRef}>
        <div className="flex h-[40vh] sm:h-[60vh]">
          {images &&
            images.map((image, key) => (
              <div
                key={key}
                className="mx-2  relative bg-white/5 flex-grow-0 shrink-0 basis-[80%] ">
                <Image
                  src={image}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt={`superteam ${key}`}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="flex gap-4 sm:gap-14 h-32 items-center justify-end container">
        <button
          onClick={scrollPrev}
          className="rounded-full scale-75 sm:scale-100  flex justify-center items-center hover:opacity-80">
          <Image
            alt="arrow"
            src="/images/left-arrow.svg"
            height={50}
            width={50}
          />
        </button>

        <button
          onClick={scrollNext}
          className="rounded-full scale-75 sm:scale-100 rotate-180 flex justify-center hover:opacity-80 items-center">
          <Image
            alt="arrow"
            src="/images/left-arrow.svg"
            height={50}
            width={50}
          />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
