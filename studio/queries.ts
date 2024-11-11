import { defineQuery } from 'next-sanity'
import { sanityFetch } from './client'

const TOTAL_POSTS_QUERY = defineQuery(/* groq */ `count(*[
  _type == "blogPost"
  && defined(slug.current)
  && (isFeatured != true || defined($category))
  && select(defined($category) => $category in categories[]->slug.current, true)
])`)

export async function getPostsCount(category?: string) {
  return await sanityFetch({
    query: TOTAL_POSTS_QUERY,
    params: { category: category ?? null },
  })
}

const POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "blogPost"
  && defined(slug.current)
  && (isFeatured != true || defined($category))
  && select(defined($category) => $category in categories[]->slug.current, true)
]|order(publishedAt desc)[$startIndex...$endIndex]{
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  author->{
    name,
    image,
  },
  blurb,
}`)

export async function getPosts(
  startIndex: number,
  endIndex: number,
  category?: string,
) {
  return await sanityFetch({
    query: POSTS_QUERY,
    params: {
      startIndex,
      endIndex,
      category: category ?? null,
    },
  })
}

const FEATURED_POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "blogPost"
  && defined(slug.current)
]{
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  isFeatured,
  author->{
    name,
    image,
  },
}[isFeatured == true][0...$quantity]`)

export async function getFeaturedPosts(quantity: number) {
  const posts = await sanityFetch({
    query: FEATURED_POSTS_QUERY,
    params: { quantity },
  })
  console.log("Raw posts from Sanity:", posts)
  return posts
}

const FEED_POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "blogPost"
  && defined(slug.current)
]|order(isFeatured, publishedAt desc){
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    name,
  },
}`)

export async function getPostsForFeed() {
  return await sanityFetch({
    query: FEED_POSTS_QUERY,
  })
}

const POST_QUERY = defineQuery(/* groq */ `*[
  _type == "blogPost"
  && slug.current == $slug
][0]{
  publishedAt,
  title,
  mainImage,
  excerpt,
  body,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  }
}
`)

export async function getPost(slug: string) {
  let post =  await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  })
 
  return post;
}

const CATEGORIES_QUERY = defineQuery(/* groq */ `*[
  _type == "category"
  && count(*[_type == "blogPost" && defined(slug.current) && ^._id in categories[]._ref]) > 0
]|order(title asc){
  title,
  "slug": slug.current,
}`)

export async function getCategories() {
  return await sanityFetch({
    query: CATEGORIES_QUERY,
  })
}
