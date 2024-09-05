"use client";
import React, { FC, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  images: { imgUrl: string; link: string }[];
}

const Carousel: FC<Props> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden">
      <div className="" ref={emblaRef}>
        <div className="flex h-[40vh] sm:h-[35vh]">
          {images &&
            images.map(({ imgUrl, link }, index) => (
              <div
                key={index}
                className="mx-2  relative bg-white/5 overflow-hidden flex-grow-0 shrink-0 basis-[80%] md:basis-[40%] ">
                <Image
                  src={imgUrl}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt=""
                />
                {/* <div className="w-full px-8 py-4 bg-black/5 flex gap-4 absolute bottom-0 backdrop-blur-md">
                  <Link
                    href="https://twitter.com/SuperteamDE"
                    target="_blank"
                    className="opacity-60 hover:opacity-80 transition-opacity">
                    <div className="h-6 w-6 scale-75 sm:scale-100 relative">
                      <Image src="/images/x-icon.svg" fill alt="X logo" />
                    </div>
                  </Link>

                  <Link
                    href="https://discord.gg/CVwJhHgFfF"
                    target="_blank"
                    className="opacity-60 hover:opacity-80 transition-opacity">
                    <div className="h-6 w-8 relative scale-75 sm:scale-100">
                      <Image
                        src="/images/discord-icon.svg"
                        fill
                        alt="Discord logo"
                      />
                    </div>
                  </Link>
                </div> */}
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

export default Carousel;
