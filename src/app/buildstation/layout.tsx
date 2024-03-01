import type { Metadata } from 'next';
import Banner from '../../components/Banner';

export const metadata: Metadata = {
  title: 'Berlin Build Station | Superteam Germany',
  description:
    'Join Superteam Germany for a journey into the future of Solana at our Build Station in Berlin.This is your opportunity to shape the future of blockchain, and to get the support you need to build for the Upcoming Hackathon.',
  openGraph: {
    title: 'Build Station Berlin | Superteam Germany',
    description:
      'Uniting the power of innovation, creativity, and collaboration to shape the Solana Ecosystem in Germany.',
    url: 'https://de.superteam.fun',
    siteName: 'Superteam Germany',
    images: [
      {
        url: '/bs-luma.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Station Berlin | Superteam Germany',
    description:
      'Uniting the power of innovation, creativity, and collaboration to shape the Solana Ecosystem in Germany.',
    images: ['/bs-luma.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
