'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Spacer from '@/components/ui/Spacer';
import { useScroll, useTransform } from 'framer-motion';
import { PROJECT_SUBMISSION_LINK, RESOURCES_AND_GUILDS_LINK, SUPERTEAM_GLOBAL_LINK, SOCIAL_X_LINK, SOCIAL_DISCORD_LINK, SOCIAL_TELEGRAM_LINK, SOCIAL_YOUTUBE_LINK } from '@/lib/constants';

const navigation = {
  resources: [
    { name: 'Global Hackathon', href: '/buildstation' },
    { name: 'Resources and Guilds', href: RESOURCES_AND_GUILDS_LINK, target: '_blank' },
    { name: 'Superteam Global', href: SUPERTEAM_GLOBAL_LINK, target: '_blank' },
    { name: 'Support for your Project', href: PROJECT_SUBMISSION_LINK, target: '_blank' },
  ],
  social: [
    {
      name: 'X',
      href: SOCIAL_X_LINK,
      target: '_blank',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'Discord',
      href: SOCIAL_DISCORD_LINK,
      target: '_blank',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: SOCIAL_TELEGRAM_LINK,
      target: '_blank',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.628-5.372-12-12-12zm5.64 8.64l-1.92 9.12c-.14.64-.52.8-1.04.5l-2.88-2.12-1.4 1.36c-.16.16-.28.28-.56.28l.2-2.84 5.16-4.68c.24-.2-.04-.32-.36-.12l-6.36 4-2.72-.84c-.6-.2-.6-.6.12-.88l10.6-4.08c.48-.2.88.12.72.84z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: SOCIAL_YOUTUBE_LINK,
      target: '_blank',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const FooterGroup = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-200%', '0%']);
  const footerCols = Object.entries(navigation).length - 1;

  return (
    <div className='relative w-full overflow-hidden'>
      {/* <motion.div
        style={{ backgroundPosition: '50% 90%', backgroundSize: 'cover', y }}
        className="bg-[url('/images/backgrounds/line-wave-3-primary.svg')] bg-bottom bg-no-repeat -z-50 w-full bg-50% md:bg-contain absolute h-full bg-fixed"></motion.div> */}
      <div className=' overflow-hidden'>
      <Spacer />
        {/* <section className='mt-24 relative pb-24'>
          <div className='max-w-screen-2xl mx-auto px-4 sm:flex justify-between'>
            <Image
              src='/images/stLogoWithIcon.svg'
              height={35}
              className='mb-2'
              width={200}
              alt='Superteam logo'
            />
            <div className='space-x-6'>
              <Link href='/policy'>Privacy Policy</Link>
            </div>
          </div>
        </section> */}
        <footer aria-labelledby="footer-heading" className="bg-transparent backdrop-blur-md font-sans">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div className="flex flex-col-reverse xl:flex-row  justify-between">
              <div className="xl:w-1/3 text-center xl:text-left space-y-8 mt-24 xl:mt-0">
                <Image
                  src='/images/stLogoWithIcon.svg'
                  height={35}
                  width={200}
                  alt='Superteam logo'
                  className="mx-auto xl:mx-0"
                />
                <p className="text-sm leading-6 text-gray-300">
                  Let&apos;s build the next generation of the internet together on Solana.
                </p>
                <div className="flex justify-center xl:justify-start space-x-6">
                  {navigation.social.map((item) => (
                    <Link key={item.name} href={item.href} target={item.target} className="text-gray-500 hover:text-gray-400">
                      <span className="sr-only">{item.name}</span>
                      <item.icon aria-hidden="true" className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className={`flex flex-col xl:flex-row`}>
                {Object.entries(navigation).map(([section, items]) => (
                  section !== 'social' && (
                    <div key={section} className="w-full lg:w-[200px] text-center lg:text-left mt-12 lg:mt-0">
                      <h3 className="text-sm font-semibold leading-6 text-white capitalize">{section}</h3>
                      <ul role="list" className="mt-6 space-y-4">
                        {items.map((item: { name: string, href: string, target?: string }) => (
                          <li key={item.name}>
                            <Link href={item.href} target={item.target} className="text-sm leading-6 text-gray-300 hover:text-white">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                ))}
              </div>
            </div>
            <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <div className='flex flex-col-reverse md:flex-row text-center lg:text-left justify-between'>
              <p className="text-xs mt-8 md:mt-0 leading-5 text-gray-400">&copy; 2024 Superteam Germany. All rights reserved.</p>
              <Link href='/policy' className="text-sm leading-6 text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
            </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterGroup;