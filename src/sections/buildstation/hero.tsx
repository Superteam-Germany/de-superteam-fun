import { AnimatedNumber } from '@/components/animated-number'
import type { Metadata } from 'next'
import { clsx } from 'clsx'
import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import NewsletterForm from '@/components/newsletter-form';
import { Highlight } from '@/components/highlight';
import { BlurredCard } from '@/components/blurred-card';
import { NewsletterGroup } from '@/types/enum';

// export const metadata: Metadata = {
//   title: 'Company',
//   description:
//     'We&apos;re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
// }

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
            <h1 className='font-semibold tracking-tight sm:text-5xl'>Don’t Hack Alone - Join Us for the Next Global Hackathon!</h1>
            <p className="'text-2xl font-medium">
                Come and build with us at <Highlight>Buildstation Berlin</Highlight>.
            </p>
            <section className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                <div className="max-w-lg">
                    <p>
                        Twice a year, there is a huge global Solana hackathon where thousands of builders submit their projects and compete for prizes.  
                    </p>
                    <p className='mt-6'>
                        To help you stand out in such a competitive environment, we&apos;re hosting Buildstation Berlin.
                    </p>
                    <p className='mt-8'>
                    Sign up to participate in the Spring Solana Global Hackathon with Superteam Germany and get notified when you can start building.
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

function Container({
    className,
    children,
  }: {
    className?: string
    children: React.ReactNode
  }) {
    return (
      <div className={clsx(className, 'px-6 lg:px-8')}>
        <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
      </div>
    )
  }