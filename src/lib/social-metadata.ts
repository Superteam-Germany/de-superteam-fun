import type { Metadata } from "next";

export const SITE_URL = "https://de.superteam.fun";
export const SITE_SOCIAL_IMAGE =
  "https://de.superteam.fun/images/home-social-card-v1.jpg?v=3";
export const SITE_SOCIAL_IMAGE_ALT =
  "Superteam Germany logo above a Brandenburg Gate silhouette";
export const SITE_SOCIAL_IMAGE_WIDTH = 1200;
export const SITE_SOCIAL_IMAGE_HEIGHT = 630;

type SocialMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createSocialMetadata({
  title,
  description,
  path,
}: SocialMetadataOptions): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title,
      description,
      url: new URL(path, SITE_URL),
      siteName: "Superteam Germany",
      images: [
        {
          url: SITE_SOCIAL_IMAGE,
          secureUrl: SITE_SOCIAL_IMAGE,
          width: SITE_SOCIAL_IMAGE_WIDTH,
          height: SITE_SOCIAL_IMAGE_HEIGHT,
          alt: SITE_SOCIAL_IMAGE_ALT,
          type: "image/jpeg",
        },
      ],
      locale: "en_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: SITE_SOCIAL_IMAGE, alt: SITE_SOCIAL_IMAGE_ALT }],
      site: "@SuperteamDE",
      creator: "@SuperteamDE",
    },
  };
}
