import { AnimatedNumber } from "@/components/animated-number";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import NewsletterForm from "@/components/newsletter-form";
import { Highlight } from "@/components/highlight";
import { BlurredCard } from "@/components/blurred-card";
import { NewsletterGroup } from "@/types/enum";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export default function Hero() {
  const images = [
    { src: "/images/hackathon/7.jpg", alt: "", className: "" },
    { src: "/images/hackathon/9.jpg", alt: "", className: "lg:-mt-32" },
    { src: "/images/hackathon/11.jpg", alt: "", className: "" },
    { src: "/images/hackathon/16.jpg", alt: "", className: "lg:-mt-32" },
  ];

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "-0%"]);

  return (
    <section className="min-w-full">
      <div className="relative isolate">
        {/* Background div */}
        <motion.div
          style={{ backgroundSize: "cover", y }}
          className="bg-[url('/images/backgrounds/line-wave-4-primary.svg')] -z-20 bg-50% bg-no-repeat w-full absolute h-[300vh]"
        ></motion.div>
        <Container className="mt-16">
          <h1 className="font-semibold tracking-tight sm:text-5xl px-4 sm:px-6 lg:px-0">
            <Highlight>Buildstation Berlin:</Highlight> Launch Your Solana
            Startup at the Global Hackathon
          </h1>
          <section className="mt-8 lg:mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-lg px-6 sm:px-6 lg:px-0">
              <p>
                Join Superteam Germany for Build Station! It&apos;s a two week
                long, free to attend, IRL co-working space. It&apos;s mission is
                to support teams and projects building for the{" "}
                <a
                  href="https://www.colosseum.org/hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Colosseum Breakout Hackathon
                </a>
                , a global online competition to build game-changing Solana
                projects.{" "}
              </p>
              <p className="mt-6">
                As part of the Build Station, Superteam Germany is offering
                mentorship, DevRel & Marketing support, Solana workshops, and
                tons of fun activities.
              </p>
              <p className="mt-6">
                Not a coder? No problem—we need diverse minds: developers, biz
                devs, marketers, artists and more.
              </p>
              <p className="mt-8">May 5- May 16, w3.hub, Berlin.</p>

              {/* <NewsletterForm
                group={NewsletterGroup.BUILDSTATION}
                title="RSVP for Buildstation"
              /> */}
              <div className="mt-8"></div>
              <div className="flex flex-col gap-4 w-1/2">
                <Button
                  onClick={() =>
                    window.open("https://lu.ma/buildstation", "_blank")
                  }
                >
                  Register for Build Station
                </Button>

                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://superteamdao.notion.site/colosseum-hackathon-2025",
                      "_blank"
                    )
                  }
                >
                  Complete Guide
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://superteamdao.notion.site/colosseum-hackathon-2025#1e8794d3ba3380a7bfe1d2428dd4db04",
                      "_blank"
                    )
                  }
                >
                  Book your 1:1 Mentoring
                </Button>
              </div>
            </div>
            <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 ${image.className}`}
                  >
                    <Image
                      alt={image.alt}
                      src={image.src}
                      className="h-full w-full object-cover"
                      width={500}
                      height={500}
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
            <BlurredCard className="mt-24 lg:mt-32 lg:col-span-1">
              <p className="text-sm uppercase font-semibold">
                Numbers from previous hackathons
              </p>
              <hr className="mt-6 border-t border-gray-200" />
              <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                  <dt className="text-sm/6">Submissions</dt>
                  <dd className="order-first text-4xl lg:text-6xl font-medium tracking-tight">
                    <AnimatedNumber start={0} end={161} />
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                  <dt className="text-sm/6">Shortlisted Projects</dt>
                  <dd className="order-first text-4xl lg:text-6xl font-medium tracking-tight">
                    <AnimatedNumber start={0} end={41} />
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 max-sm:border-gray-200 max-sm:pb-4">
                  <dt className="text-sm/6">Honorable Mentions</dt>
                  <dd className="order-first text-4xl lg:text-6xl font-medium tracking-tight">
                    <AnimatedNumber start={0} end={10} />
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2">
                  <dt className="text-sm/6">Global Winners</dt>
                  <dd className="order-first text-4xl lg:text-6xl font-medium tracking-tight">
                    <AnimatedNumber start={0} end={12} />
                  </dd>
                </div>
              </dl>
            </BlurredCard>
          </section>
        </Container>
      </div>
    </section>
  );
}
