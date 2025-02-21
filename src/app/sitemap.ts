// Usage: This file is used to generate the sitemap.xml file for the website

import { MetadataRoute } from "next";
import { sanityClient } from "../../studio/client";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

async function getBlogPosts() {
  const posts = await sanityClient.fetch(`
    *[_type == "blogPost" && defined(slug.current)] {
      "slug": slug.current,
      _updatedAt
    }
  `);

  return posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get your regular pages
  const pages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/buildstation`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Get blog posts from Sanity
  const blogPosts = await getBlogPosts();

  return [...pages, ...blogPosts];
}