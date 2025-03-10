import { AnimatedNumber } from '@/components/animated-number'
import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import NewsletterForm from '@/components/newsletter-form';
import { Highlight } from '@/components/highlight';
import { BlurredCard } from '@/components/blurred-card';
import { NewsletterGroup } from '@/types/enum';
import { Container } from '@/components/container';



export default function Hero() {
  const images = [
    { src: "/images/hackathon/7.jpg", alt: "", className: "" },
    { src: "/images/hackathon/9.jpg", alt: "", className: "lg:-mt-32" },
    { src: "/images/hackathon/11.jpg", alt: "", className: "" },
    { src: "/images/hackathon/16.jpg", alt: "", className: "lg:-mt-32" },
  ];

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '-0%']);

  return (
    <section className="min-w-full">
      <div className="relative isolate">
        {/* Background div */}
        <motion.div
          style={{ backgroundSize: 'cover', y }}
          className="bg-[url('/images/backgrounds/line-wave-4-primary.svg')] -z-20 bg-50% bg-no-repeat w-full absolute h-[300vh]">
        </motion.div>
            <Container className="mt-16">
            <h1 className='font-semibold tracking-tight sm:text-5xl'><Highlight>Buildstation Berlin:</Highlight> Launch Your Solana Startup at the Global Hackathon</h1>
            <p className="'text-2xl font-medium">
              Join Superteam Germany April-May 2025 for co-working, mentorship, and a shot to win the 25k Eternal Award + accelerator admittance.
            </p>
            <section className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                <div className="max-w-lg">
                    <p>
                      Build Station Berlin is your launchpad for the Colosseum Hackathon (April 14 - May 16, 2025), a global online competition to build game-changing Solana projects.  
                    </p>
                    <p className='mt-6'>
                      Hosted by Superteam Germany at w3.hub, this in-person hub offers daily workshops, mentorship, and team-building—culminating in a livestreamed Demo Day on May 16.
                    </p>
                    <p className='mt-8'>
                      Not a coder? No problem—we need diverse minds: developers, marketers, artists, and more.
                    </p>
                    <NewsletterForm group={NewsletterGroup.BUILDSTATION} title='RSVP for Buildstation' />
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
                  <p className='text-sm uppercase font-semibold'>Numbers from previous hackathons</p>
                  <hr className="mt-6 border-t border-gray-200" />
                  <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                      <dt className="text-sm/6">Submissions</dt>
                      <dd className="order-first text-6xl font-medium tracking-tight">
                          <AnimatedNumber start={0} end={161} />
                      </dd>
                      </div>
                      <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                      <dt className="text-sm/6">Shortlisted Projects</dt>
                      <dd className="order-first text-6xl font-medium tracking-tight">
                          <AnimatedNumber start={0} end={41} />
                      </dd>
                      </div>
                      <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                      <dt className="text-sm/6">Honorable Mentions</dt>
                      <dd className="order-first text-6xl font-medium tracking-tight">
                          <AnimatedNumber start={0} end={10}/>
                      </dd>
                      </div>
                      <div className="flex flex-col gap-y-2">
                      <dt className="text-sm/6">Global Winners</dt>
                      <dd className="order-first text-6xl font-medium tracking-tight">
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
