import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="py-24 container">
      <h2 className="uppercase ">How we roll</h2>
      <div className="flex gap-6 py-24">
        <div className="relative">
          <Image
            src="/images/placeholder.jpg"
            alt=""
            width={400}
            height={400}
          />
          <div className="absolute flex justify-between bottom-0 bg-black/30 w-full px-8 py-4 backdrop-blur-lg ">
            <div className="h-6 w-6 relative">
              <Image src="/images/x-icon.svg" fill alt="X logo" />
            </div>
            <span className="text-sm text-white/60">05 / 23</span>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/placeholder.jpg"
            alt=""
            width={400}
            height={400}
          />
          <div className="absolute flex justify-between bottom-0 bg-black/30 w-full px-8 py-4 backdrop-blur-lg ">
            <div className="h-6 w-6 relative">
              <Image src="/images/x-icon.svg" fill alt="X logo" />
            </div>
            <span className="text-sm text-white/60">05 / 23</span>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/placeholder.jpg"
            alt=""
            width={400}
            height={400}
          />
          <div className="absolute flex justify-between bottom-0 bg-black/30 w-full px-8 py-4 backdrop-blur-lg ">
            <div className="h-6 w-6 relative">
              <Image src="/images/x-icon.svg" fill alt="X logo" />
            </div>
            <span className="text-sm text-white/60">05 / 23</span>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/placeholder.jpg"
            alt=""
            width={400}
            height={400}
          />
          <div className="absolute flex justify-between bottom-0 bg-black/30 w-full px-8 py-4 backdrop-blur-lg ">
            <div className="h-6 w-6 relative">
              <Image src="/images/x-icon.svg" fill alt="X logo" />
            </div>
            <span className="text-sm text-white/60">05 / 23</span>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/placeholder.jpg"
            alt=""
            width={400}
            height={400}
          />
          <div className="absolute flex justify-between bottom-0 bg-black/30 w-full px-8 py-4 backdrop-blur-lg ">
            <div className="h-6 w-6 relative">
              <Image src="/images/x-icon.svg" fill alt="X logo" />
            </div>
            <span className="text-sm text-white/60">05 / 23</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
