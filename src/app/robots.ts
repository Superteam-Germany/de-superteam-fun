// Usage: This file is used to generate the robots.txt file for the website.
// It is used to tell search engines which pages to crawl and which to avoid.

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/studio",
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `https://docs.superteamde.fun/sitemap.xml`,
    ],
  };
}