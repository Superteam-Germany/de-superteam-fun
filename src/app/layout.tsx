import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo, Unbounded } from "next/font/google";
import Script from "next/script";
import { SiteChrome } from "@/components/site-chrome";

const SITE_URL = "https://de.superteam.fun";
const HOME_SOCIAL_IMAGE =
  "https://de.superteam.fun/images/home-social-card-v1.jpg?v=3";
const siteDescription =
  "Superteam Germany helps Solana builders and founders launch, grow, raise capital, hire talent and connect through events across Germany.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Superteam Germany",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/st-flag-logo.png`,
      },
      sameAs: [
        "https://x.com/SuperteamDE",
        "https://t.me/superteamgermany",
        "https://www.youtube.com/@SuperteamDE",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Superteam Germany",
      description: "Germany’s community for Solana builders, founders and startups.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
};

const satoshi = localFont({
  src: "./Satoshi-Variable.woff2",
  display: "swap",
  variable: "--font-primary",
});
const archivo = Archivo({
  display: "swap",
  variable: "--font-secondary",
  subsets: ["latin"],
});

const fontHyperdrive = Unbounded({
  display: "swap",
  variable: "--font-hyperdrive",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Superteam Germany | Solana Builders, Founders & Startups",
    template: "%s | Superteam Germany",
  },
  description: siteDescription,
  applicationName: "Superteam Germany",
  authors: [{ name: "Superteam Germany", url: SITE_URL }],
  creator: "Superteam Germany",
  publisher: "Superteam Germany",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/superteamgermany-favicon.png", type: "image/png" }],
    shortcut: [{ url: "/superteamgermany-favicon.png", type: "image/png" }],
    apple: [{ url: "/superteamgermany-favicon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Superteam Germany | Solana Builders, Founders & Startups",
    description: siteDescription,
    url: "/",
    siteName: "Superteam Germany",
    images: [
      {
        url: HOME_SOCIAL_IMAGE,
        secureUrl: HOME_SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Superteam Germany logo above a Brandenburg Gate silhouette",
        type: "image/jpeg",
      },
    ],
    locale: "en_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superteam Germany | Solana Builders, Founders & Startups",
    description: siteDescription,
    images: [
      {
        url: HOME_SOCIAL_IMAGE,
        alt: "Superteam Germany logo above a Brandenburg Gate silhouette",
      },
    ],
    site: "@SuperteamDE",
    creator: "@SuperteamDE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NRF8D57Z');`}
      </Script>
      {/* End Google Tag Manager */}
      <body
        className={`${satoshi.variable} ${archivo.variable} ${fontHyperdrive.variable} `}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRF8D57Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
