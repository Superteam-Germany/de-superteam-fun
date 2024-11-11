'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { useSwipeable } from 'react-swipeable'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa' // Importing icons
import { Button } from '@/components/button'
import Link from 'next/link'
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
        title: 'Build Your MVP',
        description:
        'You will have multiple weeks to build your product and pitch deck. Join our newsletter and follow us on X to get notified when you can start.',
        image: '/images/hackathon/13.jpg',
    },
    {
        title: 'Submit Your Project',
        description:
        'There will be multiple tracks to win prizes. Some of them are exclusively for projects built by the local community.',
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

  const handleNext = (prevIndex: number) => {
    console.log("🚀 ~ handleNext ~ prevIndex:", prevIndex)
    
    if (prevIndex < features.length-1 ) {
      setSelectedIndex(prevIndex+1)
    } else {
      setSelectedIndex(0)
    }
  }

  const renderMobileTab = (feature: any, featureIndex: number) => {
    if(selectedIndex === featureIndex) {
      return (
        <div className='flex flex-col justify-between items-center p-4 py-12 bg-white/5 backdrop-blur-lg w-full'>
          <div className='mx-auto max-w-7xl px-12'>
            <div className='text-lg font-bold mb-4' key={feature.title}>
              {feature.title}
            </div>
            <p>
              {feature.description}
            </p>
          </div>
          <div className='flex gap-4 mt-6'>
            <button
              className="text-white focus:outline-none"
              onClick={() => handleNext(featureIndex)}
            >
              <FaChevronLeft size={24} color='gray'/>
            </button>
            <div>
              {featureIndex + 1} / {features.length}
            </div>
            <button
              className="text-white focus:outline-none"
              onClick={() => handleNext(featureIndex)}
            >
              <FaChevronRight size={24} color='gray'/>
            </button>
          </div>
        </div>
      )
    } else return null;
  }

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden pb-28 lg:pt-20 mt-20 sm:py-32"
    >
      <div className="relative lg:mx-auto lg:max-w-7xl lg:px-12 lg:px-8 ">
        <div className="mx-auto max-w-7xl px-12 sm:px-6 lg:px-8 max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            How Build Station Works
          </h2>
          <p className="mt-6 font-bold">
            Everything you need to win the hackathon and kickstart your idea.
          </p>
        </div>
        <CustomTabGroup
          className="mt-0 lg:mt-16 grid grid-cols-1 items-center gap-y-2 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {/* Desctop Tabs */}
          <div className="lg:col-span-5">
            <CustomTabList className="hidden lg:block relative z-10 flex flex-col gap-y-1">
              {features.map((feature, featureIndex) => (
                <div
                  key={feature.title}
                  className={clsx(
                    'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                    selectedIndex === featureIndex
                      ? 'bg-white/5 backdrop-blur-lg lg:ring-inset'
                      : 'hover:bg-white/5 lg:hover:bg-white/10'
                  )}
                >
                  <div>
                    <CustomTab
                      className={clsx(
                        'font-display text-lg ui-not-focus-visible:outline-none',
                      )}
                      onClick={() => setSelectedIndex(featureIndex)}
                    >
                      <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                      {feature.title}
                    </CustomTab>
                  </div>
                  <p
                    className={clsx(
                      'mt-2 text-sm',
                      selectedIndex === featureIndex
                        ? 'block'
                        : 'hidden lg:block text-blue-100 group-hover:text-white'
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </CustomTabList>
          </div>
          {/* Desktop Tabs */}
          <CustomTabPanels className="mx-auto max-w-7xl px-12 lg:px-0 lg:col-span-7" {...handlers}>
            {features.map((feature, featureIndex) => (
              <CustomTabPanel
                key={feature.title}
                className={selectedIndex === featureIndex ? '' : 'hidden'}
              >
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
          <div className="block lg:hidden absolute top-[30rem] left-0 w-full">
            {features.map((feature, featureIndex) => renderMobileTab(feature, featureIndex))}
          </div>
        </CustomTabGroup>
      </div>
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
