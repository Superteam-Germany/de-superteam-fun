import type { Metadata } from 'next';
import {
  SITE_SOCIAL_IMAGE,
  SITE_SOCIAL_IMAGE_ALT,
  SITE_SOCIAL_IMAGE_HEIGHT,
  SITE_SOCIAL_IMAGE_WIDTH,
} from '@/lib/social-metadata';

const buildstationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      "@type": "WebPage",
      '@id': 'https://de.superteam.fun/buildstation#webpage',
      url: 'https://de.superteam.fun/buildstation',
      name: 'Colosseum Hackathon & Berlin BuildStation | Superteam Germany',
      description:
        'Join Superteam Germany for Colosseum’s Crypto World’s Fair and get practical support from registration through submission.',
      isPartOf: { '@id': 'https://de.superteam.fun/#website' },
      about: { '@id': 'https://de.superteam.fun/#organization' },
      inLanguage: 'en',
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://de.superteam.fun/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Global Hackathon',
          item: 'https://de.superteam.fun/buildstation',
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: 'Colosseum Hackathon & Berlin BuildStation',
  description:
    'Join Superteam Germany for Colosseum’s Crypto World’s Fair: register through Germany, find teammates, access workshops and prepare a stronger submission.',
  alternates: { canonical: '/buildstation' },
  openGraph: {
    title: 'Colosseum Hackathon & Berlin BuildStation | Superteam Germany',
    description:
      'Register for Crypto World’s Fair through Germany and get practical support from idea to submission.',
    url: '/buildstation',
    siteName: 'Superteam Germany',
    images: [
      {
        url: SITE_SOCIAL_IMAGE,
        secureUrl: SITE_SOCIAL_IMAGE,
        width: SITE_SOCIAL_IMAGE_WIDTH,
        height: SITE_SOCIAL_IMAGE_HEIGHT,
        alt: SITE_SOCIAL_IMAGE_ALT,
        type: 'image/jpeg',
      },
    ],
    locale: 'en_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colosseum Hackathon & Berlin BuildStation | Superteam Germany',
    description:
      'Register through Germany, find teammates and get workshops, mentorship and submission support.',
    images: [{ url: SITE_SOCIAL_IMAGE, alt: SITE_SOCIAL_IMAGE_ALT }],
    site: '@SuperteamDE',
    creator: '@SuperteamDE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildstationSchema).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </main>
  );
}
