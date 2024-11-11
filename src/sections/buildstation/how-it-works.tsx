'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { useSwipeable } from 'react-swipeable'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa' // Importing icons

// Custom Tab components
function CustomTabGroup({ children, className, vertical }: any) {
  return <div className={className}>{children}</div>
}

function CustomTabList({ children, className }: any) {
  return <div className={className}>{children}</div>
}

function CustomTab({ children, className, onClick }: any) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

function CustomTabPanels({ children, className }: any) {
  return <div className={className}>{children}</div>
}

function CustomTabPanel({ children, className }: any) {
  return <div className={className}>{children}</div>
}

const features = [
    {
        title: 'Join The Community',
        description:
        'Meet the mentors, find your team, and discuss your ideas. You can already do this by joining our events and Co-working Fridays.',
        image: '/images/hackathon/15.jpg',
    },
    {
        title: 'Build Your MVP and Pitch Deck',
        description:
        'You will have multiple weeks to build your product and pitch deck. Join our newsletter and follow us on X to get notified when you can start building.',
        image: '/images/hackathon/13.jpg',
    },
    {
        title: 'Submit Your Project to Local and Global Tracks',
        description:
        'There will be multiple tracks to win prizes. Some of them are exclusively for projects built by the local community; make sure to submit to both.',
        image: '/images/hackathon/29.jpg',
    },
    {
        title: 'Showcase Your Project',
        description:
        'At the end of the hackathon, you can pitch your project at the Demo Day in Berlin, meet the local judges, and gain visibility through our livestream.',
        image: '/images/hackathon/21.jpg',
    },
];
  

export function HowItWorks() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )
  let [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  const handlers = useSwipeable({
    onSwipedLeft: () => setSelectedIndex((prevIndex) => (prevIndex + 1) % features.length),
    onSwipedRight: () => setSelectedIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length),
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="container relative overflow-hidden pb-28 pt-20 mt-20 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mt-6 tracking-tight font-bold text-blue-100">
            Everything you need to win the hackathon and kickstart your idea.
          </p>
        </div>
        <CustomTabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="lg:col-span-5">
            <CustomTabList className="relative z-10 flex flex-col gap-y-1">
              {features.map((feature, featureIndex) => (
                <div
                  key={feature.title}
                  className={clsx(
                    'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                    selectedIndex === featureIndex
                      ? 'bg-white/5 backdrop-blur-lg  lg:ring-inset '
                      : 'hover:bg-white/5 lg:hover:bg-white/10',
                  )}
                >
                  <h3>
                    <CustomTab
                      className={clsx(
                        'font-display text-lg ui-not-focus-visible:outline-none',
                        selectedIndex === featureIndex
                          ? 'text-blue-600 lg:text-white'
                          : 'text-blue-100 hover:text-white lg:text-white',
                      )}
                      onClick={() => setSelectedIndex(featureIndex)}
                    >
                      <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                      {feature.title}
                    </CustomTab>
                  </h3>
                  <p
                    className={clsx(
                      'mt-2 hidden text-sm lg:block',
                      selectedIndex === featureIndex
                        ? 'text-white'
                        : 'text-blue-100 group-hover:text-white',
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </CustomTabList>
          </div>
          <CustomTabPanels className="lg:col-span-7" {...handlers}>
            {features.map((feature, featureIndex) => (
              <CustomTabPanel
                key={feature.title}
                className={selectedIndex === featureIndex ? '' : 'hidden'}
              >
                <div className="relative sm:px-6 lg:hidden">
                  <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                  <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                    {feature.description}
                  </p>
                  <div className="flex justify-between mt-4">
                    <button
                      className="text-white focus:outline-none"
                      onClick={() => setSelectedIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length)}
                    >
                      <FaArrowLeft size={24} />
                    </button>
                    <button
                      className="text-white focus:outline-none"
                      onClick={() => setSelectedIndex((prevIndex) => (prevIndex + 1) % features.length)}
                    >
                      <FaArrowRight size={24} />
                    </button>
                  </div>
                </div>
                <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                  <img
                    className="w-full"
                    src={feature.image}
                    alt=""
                    // priority
                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                  />
                </div>
              </CustomTabPanel>
            ))}
          </CustomTabPanels>
          {/* <div className="flex justify-center mt-4">
            {features.map((_, index) => (
              <span
                key={index}
                className={clsx(
                  'mx-1 h-2 w-2 rounded-full',
                  selectedIndex === index ? 'bg-[#9945FF]' : 'bg-blue-100'
                )}
              />
            ))}
          </div> */}
        </CustomTabGroup>
      </Container>
    </section>
  )
}

function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
